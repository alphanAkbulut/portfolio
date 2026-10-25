import bpy,numpy as np,json,hashlib
from pathlib import Path
R=Path.cwd();O=R/'outputs/eye-root-v18';p=O/'chameleon-eye-root-v18.blend';m=json.loads((O/'manifest.json').read_text());bpy.ops.wm.open_mainfile(filepath=str(p))
for name,expected in m['protected_geometry_and_shape_keys_unchanged'].items():
 ob=bpy.data.objects[name];h=hashlib.sha256();a=np.empty(len(ob.data.vertices)*3,dtype=np.float32);ob.data.vertices.foreach_get('co',a);h.update(a.tobytes())
 if ob.data.shape_keys:
  for k in ob.data.shape_keys.key_blocks:k.data.foreach_get('co',a);h.update(a.tobytes())
 assert h.hexdigest()==expected,name
text=bpy.data.texts.get('START HERE') or bpy.data.texts.new('START HERE');text.clear();text.write('V18 CANDIDATE: head-to-eye ROOT transition, not aperture edge.\nUser-approved V17 main eye scales, lid and optics preserved.\nTwo added objects: head root skin transition v18 / root transition fine crowns v18.\nSpace plays frames 1–90. Outer boundary stays on head; inner follows lid ring 12.\nCandidate needs user visual approval. Additive overlay, not final unified skin.\nSource V17 unchanged. See outputs/eye-root-v18/README.md and manifest.json.\n');bpy.context.scene['status']='V18 candidate: head-root skin cuff; approved V17 eye pattern preserved';bpy.context.preferences.filepaths.save_version=0;bpy.ops.wm.save_as_mainfile(filepath=str(p));m['protected_data_reopen_verification']='passed';m['output_sha256']=hashlib.sha256(p.read_bytes()).hexdigest();(O/'manifest.json').write_text(json.dumps(m,indent=2));print('PROTECTED V17 DATA VERIFIED AFTER REOPEN')
