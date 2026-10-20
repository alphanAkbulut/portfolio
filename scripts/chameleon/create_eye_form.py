import bpy, math, os, json, time, hashlib
from mathutils import Vector
ROOT=os.path.abspath(os.path.join(os.path.dirname(__file__),'../../outputs/e1'))
os.makedirs(ROOT,exist_ok=True)
bpy.ops.object.select_all(action='SELECT');bpy.ops.object.delete(use_global=False)
def mat(name,c,rough=.6):
 m=bpy.data.materials.new(name);m.use_nodes=True;p=m.node_tree.nodes.get('Principled BSDF');p.inputs['Base Color'].default_value=(*c,1);p.inputs['Roughness'].default_value=rough;return m
skin=mat('Neutral clay — fused lid envelope',(.34,.35,.34));iris=mat('Neutral iris placeholder',(.12,.13,.12));pupil=mat('Recessed pupil',(.012,.015,.012),.35)
# Dimensionless design ratios, not biological measurements. Z is the viewing axis.
profile=[(1.22,-.10),(1.12,.02),(1.055,.19),(1.015,.44),(.91,.76),(.72,1.035),(.49,1.225),(.29,1.325),(.225,1.345),(.192,1.32),(.187,1.255)]
# Catmull-Rom interpolation rounds the envelope and folds the lip inward.
points=[]
for i in range(len(profile)-1):
 p0=profile[max(0,i-1)];p1=profile[i];p2=profile[i+1];p3=profile[min(len(profile)-1,i+2)]
 for s in range(10):
  t=s/10
  points.append(tuple(.5*((2*p1[k])+(-p0[k]+p2[k])*t+(2*p0[k]-5*p1[k]+4*p2[k]-p3[k])*t*t+(-p0[k]+3*p1[k]-3*p2[k]+p3[k])*t*t*t) for k in (0,1)))
points.append(profile[-1]);vs=[];fs=[];N=128
for r,z in points:
 for j in range(N):
  a=2*math.pi*j/N
  # Slight ovality avoids a mechanically perfect sphere.
  vs.append((r*math.cos(a),r*.94*math.sin(a),z))
for i in range(len(points)-1):
 for j in range(N):
  a=i*N+j;b=i*N+(j+1)%N;fs.append((a,b,b+N,a+N))
mesh=bpy.data.meshes.new('Continuous lid with open aperture');mesh.from_pydata(vs,[],fs);mesh.update();o=bpy.data.objects.new('Turret lid — form study',mesh);bpy.context.collection.objects.link(o);o.data.materials.append(skin)
for p in mesh.polygons:p.use_smooth=True
solid=o.modifiers.new('Thin inner lid wall','SOLIDIFY');solid.thickness=.025
bpy.ops.mesh.primitive_uv_sphere_add(segments=96,ring_count=48,location=(0,0,-.42));cheek=bpy.context.object;cheek.name='Cheek support — not final head';cheek.scale=(2.25,1.65,.48);cheek.data.materials.append(skin)
for p in cheek.data.polygons:p.use_smooth=True
# Iris and pupil sit behind the aperture; no external black marble.
for name,radius,z,material in [('Iris inset',.185,1.253,iris),('Pupil inset',.087,1.260,pupil)]:
 bpy.ops.mesh.primitive_uv_sphere_add(segments=64,ring_count=32,radius=radius,location=(0,0,z));a=bpy.context.object;a.name=name;a.scale.z=.025;a.data.materials.append(material)
 for p in a.data.polygons:p.use_smooth=True

def aim(o,t):o.rotation_euler=(Vector(t)-o.location).to_track_quat('-Z','Y').to_euler()
for name,loc,power,size in [('Soft key',(-3,-4,6),420,4),('Fill',(4,2,4),180,3)]:
 bpy.ops.object.light_add(type='AREA',location=loc);l=bpy.context.object;l.name=name;l.data.energy=power;l.data.shape='DISK';l.data.size=size;aim(l,(0,0,.5))
bpy.ops.object.camera_add();cam=bpy.context.object;cam.data.type='ORTHO';cam.data.ortho_scale=4.7;cam.data.clip_start=.01
scene=bpy.context.scene;scene.camera=cam;scene.world.color=(.16,.16,.16);scene.render.engine='CYCLES';scene.cycles.device='CPU';scene.cycles.samples=48;scene.cycles.use_denoising=True
scene.render.resolution_x=900;scene.render.resolution_y=760;scene.render.resolution_percentage=100;scene.render.image_settings.file_format='PNG';scene.view_settings.view_transform='AgX';scene.view_settings.look='AgX - Medium High Contrast'
report={'task':'E1 neutral eye envelope','biological_dimensions':'unmeasured design ratios','blender':bpy.app.version_string,'samples':48,'engine':'Cycles CPU','profile':profile,'aperture_diameter_to_max_envelope_diameter':.384/2.44,'motion':'not tested','renders':[]}
for name,loc in [('front',(0,-.05,6)),('side',(6,0,.65)),('three-quarter',(3.8,-4.8,4.0))]:
 cam.location=loc;aim(cam,(0,0,.45));scene.render.filepath=os.path.join(ROOT,name+'.png');t=time.time();bpy.ops.render.render(write_still=True)
 report['renders'].append({'view':name,'seconds':round(time.time()-t,2),'sha256':hashlib.sha256(open(scene.render.filepath,'rb').read()).hexdigest()})
# Save in an immediately inspectable camera view.
for screen in bpy.data.screens:
 for area in screen.areas:
  if area.type=='VIEW_3D':area.spaces.active.region_3d.view_perspective='CAMERA'
bpy.ops.wm.save_as_mainfile(filepath=os.path.join(ROOT,'eye-form-v1.blend'))
with open(os.path.join(ROOT,'manifest.json'),'w') as f:json.dump(report,f,indent=2)
