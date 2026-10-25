"""Re-extract source frames. Run in Blender 4.5.14; see ../README.md."""
import bpy, sys, hashlib, json
from pathlib import Path
args=sys.argv[sys.argv.index('--')+1:] if '--' in sys.argv else []
if len(args)!=2: raise SystemExit('Expected: -- source.ogv new-output-directory')
src=Path(args[0]).resolve();out=Path(args[1]).resolve()
expected='80f3d33c4d1fec3e45ac4130eb660a18803840c14187a5af5775ec41233a44da'
if hashlib.sha256(src.read_bytes()).hexdigest()!=expected:raise SystemExit('Source identity mismatch; no output written.')
if out.exists() and (not out.is_dir() or any(out.iterdir())):raise SystemExit('Output must be absent or empty; refusing overwrite.')
s=bpy.context.scene;s.sequence_editor_clear();st=s.sequence_editor_create().strips.new_movie('MatthiasKabel CC BY-SA 3.0',str(src),channel=1,frame_start=1)
if st.frame_duration!=360 or abs(st.fps-24)>0.001:raise SystemExit('Unexpected decoded frame count or FPS.')
out.mkdir(parents=True,exist_ok=True)
s.render.resolution_x=1920;s.render.resolution_y=1080;s.render.resolution_percentage=100
s.render.image_settings.file_format='JPEG';s.render.image_settings.quality=95;s.render.fps=24;s.render.fps_base=1
s.render.use_sequencer=True;s.view_settings.view_transform='Standard';s.view_settings.look='None'
for i in range(360):
 s.frame_set(i+1);s.render.filepath=str(out/f'{i:03}.jpg');bpy.ops.render.render(write_still=True)
(out/'decode.json').write_text(json.dumps({'source_sha256':expected,'blender':bpy.app.version_string,'frames':360,'fps':24,'time_basis':'frame / nominal fps; PTS not independently inspected','image_size':[1920,1080],'license':'CC BY-SA 3.0','author':'MatthiasKabel'},indent=2))
