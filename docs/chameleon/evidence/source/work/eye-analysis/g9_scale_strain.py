import bpy,numpy as np,json,hashlib,math
from pathlib import Path
R=Path.cwd();O=R/'outputs/body-study';W=R/'work/eye-analysis/g9';W.mkdir(exist_ok=True);src=O/'chameleon-study-v12-recessed-glossy-eye.blend';sha=lambda p:hashlib.sha256(p.read_bytes()).hexdigest();sh=sha(src)
bpy.ops.wm.open_mainfile(filepath=str(src));s=bpy.context.scene;ob=bpy.data.objects['Near eye | rounded scale geometry'];keys=ob.data.shape_keys.key_blocks
cells=[]
for poly in ob.data.polygons:
 if len(poly.vertices)>4:
  count=len(poly.vertices);end=max(poly.vertices)+1;cells.append((end-6*count,end,count))
assert len(cells)==1402
buf=np.empty(len(ob.data.vertices)*3,dtype=np.float32);keys[0].data.foreach_get('co',buf);base=buf.reshape(-1,3).copy()
# Fit per-crown deformation, cap stretch while keeping its animated centre and rotation.
rest=[]
for a,b,n in cells:
 x=base[a:b].astype(float);c=x[:n].mean(axis=0);rest.append((x-c,np.linalg.pinv(x-c)))
ratios=[];maxshift=0
for frame in range(1,91):
 key=keys[f'Gaze {frame:03}'];key.data.foreach_get('co',buf);old=buf.reshape(-1,3).copy();new=old.copy()
 for (a,b,n),(x,inv) in zip(cells,rest):
  y=old[a:b].astype(float);c=y[:n].mean(axis=0)
  _,_,axes=np.linalg.svd(x[:n],full_matrices=False);basis=axes[:2].T
  x2=x@basis;F=np.linalg.pinv(x2[:n])@(y[:n]-c);U,S,V=np.linalg.svd(F,full_matrices=False)
  ratio=S[0]/max(S[1],1e-8);target=min(ratio,1.10);area=math.sqrt(S[0]*S[1])
  limited=np.array([area*math.sqrt(target),area/math.sqrt(target)])
  normal=np.cross(V[0],V[1]);oldnormal=np.cross(F[0],F[1]);normal*=1 if normal.dot(oldnormal)>=0 else -1
  restnormal=np.cross(basis[:,0],basis[:,1]);height=x@restnormal
  # Orient crown height toward its existing raised centre.
  if np.mean((y[n:]-c)@normal)*np.mean(height[n:])<0:normal=-normal
  fixed=x2@(U@np.diag(limited)@V)+height[:,None]*normal+c
  amount=np.clip((ratio-1.15)/.5,0,1)
  new[a:b]=y*(1-amount)+fixed*amount
  if frame==29:ratios.append({'before':float(ratio),'after_fit_target':float(target),'blend':float(amount)})
 assert np.isfinite(new).all();maxshift=max(maxshift,float(np.max(np.linalg.norm(new-old,axis=1))));key.data.foreach_set('co',new.ravel())
s.frame_set(1);s.cycles.samples=24;s['status']='V13: bounded per-scale strain; V12 eye pose and optical surface preserved.'
t=bpy.data.texts.get('START HERE');t.clear();t.write('V13: scale crowns retain more of their neutral shape during gaze.\nV12 eye position, depth, reflections and body retained. Space: 90 frames.\nPer-scale strain approximation; gaps and overlap under extreme gaze still require review.\n')
bpy.context.preferences.filepaths.save_version=0;out=O/'chameleon-study-v13-rounder-moving-scales.blend';bpy.ops.wm.save_as_mainfile(filepath=str(out))
for frame,label in [(1,'neutral'),(29,'forward'),(43,'up')]:
 s.frame_set(frame);s.render.filepath=str(W/(label+'.png'));bpy.ops.render.render(write_still=True)
(O/'manifest-v13.json').write_text(json.dumps({'source_sha256':sh,'source_unchanged':sha(src)==sh,'output_sha256':sha(out),'crowns':len(cells),'frames':90,'max_vertex_adjustment':maxshift,'forward_median_original_strain_ratio':float(np.median([r['before'] for r in ratios])),'method':'Per-crown affine fit; tangent strain ratio capped 1.10 while preserving footprint area; smooth strain activation; centre and rotation retained','limits':['Approximate scale rigidity, not biological tissue model','Does not solve global skin area redistribution','Potential gaps/overlap require visual review']},indent=2));print('V13 DONE')
