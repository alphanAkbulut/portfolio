import bpy,math,json,hashlib
from pathlib import Path
from mathutils import Vector
from mathutils.bvhtree import BVHTree
R=Path.cwd();O=R/'outputs/body-study';W=R/'work/eye-analysis/g1';W.mkdir(exist_ok=True)
src=O/'chameleon-study-v3.blend';sha=lambda p:hashlib.sha256(p.read_bytes()).hexdigest();oldhash=sha(src)
bpy.ops.wm.open_mainfile(filepath=str(src));s=bpy.context.scene
body=bpy.data.objects['Body skin | continuous axial surface'];bvh=BVHTree.FromPolygons([body.matrix_world@v.co for v in body.data.vertices],[list(p.vertices) for p in body.data.polygons])
report=[]
for o in [x for x in bpy.data.objects if 'eye | reused E1 lid' in x.name]:
 pts=[o.matrix_world@v.co for v in o.data.vertices];N=128;c=sum(pts[:N],Vector())/N;axis=o.rotation_quaternion@Vector((0,0,1));axis.normalize()
 def shrink(p):
  v=p-c;z=v.dot(axis);return c+(v-z*axis)*.68+axis*z*.82
 new=[shrink(p) for p in pts];deltas=[];hits=0
 for p in new[:N]:
  loc,normal,index,d=bvh.ray_cast(p+axis, -axis,2.5)
  assert loc is not None,'No head surface under root'
  deltas.append(loc-axis*.018-p);hits+=1
 for i,p in enumerate(new):
  ring=i//N;t=max(0,1-ring/35);w=t*t*(3-2*t)
  new[i]=p+deltas[i%N]*w
 inv=o.matrix_world.inverted()
 for v,p in zip(o.data.vertices,new):v.co=inv@p
 o.data.update()
 # Iris and pupil follow exactly the same affine eye size transform.
 for other in bpy.data.objects:
  if not other.name.startswith(('Iris','Pupil')):continue
  if (other.matrix_world.translation-c).length>.65:continue
  # Select the same side only.
  if other.matrix_world.translation.y*c.y<0:continue
  inv2=other.matrix_world.inverted()
  for v in other.data.vertices:v.co=inv2@shrink(other.matrix_world@v.co)
 mat=o.data.materials[0].copy();mat.name='G1 fine scales on eye';o.data.materials[0]=mat
 for node in mat.node_tree.nodes:
  if node.bl_idname=='ShaderNodeTexVoronoi':node.inputs['Scale'].default_value=20
  if node.bl_idname=='ShaderNodeBump':node.inputs['Strength'].default_value=.30;node.inputs['Distance'].default_value=.006
 report.append({'eye':o.name,'radial_scale':.68,'axial_scale':.82,'root_surface_hits':hits,'root_inset':.018,'max_root_adjustment':max(d.length for d in deltas)})
s['status']='G1: smaller eye turrets with seated root skirts; static only, no motion rig.'
t=bpy.data.texts.get('START HERE');t.clear();t.write('G1 / v4: static eye revision.\nEye radial scale .68, axial scale .82 relative to v3; root skirt follows head surface with .018 overlap.\nFine eye bump adjusted. Separate overlapping meshes, NOT fused animated skin.\nG2 motion/deformation test still pending. v3 preserved.\n')
s.cycles.samples=32;s.render.resolution_x=1200;s.render.resolution_y=740;s.render.resolution_percentage=100;s.render.image_settings.file_format='PNG'
bpy.context.preferences.filepaths.save_version=0;out=O/'chameleon-study-v4.blend';bpy.ops.wm.save_as_mainfile(filepath=str(out))
s.render.filepath=str(O/'body-v4-overview.png');bpy.ops.render.render(write_still=True)
s.render.resolution_x=700;s.render.resolution_y=620;s.camera.data.type='ORTHO';s.camera.data.ortho_scale=2.2;center=Vector((-2.05,0,2.05))
for label,offset in [('side',(0,-8,0)),('front',(-8,0,0)),('top',(0,0,8)),('oblique',(-5,-7,2))]:
 s.camera.location=center+Vector(offset);s.camera.rotation_euler=(center-s.camera.location).to_track_quat('-Z','Y').to_euler();s.render.filepath=str(W/(label+'.png'));bpy.ops.render.render(write_still=True)
bpy.ops.wm.open_mainfile(filepath=str(out));assert sha(src)==oldhash
(O/'manifest-v4.json').write_text(json.dumps({'source_sha256':oldhash,'output_sha256':sha(out),'reopen':'passed','source_unchanged':True,'eyes':report,'limitations':['Static overlap skirt; not welded or motion tested','Eye bump remains procedural preview, not final scale geometry']},indent=2))
print('G1 SAVED AND REOPENED')
