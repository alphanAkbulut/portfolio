import bpy, math, json, hashlib
import numpy as np
from mathutils import Vector
from pathlib import Path
R=Path.cwd();W=R/'work/eye-analysis/g7';W.mkdir(exist_ok=True);O=R/'outputs/eye-analysis'
src=R/'outputs/body-study/chameleon-study-v9-rounded-scales.blend';sha=lambda p:hashlib.sha256(p.read_bytes()).hexdigest();sh=sha(src)
bpy.ops.wm.open_mainfile(filepath=str(src));s=bpy.context.scene
center=Vector((-2.050727844,-.430122554,2.117842197));axis=Vector((-.23,-1,.10)).normalized();h=Vector((axis.x,axis.y,0)).normalized();side=Vector((h.y,-h.x,0));front=Vector((-1,0,0));maxyaw=math.atan2(front.dot(side),front.dot(h));maximum=.045
iris=bpy.data.objects['Iris | surface motion'];pupil=bpy.data.objects['Pupil | surface motion']
# Record evaluated original gaze before changing any action curves.
weights={};locations={}
for frame in range(1,91):
 s.frame_set(frame);d=(iris.location-center).normalized();yaw=math.atan2(d.dot(side),d.dot(h));t=max(0,min(1,yaw/maxyaw));weights[frame]=t*t*(3-2*t);locations[frame]=[iris.location.copy(),pupil.location.copy()]
assert max(weights[f] for f in [1,43,57,90])<1e-10
stats={};skin=bpy.data.objects['Near eye | spherical surface motion'];scales=bpy.data.objects['Near eye | rounded scale geometry']
for ob in [skin,scales]:
 keys=ob.data.shape_keys.key_blocks;raw=np.empty(len(ob.data.vertices)*3,dtype=np.float32);keys[0].data.foreach_get('co',raw);base=raw.reshape(-1,3);v=base-np.array(center);v/=np.linalg.norm(v,axis=1)[:,None];theta=np.arccos(np.clip(v@np.array(axis),-1,1));t=(math.radians(110)-theta)/(math.radians(110)-math.asin(.29));blend=np.clip((t-.29)/.42,0,1);blend=blend*blend*(3-2*blend)
 if ob==skin:blend[:128*18]=0
 maxroot=0;minratio=1;inversions=0
 faces=np.asarray([list(p.vertices)[:3] for p in ob.data.polygons],dtype=int) if ob==skin else None
 for frame in range(1,91):
  key=keys[f'Gaze {frame:03}'];key.data.foreach_get('co',raw);old=raw.reshape(-1,3).copy();new=old+blend[:,None]*maximum*weights[frame]*np.array(axis)
  assert np.isfinite(new).all()
  if ob==skin:
   maxroot=max(maxroot,float(np.max(np.linalg.norm(new[:128]-old[:128],axis=1))))
   a,b,c=faces.T;na=np.cross(old[b]-old[a],old[c]-old[a]);nb=np.cross(new[b]-new[a],new[c]-new[a]);dots=np.sum(na*nb,axis=1);inversions+=int(np.sum(dots<=0))
  key.data.foreach_set('co',new.astype(np.float32).ravel())
 stats[ob.name]={'root_drift':maxroot if ob==skin else None,'face_normal_reversals_vs_v9':inversions if ob==skin else None}
assert stats[skin.name]['root_drift']==0
assert stats[skin.name]['face_normal_reversals_vs_v9']==0
for frame in range(1,91):
 for ob,pos in zip([iris,pupil],locations[frame]):
  ob.location=pos+axis*maximum*weights[frame];ob.keyframe_insert(data_path='location',frame=frame)
s.frame_set(1);s.cycles.samples=20;s['status']='G7: forward gaze clearance on v9 rounded scales; root collar fixed, up/down poses unchanged.'
t=bpy.data.texts.get('START HERE');t.clear();t.write('G7 / v10\nForward gaze keeps additional outward clearance above the head attachment rim.\nV9 rounded scales and G5 folds retained. Up/down poses unchanged. Space: frames 1-90.\nDesign clearance, not calibrated anatomical measurement. Extreme scale stretching remains.\n')
bpy.context.preferences.filepaths.save_version=0;out=R/'outputs/body-study/chameleon-study-v10-forward-clearance.blend';bpy.ops.wm.save_as_mainfile(filepath=str(out))
for frame,label in [(29,'forward'),(43,'up')]:
 s.frame_set(frame);s.render.filepath=str(W/(label+'.png'));bpy.ops.render.render(write_still=True)
report={'source_sha256':sh,'source_unchanged':sha(src)==sh,'output_sha256':sha(out),'forward_outward_offset':maximum,'neutral_up_down_end_weights':[weights[f] for f in [1,43,57,90]],'checks':stats,'frames_checked':90,'limits':['Design correction, not measured anatomical distance','Scale stretching inherited from v9','Not a complete inter-object collision test']};(O/'g7-manifest.json').write_text(json.dumps(report,indent=2));print('G7 DONE')
