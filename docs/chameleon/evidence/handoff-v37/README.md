# V37 handoff evidence — 28 October 2026

Start with [PROJECT_STATUS.md](../../../../PROJECT_STATUS.md). This archive updates the current record without replacing historical research or rebuilding the model.

- `model-manifest.json`: verified local paths, sizes, SHA-256, actual GLB object/joint names and clip names. **Binary files are not included.**
- `commit-history.json`: branch-specific history before this handoff; not the unrelated main-branch history.
- `eye_patch.py`: exact V37 authoring runner. Reads the original V36 checkpoint; uses an absolute Mac workspace path and overwrites its V37 target if rerun. Adapt source/target explicitly before use on another machine. Do not run it on an already patched V37.
- `animation-functions.py`: only eye functions; requires existing `rig` and `fps` globals. Not a standalone program.
- `v37-verification.json`: numerical/export checks; no V37 visual acceptance or comprehensive reimport/preservation comparison.
- `v36-preservation.json`, `v36-verification.json`: previous delivery's protection and export tests. These are evidence for V36, not automatic proof for V37.
- `v30-notes.md`, `v31-notes.md`, `v35-notes.md`, `v36-notes.md`: historical local delivery notes. Paths inside them refer to the original workspace.

The previous video archive remains at [video-review-v1](../video-review-v1/README.md), with its own attribution and license. No media is copied or relicensed here. Model production sources outside the eye scope remain local and have not all been republished in this handoff.

The immediate next task is same-camera V36/V37 eye playback validation. The website has no verified Next.js, Tailwind or React Three Fiber implementation and no latest model under `public/`. Large model transfer and production integration remain separate open work.

Current scope: handoff only. Live independent pointer/target tracking, web integration and performance optimization are deferred by the user. Local transfer bundle: `outputs/handoff-v37/chameleon-handoff-v37.zip`; not hosted on GitHub.
