import bpy,json,hashlib,numpy as np
from pathlib import Path
R=Path.cwd();O=R/'outputs/eye-root-v18';src=R/'outputs/body-study/chameleon-study-v17-graded-scales.blend';out=O/'chameleon-eye-root-v18.blend';m=json.loads((O/'manifest.json').read_text());bpy.ops.wm.open_mainfile(filepath=str(out));s=bpy.context.scene
cuff=bpy.data.objects['Near eye | head root skin transition v18'];lid=bpy.data.objects['Near eye | spherical surface motion'];first=None;drift=0;innergap=0;bad=[]
for f in np.arange(1,90.01,.5):
 s.frame_set(int(f),subframe=float(f%1));dg=bpy.context.evaluated_depsgraph_get();arrays=[]
 for ob in [cuff,lid]:
  ev=ob.evaluated_get(dg);me=ev.to_mesh();a=np.empty(len(me.vertices)*3,dtype=np.float32);me.vertices.foreach_get('co',a);arrays.append(a.reshape(-1,3).copy());ev.to_mesh_clear()
 a,b=arrays
 if first is None:first=a[:128].copy()
 drift=max(drift,float(np.max(np.linalg.norm(a[:128]-first,axis=1))));innergap=max(innergap,float(np.max(np.linalg.norm(a[-128:]-b[12*128:13*128],axis=1))))
 if not all(np.isfinite(x).all() for x in arrays):bad.append(float(f))
assert drift<1e-6 and innergap<1e-6 and not bad
m.update(reopen='passed',samples=179,outer_head_edge_drift=drift,inner_lid_edge_gap=innergap,nonfinite_samples=bad)
s.render.resolution_x=512;s.render.resolution_y=512;s.cycles.samples=6;s.render.use_persistent_data=True;s.frame_start=1;s.frame_end=90;s.render.fps=15;s.render.image_settings.file_format='FFMPEG';s.render.ffmpeg.format='MPEG4';s.render.ffmpeg.codec='H264';s.render.ffmpeg.constant_rate_factor='HIGH';s.render.filepath=str(O/'root-motion.mp4');bpy.ops.render.render(animation=True)
check=bpy.data.scenes.new('Video check');seq=check.sequence_editor_create().strips.new_movie('V18',str(O/'root-motion.mp4'),channel=1,frame_start=1);m['video_frames']=seq.frame_duration;assert seq.frame_duration==90
m['source_unchanged']=hashlib.sha256(src.read_bytes()).hexdigest()==m['source_sha256'];assert m['source_unchanged'];(O/'manifest.json').write_text(json.dumps(m,indent=2));print('ROOT MOTION VERIFIED')
