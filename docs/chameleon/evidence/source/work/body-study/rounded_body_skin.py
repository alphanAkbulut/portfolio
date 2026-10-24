import bpy,math,random,json,hashlib,bisect
from pathlib import Path
from mathutils import Vector
from mathutils.bvhtree import BVHTree
from mathutils.kdtree import KDTree
R=Path.cwd();W=R/'work/body-study/rounded-skin';W.mkdir(exist_ok=True);O=R/'outputs/body-study';src=O/'chameleon-study-v10-forward-clearance.blend';sha=lambda p:hashlib.sha256(p.read_bytes()).hexdigest();sh=sha(src)
bpy.ops.wm.open_mainfile(filepath=str(src));s=bpy.context.scene;random.seed(4105)
def material(name,f):
 m=bpy.data.materials.new(name);m.use_nodes=True;p=m.node_tree.nodes.get('Principled BSDF');p.inputs['Base Color'].default_value=(.20*f,.26*f,.105*f,1);p.inputs['Roughness'].default_value=.57;return m
mats=[material('Body rounded crown '+str(i),.94+.025*i) for i in range(5)];under=material('Continuous body interscale skin',.91)
targets=[o for o in bpy.data.objects if o.type=='MESH' and not o.hide_render and not o.name.startswith('Dorsal crest') and any(m and m.name=='B2 olive scale preview' for m in o.data.materials)]
report=[]
def clip(poly,nx,ny,d):
 out=[]
 for a,b in zip(poly,poly[1:]+poly[:1]):
  va=a[0]*nx+a[1]*ny-d;vb=b[0]*nx+b[1]*ny-d
  if va<=0:out.append(a)
  if (va<=0)!=(vb<=0):
   t=va/(va-vb);out.append((a[0]+t*(b[0]-a[0]),a[1]+t*(b[1]-a[1])))
 return out
for ob in targets:
 ob.data.calc_loop_triangles();verts=[ob.matrix_world@v.co for v in ob.data.vertices];tris=[tuple(t.vertices) for t in ob.data.loop_triangles];bvh=BVHTree.FromPolygons(verts,tris,all_triangles=True)
 areas=[];total=0
 for a,b,c in tris:total+=(verts[b]-verts[a]).cross(verts[c]-verts[a]).length*.5;areas.append(total)
 seeds=[];grid={};cell=.075
 # Surface darts give mixed cell sizes without a flat repeating tile.
 for _ in range(min(260000,max(1000,int(total*12000)))):
  tri=tris[bisect.bisect_left(areas,random.random()*total)];a,b,c=[verts[i] for i in tri];u=random.random();v=random.random()
  if u+v>1:u=1-u;v=1-v
  p=a+(b-a)*u+(c-a)*v;n=(b-a).cross(c-a).normalized()
  spacing=(.030 if p.x>1.4 else .037 if p.x< -1.3 else .032) if ob.name.startswith('Body skin') else .027
  spacing*=random.uniform(.82,1.17);k=tuple(math.floor(x/cell) for x in p);valid=True
  for dx in [-1,0,1]:
   for dy in [-1,0,1]:
    for dz in [-1,0,1]:
     for q,qn,qs in grid.get((k[0]+dx,k[1]+dy,k[2]+dz),[]):
      if (p-q).length<(spacing+qs)*.5:valid=False;break
  if valid:seeds.append((p,n,spacing));grid.setdefault(k,[]).append((p,n,spacing))
 kd=KDTree(len(seeds))
 for i,(p,n,sp) in enumerate(seeds):kd.insert(p,i)
 kd.balance();vs=[];fs=[];indices=[];cells=0
 for p,n,sp in seeds:
  tangent=n.cross(Vector((0,0,1)))
  if tangent.length<.1:tangent=n.cross(Vector((0,1,0)))
  tangent.normalize();bit=n.cross(tangent).normalized();r=sp*1.6;poly=[(-r,-r),(r,-r),(r,r),(-r,r)]
  for q,idx,dist in kd.find_range(p,sp*3.3):
   if dist<1e-7:continue
   if seeds[idx][1].dot(n)<.25:continue
   delta=q-p;dx=delta.dot(tangent);dy=delta.dot(bit)
   if dx*dx+dy*dy>1e-8:poly=clip(poly,dx,dy,(dx*dx+dy*dy)*.5)
  if len(poly)<3:continue
  rounded=[]
  for a,b in zip(poly,poly[1:]+poly[:1]):rounded.extend([(.8*a[0]+.2*b[0],.8*a[1]+.2*b[1]),(.2*a[0]+.8*b[0],.2*a[1]+.8*b[1])])
  poly=rounded;cx=sum(x for x,y in poly)/len(poly);cy=sum(y for x,y in poly)/len(poly);area=abs(sum(a[0]*b[1]-b[0]*a[1] for a,b in zip(poly,poly[1:]+poly[:1])))/2
  height=min(.0055,math.sqrt(area/math.pi)*random.uniform(.24,.34));start=len(vs);cnt=len(poly);idx=random.randrange(5)
  for rad,z in [(.975,0),(.92,.22),(.78,.58),(.56,.85),(.29,.97),(.06,1)]:
   for x,y in poly:
    pos=p+tangent*(cx+(x-cx)*rad)+bit*(cy+(y-cy)*rad);hit,normal,_,distance=bvh.find_nearest(pos)
    if hit is None:hit=pos;normal=n
    vs.append(tuple(hit+normal*(height*z+.00025)))
  for ring in range(5):
   for j in range(cnt):fs.append((start+ring*cnt+j,start+ring*cnt+(j+1)%cnt,start+(ring+1)*cnt+(j+1)%cnt,start+(ring+1)*cnt+j));indices.append(idx)
  fs.append(tuple(start+5*cnt+j for j in range(cnt)));indices.append(idx);cells+=1
 mesh=bpy.data.meshes.new(ob.name+' rounded crowns');mesh.from_pydata(vs,[],fs);mesh.update();obj=bpy.data.objects.new(ob.name+' | rounded scale layer',mesh);bpy.context.collection.objects.link(obj)
 for m in mats:mesh.materials.append(m)
 for f,idx in zip(mesh.polygons,indices):f.use_smooth=True;f.material_index=idx
 ob.data.materials.clear();ob.data.materials.append(under);report.append({'object':ob.name,'scales':cells,'vertices':len(vs)});print('SCALES',ob.name,cells,flush=True)
