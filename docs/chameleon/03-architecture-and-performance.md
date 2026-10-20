# Technical architecture — design hypotheses, tradeoffs and performance budget

## Non-negotiable product constraint
**The visitor must perceive the website as very fast, even on ordinary mobile devices.** Content/CTA first, optional film second. Do NOT force a heavyweight live 3D animal+forest into all browsers just to showcase Three.js. "Realistic and complex" is a visual quality bar, not a requirement for runtime complexity.

## Recommended architecture: film-led hybrid, with proof-gated interactive eye layer
1. **Offline cinematic production**: stable species-specific photorealistic 3D asset/animation, or rights-cleared high-quality film. Offline Blender (or comparable) for sculpted scales, PBR/normal maps, anatomically correct legs/tail/eyes, rigged locomotion, foliage, water ripples, lighting, camera follows/dolly and *the visible color change*. This is a **production route to test**, not an implemented asset. If AI video generation is used, validate face/eye/limb consistency frame by frame and usage rights; short AI clips tend to change anatomy.
2. **Delivery**: optimized silent `video` `playsinline muted autoplay loop?` with MP4 H.264 fallback; WebM/AV1 if supported and measured. Use responsive bitrate/resolution and mobile-specific framing or crops; small poster visible instantly. **Do not invent target final MB budget until measured**. Chunk/stage loading and cache appropriately; lazy/noncritical assets; preloading only what is justified for above-the-fold LCP. A blind `preload="auto"` on a massive film can harm the page.
3. **Interactive close-up**: a limited GPU overlay representing eyes/head, or alternative matched assets, only after frame/motion test confirms precise seamless composite and correct cursor tracking. 3D eye rig with two independent turret-eye joints is highest behavioral fidelity, but compositing into footage is difficult: alignment, lighting, occlusion, movement, color and perspective MUST match. An alternate **full scene real-time 3D** architecture remains a fallback if hybrid eye overlay fails, but benchmark it before adoption. Avoid implying normal video alone supports arbitrary live gaze.
4. **Event-driven experience**: authoritative `media.currentTime` or precise frame mapping with `requestVideoFrameCallback` where supported (fallback `timeupdate`/rAF). Cue events authored against source edit list/metadata: `water-contact`, `look-up`, `visitor-recognized`, `color-transition-start`, `closeup-ready`, `scroll-out`. Exactly-once per narrative pass, resilient to seeking/visibility and autoplay-denied state. Single state machine, no independent drifting `setTimeout` clocks.
5. **Global design-token engine**: CSS custom properties for semantic bg/surface/text/border/focus/glass/CTA across ALL sections; choreographed transition after recognition via CSS/WAAPI or rAF with perceptual interpolation. Keep layout and content static. Theme should remain stable through scroll; initial palette defaults each visit unless explicit consent to persist preference is added later.
6. **Glass ripple engine**: isolated effect on `data-glass-ripple` components and their *visual* text reflections only. Using pre-rendered duplicate text or texture surface requires a visually synced but non-semantic `aria-hidden` layer and no pointer interception. Test Chrome/Safari iOS; do not apply costly fullscreen backdrop filters/shaders everywhere.
7. **Scroll choreography**: no locked scrolling. For web film, scroll begins immediate CSS/WAAPI transform or clip transition synced with viewport progress; camera-style transition crossfade/video cut only with matched angles. If a true 3D scene is used, interpolate camera dolly along scroll progress. Poster still remains legible if no animation available.
8. **Telemetry**: no visitor tracking of gaze/cursor history. Locally transient pointer event coordinates only. For optional development metrics, measure FPS/long tasks/asset bytes without sending private user cursor traces.

