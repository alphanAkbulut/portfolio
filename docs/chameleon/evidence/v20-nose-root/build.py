import bpy,math,random,json,hashlib,numpy as np
from pathlib import Path
from mathutils import Vector
from mathutils.bvhtree import BVHTree
R=Path.cwd();O=R/'outputs/eye-root-v20';src=R/'outputs/eye-root-v19/chameleon-eye-root-v19.blend';sha=lambda p:hashlib.sha256(p.read_bytes()).hexdigest();before=sha(src)
bpy.ops.wm.open_mainfile(filepath=str(src));s=bpy.context.scene;lid=bpy.data.objects['Near eye | spherical surface motion'];N=128;NR=88;K=33
for name in ['Near eye | head root skin transition v19','Near eye | root transition fine crowns v19']:
 bpy.data.objects.remove(bpy.data.objects[name],do_unlink=True)
# Only the separately added root layer is replaced; accepted eye data remains intact.
def mesh_signature(ob):
 h=hashlib.sha256();a=np.empty(len(ob.data.vertices)*3,dtype=np.float32);ob.data.vertices.foreach_get('co',a);h.update(a.tobytes())
 if ob.data.shape_keys:
  for key in ob.data.shape_keys.key_blocks:key.data.foreach_get('co',a);h.update(a.tobytes())
 return h.hexdigest()
protected=['Near eye | rounded scale geometry','Near eye | spherical surface motion','Near eye | patterned crater lip','Pupil | surface motion','Near eye | inner aperture reveal','Body skin | continuous axial surface'];fingerprints={n:mesh_signature(bpy.data.objects[n]) for n in protected}
keys=lid.data.shape_keys.key_blocks
buf=np.empty(len(lid.data.vertices)*3,dtype=np.float32);keys[0].data.foreach_get('co',buf);rest=buf.reshape(NR,N,3).copy()
center=np.array([-2.050727844,-.430122554,2.117842197]);root=rest[0].mean(axis=0);axis=center-root;axis/=np.linalg.norm(axis)
radial=rest[0]-root;radial-=np.outer(radial@axis,axis);radial/=np.linalg.norm(radial,axis=1)[:,None]
body=bpy.data.objects['Body skin | continuous axial surface'];body.data.calc_loop_triangles();bv=BVHTree.FromPolygons([body.matrix_world@v.co for v in body.data.vertices],[tuple(t.vertices) for t in body.data.loop_triangles],all_triangles=True)
front_weight=np.clip((-radial[:,0]-.10)/.70,0,1);front_weight=front_weight*front_weight*(3-2*front_weight)
outer=[];miss=0
for j in range(N):
 radius=.262+.018*max(0,-radial[j,2])+.003*math.sin(j/N*math.tau*3)+.035*front_weight[j]
 origin=Vector(center+radial[j]*radius+axis*.4);hit,normal,_,dist=bv.ray_cast(origin,Vector(-axis),1.2)
 if hit is None:miss+=1;hit=Vector(root+radial[j]*radius);normal=Vector(axis)
 outer.append(np.array(hit+normal*.001))
assert miss==0,miss
outer=np.array(outer);bottom=np.clip(-radial[:,2],0,1);angles=np.arange(N)/N*math.tau
# No aperture edits. Outer band rests on head; inner boundary follows existing root-side lid ring.
def surface(key):
 key.data.foreach_get('co',buf);current=buf.reshape(NR,N,3)
 gaze=current[-1].mean(axis=0)-center;gaze/=np.linalg.norm(gaze)
 neutral=rest[-1].mean(axis=0)-center;neutral/=np.linalg.norm(neutral)
 pitch=np.clip((gaze[2]-neutral[2])/.64,-1,1)
 # Look-side inner attachment retreats toward the fixed root; opposite side extends.
 nose_direction=np.array([-1.,0,0]);nose_direction-=axis*np.dot(nose_direction,axis);nose_direction/=np.linalg.norm(nose_direction)
 yaw=np.clip(np.dot(gaze-neutral,nose_direction)/.8,-1,1)
 indices=np.clip(12-9*pitch*radial[:,2]-11*yaw*front_weight,1,28)
 low=np.floor(indices).astype(int);mix=(indices-low)[:,None];j=np.arange(N)
 end=current[low,j]*(1-mix)+current[low+1,j]*mix
 movement=(end-rest[12])@axis
 rows=[]
 for t in np.linspace(0,1,K):
  q=t*t*(3-2*t);p=outer*(1-q)+end*q
  shoulder=(.009+.012*bottom)*np.sin(math.pi*t)**2*(.86+.14*np.sin(angles*3+.4))
  # Soft, unequal lower folds; small pose coupling, zero at both joins.
  envelope=np.sin(math.pi*t)**2
  folds=bottom*envelope*(.0032*np.sin(3*math.pi*t+.35*np.sin(angles*2))+.0013*np.sin(5*math.pi*t+.7))
  folds*=np.clip(1+.30*pitch*radial[:,2],.7,1.3)
  p+=(shoulder+folds)[:,None]*axis
  rows.append(p)
 return np.asarray(rows)
