import bpy, math, random, os, json, time, hashlib
from mathutils import Vector

ROOT = os.path.abspath(os.path.join(os.path.dirname(__file__), "../../outputs/d5-1"))
os.makedirs(ROOT, exist_ok=True)
random.seed(4105)
bpy.ops.object.select_all(action='SELECT')
bpy.ops.object.delete(use_global=False)

def linear(h):
    v = [int(h[i:i+2], 16)/255 for i in (0,2,4)]
    return tuple(c/12.92 if c <= .04045 else ((c+.055)/1.055)**2.4 for c in v)

def material(name, color, rough=.55):
    m = bpy.data.materials.new(name); m.use_nodes = True
    p = m.node_tree.nodes.get("Principled BSDF")
    p.inputs["Base Color"].default_value = (*color, 1)
    p.inputs["Roughness"].default_value = rough
    p.inputs["Metallic"].default_value = 0
    n=m.node_tree.nodes; l=m.node_tree.links
    coords=n.new("ShaderNodeTexCoord")
    tex=n.new("ShaderNodeTexNoise"); tex.inputs["Scale"].default_value=16000
    l.new(coords.outputs["Object"],tex.inputs["Vector"])
    tex.inputs["Detail"].default_value=2
    bump=n.new("ShaderNodeBump"); bump.inputs["Strength"].default_value=.3
    bump.inputs["Distance"].default_value=.000025
    l.new(tex.outputs["Fac"],bump.inputs["Height"]); l.new(bump.outputs["Normal"],p.inputs["Normal"])
    pigment=n.new("ShaderNodeTexNoise");pigment.inputs["Scale"].default_value=4300
    pigment.inputs["Detail"].default_value=3
    l.new(coords.outputs["Object"],pigment.inputs["Vector"])
    ramp=n.new("ShaderNodeValToRGB")
    ramp.color_ramp.elements[0].position=.15;ramp.color_ramp.elements[0].color=(*(c*.64 for c in color),1)
    ramp.color_ramp.elements[1].position=.85;ramp.color_ramp.elements[1].color=(*(c*1.10 for c in color),1)
    l.new(pigment.outputs["Fac"],ramp.inputs["Fac"]);l.new(ramp.outputs["Color"],p.inputs["Base Color"])
    return m

# Units are metres. The patch has a shallow compound curvature.
def surface(x,y):
    return -.0038*((x/.025)**2+.38*(y/.02)**2)

palettes=[("A",["4B7950","94A66A"]),("clay",["85857D","85857D"])]
materials={}
for state, colors in palettes:
    a,b=map(linear,colors); arr=[]
    for band in range(8):
        for tone in range(5):
            t=band/7
            c=tuple((a[k]*(1-t)+b[k]*t)*(.82+tone*.09) for k in range(3))
            arr.append(material(f"{state}_{band}_{tone}",c,.50+tone*.025))
    materials[state]=arr

# Jittered seeds and clipped Voronoi polygons, no external geometry dependency.
seeds=[]
for row in range(-18,19):
    for col in range(-23,24):
        x=(col+.5*(row%2)+random.uniform(-.24,.24))*.001
        y=(row+random.uniform(-.23,.23))*.0009
        # Smooth, monotonic compression creates coherent small/large scale regions.
        x=x+.0024*math.sin(x*210)
        y=y+.0015*math.sin(y*240+.6)
        seeds.append((x,y))

def clip(poly, nx,ny,d):
    out=[]
    for a,b in zip(poly,poly[1:]+poly[:1]):
        va=a[0]*nx+a[1]*ny-d; vb=b[0]*nx+b[1]*ny-d
        if va<=0: out.append(a)
        if (va<=0)!=(vb<=0):
            t=va/(va-vb); out.append((a[0]+t*(b[0]-a[0]),a[1]+t*(b[1]-a[1])))
    return out

verts=[]; faces=[]; face_mats=[]
for x,y in seeds:
    if abs(x)>.0205 or abs(y)>.0155: continue
    poly=[(x-.002,y-.002),(x+.002,y-.002),(x+.002,y+.002),(x-.002,y+.002)]
    for qx,qy in seeds:
        dx=qx-x;dy=qy-y
        if 0<dx*dx+dy*dy<.000009:
            poly=clip(poly,dx,dy,(qx*qx+qy*qy-x*x-y*y)/2)
    if len(poly)<3: continue
    # Round cell corners while retaining closely packed, irregular boundaries.
    for _ in range(2):
        rounded=[]
        for a,b in zip(poly,poly[1:]+poly[:1]):
            rounded.extend([(.8*a[0]+.2*b[0],.8*a[1]+.2*b[1]),
                            (.2*a[0]+.8*b[0],.2*a[1]+.8*b[1])])
        poly=rounded
    x=sum(p[0] for p in poly)/len(poly);y=sum(p[1] for p in poly)/len(poly)
    area=abs(sum(a[0]*b[1]-b[0]*a[1] for a,b in zip(poly,poly[1:]+poly[:1])))/2
    height=math.sqrt(area/math.pi)*random.uniform(.48,.65)
    start=len(verts); count=len(poly)
    profile=[(.995,0),(.97,.16),(.90,.43),(.76,.68),(.55,.87),(.29,.97),(.08,1)]
    for radius,z_fraction in profile:
        z=height*z_fraction
        for px,py in poly:
            xx=x+(px-x)*radius; yy=y+(py-y)*radius
            verts.append((xx,yy,surface(xx,yy)+z))
    wave=math.exp(-((y-.0025*math.sin(x*170)-.001)/.0037)**2)
    band=max(0,min(7,round(wave*6+random.uniform(-.7,.7))))
    idx=band*5+random.randrange(5)
    for ring in range(len(profile)-1):
        for j in range(count):
            faces.append((start+ring*count+j,start+ring*count+(j+1)%count,start+(ring+1)*count+(j+1)%count,start+(ring+1)*count+j)); face_mats.append(idx)
    faces.append(tuple(start+(len(profile)-1)*count+j for j in range(count)));face_mats.append(idx)

