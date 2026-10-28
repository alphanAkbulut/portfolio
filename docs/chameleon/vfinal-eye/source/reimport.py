import bpy,json
from pathlib import Path
R=Path.cwd();O=R/'outputs/VFinal_Eye';bpy.ops.wm.read_factory_settings(use_empty=True);bpy.ops.import_scene.gltf(filepath=str(O/'VFinal_Eye.glb'))
rows=[{'name':o.name,'type':o.type,'parent':o.parent.name if o.parent else None,'vertices':len(o.data.vertices) if o.type=='MESH' else None} for o in bpy.data.objects];print(json.dumps(rows),flush=True);print('ACTIONS',[(a.name,list(a.frame_range)) for a in bpy.data.actions],flush=True)
(O/'reimport-diagnostic.json').write_text(json.dumps({'objects':rows,'actions':[a.name for a in bpy.data.actions]},indent=2))

rigs=[o for o in bpy.data.objects if o.type=='ARMATURE'];custom={b.custom_shape for r in rigs for b in r.pose.bones if b.custom_shape};character=sorted(o.name for o in bpy.data.objects if o.type=='MESH' and o not in custom)
assert character==['Body','LeftEye','RightEye'],character
assert set(a.name for a in bpy.data.actions)=={'walk','idle_look','drink','tail_coil','tail_wave'}
report=json.loads((O/'export-verification.json').read_text());report['glb_reimport_meshes']=character;report['importer_generated_bone_control_shapes']=[o.name for o in custom];report['glb_reimport_actions']=[a.name for a in bpy.data.actions];report['glb_reimport_passed']=True;(O/'export-verification.json').write_text(json.dumps(report,indent=2));print('REIMPORT_VERIFIED',character,'custom controls',[o.name for o in custom],flush=True)