base=surface(keys[0]);faces=[]
for i in range(K-1):
 for j in range(N):faces.append((i*N+j,i*N+(j+1)%N,(i+1)*N+(j+1)%N,(i+1)*N+j))
mesh=bpy.data.meshes.new('V20 continuous head root cuff');mesh.from_pydata(base.reshape(-1,3),[],faces);mesh.update();cuff=bpy.data.objects.new('Near eye | head root skin transition v20',mesh);bpy.context.collection.objects.link(cuff);mesh.materials.append(lid.data.materials[0]);
for p in mesh.polygons:p.use_smooth=True
cuff.shape_key_add(name='Basis')
for frame in range(1,91):
 a=surface(keys[f'Gaze {frame:03}']);k=cuff.shape_key_add(name=f'Gaze {frame:03}');k.data.foreach_set('co',a.astype(np.float32).ravel())
 for f,val in [(frame-1,0),(frame,1),(frame+1,0)]:k.value=val;k.keyframe_insert(data_path='value',frame=f)
# Small irregular rounded crowns, separate from the protected main eye pattern.
random.seed(181025);L=math.tau*.27;W=.10;grid={};cell=.025;seeds=[]
for _ in range(22000):
 x=random.uniform(.001,W-.001);y=random.uniform(0,L);spacing=random.uniform(.010,.014);key=(int(x/cell),int(y/cell));valid=True
 for ix in range(key[0]-1,key[0]+2):
  for iy in range(key[1]-1,key[1]+2):
   for a,b in grid.get((ix,iy),[]):
    if (x-a)**2+(y-b)**2<spacing**2:valid=False
 if valid:seeds.append((x,y));grid.setdefault(key,[]).append((x,y))
# Periodic neighbors make the angular seam continuous.
expanded=seeds+[(x,y-L) for x,y in seeds if y>L-.06]+[(x,y+L) for x,y in seeds if y<.06]
arr=np.array(expanded)
def clip(poly,nx,ny,d):
 out=[]
 for a,b in zip(poly,poly[1:]+poly[:1]):
  va=a[0]*nx+a[1]*ny-d;vb=b[0]*nx+b[1]*ny-d
  if va<=0:out.append(a)
  if (va<=0)!=(vb<=0):q=va/(va-vb);out.append((a[0]+q*(b[0]-a[0]),a[1]+q*(b[1]-a[1])))
 return out
params=[];fs=[];material_indices=[];count=0
for x,y in seeds:
 poly=[(0,y-.04),(W,y-.04),(W,y+.04),(0,y+.04)]
 for a,b in arr[np.sum((arr-[x,y])**2,axis=1)<.05**2]:
  dx=a-x;dy=b-y
  if dx*dx+dy*dy>1e-12:poly=clip(poly,dx,dy,(a*a+b*b-x*x-y*y)/2)
 if len(poly)<3:continue
 rounded=[]
 for a,b in zip(poly,poly[1:]+poly[:1]):rounded.extend([(.78*a[0]+.22*b[0],.78*a[1]+.22*b[1]),(.22*a[0]+.78*b[0],.22*a[1]+.78*b[1])])
 poly=rounded;cx=sum(a for a,b in poly)/len(poly);cy=sum(b for a,b in poly)/len(poly);n=len(poly);start=len(params);idx=random.randrange(5)
 for rad,h in [(.97,0),(.91,.22),(.78,.58),(.56,.85),(.28,.97),(.06,1)]:
  for px,py in poly:params.append(((cx+(px-cx)*rad)/W*(K-1),(cy+(py-cy)*rad)%L/L*N,.0017*h+.0002))
 for ring in range(5):
  for j in range(n):fs.append((start+ring*n+j,start+ring*n+(j+1)%n,start+(ring+1)*n+(j+1)%n,start+(ring+1)*n+j));material_indices.append(idx)
 fs.append(tuple(start+5*n+j for j in range(n)));material_indices.append(idx);count+=1
