import bpy, math, random, json, hashlib
import numpy as np
from pathlib import Path
R=Path.cwd();O=R/'outputs/eye-analysis';W=R/'work/eye-analysis/g6';W.mkdir(exist_ok=True)
src=R/'outputs/body-study/chameleon-study-v8-eye-folds.blend';sha=lambda p:hashlib.sha256(p.read_bytes()).hexdigest();before=sha(src)
bpy.ops.wm.open_mainfile(filepath=str(src));s=bpy.context.scene;eye=bpy.data.objects['Near eye | spherical surface motion'];N=128;NR=88
random.seed(4105);lo=math.asin(.29);hi=math.radians(110)
# D5.3 rounded clipped Voronoi crowns; mapped onto the existing animated eyelid.
seeds=[];bucket={};cell=.18
for _ in range(45000):
 x=random.uniform(-hi,hi);y=random.uniform(-hi,hi);r=math.hypot(x,y)
 if not lo+.018<r<hi-.025:continue
 # Fine root band, mixed intermediate area, larger cap cells. No uniform grid.
 t=(r-lo)/(hi-lo);spacing=(.060+.020*math.sin(math.pi*t))*random.uniform(.8,1.2)
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
s.frame_set(1);s.cycles.samples=24
s['status']='G6: D5 rounded Voronoi scale crowns mapped onto G5 eye folds; prototype, near eye only.'
t=bpy.data.texts.get('START HERE');t.clear();t.write('G6 / v9\nRounded geometric scale crowns on near eye. D5.3 crown profile adapted to G5 animated surface.\nSpace plays 90 frames. V8 preserved. Other skin remains a proxy.\nScale stretching and all-pairs collision not fully validated.\n')
bpy.context.preferences.filepaths.save_version=0;out=R/'outputs/body-study/chameleon-study-v9-rounded-scales.blend';bpy.ops.wm.save_as_mainfile(filepath=str(out))
for frame,label in [(1,'neutral'),(29,'forward'),(43,'up')]:
 s.frame_set(frame);s.render.filepath=str(W/(label+'.png'));bpy.ops.render.render(write_still=True)
report={'source_sha256':before,'source_unchanged':sha(src)==before,'output_sha256':sha(out),'scales':num,'vertices':len(params),'frames_mapped':90,'finite_coordinates':True,'method':'D5.3 clipped rounded Voronoi crown profile mapped by bilinear rest parameters onto G5 shape keys','limits':['Near eye only; body remains placeholder material','Not a measured biological scale distribution','Extreme gaze stretching and self intersection require review'],'status':'renders ready for review'};(O/'g6-manifest.json').write_text(json.dumps(report,indent=2));print('G6 DONE',num,len(params))
