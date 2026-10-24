"""B2: one static body revision from the preserved B1 checkpoint. Not a rig.
User ratios are design targets. Run from workspace root with Blender.
"""
import bpy, math, os, json, hashlib
from mathutils import Vector
from mathutils.bvhtree import BVHTree
R=os.getcwd(); OUT=R+'/outputs/body-study'
bpy.ops.wm.open_mainfile(filepath=R+'/work/body-study/proportions-before/chameleon-study.blend')
def activate(o):
 bpy.ops.object.select_all(action='DESELECT');o.select_set(True);bpy.context.view_layer.objects.active=o
def meshobj(name,vs,fs,mat):
 m=bpy.data.meshes.new(name);m.from_pydata(vs,[],fs);m.update();o=bpy.data.objects.new(name,m);bpy.context.collection.objects.link(o)
 m.materials.append(mat)
 for p in m.polygons:p.use_smooth=True
 return o
def rings(name,rows,mat,N=64):
 vs=[];fs=[]
 for x,w,lo,hi in rows:
  for j in range(N):
   a=2*math.pi*j/N;s=math.sin(a)
   vs.append((x,w*math.cos(a),(lo+hi)/2+(hi-lo)/2*s))
 for i in range(len(rows)-1):
  for j in range(N):
   a=i*N+j;b=i*N+(j+1)%N;fs.append((a,b,b+N,a+N))
 fs.extend([tuple(reversed(range(N))),tuple((len(rows)-1)*N+j for j in range(N))])
 return meshobj(name,vs,fs,mat)
clay=bpy.data.materials['Neutral anatomy clay']
torso=bpy.data.objects['Torso | proportion hypothesis']
old_dims=list(torso.dimensions)
bpy.data.objects.remove(torso,do_unlink=True)
# 3.19 long, 1.62 high vs 2.90 x 1.80. Almost level ventral contour.
body=rings('Torso | flatter ventral contour',[
 (-1.595,.10,1.64,2.32),(-1.40,.28,1.38,2.49),(-1.10,.39,1.22,2.66),
 (-.70,.43,1.20,2.79),(-.20,.44,1.20,2.82),(.35,.43,1.21,2.77),
 (.85,.36,1.24,2.63),(1.25,.27,1.35,2.37),(1.595,.15,1.58,2.12)],clay)
new_dims=[max(v.co[k] for v in body.data.vertices)-min(v.co[k] for v in body.data.vertices) for k in range(3)]
# Shift shoulder/head forward and hip backward, without elongating the face.
for o in list(bpy.data.objects):
 if o.type!='MESH':continue
 n=o.name
 if n.startswith(('Head |','Lower jaw','Mouth seam','Near eye','Far eye','Iris','Pupil','Nostril','Neck |')):o.location.x-=.12
 if n.startswith('Front'):o.location.x-=.12
 if n.startswith('Hind'):o.location.x+=.12
 if n.startswith('Tongue'):o.hide_render=True;o.hide_set(True)
 if n.startswith('Mouth seam'):
  # Thin closed lip line, not an open dark slit.
  for i in range(0,len(o.data.vertices),16):
   ring=o.data.vertices[i:i+16];c=sum((v.co for v in ring),Vector())/len(ring)
   for v in ring:v.co=c+(v.co-c)*.45
jaw=bpy.data.objects['Lower jaw'];jaw.location.z+=.055
# Rebuild dorsal crest positions on the lowered back.
for o in list(bpy.data.objects):
 if o.name.startswith('Dorsal crest'):bpy.data.objects.remove(o,do_unlink=True)
for i in range(21):
 x=-1.27+i*.125
 rows=[(-1.4,2.49),(-1.1,2.66),(-.7,2.79),(-.2,2.82),(.35,2.77),(.85,2.63),(1.25,2.37)]
 z=2.4
 for (a,za),(b,zb) in zip(rows,rows[1:]):
  if a<=x<=b:z=za+(zb-za)*(x-a)/(b-a);break
 bpy.ops.mesh.primitive_cone_add(vertices=12,radius1=.045,radius2=.006,depth=.085,location=(x,0,z+.015))
 o=bpy.context.object;o.name='Dorsal crest';o.data.materials.append(clay)
