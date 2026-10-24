import bpy,math,json,hashlib
from pathlib import Path
from mathutils import Vector,Quaternion
R=Path.cwd();O=R/'outputs/eye-analysis';W=R/'work/eye-analysis/g3';W.mkdir(exist_ok=True)
src=R/'outputs/body-study/chameleon-study-v4.blend';sha=lambda p:hashlib.sha256(p.read_bytes()).hexdigest();sh=sha(src)
bpy.ops.wm.open_mainfile(filepath=str(src));s=bpy.context.scene
old=bpy.data.objects['Near eye | reused E1 lid'];N=128;NR=56
roots=[old.matrix_world@v.co for v in old.data.vertices[:N]];root=sum(roots,Vector())/N;axis=(old.rotation_quaternion@Vector((0,0,1))).normalized();qbase=Vector((0,0,1)).rotation_difference(axis);u=qbase@Vector((1,0,0));v=qbase@Vector((0,1,0));radius=.24;theta0=.18;thetab=math.radians(110);center=root-axis*(radius*math.cos(thetab));mat=old.data.materials[0].copy()
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
   w=max(0,1-i/10);w=w*w*(3-2*w);p+=(roots[j]-restroot)*w
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
for name,r,depth in [('Iris',.044,-.008),('Pupil',.020,-.006)]:
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
 for ring in range(11,NR-1):
  for j in range(0,N,4):
   a=ring*N+j;b=ring*N+(j+1)%N;c=(ring+1)*N+j
   cross=(points[b]-points[a]).cross(points[c]-points[a]);sgn=cross.dot(points[a]-center)
   rest=(base[b]-base[a]).cross(base[c]-base[a]).dot(base[a]-center)
   if sgn*rest<=0:inversions+=1
 for o,depth in inner:
  o.location=center+direction*(radius*math.cos(theta0)+depth);o.rotation_quaternion=Vector((0,0,1)).rotation_difference(direction);o.keyframe_insert(data_path='location',frame=frame);o.keyframe_insert(data_path='rotation_quaternion',frame=frame)
assert maxdrift<1e-6
assert inversions==0,('folded spherical faces',inversions)
s.frame_start=1;s.frame_end=90;s.render.fps=15;s.cycles.samples=12;s.render.resolution_x=640;s.render.resolution_y=560;s.render.resolution_percentage=100;s.render.image_settings.file_format='PNG';focus=Vector((-2.05,0,2.05));s.camera.location=focus+Vector((-4,-8,1.2));s.camera.rotation_euler=(focus-s.camera.location).to_track_quat('-Z','Y').to_euler();s.camera.data.type='ORTHO';s.camera.data.ortho_scale=2.0
s.frame_set(1);s['status']='G3 spherical lid motion; replaces rejected hinged G2. Experimental geometry, not biological validation.'
t=bpy.data.texts.get('START HERE');t.clear();t.write('G3 / v6 — mobile aperture on rounded eye envelope\nSpace to play frames 1–90. Other eye stays still.\nNo cone hinge. Head boundary fixed; gaze opening travels on sphere.\nPer-frame shape keys make this test portable without Python handlers.\nBiological skin mechanics and full 180-degree sweep not validated.\n')
bpy.context.preferences.filepaths.save_version=0;out=R/'outputs/body-study/chameleon-study-v6-eye-motion.blend';bpy.ops.wm.save_as_mainfile(filepath=str(out))
for frame,label,_ in [poses[0],poses[1],poses[2],poses[3],poses[4],poses[5]]:
 s.frame_set(frame);s.render.filepath=str(W/(label+'.png'));bpy.ops.render.render(write_still=True)
s.frame_set(29);s.camera.location=focus+Vector((0,0,8));s.camera.rotation_euler=(focus-s.camera.location).to_track_quat('-Z','Y').to_euler();s.render.filepath=str(W/'forward-top.png');bpy.ops.render.render(write_still=True)
report={'source_sha256':sh,'source_unchanged':sha(src)==sh,'output_sha256':sha(out),'root_drift':maxdrift,'spherical_face_inversions_sampled':inversions,'frames_checked':90,'radius':radius,'center':list(center),'method':'fixed spherical envelope, mobile aperture using spherical surface mapping; per-frame shape keys','status':'poses rendered; visual review pending','limits':['Approximate sphere, not measured biological eyeball','Only near eye animated','Full 180 degree sweep and skin mechanics unvalidated']};(O/'g3-manifest.json').write_text(json.dumps(report,indent=2));print('G3 POSES DONE')
