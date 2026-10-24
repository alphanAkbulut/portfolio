import bpy,math,json,hashlib
from pathlib import Path
from mathutils import Vector,Quaternion
R=Path.cwd();O=R/'outputs/eye-analysis';W=R/'work/eye-analysis/g5';W.mkdir(exist_ok=True)
src=R/'outputs/body-study/chameleon-study-v4.blend';sha=lambda p:hashlib.sha256(p.read_bytes()).hexdigest();sh=sha(src)
bpy.ops.wm.open_mainfile(filepath=str(src));s=bpy.context.scene
old=bpy.data.objects['Near eye | reused E1 lid'];N=128;NR=88
roots=[old.matrix_world@v.co for v in old.data.vertices[:N]];root=sum(roots,Vector())/N;axis=(old.rotation_quaternion@Vector((0,0,1))).normalized();qbase=Vector((0,0,1)).rotation_difference(axis);u=qbase@Vector((1,0,0));v=qbase@Vector((0,1,0));radius=.24;theta0=math.asin(.29);thetab=math.radians(110);center=root-axis*(radius*math.cos(thetab));mat=old.data.materials[0].copy()
# Spherical envelope: the aperture travels over the globe, not on a hinged cone.
def surface(target):
 q=axis.rotation_difference(target);verts=[]
 for i in range(NR):
  t=i/(NR-1);theta=thetab+(theta0-thetab)*t;rot=Quaternion().slerp(q,t)
  for j in range(N):
   a=2*math.pi*j/N;direction=math.cos(theta)*axis+math.sin(theta)*(math.cos(a)*u+math.sin(a)*v)
   p=center+radius*(rot@direction)
   # Fixed head attachment blends into the spherical envelope in first ten rings.
   restroot=center+radius*(math.cos(thetab)*axis+math.sin(thetab)*(math.cos(a)*u+math.sin(a)*v))
   w=max(0,1-t/.18);w=w*w*(3-2*w);p+=(roots[j]-restroot)*w
   # Broad fixed-base collar and pose-dependent wrinkle arcs, in material coordinates.
   # Directional compression is an artistic proxy, not measured tissue strain.
   radial=math.cos(a)*u+math.sin(a)*v
   compression=max(-1,min(1,(target-axis).dot(radial)))
   collar=.013*math.exp(-((t-.20)/.055)**2)*(1-math.exp(-t*50))
   collar*=1+.10*math.sin(3*a)+.04*math.cos(5*a)
   envelope=math.sin(math.pi*max(0,min(1,(t-.22)/.48)))**2 if .22<t<.70 else 0
   # Compressed side: closer and higher folds; stretched side: broader, shallower folds.
   amplitude=.0035*(1+.65*compression)
   phase=(t-.22)*math.pi*2*(7+1.5*compression)+.35*math.sin(2*a)+.15*math.sin(5*a)
   folds=amplitude*envelope*math.sin(phase)
   p+=(rot@direction)*(collar+folds)
   verts.append(p)
 return verts
base=surface(axis);fs=[]
for i in range(NR-1):
 for j in range(N):
  a=i*N+j;b=i*N+(j+1)%N;fs.append((a,b,b+N,a+N))
mesh=bpy.data.meshes.new('Spherical lid with mobile aperture');mesh.from_pydata(base,[],fs);mesh.update();eye=bpy.data.objects.new('Near eye | spherical surface motion',mesh);bpy.context.collection.objects.link(eye);eye.data.materials.append(mat)
for f in mesh.polygons:f.use_smooth=True
bpy.data.objects.remove(old,do_unlink=True)
# Rest position attribute anchors the small scale detail to the surface.
attr=mesh.attributes.new(name='skin_rest',type='FLOAT_VECTOR',domain='POINT')
for a,p in zip(attr.data,base):a.vector=p
nodes=mat.node_tree.nodes;links=mat.node_tree.links;an=nodes.new('ShaderNodeAttribute');an.attribute_name='skin_rest'
for link in list(links):
 if link.from_node.bl_idname=='ShaderNodeTexCoord' and link.from_socket.name=='Object':links.new(an.outputs['Vector'],link.to_socket)
for node in nodes:
 if node.bl_idname=='ShaderNodeTexVoronoi':node.inputs['Scale'].default_value=95
# Replace only near-eye internal disks, both oriented with the mobile opening.
oldinner=[o for o in bpy.data.objects if o.name.startswith(('Iris','Pupil')) and o.matrix_world.translation.y<0];mats={('Pupil' if o.name.startswith('Pupil') else 'Iris'):o.data.materials[0] for o in oldinner}
for o in oldinner:bpy.data.objects.remove(o,do_unlink=True)
inner=[]
for name,r,depth in [('Iris',radius*math.sin(theta0)*1.015,-.003),('Pupil',radius*math.sin(theta0)*.88,-.001)]:
 bpy.ops.mesh.primitive_uv_sphere_add(segments=48,ring_count=24,radius=1);o=bpy.context.object;o.name=name+' | surface motion';o.scale=(r,r,.002);o.data.materials.append(mats[name]);o.rotation_mode='QUATERNION'
 for f in o.data.polygons:f.use_smooth=True
 inner.append((o,depth))