## Runtime composition
Document DOM order concept:
- SEO-visible HTML hero text/nav/CTA and all case content (no JS required to read);
- stable dark organic background and lightweight poster;
- muted cinematic video layer behind/aside left text;
- optional interactive head/eyes compositor (limited right/mid region);
- functional glass DOM components with transient ripple surface;
- global theme provider with semantic CSS variables;
- optional gentle parallax (disabled on reduced motion);
- scroll-linked presentation layer.
No artificial vertical shade seam where scene meets headline.

State machine sketch:
`poster -> walk -> water-contact -> look-at-viewer -> theme-shift -> interactive-gaze -> scroll-out -> content`.
Separable service modules (names illustrative, adapt to repository):
`ChameleonStoryController`, `VideoCueDriver`, `ThemeDirector`, `GlassRippleController`, `EyeTargetController`, `ScrollDirector`, `CapabilityDetector`.
Make callbacks idempotent; avoid global leaking loops; cancel requestAnimationFrame, observers and media listeners cleanly.

## Performance plan / realistic budgets
Goals are engineering targets to test, NOT measured current outcomes:
- Core Web Vitals: aim **LCP <=2.5s**, **INP <=200ms**, **CLS <=0.1** for 75th percentile field data, depending on user conditions and measurement. Use Lighthouse + WebPageTest / field RUM if allowed; don't claim these as achieved.
- No extra layout shifts when poster->video, camera zoom, or palette shifts; reserve hero geometry.
- Main thread never blocked by decoding film, refractive ripple or WebGL asset compilation; defer noncritical modules. Observe long tasks and pointer-to-eye latency.
- Motion ideally at display refresh on decent hardware; degrade intelligently. Cap DPR and shader texture detail; pause offscreen and hidden. Test CPU/GPU/battery on representative low-power device.
- Never require loading full-screen 4K 20s video before hero can display. Generate tested encodes by actual device, use `video` sources/media queries when supported or JS feature detection with safe fallback. Safari/H.264 essential; mobile autoplay must be muted/playsinline and can still be denied.
- Avoid loading Three.js unless 3D eye interactivity proves necessary; consider dynamic import only in interactive close-up, not page bootstrap. GSAP optional for timeline control but must not duplicate movie event scheduler; pin versions/licensing if used.
- Source video filesize, streaming, prefetch cost and actual adaptive implementation depend on prototype encode tests. Set quantitative byte budgets only after the 3–5 second proof and profiling.
- Error cases: video not supported / playback rejected / weak connection / WebGL context lost / page backgrounded / prefers-reduced-motion -> still photo, readable text, normal nav, stable palette, optional simple crossfade. No blank hero.

## Eye tracking acceptance
- 2 distinct turret eye pivots; displayed left/right mapping documented at close-up.
- At left cursor side only displayed left eye actively aims; right eye may scan slowly. Mirror for right. Center may briefly coordinate both.
- No persistent polling if scene hidden. Clamp yaw/pitch and speeds, smooth spring/easing, blink/ambient motions (if species-accurate).
- Pointer move should not steal input; on touch use tap/manual gaze cue, not pretend a cursor exists.
- Purely local: no camera sensing, no face tracking, no recording or upload of cursor movements.
- **Gate:** If compositing looks fake or mobile stutters, fail fast and compare a filmed pre-scripted gaze with limited user interaction or re-evaluate runtime full-3D.

## Source acquisition and rights
Do not simply download any random wildlife clip/photo. Seek verified license and attribution conditions; store proof in `docs/chameleon/assets-and-licenses.md` if assets later acquired. Species and model fidelity need expert references (multiple lighting angles, eye behavior and foot grip). User photographs are examples, not automatically licensed production assets. Never promise photorealism without reviewed output.

## QA matrix
Desktop Safari/Chrome/Firefox as practical; 1440/1920px, 1024/768, mobile 390/375/320; touch/keyboard/reduced-motion; no autoplay/network/WebGL; scroll early/mid/late, wheel/touch; theme at all phases; animated intermediate contrast; document links, resume, focus order; refraction over small glass controls; fallback photo and expected transition; cache and visual regression.