# Measure original centerline (ring averages), including prior lateral clearance fix.
old=bpy.data.objects['Tail | static tapered coil hypothesis'];verts=old.data.vertices
centers=[sum((v.co for v in verts[i:i+16]),Vector())/16 for i in range(0,len(verts),16)]
oldlength=sum((b-a).length for a,b in zip(centers,centers[1:]))
bpy.data.objects.remove(old,do_unlink=True)
root=Vector((1.30,0,1.91))
pts=[root,Vector((1.67,-.25,1.82)),Vector((2.08,-.65,1.64))]
for i in range(181):
 t=i/180;a=.06+t*math.pi*3.25;r=.69*(1-t)+.045*t
 pts.append(Vector((2.12+r*math.sin(a),-.72,.95+r*math.cos(a))))
length=sum((b-a).length for a,b in zip(pts,pts[1:]))
factor=oldlength*1.30/length
pts=[root+(p-root)*factor for p in pts]
newlength=sum((b-a).length for a,b in zip(pts,pts[1:]))
vs=[];fs=[];N=32;distance=0
for i,p in enumerate(pts):
 if i:distance+=(p-pts[i-1]).length
 u=distance/newlength;rad=.29*(1-u)**1.35+.009*u
 t=(pts[min(i+1,len(pts)-1)]-pts[max(0,i-1)]).normalized()
 a=t.cross(Vector((0,1,0))).normalized();b=t.cross(a).normalized()
 for j in range(N):vs.append(tuple(p+rad*(math.cos(j*2*math.pi/N)*a+math.sin(j*2*math.pi/N)*b)))
for i in range(len(pts)-1):
 for j in range(N):
  a=i*N+j;b=i*N+(j+1)%N;fs.append((a,b,b+N,a+N))
fs.extend([tuple(reversed(range(N))),tuple((len(pts)-1)*N+j for j in range(N))])
tail=meshobj('Tail | longer tapered coil',vs,fs,clay)
def bvh(o):return BVHTree.FromPolygons([o.matrix_world@v.co for v in o.data.vertices],[list(p.vertices) for p in o.data.polygons])
bpy.context.view_layer.update()
overlap=len(bvh(tail).overlap(bvh(bpy.data.objects['Branch support proxy'])))
assert overlap==0, 'Tail/branch intersection'
# Merge only axial skin volumes for a continuous neck/hip surface. Preserve eyes/limbs.
axial=[body,tail,bpy.data.objects['Head | unmeasured panther proportion study'],bpy.data.objects['Neck | temporary junction'],jaw]
for o in axial:
 activate(o)
 bpy.ops.object.convert(target='MESH')
bpy.ops.object.select_all(action='DESELECT')
for o in axial:o.select_set(True)
bpy.context.view_layer.objects.active=body;bpy.ops.object.join();body.name='Body skin | continuous axial surface'
rem=body.modifiers.new('Join body neck and tail volumes','REMESH');rem.mode='VOXEL';rem.voxel_size=.018;rem.use_smooth_shade=True
bpy.ops.object.modifier_apply(modifier=rem.name)
sm=body.modifiers.new('Soften joins','SMOOTH');sm.factor=.7;sm.iterations=5;bpy.ops.object.modifier_apply(modifier=sm.name)
for p in body.data.polygons:p.use_smooth=True
# Lightweight skin preview: soft cellular bump, restrained olive palette.
# NOT the final D5 geometric scale transfer, and not animation-tested coordinates.
def skin(name,frequency):
 m=bpy.data.materials.new(name);m.use_nodes=True;n=m.node_tree.nodes;l=m.node_tree.links;p=n.get('Principled BSDF');p.inputs['Roughness'].default_value=.62
 co=n.new('ShaderNodeTexCoord');v=n.new('ShaderNodeTexVoronoi');v.feature='DISTANCE_TO_EDGE';v.inputs['Scale'].default_value=frequency;l.new(co.outputs['Object'],v.inputs['Vector'])
 ramp=n.new('ShaderNodeValToRGB');ramp.color_ramp.interpolation='EASE'
 ramp.color_ramp.elements[0].position=.015;ramp.color_ramp.elements[0].color=(0,0,0,1)
 ramp.color_ramp.elements[1].position=.18;ramp.color_ramp.elements[1].color=(1,1,1,1)
 l.new(v.outputs['Distance'],ramp.inputs['Fac'])
 bump=n.new('ShaderNodeBump');bump.inputs['Strength'].default_value=.38;bump.inputs['Distance'].default_value=.012;l.new(ramp.outputs['Color'],bump.inputs['Height']);l.new(bump.outputs['Normal'],p.inputs['Normal'])
 noise=n.new('ShaderNodeTexNoise');noise.inputs['Scale'].default_value=2.4;noise.inputs['Detail'].default_value=2;l.new(co.outputs['Object'],noise.inputs['Vector'])
 color=n.new('ShaderNodeValToRGB');color.color_ramp.elements[0].color=(.075,.14,.045,1);color.color_ramp.elements[1].color=(.28,.38,.12,1)
 l.new(noise.outputs['Fac'],color.inputs['Fac']);l.new(color.outputs['Color'],p.inputs['Base Color'])
 return m