up=Vector((0,0,1));tan=up.cross(axis).normalized()
def target(yaw,pitch):return (Quaternion(up,math.radians(yaw))@Quaternion(tan,math.radians(-pitch))@axis).normalized()
poses=[(1,'neutral',axis),(15,'back',target(70,0)),(29,'forward',Vector((-1,0,0))),(43,'up',target(0,40)),(57,'down',target(0,-40)),(71,'camera',Vector((-4,-8,1.2)).normalized()),(80,'hold',Vector((-4,-8,1.2)).normalized()),(90,'neutral_end',axis)]
eye.shape_key_add(name='Basis');prevkey=None;maxdrift=0;minorientation=1;inversions=0
for frame in range(1,91):
 for (fa,la,da),(fb,lb,db) in zip(poses,poses[1:]):
  if fa<=frame<=fb:
   t=(frame-fa)/(fb-fa);t=t*t*(3-2*t);direction=(Quaternion().slerp(da.rotation_difference(db),t)@da).normalized();break
 points=surface(direction);key=eye.shape_key_add(name=f'Gaze {frame:03}');key.value=0
 for kv,p in zip(key.data,points):kv.co=p
 for fr,value in [(frame-1,0),(frame,1),(frame+1,0)]:key.value=value;key.keyframe_insert(data_path='value',frame=fr)
 maxdrift=max(maxdrift,max((p-r).length for p,r in zip(points[:N],roots)))
 # Check spherical part for folded faces. Compare orientation to resting face.
 for ring in range(17,NR-1):
  for j in range(0,N,4):
   a=ring*N+j;b=ring*N+(j+1)%N;c=(ring+1)*N+j
   cross=(points[b]-points[a]).cross(points[c]-points[a]);sgn=cross.dot(points[a]-center)
   rest=(base[b]-base[a]).cross(base[c]-base[a]).dot(base[a]-center)
   if sgn*rest<=0:inversions+=1
 for o,depth in inner:
  o.location=center+direction*(radius*math.cos(theta0)+depth);o.rotation_quaternion=Vector((0,0,1)).rotation_difference(direction);o.keyframe_insert(data_path='location',frame=frame);o.keyframe_insert(data_path='rotation_quaternion',frame=frame)
assert maxdrift<1e-6
assert inversions==0,('folded spherical faces',inversions)
s.frame_start=1;s.frame_end=90;s.render.fps=15;s.cycles.samples=12;s.render.resolution_x=640;s.render.resolution_y=560;s.render.resolution_percentage=100;s.render.image_settings.file_format='PNG';focus=center.copy();s.camera.location=focus+Vector((-4,-8,1.2));s.camera.rotation_euler=(focus-s.camera.location).to_track_quat('-Z','Y').to_euler();s.camera.data.type='ORTHO';s.camera.data.ortho_scale=.92
s.frame_set(1);s['status']='G5: pose-dependent skin folds and collar. Artistic deformation proxy, not measured biomechanics.'
t=bpy.data.texts.get('START HERE');t.clear();t.write('G5 / v8 — mobile aperture on rounded eye envelope\nSpace to play frames 1–90. Other eye stays still.\nAperture/globe diameter 0.29. Integrated orbital lip and gaze-driven wrinkle arcs. Head boundary fixed; gaze opening travels on sphere.\nPer-frame shape keys make this test portable without Python handlers.\nBiological skin mechanics and full 180-degree sweep not validated.\n')
bpy.context.preferences.filepaths.save_version=0;out=R/'outputs/body-study/chameleon-study-v8-eye-folds.blend';bpy.ops.wm.save_as_mainfile(filepath=str(out))
for frame,label,_ in [poses[0],poses[2],poses[3]]:
 s.frame_set(frame);s.render.filepath=str(W/(label+'.png'));bpy.ops.render.render(write_still=True)

report={'source_sha256':sh,'source_unchanged':sha(src)==sh,'output_sha256':sha(out),'root_drift':maxdrift,'spherical_face_inversions_sampled':inversions,'frames_checked':90,'radius':radius,'aperture_to_globe_diameter':.29,'orbital_lip_height':.013,'wrinkle_amplitude_base':.0035,'wrinkle_driver':'gaze-direction compression proxy in rest coordinates','center':list(center),'method':'G3 mobile aperture with radial collar and pose-dependent wrinkle arcs; per-frame shape keys','status':'poses rendered; visual review pending','limits':['Approximate sphere, not measured biological eyeball','Only near eye animated','Full 180 degree sweep and skin mechanics unvalidated']};(O/'g5-manifest.json').write_text(json.dumps(report,indent=2));print('G5 POSES DONE')