p=np.array(params);ii=np.minimum(p[:,0].astype(int),K-2);jj=p[:,1].astype(int)%N;ti=(p[:,0]-ii)[:,None];tj=(p[:,1]-jj)[:,None]
def map_crowns(a):
 a00=a[ii,jj];a10=a[ii+1,jj];a01=a[ii,(jj+1)%N];a11=a[ii+1,(jj+1)%N];pos=(1-ti)*((1-tj)*a00+tj*a01)+ti*((1-tj)*a10+tj*a11)
 du=(1-tj)*(a10-a00)+tj*(a11-a01);dv=(1-ti)*(a01-a00)+ti*(a11-a10);norm=np.cross(du,dv);norm/=np.maximum(np.linalg.norm(norm,axis=1)[:,None],1e-10);norm*=np.where(norm@axis>0,1,-1)[:,None]
 return pos+norm*p[:,2,None]
mesh=bpy.data.meshes.new('V20 fine root crowns');mesh.from_pydata(map_crowns(base),[],fs);mesh.update();crowns=bpy.data.objects.new('Near eye | root transition fine crowns v20',mesh);bpy.context.collection.objects.link(crowns)
for m in bpy.data.objects['Near eye | rounded scale geometry'].data.materials:mesh.materials.append(m)
for poly,idx in zip(mesh.polygons,material_indices):poly.use_smooth=True;poly.material_index=idx
crowns.shape_key_add(name='Basis')
for frame in range(1,91):
 xyz=map_crowns(surface(keys[f'Gaze {frame:03}']));assert np.isfinite(xyz).all();k=crowns.shape_key_add(name=f'Gaze {frame:03}');k.data.foreach_set('co',xyz.astype(np.float32).ravel())
 for f,val in [(frame-1,0),(frame,1),(frame+1,0)]:k.value=val;k.keyframe_insert(data_path='value',frame=f)
assert all(mesh_signature(bpy.data.objects[n])==h for n,h in fingerprints.items())
s.frame_set(1);focus=Vector((-2.05,-.43,2.12));s.camera.location=focus+Vector((-3,-10,1.8));s.camera.rotation_euler=(focus-s.camera.location).to_track_quat('-Z','Y').to_euler();s.camera.data.ortho_scale=.92;s.render.resolution_x=640;s.render.resolution_y=640;s.render.resolution_percentage=100;s.cycles.samples=16;s.render.image_settings.file_format='PNG';s.render.use_persistent_data=True
text=bpy.data.texts.get('START HERE');text.clear();text.write('V20 candidate: nose-side ROOT skin width and gaze response; tail side preserved.\nUp narrows upper root band, down narrows lower band.\nMain accepted eye pattern unchanged.\nSource V18 preserved; frames 1 neutral, 43 up, 57 down.\n');bpy.context.preferences.filepaths.save_version=0;out=O/'chameleon-eye-root-v20.blend';bpy.ops.wm.save_as_mainfile(filepath=str(out));assert sha(src)==before
report={'source_sha256':before,'output_sha256':sha(out),'protected_geometry_and_shape_keys_unchanged':fingerprints,'new_root_crowns':count,'ray_misses':miss,'source_unchanged':True,'limits':['Additive overlay candidate; not unified watertight topology','Root folds artistic not measured strain','Main eye crowns unchanged but root band may occlude some base crowns','Not a global collision proof']};(O/'manifest.json').write_text(json.dumps(report,indent=2))
for f,label in [(1,'neutral'),(29,'forward'),(43,'up'),(57,'down')]:
 s.frame_set(f);s.render.filepath=str(O/(label+'.png'));bpy.ops.render.render(write_still=True)
print('V20 CANDIDATE COMPLETE',flush=True)
