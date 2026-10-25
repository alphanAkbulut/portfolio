import bpy,numpy as np,json
from pathlib import Path
bpy.ops.wm.open_mainfile(filepath=str(Path.cwd()/'outputs/eye-root-v19/chameleon-eye-root-v19.blend'))
o=bpy.data.objects['Near eye | head root skin transition v19'];ks=o.data.shape_keys.key_blocks;b=np.empty(len(o.data.vertices)*3,dtype=np.float32);ks[0].data.foreach_get('co',b);a=b.reshape(33,128,3);front=int(np.argmin(a[0,:,0]));back=int(np.argmax(a[0,:,0]));result={}
for f in [1,15,29,43,57]:
 ks[f'Gaze {f:03}'].data.foreach_get('co',b);a=b.reshape(33,128,3);result[f]={n:{'j':j,'outer':a[0,j].tolist(),'inner':a[-1,j].tolist(),'arc':float(np.linalg.norm(np.diff(a[:,j],axis=0),axis=1).sum())}for n,j in [('nose',front),('tail',back)]}
print('SECTIONS',json.dumps(result))
