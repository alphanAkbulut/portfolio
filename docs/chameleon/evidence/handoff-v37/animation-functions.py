import bpy, math
from mathutils import Quaternion

# rig and fps refer to the existing scene; only eye rotation channels are edited.

def curves(action):
    if hasattr(action,'fcurves'): return list(action.fcurves)
    return [fc for layer in action.layers for strip in layer.strips for bag in strip.channelbags for fc in bag.fcurves]

def smooth(x):
    x=max(0.,min(1.,x)); return x*x*(3-2*x)

def eye_time(seconds, duration, events, lead=False):
    # Preserve the original scan; briefly hold it at each new fixation.
    t=seconds
    for start,_,_ in events:
        if start+.042 <= seconds < start+.142: t=start+.042
        elif start+.142 <= seconds < start+.28:
            t=seconds-.10*(1-smooth((seconds-start-.142)/.138))
    if lead:
        # Advance only the existing viewer-focus entry, never the head curve.
        t+=.125*smooth((seconds-.55)/.30)*(1-smooth((seconds-2.85)/.30))
    return max(0.,min(duration,t))

def saccade_offset(seconds, events, strength):
    yaw=pitch=0.
    for start,dy,dp in events:
        envelope=smooth((seconds-start)/.042)*(1-smooth((seconds-start-.142)/.18))
        yaw+=math.radians(dy)*envelope*strength
        pitch+=math.radians(dp)*envelope*strength
    return yaw,pitch

def polish_eyes(action):
    duration=(action.frame_range[1]-1)/fps
    all_curves=curves(action)
    report={}
    for side,shift in [('L',0.),('R',.37)]:
        bone=rig.pose.bones['Eye_'+side]
        path=bone.path_from_id('rotation_quaternion')
        fc=sorted([c for c in all_curves if c.data_path==path],key=lambda c:c.array_index)
        assert len(fc)==4
        events=[(.45+shift,2.3,1.1),(3.45+shift,-1.7,.8),(5.05+shift,1.4,-1.2),(6.65+shift,-2.,.7)]
        events=[e for e in events if e[0]+.4<duration]
        if action.name=='drink': strength=.3
        elif action.name=='walk': strength=.55
        else: strength=1.
        samples=[]; max_angle=0.
        rest=bone.bone.matrix_local.to_quaternion()
        for k in range(round(duration*fps*2)+1):
            frame=1+k/2;sec=(frame-1)/fps
            t=eye_time(sec,duration,events,action.name=='idle_look')
            original=Quaternion([c.evaluate(frame) for c in fc]).normalized()
            base=Quaternion([c.evaluate(1+t*fps) for c in fc]).normalized()
            yaw,pitch=saccade_offset(sec,events,strength)
            delta=rest.inverted()@(Quaternion((0,0,1),yaw)@Quaternion((1,0,0),pitch))@rest
            q=(delta@base).normalized()
            if samples and q.dot(samples[-1][1])<0:q.negate()
            max_angle=max(max_angle,original.rotation_difference(q).angle)
            samples.append((frame,q))
        for i,c in enumerate(fc):
            c.keyframe_points.clear();c.keyframe_points.add(len(samples))
            for point,(frame,q) in zip(c.keyframe_points,samples):
                point.co=(frame,q[i]);point.interpolation='LINEAR'
            c.update()
        report[side]={'events_seconds':[e[0] for e in events], 'max_delta_degrees':math.degrees(max_angle),'loop_error':samples[0][1].rotation_difference(samples[-1][1]).angle}
        assert report[side]['loop_error']<.001
    return report
