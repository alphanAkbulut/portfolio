"""Eye-only rest-shape adapter. Latest V37 topology/materials/actions preserved."""
import bpy,numpy as np,json,hashlib,math
from pathlib import Path
from mathutils import Vector
R=Path.cwd();W=R/'work/vfinal-eye';O=R/'outputs/VFinal_Eye';SOURCE=R/'outputs/eyes-v37/chameleon-animated-v37.blend'
sha=lambda p:hashlib.sha256(p.read_bytes()).hexdigest()
source_hash=sha(SOURCE);g=np.load(W/'g1-profile.npz');c=g['c'];axis=g['axis'];src=np.load(W/'v37-shell.npy');q=src-c;z=q@axis;rad=np.linalg.norm(q-z[:,None]*axis,axis=1)
zr=np.median(z.reshape(-1,128),axis=1);rr=np.median(rad.reshape(-1,128),axis=1);order=np.argsort(zr);zr=zr[order];rr=rr[order];source_tip=float(zr[-1]);gq=g['v']-c;gdepth=float((gq@axis).max());base_radius=float(np.median(np.linalg.norm(gq[:128]-(gq[:128]@axis)[:,None]*axis,axis=1)))
# V8 accepted cubic shoulder controls, evaluated at profile=0.50 and aperture=0.15.
# The 2D upper/lower radii are averaged into a rounded rotational envelope.
u=np.linspace(0,1,1001);bez=lambda p:sum((math.comb(3,i)*(1-u)**(3-i)*u**i)[:,None]*np.array(pt) for i,pt in enumerate(p))
upper=bez([(235,230),((184+222)/2,(222+238)/2),((145+161)/2,(249+263.8)/2),(144,273.8)])
lower=bez([(235,350),((189+220)/2,(347+335)/2),((146+163)/2,(325+309.2)/2),(144,294.2)])
tgrid=np.linspace(0,1,1001);ru=np.interp(tgrid,(235-upper[:,0])/91,290-upper[:,1]);rl=np.interp(tgrid,(235-lower[:,0])/91,lower[:,1]-290);target_r=(ru+rl)/120*base_radius
# Separate accepted G1 depth and additional 75% depth. No second 0.68 scaling.
target_tip=gdepth*.75

def deform(points,sign):
 p=points.copy();p[:,1]*=-sign # near-side canonical: sign=-1 unchanged, far reflected
 v=p-c;ax=v@axis;rv=v-ax[:,None]*axis;t=np.clip(ax/source_tip,0,1)
 desired=np.interp(t,tgrid,target_r);current=np.interp(ax,zr,rr)
 w=np.clip(ax/.055,0,1);w=w*w*(3-2*w)
 scale=1+w*(desired/np.maximum(current,.025)-1)
 newax=ax*(1+w*(target_tip/source_tip-1))
 result=c+rv*scale[:,None]+newax[:,None]*axis;result[:,1]*=-sign
 return result.astype(np.float32)

def arrays(mesh):
 a=np.empty((len(mesh.vertices),3),np.float32);mesh.vertices.foreach_get('co',a.ravel());return a

def curves(a):return list(a.fcurves) if hasattr(a,'fcurves') else [f for l in a.layers for s in l.strips for b in s.channelbags for f in b.fcurves]
def action_hashes():
 return {a.name:hashlib.sha256(repr([(f.data_path,f.array_index,[(tuple(k.co),k.interpolation,tuple(k.handle_left),tuple(k.handle_right)) for k in f.keyframe_points]) for f in curves(a)]).encode()).hexdigest() for a in bpy.data.actions}
def material_state():return [(m.name,[(n.name,n.type,[(i.name,tuple(i.default_value) if hasattr(i.default_value,'__len__') else i.default_value) for i in n.inputs if hasattr(i,'default_value')]) for n in m.node_tree.nodes]) for m in bpy.data.materials if m.use_nodes]
bpy.ops.wm.open_mainfile(filepath=str(SOURCE));s=bpy.context.scene;rig=bpy.data.objects['ChameleonRig'];rig.data.pose_position='REST';s.frame_set(1)
body=bpy.data.objects['Body'];m=body.data;before=arrays(m);after=before.copy();orig=np.empty(len(before),np.int32);m.attributes['v34_source_vertex'].data.foreach_get('value',orig)
parts=json.loads((W/'eye-parts.json').read_text());changed=np.zeros(len(before),bool);report_parts=[];act_before=action_hashes();mat_before=repr(material_state());bones_before=[(b.name,tuple(b.head_local),tuple(b.tail_local)) for b in rig.data.bones]
for rec in parts:
 if not rec['name'].startswith(('Near eye |','Far eye |')):continue
 ids=np.where((orig>=rec['start'])&(orig<rec['start']+rec['count']))[0];assert len(ids)==rec['count'],rec['name']
 after[ids]=deform(before[ids],-1 if rec['name'].startswith('Near') else 1);changed[ids]=True;report_parts.append({'name':rec['name'],'vertices':len(ids)})
