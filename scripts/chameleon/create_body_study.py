"""B1 editable proportion study. Design dimensions, NOT measured anatomy.
Reuse E1 lid mesh; preserve original. No gait, tail rig or skin claimed.
Run with Blender --background --python this_file.
"""
import bpy, math, os, json, hashlib
from mathutils import Vector, Matrix
ROOT=os.path.abspath(os.path.join(os.path.dirname(__file__),"../.."))
OUT=os.path.join(ROOT,"outputs/body-study")
os.makedirs(OUT,exist_ok=True)
bpy.ops.wm.open_mainfile(filepath=os.path.join(ROOT,"outputs/e1/eye-form-v1.blend"))
lid=bpy.data.objects["Turret lid — form study"].data.copy()
bpy.ops.object.select_all(action="SELECT")
bpy.ops.object.delete(use_global=False)
def mat(n,c,r=.7):
 m=bpy.data.materials.new(n);m.diffuse_color=(*c,1);m.use_nodes=True
 p=m.node_tree.nodes.get("Principled BSDF")
 p.inputs["Base Color"].default_value=(*c,1);p.inputs["Roughness"].default_value=r
 return m
clay=mat("Neutral anatomy clay",(.29,.34,.31))
dark=mat("Mouth seam and pupil",(.012,.018,.016))
iris=mat("Iris placeholder",(.23,.27,.17),.4)
pink=mat("Approved reddish pink tongue",(.55,.105,.16),.36)
wood=mat("Branch proxy",(.12,.085,.055))
floor=mat("Backdrop",(.055,.075,.07))
def smooth(o,m):
 o.data.materials.clear();o.data.materials.append(m)
 for p in o.data.polygons:p.use_smooth=True
 return o
def ell(n,p,s,m=clay):
 bpy.ops.mesh.primitive_uv_sphere_add(segments=40,ring_count=24,location=p)
 o=bpy.context.object;o.name=n;o.scale=s;return smooth(o,m)
def tube(n,pts,rads,m=clay,sides=16):
 vs=[];fs=[]
 for i,p in enumerate(pts):
  p=Vector(p);t=Vector(pts[min(i+1,len(pts)-1)])-Vector(pts[max(0,i-1)])
  t.normalize();helper=Vector((0,1,0))
  if abs(t.dot(helper))>.95:helper=Vector((0,0,1))
  a=t.cross(helper).normalized();b=t.cross(a).normalized()
  for j in range(sides):
   q=p+rads[i]*(math.cos(j*2*math.pi/sides)*a+math.sin(j*2*math.pi/sides)*b);vs.append(tuple(q))
 for i in range(len(pts)-1):
  for j in range(sides):
   a=i*sides+j;b=i*sides+(j+1)%sides;fs.append((a,b,b+sides,a+sides))
 fs.extend([tuple(reversed(range(sides))),tuple((len(pts)-1)*sides+j for j in range(sides))])
 mesh=bpy.data.meshes.new(n);mesh.from_pydata(vs,[],fs);mesh.update()
 o=bpy.data.objects.new(n,mesh);bpy.context.collection.objects.link(o);return smooth(o,m)
def curved(n,pts,rads,m=clay):
 # Catmull-Rom centerline; monotonic linear radius. No armature implied.
 ps=[];rs=[]
 for i in range(len(pts)-1):
  a,b,c,d=[Vector(pts[k]) for k in (max(i-1,0),i,i+1,min(i+2,len(pts)-1))]
  for j in range(8):
   t=j/8;ps.append(tuple(.5*(2*b+(-a+c)*t+(2*a-5*b+4*c-d)*t*t+(-a+3*b-3*c+d)*t*t*t)))
   rs.append(rads[i]*(1-t)+rads[i+1]*t)
 ps.append(pts[-1]);rs.append(rads[-1]);return tube(n,ps,rs,m)
