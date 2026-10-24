import bpy,math,json,hashlib
from pathlib import Path
R=Path.cwd();O=R/'outputs/body-study';W=R/'work/eye-analysis/g11';W.mkdir(exist_ok=True);src=O/'chameleon-study-v14-soft-eye-rim.blend';sha=lambda p:hashlib.sha256(p.read_bytes()).hexdigest();sh=sha(src)
bpy.ops.wm.open_mainfile(filepath=str(src));s=bpy.context.scene;o=bpy.data.objects['Near eye | inner aperture reveal']
# Broad, shallow skin shoulder, rounded summit, descending inner reveal.
profile=[(.110,-.016),(.104,-.011),(.097,-.005),(.090,.001),(.083,.006),(.077,.0085),(.072,.008),(.0685,.005),(.0665,.0005),(.0658,-.005),(.0658,-.010),(.0658,-.014)]
N=128;vs=[];fs=[]
for r,z in profile:
 for j in range(N):
  a=j*2*math.pi/N;variation=1+.006*math.sin(3*a)+.003*math.cos(5*a)
  vs.append((r*variation*math.cos(a),r*variation*math.sin(a),z))
for i in range(len(profile)-1):
 for j in range(N):a=i*N+j;b=i*N+(j+1)%N;fs.append((a,b,b+N,a+N))
m=bpy.data.meshes.new('Broad shallow crater aperture transition');m.from_pydata(vs,[],fs);m.update();o.data=m
mat=bpy.data.materials['G8 inner eyelid'].copy();mat.name='G11 continuous skin lip';p=mat.node_tree.nodes.get('Principled BSDF');p.inputs['Base Color'].default_value=(.20,.26,.105,1);p.inputs['Roughness'].default_value=.57;m.materials.append(mat)
for f in m.polygons:f.use_smooth=True
s.frame_set(1);s.cycles.samples=32;s['status']='V15: broad shallow aperture shoulder replacing thin ring; visual prototype.'
t=bpy.data.texts.get('START HERE');t.clear();t.write('V15: broad shallow crater-like skin transition into eye opening.\nV14 source preserved. Optical surface and motion unchanged. Space: 90 frames.\nVisual design hypothesis; not measured anatomical geometry.\n')
bpy.context.preferences.filepaths.save_version=0;out=O/'chameleon-study-v15-crater-eye-rim.blend';bpy.ops.wm.save_as_mainfile(filepath=str(out))
for f,label in [(1,'neutral'),(29,'forward')]:
 s.frame_set(f);s.render.filepath=str(W/(label+'.png'));bpy.ops.render.render(write_still=True)
bpy.ops.wm.open_mainfile(filepath=str(out));assert len(bpy.data.objects['Near eye | inner aperture reveal'].data.vertices)==1536
(O/'manifest-v15.json').write_text(json.dumps({'source_unchanged':sha(src)==sh,'source_sha256':sh,'output_sha256':sha(out),'reopen':'passed','change':'Only aperture skin reveal mesh/material; broad outer shoulder with smooth descent','limits':['Not a measured anatomical profile','Separate surface transition, not welded to scaled eyelid']},indent=2));print('V15 VERIFIED')
