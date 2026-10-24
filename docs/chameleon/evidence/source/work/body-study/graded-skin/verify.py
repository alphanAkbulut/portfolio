import bpy,hashlib,json
from pathlib import Path
from array import array
R=Path.cwd();O=R/'outputs/body-study'
def fingerprint(path):
 bpy.ops.wm.open_mainfile(filepath=str(path));s=bpy.context.scene;h=hashlib.sha256()
 for frame in [1,29,43,57,90]:
  s.frame_set(frame)
  for name in ['Near eye | spherical surface motion','Iris | surface motion','Pupil | surface motion','Near eye | inner aperture reveal','Body skin | continuous axial surface']:
   ob=bpy.data.objects[name].evaluated_get(bpy.context.evaluated_depsgraph_get());mesh=ob.to_mesh();a=array('f',[0])*(len(mesh.vertices)*3);mesh.vertices.foreach_get('co',a);h.update(a.tobytes());h.update(str([list(row) for row in ob.matrix_world]).encode());ob.to_mesh_clear()
 return h.hexdigest()
a=fingerprint(O/'chameleon-study-v16-patterned-eye-rim.blend');b=fingerprint(O/'chameleon-study-v17-graded-scales.blend');assert a==b
p=O/'manifest-v17.json';m=json.loads(p.read_text());m.update(reopen='passed',lid_optics_body_unchanged=True,eye_frames_compared=[1,29,43,57,90],visual_review='graded density render review recorded in analysis.md');p.write_text(json.dumps(m,indent=2));print('V17 POSE OPTICS BODY PRESERVED')
