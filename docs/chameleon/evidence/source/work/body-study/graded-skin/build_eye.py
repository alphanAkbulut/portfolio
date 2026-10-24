import bpy, math, random, json, hashlib
import numpy as np
from pathlib import Path
R=Path.cwd();O=R/'outputs/eye-analysis';W=R/'work/body-study/graded-skin';W.mkdir(exist_ok=True)
src=R/'work/body-study/graded-skin/body-intermediate.blend';sha=lambda p:hashlib.sha256(p.read_bytes()).hexdigest();before=sha(src)
bpy.ops.wm.open_mainfile(filepath=str(src));s=bpy.context.scene;eye=bpy.data.objects['Near eye | spherical surface motion'];N=128;NR=88
bpy.data.objects.remove(bpy.data.objects['Near eye | rounded scale geometry'],do_unlink=True)
random.seed(4105);lo=math.asin(.29);hi=math.radians(110)
# D5.3 rounded clipped Voronoi crowns; mapped onto the existing animated eyelid.
seeds=[];bucket={};cell=.18
for _ in range(75000):
 x=random.uniform(-hi,hi);y=random.uniform(-hi,hi);r=math.hypot(x,y)
 if not lo+.018<r<hi-.025:continue
 # Fine root band, mixed intermediate area, larger cap cells. No uniform grid.
 t=(r-lo)/(hi-lo)
 def ss(a,b,x):
  v=max(0,min(1,(x-a)/(b-a)));return v*v*(3-2*v)
 spacing=(.027+.048*ss(0,.35,t)-.042*ss(.55,1,t))*random.uniform(.83,1.17)
 k=(math.floor(x/cell),math.floor(y/cell));valid=True
 for a in range(k[0]-1,k[0]+2):
  for b in range(k[1]-1,k[1]+2):
   for qx,qy,qs in bucket.get((a,b),[]):
    if (x-qx)**2+(y-qy)**2<((spacing+qs)*.5)**2:valid=False;break
 if valid:seeds.append((x,y));bucket.setdefault(k,[]).append((x,y,spacing))
def clip(poly,nx,ny,d):
 out=[]
 for a,b in zip(poly,poly[1:]+poly[:1]):
  va=a[0]*nx+a[1]*ny-d;vb=b[0]*nx+b[1]*ny-d
  if va<=0:out.append(a)
  if (va<=0)!=(vb<=0):
   t=va/(va-vb);out.append((a[0]+t*(b[0]-a[0]),a[1]+t*(b[1]-a[1])))
 return out
params=[];faces=[];mi=[];num=0
for x,y in seeds:
 poly=[(x-.2,y-.2),(x+.2,y-.2),(x+.2,y+.2),(x-.2,y+.2)];k=(math.floor(x/cell),math.floor(y/cell))
 for a in range(k[0]-2,k[0]+3):
  for b in range(k[1]-2,k[1]+3):
   for qx,qy,_ in bucket.get((a,b),[]):
    dx=qx-x;dy=qy-y
    if 0<dx*dx+dy*dy<.16:poly=clip(poly,dx,dy,(qx*qx+qy*qy-x*x-y*y)/2)
 if len(poly)<3:continue
 # Keep crowns out of the aperture and head boundary, including edge vertices.
 rr=math.hypot(x,y);poly=clip(poly,-x/rr,-y/rr,-(lo+.003))
 if len(poly)<3:continue
 poly=[(px*min(1,(hi-.008)/math.hypot(px,py)),py*min(1,(hi-.008)/math.hypot(px,py))) for px,py in poly]
 rounded=[]
 for a,b in zip(poly,poly[1:]+poly[:1]):rounded.extend([(.8*a[0]+.2*b[0],.8*a[1]+.2*b[1]),(.2*a[0]+.8*b[0],.2*a[1]+.8*b[1])])
 poly=rounded;x=sum(p[0] for p in poly)/len(poly);y=sum(p[1] for p in poly)/len(poly)
 area=abs(sum(a[0]*b[1]-b[0]*a[1] for a,b in zip(poly,poly[1:]+poly[:1])))/2
 # Shallow rounded crowns from D5.3, not balls placed on top of the skin.
 height=.24*math.sqrt(area/math.pi)*random.uniform(.35,.48);start=len(params);cnt=len(poly);idx=random.randrange(5)
 profile=[(.985,0),(.94,.22),(.80,.58),(.57,.85),(.30,.97),(.06,1)]
 for radius,z in profile:
  for px,py in poly:
   xx=x+(px-x)*radius;yy=y+(py-y)*radius;theta=math.hypot(xx,yy);phi=math.atan2(yy,xx)%(2*math.pi)
   params.append(((hi-theta)/(hi-lo)*(NR-1),phi/(2*math.pi)*N,height*z+.00025))
 for ring in range(len(profile)-1):
  for j in range(cnt):faces.append((start+ring*cnt+j,start+ring*cnt+(j+1)%cnt,start+(ring+1)*cnt+(j+1)%cnt,start+(ring+1)*cnt+j));mi.append(idx)
 faces.append(tuple(start+(len(profile)-1)*cnt+j for j in range(cnt)));mi.append(idx);num+=1
