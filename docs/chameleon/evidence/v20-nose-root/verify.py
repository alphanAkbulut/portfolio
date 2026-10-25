import bpy,numpy as np,json,hashlib
from pathlib import Path
R=Path.cwd();O=R/'outputs/eye-root-v20';src=R/'outputs/eye-root-v19/chameleon-eye-root-v19.blend';dst=O/'chameleon-eye-root-v20.blend';m=json.loads((O/'manifest.json').read_text())
def coords(key,n):
 a=np.empty(n*3,dtype=np.float32);key.data.foreach_get('co',a);return a.reshape(-1,3)
bpy.ops.wm.open_mainfile(filepath=str(src));old={};masks={}
for suffix in ['head root skin transition','root transition fine crowns']:
 ob=bpy.data.objects['Near eye | '+suffix+' v19'];n=len(ob.data.vertices);base=coords(ob.data.shape_keys.key_blocks[0],n);mask=base[:,0]>-2.00;masks[suffix]=mask;old[suffix]=[coords(k,n)[mask].copy() for k in ob.data.shape_keys.key_blocks]
bpy.ops.wm.open_mainfile(filepath=str(dst));maxrear=0
for suffix,arr in old.items():
 ob=bpy.data.objects['Near eye | '+suffix+' v20'];n=len(ob.data.vertices)
 for key,reference in zip(ob.data.shape_keys.key_blocks,arr):maxrear=max(maxrear,float(np.max(np.linalg.norm(coords(key,n)[masks[suffix]]-reference,axis=1))))
assert maxrear<1e-6,maxrear
for name,expected in m['protected_geometry_and_shape_keys_unchanged'].items():
 ob=bpy.data.objects[name];h=hashlib.sha256();a=np.empty(len(ob.data.vertices)*3,dtype=np.float32);ob.data.vertices.foreach_get('co',a);h.update(a.tobytes())
 if ob.data.shape_keys:
  for k in ob.data.shape_keys.key_blocks:k.data.foreach_get('co',a);h.update(a.tobytes())
 assert h.hexdigest()==expected,name
ob=bpy.data.objects['Near eye | head root skin transition v20'];s=bpy.context.scene;first=None;drift=0;stats={}
for f in np.arange(1,90.01,.5):
 s.frame_set(int(f),subframe=float(f%1));ev=ob.evaluated_get(bpy.context.evaluated_depsgraph_get());mesh=ev.to_mesh();a=np.empty(len(mesh.vertices)*3,dtype=np.float32);mesh.vertices.foreach_get('co',a);a=a.reshape(33,128,3).copy();ev.to_mesh_clear();assert np.isfinite(a).all()
 if first is None:first=a[0].copy();front=int(np.argmin(a[0,:,0]));back=int(np.argmax(a[0,:,0]))
 drift=max(drift,float(np.max(np.linalg.norm(a[0]-first,axis=1))))
 if f in [1,15,29,43,57]:stats[str(int(f))]={n:float(np.linalg.norm(np.diff(a[:,j],axis=0),axis=1).sum()) for n,j in [('nose_arc',front),('tail_arc',back)]}
assert drift<1e-6
m.update(protected_data_reopen='passed',tail_side_max_displacement_vs_v19=maxrear,tail_side_test_mask='rest x > -2.00, cuff and its crowns, all stored shape keys',outer_edge_drift=drift,samples=179,section_arcs=stats,source_unchanged=hashlib.sha256(src.read_bytes()).hexdigest()==m['source_sha256'])
assert m['source_unchanged'];(O/'manifest.json').write_text(json.dumps(m,indent=2));print(json.dumps({'rear':maxrear,'root':drift,'sections':stats}))
