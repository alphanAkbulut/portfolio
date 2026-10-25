import bpy,numpy as np,json,hashlib
from pathlib import Path
R=Path.cwd();O=R/'outputs/eye-root-v19';m=json.loads((O/'manifest.json').read_text());bpy.ops.wm.open_mainfile(filepath=str(O/'chameleon-eye-root-v19.blend'))
for name,expected in m['protected_geometry_and_shape_keys_unchanged'].items():
 ob=bpy.data.objects[name];h=hashlib.sha256();a=np.empty(len(ob.data.vertices)*3,dtype=np.float32);ob.data.vertices.foreach_get('co',a);h.update(a.tobytes())
 if ob.data.shape_keys:
  for k in ob.data.shape_keys.key_blocks:k.data.foreach_get('co',a);h.update(a.tobytes())
 assert h.hexdigest()==expected,name
ob=bpy.data.objects['Near eye | head root skin transition v19'];s=bpy.context.scene;root=None;drift=0;stats={};finite=True
for frame in np.arange(1,90.01,.5):
 s.frame_set(int(frame),subframe=float(frame%1));ev=ob.evaluated_get(bpy.context.evaluated_depsgraph_get());mesh=ev.to_mesh();a=np.empty(len(mesh.vertices)*3,dtype=np.float32);mesh.vertices.foreach_get('co',a);a=a.reshape(33,128,3).copy();ev.to_mesh_clear();finite &= bool(np.isfinite(a).all())
 if root is None:root=a[0].copy()
 drift=max(drift,float(np.max(np.linalg.norm(a[0]-root,axis=1))))
 if frame in [1,43,57]:
  # Measure meridian arc lengths in fixed world-upper/lower sectors.
  z=root[:,2]-root[:,2].mean();length=np.linalg.norm(np.diff(a,axis=0),axis=2).sum(axis=0)
  stats[str(int(frame))]={'upper_mean_arc':float(length[z>.8*np.max(z)].mean()),'lower_mean_arc':float(length[z<.8*np.min(z)].mean())}
assert drift<1e-6 and finite
neutral=stats['1'];up=stats['43'];down=stats['57'];checks={'up_upper_narrows':up['upper_mean_arc']<neutral['upper_mean_arc'],'up_lower_expands':up['lower_mean_arc']>neutral['lower_mean_arc'],'down_lower_narrows':down['lower_mean_arc']<neutral['lower_mean_arc'],'down_upper_expands':down['upper_mean_arc']>neutral['upper_mean_arc']};assert all(checks.values()),(stats,checks)
m.update(protected_data_reopen='passed',samples=179,outer_edge_drift=drift,finite=finite,meridian_arc_scene_units=stats,directional_checks=checks,limits=['Additive overlay; not unified manifold skin','Measurements are model arc lengths, not biological strain or projected visible area','Global intersections not exhaustively checked','No new motion video in this focused three-pose review'])
(O/'manifest.json').write_text(json.dumps(m,indent=2));print(json.dumps({'checks':checks,'arc_lengths':stats,'root_drift':drift}))
