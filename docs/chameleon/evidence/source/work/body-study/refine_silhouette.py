import bpy,math,json,hashlib,os
from mathutils import Vector
from mathutils.bvhtree import BVHTree
from pathlib import Path
R=Path.cwd();O=R/'outputs/body-study';src=O/'chameleon-study.blend';out=O/'chameleon-study-v3.blend'
sha=lambda p:hashlib.sha256(p.read_bytes()).hexdigest()
before=sha(src);bpy.ops.wm.open_mainfile(filepath=str(src))
s=bpy.context.scene;overview=(s.camera.location.copy(),s.camera.rotation_euler.copy())
def smooth(a,b,x):
 t=max(0,min(1,(x-a)/(b-a)));return t*t*(3-2*t)
def displacement(p):
 x,y,z=p
 head=-.30*(1-smooth(-1.65,-.75,x))
 belly=.24*smooth(-1.55,-.65,x)*(1-smooth(.65,1.5,x))*(1-smooth(1.35,2.1,z))
 # Fill a small part of the dorsal neck depression while maintaining head lowering.
 neck=.08*math.exp(-((x+1.48)/.27)**2)*smooth(2.1,2.45,z)
 throat=.20*math.exp(-((x+1.35)/.32)**2)*(1-smooth(1.55,2.05,z))
 return head+belly+neck+throat
body=bpy.data.objects['Body skin | continuous axial surface']
changed=0
for o in bpy.data.objects:
 if o.type!='MESH':continue
 if o==body or o.name.startswith(('Mouth seam','Near eye','Far eye','Iris','Pupil','Nostril','Dorsal crest')):
  inv=o.matrix_world.inverted()
  for v in o.data.vertices:
   p=o.matrix_world@v.co;p.z+=displacement(p);v.co=inv@p
  o.data.update();changed+=1
bpy.context.view_layer.update()
def bvh(o):return BVHTree.FromPolygons([o.matrix_world@v.co for v in o.data.vertices],[list(p.vertices) for p in o.data.polygons])
collision=len(bvh(body).overlap(bvh(bpy.data.objects['Branch support proxy'])))
assert collision==0
assert all(o.hide_render for o in bpy.data.objects if o.name.startswith('Tongue'))
s['status']='B3: head lowered, belly raised, neck blended; static silhouette study, no rig.'
t=bpy.data.texts.get('START HERE');t.clear();t.write('B3 silhouette revision, 2026-10-24\nBased on outputs/morphometry/analysis.md (approximate photo ratios, NOT scientific species means).\nHead lowered 0.30 design units; central belly raised up to 0.24; neck transition blended.\nB2 preserved as chameleon-study.blend. Tail, limb proxies and material design unchanged. No rig/animation.\n')
bpy.context.preferences.filepaths.save_version=0
s.cycles.samples=32;s.render.resolution_percentage=100;s.render.resolution_x=1200;s.render.resolution_y=740;s.render.image_settings.file_format='PNG'
s.render.filepath=str(O/'body-v3-overview.png')
bpy.ops.wm.save_as_mainfile(filepath=str(out));bpy.ops.render.render(write_still=True)
# Same orthographic camera as measurement render.
s.camera.location=(0,-14,1.65);s.camera.rotation_euler=(Vector((0,0,1.65))-s.camera.location).to_track_quat('-Z','Y').to_euler();s.camera.data.type='ORTHO';s.camera.data.ortho_scale=8.1
s.render.resolution_x=1000;s.render.resolution_y=600;s.render.filepath=str(O/'body-v3-side.png');bpy.ops.render.render(write_still=True)
bpy.ops.wm.open_mainfile(filepath=str(out));assert bpy.data.objects.get('Body skin | continuous axial surface')
assert sha(src)==before
report=dict(version='B3',source=str(src),source_sha256=before,output_sha256=sha(out),changed_meshes=changed,head_shift_design_units=-.30,belly_max_lift_design_units=.24,axial_branch_intersections=collision,reopen='passed',source_unchanged=True,reference='outputs/morphometry/analysis.md',limits=['Static silhouette only; photo ratios are approximate','No new rig, tail work or final skin transfer','Limb proxies remain'])
(O/'manifest-v3.json').write_text(json.dumps(report,indent=2));print(json.dumps(report))