# Laterally compressed body; scale is arbitrary and openly provisional.
ell("Torso | proportion hypothesis",(0,0,2.05),(1.45,.44,.9))
ell("Neck | temporary junction",(-1.12,0,2.15),(.55,.32,.43))
# Ring-built head, lower casque than a veiled chameleon.
vs=[];fs=[];N=48
for x,wy,zc,h in [(-2.65,.10,2.03,.11),(-2.48,.26,2.12,.24),(-2.1,.43,2.26,.46),(-1.65,.43,2.36,.58),(-1.3,.29,2.29,.38)]:
 for j in range(N):
  a=2*math.pi*j/N;vs.append((x,wy*math.cos(a),zc+h*math.sin(a)))
for i in range(4):
 for j in range(N):
  a=i*N+j;b=i*N+(j+1)%N;fs.append((a,b,b+N,a+N))
fs.extend([tuple(reversed(range(N))),tuple(4*N+j for j in range(N))])
mesh=bpy.data.meshes.new("Head profile mesh");mesh.from_pydata(vs,[],fs);mesh.update()
o=bpy.data.objects.new("Head | unmeasured panther proportion study",mesh);bpy.context.collection.objects.link(o);smooth(o,clay)
sub=o.modifiers.new("Smooth draft profile","SUBSURF");sub.levels=2
ell("Lower jaw",(-2.04,0,1.94),(.64,.30,.15))
for s in [-1,1]:
 curved("Mouth seam", [(-2.59,s*.09,2.02),(-2.35,s*.27,1.99),(-1.97,s*.36,1.98),(-1.58,s*.29,2.05)],[.012]*4,dark)
 # Local E1 Z axis points away from the face. Actual base geometry reused.
 direction=Vector((-.23,s, .10)).normalized();q=Vector((0,0,1)).rotation_difference(direction)
 base=Vector((-1.91,s*.34,2.40));scale=.29
 eye=bpy.data.objects.new(("Near" if s<0 else "Far")+" eye | reused E1 lid",lid.copy());bpy.context.collection.objects.link(eye)
 eye.location=base;eye.rotation_mode="QUATERNION";eye.rotation_quaternion=q;eye.scale=(scale,)*3;smooth(eye,clay)
 for name,rad,depth,m in [("Iris",.185,1.253,iris),("Pupil",.087,1.260,dark)]:
  ob=ell(name,base+q@Vector((0,0,depth*scale)),(rad*scale,rad*scale,rad*.025*scale),m)
  ob.rotation_mode="QUATERNION";ob.rotation_quaternion=q
 ell("Nostril",(-2.43,s*.225,2.19),(.025,.015,.018),dark)
# Short visible tongue is a geometry/color target, not a drinking simulation.
curved("Tongue | short extension target",[(-2.30,0,2.015),(-2.58,0,2.01),(-2.78,0,1.99)],[.065,.075,.045],pink)
ell("Tongue rounded tip",(-2.78,0,1.99),(.055,.046,.043),pink)
# Dorsal crest proxies.
for i in range(19):
 x=-1.1+i*.125;z=2.05+.9*math.sqrt(max(0,1-(x/1.45)**2))
 bpy.ops.mesh.primitive_cone_add(vertices=12,radius1=.052,radius2=.008,depth=.12,location=(x,0,z+.025))
 smooth(bpy.context.object,clay);bpy.context.object.name="Dorsal crest proxy"
# Four limbs. Feet are opposing grip masses, not verified toe anatomy.
for s in [-1,1]:
 for front in [True,False]:
  tag=("Front" if front else "Hind")+("_near" if s<0 else "_far")
  if front:pts=[(-.95,s*.30,2.12),(-.62,s*.64,1.63),(-1.13,s*.48,1.12),(-1.30,s*.12,.98)]
  else:pts=[(.91,s*.30,1.91),(.49,s*.66,1.45),(.97,s*.43,1.12),(1.16,s*.12,.98)]
  curved(tag+" limb",pts,[.18,.15,.10,.08])
  x=pts[-1][0]
  for side in [-1,1]:
   curved(tag+" opposing grip "+str(side),[(x,0,1.02),(x,side*.17,.96),(x,side*.22,.78),(x,side*.14,.69)],[.08,.075,.06,.035])