p=np.asarray(params);ii=np.floor(p[:,0]).astype(int);jj=np.floor(p[:,1]).astype(int)%N;ti=(p[:,0]-ii)[:,None];tj=(p[:,1]-jj)[:,None]
def map_points(key):
 a=np.empty(len(eye.data.vertices)*3,dtype=np.float32);key.data.foreach_get('co',a);a=a.reshape(NR,N,3)
 a00=a[ii,jj];a10=a[ii+1,jj];a01=a[ii,(jj+1)%N];a11=a[ii+1,(jj+1)%N]
 pos=(1-ti)*((1-tj)*a00+tj*a01)+ti*((1-tj)*a10+tj*a11)
 du=(1-tj)*(a10-a00)+tj*(a11-a01);dv=(1-ti)*(a01-a00)+ti*(a11-a10)
 normals=np.cross(du,dv);normals/=np.maximum(np.linalg.norm(normals,axis=1)[:,None],1e-10)
 # Parameter normals checked against outward direction at neutral pose below.
 center=np.asarray([-2.05072784,-.43012255,2.1178422]);sign=np.sign(np.median(np.sum(normals*(pos-center),axis=1)));normals*=sign
 return pos+normals*p[:,2,None]
keys=eye.data.shape_keys.key_blocks;base=map_points(keys[0]);mesh=bpy.data.meshes.new('D5 rounded crowns on G5 eyelid');mesh.from_pydata(base.tolist(),[],faces);mesh.update();ob=bpy.data.objects.new('Near eye | rounded scale geometry',mesh);bpy.context.collection.objects.link(ob)
# Remove angular groove bump from underlying near-eye skin, preserving folds geometry.
oldmat=eye.data.materials[0];bs=oldmat.node_tree.nodes.get('Principled BSDF');color=(.20,.26,.105,1)
def material(name,f):
 m=bpy.data.materials.new(name);m.use_nodes=True;bs=m.node_tree.nodes.get('Principled BSDF');bs.inputs['Base Color'].default_value=tuple(c*f for c in color[:3])+(1,);bs.inputs['Roughness'].default_value=.57;return m
skin=material('G6 continuous interscale skin',.92);eye.data.materials[0]=skin
for i in range(5):mesh.materials.append(material('G6 rounded crown '+str(i),.96+i*.02))
for poly,idx in zip(mesh.polygons,mi):poly.use_smooth=True;poly.material_index=idx
ob.shape_key_add(name='Basis')
for frame in range(1,91):
 k=ob.shape_key_add(name=f'Gaze {frame:03}');coords=map_points(keys[f'Gaze {frame:03}']);assert np.isfinite(coords).all();k.data.foreach_set('co',coords.astype(np.float32).ravel())
 for fr,val in [(frame-1,0),(frame,1),(frame+1,0)]:k.value=val;k.keyframe_insert(data_path='value',frame=fr)

keys=ob.data.shape_keys.key_blocks
cells=[]
for poly in ob.data.polygons:
 if len(poly.vertices)>4:
  count=len(poly.vertices);end=max(poly.vertices)+1;cells.append((end-6*count,end,count))
assert len(cells)>1402
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

from mathutils import Vector
s.frame_set(1);s.cycles.samples=24;s.render.resolution_x=960;s.render.resolution_y=640
s['status']='V17: continuous graded scale density at folds and joints; V16 aperture and optical surface retained.'
t=bpy.data.texts.get('START HERE');t.clear();t.write('V17: finer scales at eye root, folds, neck and limb joints; continuous size transitions.\nBody mobility zones are design assumptions, not measured animation strain.\nV16 optical surface and patterned rim retained; Space: eye animation.\n')
focus=Vector((-.05,0,1.55));s.camera.location=focus+Vector((-3,-12,2));s.camera.rotation_euler=(focus-s.camera.location).to_track_quat('-Z','Y').to_euler();s.camera.data.ortho_scale=7.8
bpy.context.preferences.filepaths.save_version=0;out=R/'outputs/body-study/chameleon-study-v17-graded-scales.blend';bpy.ops.wm.save_as_mainfile(filepath=str(out))
s.render.filepath=str(W/'overview.png');bpy.ops.render.render(write_still=True)
focus=Vector((-1.65,-.35,2.0));s.camera.location=focus+Vector((-3,-10,1.8));s.camera.rotation_euler=(focus-s.camera.location).to_track_quat('-Z','Y').to_euler();s.camera.data.ortho_scale=1.9;s.render.filepath=str(W/'close.png');bpy.ops.render.render(write_still=True)
report={'source_intermediate_sha256':before,'intermediate_unchanged':sha(src)==before,'output_sha256':sha(out),'eye_scales':num,'frames_mapped':90,'method':'Continuous smoothstep eye density and Gaussian body mobility fields; mixed spacing; area-preserving strain correction retained','limits':['Body joint mobility is a design assumption, not measured strain','Only near eye has finished geometry; far eye remains previous proxy','Body skin not rigged; not browser optimized']};(R/'outputs/body-study/manifest-v17.json').write_text(json.dumps(report,indent=2));print('V17 DONE')
