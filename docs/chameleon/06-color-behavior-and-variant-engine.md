# V4 color behavior engine — research, six variants, visual areas, frame cues
Date 2026-10-20. STATUS: RESEARCH-INFORMED DESIGN PROPOSAL; NOT implemented; time/area/color ranges are **art direction parameters**, not measured biological constants. Read with 01 cinematic screenplay and 02 palette docs.

## Grounding: DO NOT claim touching colors changes skin
Research: Teyssier et al., *Nature Communications* (2015), https://www.nature.com/articles/ncomms7368: in adult male **Furcifer pardalis** (panther chameleon), tunable superficial iridophore guanine nanocrystal lattice shifts reflected hue; reported typical green-to-yellow/orange skin and blue bars becoming paler, with other red-pigment regions retaining hue but changing brightness. Its observed return and transformation takes **up to minutes**, not an established universal fixed 0.8s skin-wave. Ligon & McGraw, *Biology Letters* (2013) https://pmc.ncbi.nlm.nih.gov/articles/PMC3871380/: spatially distinct head and body stripes participate in social communication, speed/brightness affect signals. 2025 study of **Chamaeleo dilepis** background responses https://pmc.ncbi.nlm.nih.gov/articles/PMC12326199/: some matching to yellow and black brightness but not all patterns. Avoid extrapolating between species. Other context: social signaling, temperature; stress/dominance response can look threatening. Camera/social stimulus itself does not physiologically guarantee a transformation. The cinematic recognition-triggered transformation is an artistic metaphor.
**Choose ONE anatomically consistent species, ideally adult male Furcifer pardalis if faithful color breadth desired.** Do not mix features of multiple variants of chameleon; do not invent rainbow hues unsupported by selected locality/morph.

## Artistic intent
Visitor sees natural, restrained regional color build-up during normal walking (up to two low-amplitude cues independent of stepping on objects) and wonders what animal can do. While drinking, animal freezes as though detecting a nearby disturbance (NO audio playback). A turret eye scans, then chameleon looks into lens -> SECOND glass ripple -> full skin transformation begins IMMEDIATELY, while lens dolly-in continues, ALL page semantic colors transition. Close-up independent eye cursor tracking; scroll out at any moment; theme remains site-wide. One of **six predefined, quality-controlled behaviors** is randomly chosen each independent visit; do NOT generate arbitrary fully random colors, spatial patterns, or durations. Each preset requires a corresponding prepared film/material variant AND its paired UI theme. No mix-and-match between film color and CSS theme.

## Color morphology and proportions (normalized visible skin UV/body masks, initial candidate)
Define material masks **by anatomical region** rather than screen-space ellipses:
B0 base skin/background ~45–65% of *visible colored body skin* area.
B1 flank lateral bars ~15–25%, stripes/sub-stripes ~5–12%.
B2 head/crest/turret eye skin ~8–15%.
B3 legs/feet/tail accents remaining ~8–16%.
Regions overlap visually; these are *composition estimates*, not anatomical statistics and must be normalized and adjusted to actual 3D model. Don't recolor pupils or claws.
For early walk: two subtle local shifts from 0 -> ~3–5% and later ~7–12% **of visible skin area** at their MAX (prefer flank/shoulder/hind flank or leg border, not arbitrary swatches painted on toes). Second may include first; combined eventual max **8–15%**, low-saturation, 5–15% local perceived lightness/hue change, no global UI change. If biology/fidelity suffers use one/zero. Natural non-linear feathery transition with inter-scale microvariation, stable scale normal/roughness/lighting; no neon paint, no circular spread on animal.
For post-recognition full-body shift: ~20% -> 45% -> 75% -> **80–92%** of visible change-eligible skin across 3–6 seconds of designed cinematic time, preserving distinctive bars/stripe identity, eyes and some retained base patches. **Not necessarily physically physiologically literal**; field observation may take longer. Color appears in locally offset overlapping region changes, not a single uniform radial wipe. No need 100% of animal to change. Final scene background stays relatively dark and neutral so chameleon remains distinct.

