import bpy,json,hashlib,numpy as np
from pathlib import Path
from mathutils import Vector
R=Path.cwd();O=R/'outputs/eye-motion-review-v17';src=R/'outputs/body-study/chameleon-study-v17-graded-scales.blend'
sha=lambda p:hashlib.sha256(p.read_bytes()).hexdigest();before=sha(src)
bpy.ops.wm.open_mainfile(filepath=str(src));s=bpy.context.scene
lid=bpy.data.objects['Near eye | spherical surface motion'];scales=bpy.data.objects['Near eye | rounded scale geometry']
raw=np.empty(len(lid.data.vertices)*3,dtype=np.float32);base=None;drift=0;bad=[];step=[];prev=None
# Evaluate integer and half frames; roots must remain anchored between keys too.
for frame in np.arange(1,90.01,.5):
 s.frame_set(int(frame),subframe=float(frame%1));dg=bpy.context.evaluated_depsgraph_get();ev=lid.evaluated_get(dg);me=ev.to_mesh();a=np.empty(len(me.vertices)*3,dtype=np.float32);me.vertices.foreach_get('co',a);a=a.reshape(-1,3)
 if base is None:base=a[:128].copy()
 drift=max(drift,float(np.max(np.linalg.norm(a[:128]-base,axis=1))))
 if not np.isfinite(a).all():bad.append(float(frame))
 if prev is not None:step.append({'frame':float(frame),'max_displacement':float(np.max(np.linalg.norm(a-prev,axis=1)))})
 prev=a.copy();ev.to_mesh_clear()
report={'source':str(src.relative_to(R)),'source_sha256':before,'evaluated_samples':179,'range':'1–90 including half frames','root_max_drift':drift,'nonfinite_samples':bad,'largest_half_frame_displacements':sorted(step,key=lambda x:x['max_displacement'],reverse=True)[:8],'limits':['Not an all-scale collision or biological strain test','Only near eye; body static','Existing v17 motion, no model edits'],'renders':[]}
(O/'review.json').write_text(json.dumps(report,indent=2))
focus=Vector((-2.05,-.43,2.12));cam=s.camera;cam.location=focus+Vector((-3,-10,1.8));cam.rotation_euler=(focus-cam.location).to_track_quat('-Z','Y').to_euler();cam.data.ortho_scale=.92
s.render.resolution_x=640;s.render.resolution_y=640;s.render.resolution_percentage=100;s.cycles.samples=12;s.render.image_settings.file_format='PNG'
for f,label in [(1,'neutral'),(15,'back'),(29,'forward'),(43,'up'),(57,'down'),(71,'visitor')]:
 s.frame_set(f);s.render.filepath=str(O/(label+'.png'));bpy.ops.render.render(write_still=True);report['renders'].append({'frame':f,'image':label+'.png'})
# Actual sequence, same lens and lighting; not a slideshow of the key poses.
s.cycles.samples=6;s.render.resolution_x=512;s.render.resolution_y=512;s.frame_start=1;s.frame_end=90;s.render.fps=15;s.render.image_settings.file_format='FFMPEG';s.render.ffmpeg.format='MPEG4';s.render.ffmpeg.codec='H264';s.render.ffmpeg.constant_rate_factor='HIGH';s.render.filepath=str(O/'eye-motion.mp4');bpy.ops.render.render(animation=True)
check=bpy.data.scenes.new('Video check');seq=check.sequence_editor_create().strips.new_movie('Review',str(O/'eye-motion.mp4'),channel=1,frame_start=1);report['video_frames']=seq.frame_duration;assert seq.frame_duration==90
report['source_unchanged']=sha(src)==before;assert report['source_unchanged'];(O/'review.json').write_text(json.dumps(report,indent=2));print('REVIEW COMPLETE',flush=True)