assert np.array_equal(before[~changed],after[~changed]);m.vertices.foreach_set('co',after.ravel());m.update()
# Apply exactly the same continuous field to the optical inserts, retaining their materials and weights.
for name,sign in [('LeftEye',-1),('RightEye',1)]:
 ob=bpy.data.objects[name];a=arrays(ob.data);M=np.array(ob.matrix_world);world=a@M[:3,:3].T+M[:3,3];world=deform(world,sign);inv=np.linalg.inv(M);local=(world@inv[:3,:3].T+inv[:3,3]).astype(np.float32);ob.data.vertices.foreach_set('co',local.ravel());ob.data.update()
assert act_before==action_hashes();assert mat_before==repr(material_state());assert bones_before==[(b.name,tuple(b.head_local),tuple(b.tail_local)) for b in rig.data.bones]
report={'source':str(SOURCE.relative_to(R)),'source_sha256':source_hash,'accepted_settings':{'profile_percent':50,'aperture_reduction_percent':15,'depth_percent':75},'G1_base_radius':base_radius,'G1_depth':gdepth,'target_depth':target_tip,'target_aperture_radius':float(target_r[-1]),'method':'V8 cubic cross-section revolved from averaged upper/lower envelope; G1 size calibration; local root blend. 2D-to-3D interpretation, not pixel-identical reconstruction.','changed_parts':report_parts,'unchanged_non_eye_vertices':int((~changed).sum()),'unchanged_non_eye_vertex_sha256':hashlib.sha256(before[~changed].tobytes()).hexdigest(),'actions_before':act_before,'actions_after':action_hashes(),'bones':[b.name for b in rig.data.bones],'mesh_names':[n for n in ['Body','LeftEye','RightEye']],'material_state_unchanged':True,'texture_images':[],'texture_note':'Source has no image textures or procedural shader nodes; scales are mesh geometry and material values are standard PBR. No textures omitted.','topology_unchanged':True,'rig_rest_unchanged':True}
np.savez_compressed(W/'change-mask.npz',changed=changed,origin=orig)
(O/'build-verification.json').write_text(json.dumps(report,indent=2));print('DEFORMATION_CHECKED',flush=True)
s['VFinal_Eye_decision']='V8 accepted 50/15/75; G1 size, latest V37 detail/rig preserved.'
rig.data.pose_position='POSE';rig.animation_data.action=bpy.data.actions['idle_look'];s.frame_set(1);bpy.context.preferences.filepaths.save_version=0
bpy.ops.file.pack_all();bpy.ops.wm.save_as_mainfile(filepath=str(O/'VFinal_Eye.blend'),compress=True);print('BLEND_SAVED',flush=True)
# Review images: only cameras/render settings are changed after saving the deliverable.
s.render.engine='BLENDER_WORKBENCH';s.display.shading.light='STUDIO';s.display.shading.color_type='MATERIAL';s.display.shading.show_shadows=True;s.display.shading.show_cavity=True;s.display.shading.cavity_type='BOTH';s.display.shading.background_type='WORLD';s.world.color=(.12,.12,.12);s.render.resolution_x=800;s.render.resolution_y=700;s.render.resolution_percentage=100;s.render.image_settings.file_format='PNG';s.render.film_transparent=False
cam=s.camera;cam.animation_data_clear();s.timeline_markers.clear();cam.data.type='ORTHO';cam.data.ortho_scale=1.65;center=Vector((-2.10,0,2.10));rig.data.pose_position='REST'
for label,vec in [('front',(-1,0,0)),('side',(0,-1,0)),('top',(0,0,1)),('oblique',(-.7,-1,.35))]:
 cam.location=center+Vector(vec).normalized()*12;cam.rotation_euler=(center-cam.location).to_track_quat('-Z','Y').to_euler();s.render.filepath=str(O/(label+'.png'));bpy.ops.render.render(write_still=True)
print('PREVIEWS_DONE',flush=True)
assert sha(SOURCE)==source_hash