mesh=bpy.data.meshes.new("Irregular shallow scale crowns");mesh.from_pydata(verts,[],faces);mesh.update()
obj=bpy.data.objects.new("Skin patch — independent geometry study",mesh);bpy.context.collection.objects.link(obj)
for m in materials["A"]: mesh.materials.append(m)
for p,idx in zip(mesh.polygons,face_mats): p.material_index=idx;p.use_smooth=True

# Continuous underlying skin keeps narrow interscale gaps from becoming black.
vs=[];fs=[]
for j in range(61):
    for i in range(81):
        x=(i/80-.5)*.043;y=(j/60-.5)*.033
        vs.append((x,y,surface(x,y)-.000018))
for j in range(60):
    for i in range(80):
        a=j*81+i;fs.append((a,a+1,a+82,a+81))
base_mesh=bpy.data.meshes.new("Continuous dermal base");base_mesh.from_pydata(vs,[],fs);base_mesh.update()
base=bpy.data.objects.new("Underlying skin",base_mesh);bpy.context.collection.objects.link(base)
base_mesh.materials.append(material("Base",linear("455C38"),.65))
base_nodes=base_mesh.materials[0].node_tree
for link in list(base_nodes.nodes.get("Principled BSDF").inputs["Base Color"].links):
    base_nodes.links.remove(link)
for p in base_mesh.polygons:p.use_smooth=True

def aim(o, target): o.rotation_euler=(Vector(target)-o.location).to_track_quat('-Z','Y').to_euler()
bpy.ops.object.camera_add(location=(.008,-.026,.053))
camera=bpy.context.object;aim(camera,(0,0,-.001));camera.data.type='ORTHO';camera.data.ortho_scale=.027
camera.data.clip_start=.001
bpy.context.scene.camera=camera
for name,loc,power,size in [("Soft key",(-.025,-.012,.045),.065,.035),("Fill",(.025,.02,.035),.025,.04)]:
    bpy.ops.object.light_add(type='AREA',location=loc);o=bpy.context.object;o.name=name;o.data.energy=power;o.data.shape='DISK';o.data.size=size;aim(o,(0,0,0))
scene=bpy.context.scene
scene.world.color=(.22,.22,.22)
scene.render.engine='CYCLES';scene.cycles.device='CPU';scene.cycles.samples=32;scene.cycles.use_denoising=True
scene.render.resolution_x=768;scene.render.resolution_y=768;scene.render.resolution_percentage=100
scene.render.image_settings.file_format='PNG'
scene.view_settings.view_transform='AgX';scene.view_settings.look='AgX - Medium High Contrast';scene.view_settings.exposure=0
scene.render.film_transparent=False
report={"experiment":"D5.1 rounded domes and regional density","seed":4105,"blender":bpy.app.version_string,"engine":"Cycles CPU","samples":32,"denoise":True,"view":"AgX Medium High Contrast","exposure":0,"dimensions":[768,768],"vertices":len(verts),"scale_faces":len(faces),"gpu_performance":"unknown","peak_memory":"unknown","renders":[]}
for state,_ in palettes:
    for i,m in enumerate(materials[state]):mesh.materials[i]=m
    base_mat=base_mesh.materials[0].node_tree.nodes.get("Principled BSDF")
    base_mat.inputs["Base Color"].default_value=(*linear("85857D" if state=="clay" else ("455C38" if state=="A" else "6B7138")),1)
    scene.render.filepath=os.path.join(ROOT,f"skin-{state}.png")
    t=time.time();bpy.ops.render.render(write_still=True)
    with open(scene.render.filepath,"rb") as f:sha=hashlib.sha256(f.read()).hexdigest()
    report["renders"].append({"state":state,"seconds":round(time.time()-t,2),"sha256":sha})
for i,m in enumerate(materials["A"]):mesh.materials[i]=m
base_mesh.materials[0].node_tree.nodes.get("Principled BSDF").inputs["Base Color"].default_value=(*linear("455C38"),1)
bpy.ops.wm.save_as_mainfile(filepath=os.path.join(ROOT,"skin-patch-v2.blend"))
with open(os.path.join(ROOT,"render-manifest.json"),"w") as f:json.dump(report,f,indent=2)