tailpts=[(1.12,0,2.0),(1.57,0,1.91),(1.88,0,1.64)]
tailrad=[.23,.19,.16]
# Tangentially adjoining spiral; static coil, not a deformation/length proof.
for i in range(81):
 t=i/80;ang=.15+t*math.pi*2.05;r=.72*(1-t)+.16*t
 tailpts.append((2.02+r*math.sin(ang),0,.78+r*math.cos(ang)))
 tailrad.append(.16*(1-t)+.018*t)
curved("Tail | static tapered coil hypothesis",tailpts,tailrad)
curved("Branch support proxy",[(-3.3,0,.78),(0,0,.78),(3.2,0,.78)],[.20,.20,.18],wood)
bpy.ops.mesh.primitive_plane_add(size=200,location=(0,0,-.1));bpy.context.object.name="Studio ground";bpy.context.object.data.materials.append(floor)
def aim(o,p):o.rotation_euler=(Vector(p)-o.location).to_track_quat("-Z","Y").to_euler()
for n,pos,power,size in [("Key",(-4,-4,7),1000,5),("Fill",(1,4,5),650,4),("Rim",(4,1,6),900,3)]:
 bpy.ops.object.light_add(type="AREA",location=pos);o=bpy.context.object;o.name=n;o.data.energy=power;o.data.shape="DISK";o.data.size=size;aim(o,(0,0,1.6))
bpy.ops.object.camera_add(location=(-2.4,-10,3.5));cam=bpy.context.object;cam.name="Body overview";cam.data.type="ORTHO";cam.data.ortho_scale=7.8;aim(cam,(-.05,0,1.55))
s=bpy.context.scene;s.camera=cam;s.render.engine="CYCLES";s.cycles.device="CPU";s.cycles.samples=32;s.cycles.use_denoising=True
s.world.color=(.22,.22,.22);s.render.resolution_x=1200;s.render.resolution_y=760;s.render.resolution_percentage=100
s.view_settings.view_transform="AgX";s.render.image_settings.file_format="PNG"
s["status"]="B1 BLOCKOUT: not anatomically validated; no rig, gait, skin or water interaction."
s["approved_story"]="8 footfalls > 0.5s scan > 4 footfalls > scan > tongue contact > eye notice > head rise > global color."
txt=bpy.data.texts.new("START HERE")
txt.write("B1 whole body PROPORTION STUDY. E1 lid mesh reused. All measurements are design hypotheses.\nFour limbs and static coiled tail. Grip masses are not final toes. Pink tongue is a visibility study.\nNO animation/rig/skin/water. Next: silhouette acceptance, panther gait evidence, then rig.\nUse middle mouse to orbit; numpad 1/3 for orthogonal views. Camera is only a preview.\n")
for screen in bpy.data.screens:
 for area in screen.areas:
  if area.type=="VIEW_3D":
   area.spaces.active.region_3d.view_perspective="CAMERA"
   area.spaces.active.clip_end=1000
bpy.ops.object.select_all(action="DESELECT")
blend=os.path.join(OUT,"chameleon-study.blend")
bpy.ops.wm.save_as_mainfile(filepath=blend)
s.render.filepath=os.path.join(OUT,"body-overview.png");bpy.ops.render.render(write_still=True)
# Reopen the saved source, verifying delivery rather than only current memory.
bpy.ops.wm.open_mainfile(filepath=blend)
names=[o.name for o in bpy.context.scene.objects]
assert all(any(tag+" limb"==n for n in names) for tag in ["Front_near","Front_far","Hind_near","Hind_far"])
assert len([n for n in names if "reused E1 lid" in n])==2
report={"status":"blockout only; visual review required","blender":bpy.app.version_string,
 "source":"outputs/e1/eye-form-v1.blend","limbs":4,"reused_eyes":2,"reopen":"passed",
 "implemented":["static whole-body proportions","E1 lids in head context","static tapered coil","short pink tongue"],
 "not_implemented":["gait","rig","validated toe anatomy","tail animation","drinking","ripples","photoreal skin"],
 "blend_sha256":hashlib.sha256(open(blend,"rb").read()).hexdigest()}
with open(os.path.join(OUT,"manifest.json"),"w") as f:json.dump(report,f,indent=2)