## Six APPROACHES: six linked film/skin presets and matching CSS theme tokens (hypotheses)
These are **six curated visual state variations**, NOT six experimentally proven biological reflexes. All are grounded in panther chameleon-inspired possibilities; biologically vet against chosen locality before production. Multi-tone animal with ONE dominant standout hue, restrained bars as supporting hue. Site background is chosen to contrast against dominant animal hue; site semantic text always tested separately.
A — CANOPY GOLD: green/sage base -> golden-yellow with pale blue/cream bars; hero bg #17251F, site destination bg #2D251A, dominant skin #E8C35A, supportive #A7D6C8; theme gold/ivory on deep bark.
B — EMBER: moss green -> warm amber/copper with faint dark scarlet accents; destination bg #17252D, dominant skin #E9A065, secondary #B86357; sea-slate vs orange.
C — ICE LAGOON: dark emerald -> vivid teal/turquoise with light gold pinstripes; destination bg #272029, dominant skin #64D5C6, secondary #F0C76A; plum charcoal vs turquoise. **HIGH biological validation risk** for a given individual/locality.
D — ORCHID NIGHT: green -> muted violet-blue accents/stripes against green-gold base; destination bg #242826, dominant visible emphasis #8DBEDB, secondary #E0BA87. Do not turn entire animal pure purple: **HIGH biological fidelity risk**.
E — CITRUS: blue-green -> lime/chartreuse and yellow-cream bands; destination bg #27243A, main skin #CEDB67, support #9DD0CF; deep aubergine vs citrus.
F — SUNSET STRIPES: teal-green -> multizone golden orange with pale cream and cooler contrasting bars; destination bg #152B2A, main skin #EEAA69, bars #C3E7D6. **Most multicolored** but limit high-saturation to 2 colors, retain species stripe topology.
Color values are **art-direction swatches not confirmed biologically correct final skin albedos**. Vet selected species + local color morph; replace unsupported variants, don't fake nature documentary facts.
Contrast: use animal-vs-forest perceptual difference in **lightness and saturation**; separate 3D subject via soft edge bounce light and depth, not a glowing outline. E.g. estimated target subject median OKLab L difference >=0.15 vs immediately surrounding footage where viable; quantify with sampled film frames after grading, not CSS WCAG ratio (WCAG applies to UI text, not organism). Avoid bright warm skin against bright sunny vegetation. Ensure full-site accessible WCAG AA text contrast >=4.5:1 for normal text, >=3:1 for large text/non-text UI parts in states and transition frames.

## Motion quality: frame cue storyboard to millisecond scale
**These are timeline prototypes, not measured chameleon response speeds.** Use frame-accurate media cue metadata and easing; no unsynchronized JS timers. At 30fps one frame is ~33.3ms; millisecond values must be snapped to actual encoded presentation timestamps. If 60fps 16.7ms. Color changing faster than the footage will look fake. Approx total runtime may exceed 20s.

Walk/setup absolute illustrative:
00000ms: poster / site stable Forest default.
01500–03800ms: early shift 1 ramps over 2300ms, 0->3–5% mask coverage, low amplitude.
04000–06700ms: early shift 2 ramps 2700ms, combined 8–15% of body; no site palette shift.
07000–10500ms: approach/drink; precise `water-contact` must come from FINAL edit cue sheet, e.g. 08750ms, glass ripple 0–1500ms from that frame. No promise this timing will hold in edit.
~10500–11500ms: while drinking: a sudden **freeze/brief posture arrest**; eye reorientation FIRST, head delayed; no literal noise plays. Avoid making freeze so abrupt it looks like playback stalled.
~11500–13000ms: chameleon turns toward camera as dolly begins. `visitor-recognized` from first believable eye contact (sample target 12500ms): 2nd glass ripple ~0–900ms with mild text displacement first 500–800ms. Headline no motion.
**t=0ms at recognition**: full-body and full-site transformation begins immediately as second ripple starts/peaks (not before eye contact). This is the authoritative paired trigger:
0–250ms: recognition transient / early skin microshifts and subtle UI accent/pre-glow; keep legible.
250–900ms: patches activate asynchronously, 15–25% newly shifting skin, mostly shoulder/head flanks; semantic global CSS interpolates 0–12%.
900–1800ms: non-uniform propagation over flank bars & trunk, ~40–50% of change-eligible skin; CSS theme 12–38%.
1800–3000ms: skin spread to 65–75%, CSS 38–75%; camera dolly toward macro face proceeds smoothly.
3000–4500ms: skin ~80–92% of change-eligible parts, CSS 75–100%; hold stripe and eye geometry.
4500–5500ms: very subtle remaining brightness/reflectance settle only; CSS stable; ready for cursor live gaze. Total ~4.5–5.5 seconds; tune after film proof. **If proof reveals this feels too fast/artificial, extend to ~8–15s; observed transformations may take minutes**.
No full page flash, no forced rapid color cycling. Transition skin region activation timing can be based on smoothed spatial texture mask + noise thresholds and section-specific offsets; avoid cartoon marching wave or single global hue filter. Each scale cluster gets micro-delay 40–220ms and neighboring clusters have correlated offsets; jitter must be temporally smooth, never scintillating/flickering. These numbers are designer-controlled benchmarks, NOT biological measures.
Use same progressive normalized variable `phase` driven by media time / compositing playhead for both color skins and page CSS, with **different curated easing maps** for UI contrast. Actual video and CSS must be synchronized even after pause/seek/scroll. Freeze CSS state on stalled playback.

