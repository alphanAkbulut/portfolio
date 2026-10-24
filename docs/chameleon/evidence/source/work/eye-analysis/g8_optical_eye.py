import bpy,math,json,hashlib
from pathlib import Path
from mathutils import Vector
R=Path.cwd();W=R/'work/eye-analysis/g8';W.mkdir(exist_ok=True);O=R/'outputs/body-study';src=O/'chameleon-study-v11-rounded-body.blend';sha=lambda p:hashlib.sha256(p.read_bytes()).hexdigest();sh=sha(src)
bpy.ops.wm.open_mainfile(filepath=str(src));s=bpy.context.scene
iris=bpy.data.objects['Iris | surface motion'];pupil=bpy.data.objects['Pupil | surface motion'];frames={}
for f in range(1,91):
 s.frame_set(f);frames[f]=[(o.location.copy(),o.rotation_quaternion.copy()) for o in [iris,pupil]]
def mat(name,color,rough):
 m=bpy.data.materials.new(name);m.use_nodes=True;p=m.node_tree.nodes.get('Principled BSDF');p.inputs['Base Color'].default_value=(*color,1);p.inputs['Roughness'].default_value=rough;return m,p
m,p=mat('G8 dark optical surface',(.003,.004,.003),.09);p.inputs['IOR'].default_value=1.376;p.inputs['Coat Weight'].default_value=.7;p.inputs['Coat Roughness'].default_value=.035
pupil.data.materials.clear();pupil.data.materials.append(m)
# Replace the flat disk mesh with an elliptic cap: crown stays behind aperture edge.
pupil.scale=(.068,.068,.016)
m,p=mat('G8 recessed dark aperture surround',(.015,.021,.012),.38);iris.data.materials.clear();iris.data.materials.append(m);iris.scale=(.071,.071,.009);iris.hide_render=True # obsolete full disk would occlude the optical cap
for f in range(1,91):
 for o,(pos,q),depth in zip([iris,pupil],frames[f],[.010,.022]):
  o.location=pos-(q@Vector((0,0,1)))*depth;o.keyframe_insert(data_path='location',frame=f)
# A low rolled inner wall follows the aperture, giving a readable reveal.
N=128;vs=[];fs=[]
for radius,z in [(.0696,.001),(.0700,-.003),(.0685,-.008),(.0665,-.014)]:
 for j in range(N):
  a=j*2*math.pi/N;vs.append((radius*math.cos(a),radius*math.sin(a),z))
for ring in range(3):
 for j in range(N):a=ring*N+j;b=ring*N+(j+1)%N;fs.append((a,b,b+N,a+N))
mesh=bpy.data.meshes.new('G8 aperture reveal');mesh.from_pydata(vs,[],fs);mesh.update();rim=bpy.data.objects.new('Near eye | inner aperture reveal',mesh);bpy.context.collection.objects.link(rim);rim.rotation_mode='QUATERNION'
m,p=mat('G8 inner eyelid',(.14,.185,.075),.5);mesh.materials.append(m)
for f in mesh.polygons:f.use_smooth=True
for f in range(1,91):
 pos,q=frames[f][0];rim.location=pos+(q@Vector((0,0,1)))*.003;rim.rotation_quaternion=q;rim.keyframe_insert(data_path='location',frame=f);rim.keyframe_insert(data_path='rotation_quaternion',frame=f)
# Real scene reflection source, no painted highlight.
bpy.ops.object.light_add(type='AREA',location=(-3.1,-3.0,4.0));light=bpy.context.object;light.name='Eye softbox reflection';light.data.energy=35;light.data.shape='DISK';light.data.size=.65;focus=Vector((-2.05,-.43,2.12));light.rotation_euler=(focus-light.location).to_track_quat('-Z','Y').to_euler()
s.camera.location=focus+Vector((-4,-8,1.2));s.camera.rotation_euler=(focus-s.camera.location).to_track_quat('-Z','Y').to_euler();s.camera.data.ortho_scale=.90;s.render.resolution_x=640;s.render.resolution_y=560;s.cycles.samples=32;s.frame_set(1)
s['status']='V12: recessed curved dark eye surface and moving aperture reveal; optical appearance prototype.'
t=bpy.data.texts.get('START HERE');t.clear();t.write('V12: shallow aperture reveal + curved glossy dark optical surface.\nV11 body scales and V10 gaze movement retained. Space plays 90 frames.\nReflections come from scene lights; no painted glare. Not a full anatomical eye model.\n')
bpy.context.preferences.filepaths.save_version=0;out=O/'chameleon-study-v12-recessed-glossy-eye.blend';bpy.ops.wm.save_as_mainfile(filepath=str(out))
for frame,label in [(1,'neutral'),(29,'forward')]:
 s.frame_set(frame);s.render.filepath=str(W/(label+'.png'));bpy.ops.render.render(write_still=True)
s.frame_set(1);light.location=(-1.1,-2.0,1.9);light.rotation_euler=(focus-light.location).to_track_quat('-Z','Y').to_euler();s.render.filepath=str(W/'alternate-light.png');bpy.ops.render.render(write_still=True)
(O/'manifest-v12.json').write_text(json.dumps({'source_sha256':sh,'source_unchanged':sha(src)==sh,'output_sha256':sha(out),'frames_updated':90,'pupil_center_inset':.022,'pupil_cap_depth':.016,'roughness':.09,'coat_roughness':.035,'limits':['Optical appearance approximation, not a full biological eye','Only near eye changed','Previous scale stretching remains'],'alternate_light':'render-only test; default light saved in blend'},indent=2));print('V12 DONE')
