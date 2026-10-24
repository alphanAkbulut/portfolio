import bpy,math,hashlib,json
from pathlib import Path
R=Path.cwd();O=R/'outputs/body-study';W=R/'work/eye-analysis/g10';W.mkdir(exist_ok=True);src=O/'chameleon-study-v13-rounder-moving-scales.blend';sha=lambda p:hashlib.sha256(p.read_bytes()).hexdigest();sh=sha(src)
bpy.ops.wm.open_mainfile(filepath=str(src));s=bpy.context.scene;o=bpy.data.objects['Near eye | inner aperture reveal'];material=o.data.materials[0]
# Rolled outer lip blends continuously into the recessed inner wall.
profile=[(.0710,-.0025),(.0709,-.0010),(.0705,.0004),(.0699,.0012),(.0692,.0014),(.0685,.0010),(.0679,.0001),(.0675,-.0012),(.0674,-.0030),(.0673,-.0055),(.0669,-.009),(.0665,-.014)]
N=128;vs=[];fs=[]
for r,z in profile:
 for j in range(N):a=j*2*math.pi/N;vs.append((r*math.cos(a),r*math.sin(a),z))
for i in range(len(profile)-1):
 for j in range(N):a=i*N+j;b=i*N+(j+1)%N;fs.append((a,b,b+N,a+N))
m=bpy.data.meshes.new('Rounded aperture lip and inner wall');m.from_pydata(vs,[],fs);m.update();o.data=m;m.materials.append(material)
for f in m.polygons:f.use_smooth=True
sub=o.modifiers.new('Smooth rolled lip','SUBSURF');sub.levels=2;sub.render_levels=2
s.frame_set(1);s.cycles.samples=32;s['status']='V14: softened rolled aperture edge; V13 pose, optical depth and scales retained.'
bpy.context.preferences.filepaths.save_version=0;out=O/'chameleon-study-v14-soft-eye-rim.blend';bpy.ops.wm.save_as_mainfile(filepath=str(out))
for frame,label in [(1,'neutral'),(29,'forward')]:
 s.frame_set(frame);s.render.filepath=str(W/(label+'.png'));bpy.ops.render.render(write_still=True)
assert sha(src)==sh
bpy.ops.wm.open_mainfile(filepath=str(out));assert bpy.data.objects['Near eye | inner aperture reveal'].modifiers.get('Smooth rolled lip')
(O/'manifest-v14.json').write_text(json.dumps({'source_sha256':sh,'source_unchanged':True,'output_sha256':sha(out),'reopen':'passed','change':'Only aperture reveal mesh and smoothing modifier; object animation retained','limits':['Visual prototype, not measured anatomical lip profile']},indent=2));print('V14 VERIFIED')