## Implementation constraints / two routes
PREFERRED INITIAL PROTOTYPE: consistent rigged/photo-real offline model, six offline-rendered alternate post-recognition **short color takes** sharing exactly the same camera/gait/drink/eye choreography, with same start frame / encoded alignment. Shared initial film remains neutral walking until a variable selection requires its small partial changes; simplest is 6 fully pre-rendered variants or neutral front segment + variant segments cut with matched frame. JS randomly chooses `variantId` once at session boot and loads **ONLY chosen** video + theme, never downloads all six. No random runtime shader hue across pre-rendered animal video! Film asset size and seamless cut are major costs; test one preset first, not six immediately.
ALTERNATIVE if heavy: rigged runtime 3D close-up/skin material with per-region shader masks and fixed photo-real cinema background, driven by one phase/variantId, but benchmark severe low-power GPU cost and compositing seams. No bare full-scene Three.js as default without evidence. For offline variant, eye tracking remains independently gated high-risk compositing.
Pseudocode:
`variantId = secureRandomInt(0,5)` at each new top-level site visit (no persistence; reload may select a new variant), playback picks `video[srcById[variantId]]`, theme uses `themes[variantId]`, region/color cue map uses `presets[variantId]`. Keep `variantId` stable within visit through route navigation and scroll, and use deterministic fallback for failure/reduced-motion. If need all 6 equally distributed across real visitors, do unbiased random integer, do not repeat guarantee; same variant may randomly recur. Optional future no-repeat last variant uses localStorage **only if privacy/storage and user desire approve**.
Random selection must **not** cause first-paint flashes; initial poster and intro colors match neutral baseline, chosen variant only reveals on intended cues. Prefetch chosen asset only. When reduced-motion: show compelling still frame, no automatic ripply UI/zoom; chosen color theme may be set as stable static by user preference.

## Validation and release gates
1. Produce skin/reference chart from accepted same individual/color morph (license clear), realism and contrast grading, 1 reference variant A.
2. Film proof: before/after 10 representative frames; measure region coverage and saturation / realistic morphology; ensure transitions feel organic at normal playback, not just stills.
3. Prototype complete one scenario with water, glass cues, recognition and global theme, scroll bailout; evaluate performance and visual quality.
4. Generate 5 extra variants only after #3 passes quality/performance. Tests: correct region response, CSS tokens aligned, only one video requested, random 6-way across simulated new loads, accessibility of intermediate states, mobile autoplay/fallback, no eye-tracking false claim, proof no branch effect on production.
5. Accept six variants only if genuine color-morph patterns defensible; else reduce count. A single premium experience is more valuable than six cheap variants.

## Supporting studies
- Teyssier et al., 2015, DOI 10.1038/ncomms7368 https://www.nature.com/articles/ncomms7368
- Ligon & McGraw 2013 on region-specific change and social signaling https://pmc.ncbi.nlm.nih.gov/articles/PMC3871380/
- Flap-necked chameleon background matching, 2025: https://pmc.ncbi.nlm.nih.gov/articles/PMC12326199/
- Stuart-Fox & Moussalli 2008 on color contrast/social signaling https://journals.plos.org/plosbiology/article?id=10.1371/journal.pbio.0060025