s.frame_set(1);s.cycles.samples=20;s.render.resolution_x=960;s.render.resolution_y=640;s.render.resolution_percentage=100;s.render.image_settings.file_format='PNG'
focus=Vector((-.05,0,1.55));s.camera.location=focus+Vector((-3,-12,2));s.camera.rotation_euler=(focus-s.camera.location).to_track_quat('-Z','Y').to_euler();s.camera.data.ortho_scale=7.8
s['status']='V11: rounded body scale geometry, V10 eye animation retained; static body prototype.'
t=bpy.data.texts.get('START HERE');t.clear();t.write('V11: rounded body/limb scale crowns replace B2 angular bump. V10 eyes retained.\nSpace plays eye animation; body skin is static and not rigged.\nHigh-resolution geometry study, NOT optimized web asset.\n')
bpy.context.preferences.filepaths.save_version=0;out=O/'chameleon-study-v11-rounded-body.blend';bpy.ops.wm.save_as_mainfile(filepath=str(out));s.render.filepath=str(W/'overview.png');bpy.ops.render.render(write_still=True)
focus=Vector((-1.65,-.35,2.0));s.camera.location=focus+Vector((-3,-10,1.8));s.camera.rotation_euler=(focus-s.camera.location).to_track_quat('-Z','Y').to_euler();s.camera.data.ortho_scale=1.9;s.render.filepath=str(W/'close.png');bpy.ops.render.render(write_still=True)
(O/'manifest-v11.json').write_text(json.dumps({'source_sha256':sh,'source_unchanged':sha(src)==sh,'output_sha256':sha(out),'objects':report,'method':'Surface-distributed rounded Voronoi crown geometry using D5 profile; no eye edits','limits':['Static body scale layer, not bound to future rig','Not optimized for browser','Dense crown layer requires collision and silhouette review']},indent=2));print('V11 DONE')
