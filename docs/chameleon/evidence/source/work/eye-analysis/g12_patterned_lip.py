import bpy,math,random,hashlib,json
from pathlib import Path
from mathutils import Vector
from mathutils.bvhtree import BVHTree
R=Path.cwd();O=R/'outputs/body-study';W=R/'work/eye-analysis/g12';W.mkdir(exist_ok=True);src=O/'chameleon-study-v15-crater-eye-rim.blend';sha=lambda p:hashlib.sha256(p.read_bytes()).hexdigest();sh=sha(src)
bpy.ops.wm.open_mainfile(filepath=str(src));s=bpy.context.scene;s.frame_set(1);rim=bpy.data.objects['Near eye | inner aperture reveal'];ev=rim.evaluated_get(bpy.context.evaluated_depsgraph_get());me=ev.to_mesh();bvh=BVHTree.FromPolygons([v.co.copy() for v in me.vertices],[list(p.vertices) for p in me.polygons]);ev.to_mesh_clear()
outer=.110;inner=.0658;start=math.sqrt(inner*inner+.02*(outer*outer-inner*inner));random.seed(4105)
seeds=[];grid={};cell=.008
for _ in range(24000):
 x=random.uniform(-outer,outer);y=random.uniform(-outer,outer);r=math.hypot(x,y)
 if not start<r<outer:continue
 sp=random.uniform(.0042,.0056);k=(math.floor(x/cell),math.floor(y/cell));valid=True
 for a in range(k[0]-1,k[0]+2):
  for b in range(k[1]-1,k[1]+2):
   for qx,qy,qs in grid.get((a,b),[]):
    if (x-qx)**2+(y-qy)**2<((sp+qs)*.5)**2:valid=False;break
 if valid:seeds.append((x,y));grid.setdefault(k,[]).append((x,y,sp))
def clip(poly,nx,ny,d):
 out=[]
 for a,b in zip(poly,poly[1:]+poly[:1]):
  va=a[0]*nx+a[1]*ny-d;vb=b[0]*nx+b[1]*ny-d
  if va<=0:out.append(a)
  if (va<=0)!=(vb<=0):
   t=va/(va-vb);out.append((a[0]+t*(b[0]-a[0]),a[1]+t*(b[1]-a[1])))
 return out
vs=[];fs=[];mis=[];count=0
for x,y in seeds:
 r=math.hypot(x,y);poly=[(x-.012,y-.012),(x+.012,y-.012),(x+.012,y+.012),(x-.012,y+.012)];k=(math.floor(x/cell),math.floor(y/cell))
 for a in range(k[0]-2,k[0]+3):
  for b in range(k[1]-2,k[1]+3):
   for qx,qy,_ in grid.get((a,b),[]):
    dx=qx-x;dy=qy-y
    if dx*dx+dy*dy>1e-12:poly=clip(poly,dx,dy,(qx*qx+qy*qy-x*x-y*y)/2)
 poly=clip(poly,-x/r,-y/r,-start);poly=clip(poly,x/r,y/r,outer-.0001)
 if len(poly)<3:continue
 rounded=[]
 for a,b in zip(poly,poly[1:]+poly[:1]):rounded.extend([(.8*a[0]+.2*b[0],.8*a[1]+.2*b[1]),(.2*a[0]+.8*b[0],.2*a[1]+.8*b[1])])
 poly=rounded;cx=sum(a for a,b in poly)/len(poly);cy=sum(b for a,b in poly)/len(poly);area=abs(sum(a[0]*b[1]-b[0]*a[1] for a,b in zip(poly,poly[1:]+poly[:1])))/2;height=min(.0010,math.sqrt(area/math.pi)*random.uniform(.28,.40));offset=len(vs);n=len(poly);idx=random.randrange(5)
 for rad,h in [(.985,0),(.94,.22),(.80,.58),(.57,.85),(.30,.97),(.06,1)]:
  for px,py in poly:
   xx=cx+(px-cx)*rad;yy=cy+(py-cy)*rad;hit,normal,_,_=bvh.ray_cast(Vector((xx,yy,.04)),Vector((0,0,-1)))
   if hit is None:hit,normal,_,_=bvh.find_nearest(Vector((xx,yy,0)))
   if normal.z<0:normal=-normal
   vs.append(tuple(hit+normal*(height*h+.00012)))
 for ring in range(5):
  for j in range(n):fs.append((offset+ring*n+j,offset+ring*n+(j+1)%n,offset+(ring+1)*n+(j+1)%n,offset+(ring+1)*n+j));mis.append(idx)
 fs.append(tuple(offset+5*n+j for j in range(n)));mis.append(idx);count+=1
mesh=bpy.data.meshes.new('Rounded crowns to aperture edge');mesh.from_pydata(vs,[],fs);mesh.update();obj=bpy.data.objects.new('Near eye | patterned crater lip',mesh);bpy.context.collection.objects.link(obj);obj.parent=rim
for i in range(5):mesh.materials.append(bpy.data.materials['G6 rounded crown '+str(i)])
for p,idx in zip(mesh.polygons,mis):p.use_smooth=True;p.material_index=idx
s.frame_set(1);s.cycles.samples=32;s['status']='V16: patterned crater lip; thin unpatterned inner edge; V15 optical and body geometry retained.'
t=bpy.data.texts.get('START HERE');t.clear();t.write('V16: rounded small scales continue onto crater lip.\nPattern domain covers 98% of projected annulus, excluding natural interscale gaps.\nSpace plays 90 frames; lip scales inherit rim motion.\n')
bpy.context.preferences.filepaths.save_version=0;out=O/'chameleon-study-v16-patterned-eye-rim.blend';bpy.ops.wm.save_as_mainfile(filepath=str(out))
for f,label in [(1,'neutral'),(29,'forward')]:
 s.frame_set(f);s.render.filepath=str(W/(label+'.png'));bpy.ops.render.render(write_still=True)
bpy.ops.wm.open_mainfile(filepath=str(out));assert bpy.data.objects['Near eye | patterned crater lip'].parent.name=='Near eye | inner aperture reveal'
(O/'manifest-v16.json').write_text(json.dumps({'source_unchanged':sha(src)==sh,'source_sha256':sh,'output_sha256':sha(out),'reopen':'passed','new_crowns':count,'projected_pattern_domain_fraction':.98,'inner_radius':inner,'pattern_start_radius':start,'outer_radius':outer,'limits':['98% is projected pattern domain, not literal coverage excluding interscale gaps','Lip crowns follow parent rigid transform; global skin mechanics unresolved']},indent=2));print('V16 VERIFIED')