bodymat=skin('B2 olive scale preview',33);eyemat=skin('B2 finer eye scale preview',95)
for o in bpy.data.objects:
 if o.type!='MESH' or o.hide_render:continue
 if any(m and m.name=='Neutral anatomy clay' for m in o.data.materials):
  o.data.materials.clear();o.data.materials.append(eyemat if 'eye |' in o.name else bodymat)
bpy.context.view_layer.update()
post_overlap=len(bvh(body).overlap(bvh(bpy.data.objects['Branch support proxy'])))
assert post_overlap==0,'Axial body/branch collision after smoothing'
s=bpy.context.scene;s.cycles.samples=48;s.render.resolution_x=1400;s.render.resolution_y=850
# Maintain overview, slightly wider for the longer tail.
s.camera.data.ortho_scale=8.1
s['status']='B2 proportion and procedural skin preview; no rig/animation, toes still proxies.'
txt=bpy.data.texts.get('START HERE');txt.clear();txt.write('B2 — 2026-10-23\nLonger/lower body; flatter abdomen; tail centerline +30%; hidden tongue, closed mouth.\nOne evolving scene. Skin is procedural BUMP PREVIEW, not final D5 scale geometry.\nNo gait or validated anatomy. User percentages are design targets.\n')
report={'date':'2026-10-23','source_checkpoint':'work/body-study/proportions-before/chameleon-study.blend','old_torso_dimensions':old_dims,'target_torso_dimensions_before_join':new_dims,'torso_length_ratio':new_dims[0]/old_dims[0],'torso_height_ratio':new_dims[2]/old_dims[2],'old_tail_centerline':oldlength,'new_tail_centerline_before_join':newlength,'tail_length_ratio':newlength/oldlength,'tail_root_radius':.29,'tail_tip_radius':.009,'body_branch_surface_intersections':post_overlap,'units':'design units, not biological measurements','skin':'procedural bump preview, not final geometry','limits':['post-remesh length not identical to control curve','foot proxies unchanged','no rig or animation','no validated anatomical ratios'],'sources':['https://ask.ifas.ufl.edu/publication/UW501','https://www.zoo-frankfurt.de/en/tiere-von-a-z-detailansicht/animal/tiere-von-a-z-detailansicht/chamaeleon-panther','https://www.zootier-lexikon.org/kriechtiere-reptilia/echsen/chamaeleons/madagaskarchamaeleons-furcifer-pardalis']}
assert abs(report['torso_length_ratio']-1.1)<.001 and abs(report['torso_height_ratio']-.9)<.001
assert abs(report['tail_length_ratio']-1.3)<.001
bpy.context.preferences.filepaths.save_version=0
path=OUT+'/chameleon-study.blend';bpy.ops.wm.save_as_mainfile(filepath=path)
s.render.filepath=OUT+'/body-overview.png';bpy.ops.render.render(write_still=True)
bpy.ops.wm.open_mainfile(filepath=path)
assert all(o.hide_render for o in bpy.data.objects if o.name.startswith('Tongue'))
report['reopen']='passed';report['blend_sha256']=hashlib.sha256(open(path,'rb').read()).hexdigest()
with open(OUT+'/manifest.json','w') as f:json.dump(report,f,indent=2)
print(json.dumps(report))
