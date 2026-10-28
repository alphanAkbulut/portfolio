import bpy,json,numpy as np,hashlib,struct
from pathlib import Path
from mathutils import Vector
R=Path.cwd();O=R/'outputs/VFinal_Eye';W=R/'work/vfinal-eye';P=O/'VFinal_Eye.blend';bpy.ops.wm.open_mainfile(filepath=str(P));s=bpy.context.scene;rig=bpy.data.objects['ChameleonRig'];rig.data.pose_position='POSE'
report={'blend_reopened':True,'meshes':[n for n in ['Body','LeftEye','RightEye'] if bpy.data.objects.get(n)],'bones':[b.name for b in rig.data.bones],'actions':[a.name for a in bpy.data.actions],'pose_checks':[]}
for name in ['walk','idle_look','drink','tail_coil','tail_wave']:
 a=bpy.data.actions[name];rig.animation_data.action=a
 for frame in [1,int(a.frame_range[1]/2),int(a.frame_range[1])]:
  s.frame_set(frame);bpy.context.view_layer.update()
  for obname in ['Body','LeftEye','RightEye']:
   ev=bpy.data.objects[obname].evaluated_get(bpy.context.evaluated_depsgraph_get());mesh=ev.to_mesh();p=np.empty((len(mesh.vertices),3),np.float32);mesh.vertices.foreach_get('co',p.ravel());assert np.isfinite(p).all();ev.to_mesh_clear()
  report['pose_checks'].append({'action':name,'frame':frame,'finite':True})
rig.animation_data.action=bpy.data.actions['idle_look'];s.frame_set(1)
bpy.ops.object.select_all(action='DESELECT')
for name in ['ChameleonRig','Body','LeftEye','RightEye']:bpy.data.objects[name].select_set(True)
bpy.context.view_layer.objects.active=rig
bpy.ops.export_scene.gltf(filepath=str(O/'VFinal_Eye.glb'),export_format='GLB',use_selection=True,export_animations=True,export_animation_mode='ACTIONS',export_skins=True,export_morph=False,export_cameras=False,export_lights=False,export_materials='EXPORT',export_yup=True,export_force_sampling=True)
print('GLB_EXPORTED',flush=True)
with open(O/'VFinal_Eye.glb','rb') as f:
 magic,version,size=struct.unpack('<III',f.read(12));assert magic==0x46546c67 and version==2;n,kind=struct.unpack('<II',f.read(8));g=json.loads(f.read(n))
assert size==(O/'VFinal_Eye.glb').stat().st_size
report['glb_meshes']=[x['name'] for x in g['nodes'] if 'mesh' in x];assert sorted(report['glb_meshes'])==['Body','LeftEye','RightEye']
report['glb_animations']=[x['name'] for x in g['animations']];assert set(report['glb_animations'])=={'walk','idle_look','drink','tail_coil','tail_wave'}
report['glb_joint_count']=len(g['skins'][0]['joints']);assert report['glb_joint_count']==97
report['embedded_images']=len(g.get('images',[]));report['external_buffers']=[x.get('uri') for x in g['buffers'] if x.get('uri')];assert not report['external_buffers'];report['external_images']=[x['uri'] for x in g.get('images',[]) if x.get('uri') and not x['uri'].startswith('data:')];assert not report['external_images']
report['pbr_material_count']=len(g.get('materials',[]));report['texture_note']='Zero source image textures; geometric scales and all 21 original PBR materials retained.'
report['sha256']={p.name:hashlib.sha256(p.read_bytes()).hexdigest() for p in [P,O/'VFinal_Eye.glb']}
(O/'export-verification.json').write_text(json.dumps(report,indent=2))
# Focused motion and material renders.
s.render.engine='CYCLES';s.cycles.samples=12;s.cycles.use_denoising=True;s.render.resolution_x=800;s.render.resolution_y=700;s.render.resolution_percentage=100;s.render.image_settings.file_format='PNG';s.render.film_transparent=False
cam=s.camera;cam.animation_data_clear();s.timeline_markers.clear();cam.data.type='ORTHO';cam.data.ortho_scale=1.85
for label,action,frame in [('idle-scan','idle_look',16),('idle-focus','idle_look',49),('drink-mid','drink',73)]:
 rig.animation_data.action=bpy.data.actions[action];s.frame_set(frame);bpy.context.view_layer.update();center=rig.matrix_world@rig.pose.bones['Neck_Bone'].matrix@rig.data.bones['Neck_Bone'].matrix_local.inverted()@Vector((-2.10,0,2.10));cam.location=center+Vector((-.8,-1,.25)).normalized()*12;cam.rotation_euler=(center-cam.location).to_track_quat('-Z','Y').to_euler();s.render.filepath=str(O/(label+'.png'));bpy.ops.render.render(write_still=True)
print('MOTION_PREVIEWS_DONE',flush=True)
# Independent import confirms the actual serialized binary can be read.
bpy.ops.wm.read_factory_settings(use_empty=True);bpy.ops.import_scene.gltf(filepath=str(O/'VFinal_Eye.glb'));custom={b.custom_shape for r in bpy.data.objects if r.type=='ARMATURE' for b in r.pose.bones if b.custom_shape};report['importer_generated_bone_control_shapes']=[o.name for o in custom];report['glb_reimport_meshes']=sorted(o.name for o in bpy.data.objects if o.type=='MESH' and o not in custom);assert report['glb_reimport_meshes']==['Body','LeftEye','RightEye'];report['glb_reimport_actions']=[a.name for a in bpy.data.actions];assert len(report['glb_reimport_actions'])>=5;report['glb_reimport_passed']=True;(O/'export-verification.json').write_text(json.dumps(report,indent=2));print('FINAL_VERIFIED',flush=True)
