# Film screenplay + explicit UI/UX event contract

> **Güncel V4 kapsamı (2026-10-20):** Yalnız `portfolio-chameleon`; plan onayı gelmeden build yok. İlk release tek fotogerçekçi panter bukalemunu hero, canlı bağımsız gözler ve tüm site palet geçişidir. Altı varyant sonradır. Güncel uygulama sırası, karar kapıları ve kabul sözleşmesi için [07 — geliştirme planı](07-v4-development-plan.md) ve [08 — kaynak/kanıt](08-sources-and-evidence.md) geçerlidir; aşağıdaki eski öneriler çelişirse 07 önceliklidir.


All timings are **initial storyboarding estimates**, not locked exact video frame timings. Main film may contain held phases. The experience is **event-driven**, not a rigid 20-second video that forces visitors to wait. Observe reduced-motion preferences, pause hidden/off-screen.

## Cinematic grammar
Natural forest wildlife cinematography, anatomically correct chameleon, realistic scaly skin, individually rotating turret eyes, deliberate gait, believable foot grip, controlled tail balance, foliage parallax, modest breeze and soft bounce/reflection lighting. **Start with chameleon in its environment at natural scale**, not a giant face. Character travels **right-to-left** inside right/center-right of screen; never cross or cover the large left-side headline. Camera smoothly follows so forest moves relative to the chameleon. Use foliage at differing depths. The source should look like real macro wildlife footage, **NOT a cartoon nor overprocessed AI glamour render**.

## Shot breakdown / story triggers

### Shot A — Arrival / walk with subtle localized color variations (timing TBD)
- Forest visible instantly via lightweight poster. Chameleon naturally traverses a branch from **screen-right to screen-left**, toward water. Footfall frequency, toe placement, tongue/mouth and tail consistent; avoid gliding or conveyor-belt treadmill impression. Subtle lateral tracking, bokeh and restrained foreground leaf parallax.
- Position the future close-up target slightly right of center, providing clear camera/eye space **both left and right**, while the text remains uncluttered.
- Along the uninterrupted walk, two **small, non-contact-triggered skin color fluctuations** may appear at distinct moments (e.g. localized leg/flank scale regions), gentle and plausible in hue, with **no synchronized UI theme change**. Do not add brightly colored objects or require stepping on them. Treat these as stylized natural/changing-state coloration, not a scientifically asserted causal mechanism. **Production simplification:** animate two bounded material masks/color maps in the offline video render; if continuity, believability or asset cost is problematic, use ONE subtle fluctuation or remove these entirely rather than compromising photorealism. Reuse the same established walk, camera and branch.
- Interface at calm **Forest** baseline palette. Readable hero copy and CTAs function without any animation.

### Shot B — Reaching water / first ripple (after gradual walking; timing TBD)
- Chameleon approaches a small **credible water source** (e.g. water captured in a leaf cup or small forest water pocket) and drinks. Determine if actual species drinking behavior would plausibly involve touching it with lips/tongue; do not create biologically absurd actions.
- **Exact physical contact frame** emits `water-contact`. Water surface produces a center-origin concentric wave with realistic propagation and damping (visual cinematic effect).
- At the SAME film time coordinate, **ONLY functional Liquid Glass components** respond: navbar, glass-like controls/buttons and their immediate text layers. Optional lightweight ripple through text itself (optical refraction only, no persistent layout/position change). Original concern: small control surfaces may not be visibly affected; aim for a modest clear transient (1–1.5s), tune after real display testing. Baseline glyphs remain crisp and hitboxes stable.
- **Do NOT ripple the main "From complexity to clarity." heading**. Other page areas remain solid. Do not apply blanket page displacement, nor change site theme yet.

### Shot C — Unexpected stimulus / recognition / second ripple (timing TBD)
- **While drinking**, chameleon abruptly and naturally **pauses as though detecting an environmental disturbance**. Do not auto-play a surprise audio cue; the site stays silent. The eye turrets react before the head turns. After a short beat the head rises, turns toward camera and **camera begins a smooth, slow dolly-in toward face/eyes**. The viewer first watches the animal; suddenly the animal appears to watch the viewer.
- Eye turrets scan independently before focusing. At a meaningful moment one visible eye makes eye contact; the other continues scouting briefly. `visitor-recognized` emits a **second slightly more noticeable glass/text-only ripple**: emotional punctuation = "Eyvah, bizi fark etti!"
- The recent conversation explicitly chose **this second ripple as emotional trigger followed immediately by color change**. Design should avoid presenting the second ripple as random decoration.
- Keep no audio by default, no whole-screen blinding flash. Motion natural, slight surprise, then quiet.

### Shot D — Skin and site color change (begins IMMEDIATELY after recognition)
- **Unlike the two early minor skin-only variations**, chameleon now performs the ONE **full-body color transformation**, in response to the narrative recognition beat (creative storytelling, not an accurate biological stimulus claim). Chameleon gradually transitions to a second **plausible natural color state**. A believable micro-scale pigmentation/reflected-color shift over skin, not a flat HSV filter.
- Begin corresponding global site theme interpolation when visible skin change starts; `color-transition-start` and `theme-transition-complete` are explicit lifecycle events.
- EVERY site section receives the same semantic theme identity: page backgrounds, section surfaces, CTAs, dividers, accent colors, links, glass reflection tones, focus outlines, hover surfaces and eventual lower sections. **Do not turn all tokens into the exact animal color**; retain legibility and hierarchy via palette families. Ensure accessible color contrast in ALL intermediate frames, not only endpoints.
- Transition should feel calm and natural (~2–4s tuning estimate); text/layout stays stationary. Do NOT change theme during the first water touch.

### Shot E — Macro eye encounter / cursor follow (nominal from ~12–16s until user leaves)
- Camera's close-up gives visible skin microtexture and accurately modeled independently moving eyes. The chameleon has space on both sides so viewer can move pointer to the "near eye" side.
- **Mapping based on displayed eye visibility, not naive anatomy**. For a screen-left cursor, the **screen-left visible eye** follows; for screen-right cursor, **screen-right visible eye** follows. Anatomical left/right when facing camera may be mirrored relative to viewer. Resolve after character rig and camera layout.
- Non-target eye performs controlled ambient search, not mirroring the target. In center zone a short, occasional binocular focus may occur, biologically plausible. No robotically identical movement, snapping or excessive rotation.
- Initial eye response is the scripted recognition; **live pointer tracking enables only after close-up completes**. Clamp gaze bounds, apply damped target tracking and micro-pauses. On pointer-leave: resume subtle ambient behavior.
- Pointer following requires runtime-controllable eyes: ideal 3D face/eye rig or rigorously composited eye overlay. **A prerendered ordinary video cannot genuinely follow arbitrary cursor locations**; do not promise this until proof-of-concept validates convincing compositing. Touch devices have no continuous cursor: use last touch / tap-driven acknowledgment or scripted gaze instead.
- The macro scene may hold indefinitely through subtle eye movement; never force the visitor through a film or delay navigation.

### Shot F — Scroll / dolly out
- **Scrolling takes precedence immediately** at ANY point. User must be able to scroll at 0s, not only after the encounter.
- If scrolling from close-up: camera gracefully dolly-outs to a wider forest composition while lower page sections naturally appear. If user scrolls before zoom-in, use a shorter/lighter transition, no jarring jump.
- No scroll-jacking, hard locking or waiting for video completion. Smoothness best achieved with scroll-linked compositing or prepared out-clip; fixed video + CSS `scale` alone can look like low-res pixel zoom, and moving to a video frame on scroll can jerk unless continuously matched.
- **Preserve transformed site palette** while scrolling and viewing remainder of page. Theme does not cycle automatically every 20s if that would undermine calm/trust. On refresh/default state, return to Forest baseline unless a future user setting explicitly changes persistence policy.

## UI-only ripple semantics
Distinct events: `water-contact` (first ripple), `visitor-recognized` (second stronger ripple), then `color-transition-start`. Both ripple events target `.liquid-glass` surfaces only, not entire page. Include a transient, visibly distinguishable refraction layer on the glass and its rendered label area; any duplicated render must remain aria-hidden and pointer-events:none, while real text/buttons remain fully accessible. Reduce/disable text distortion where readability suffers. Main heading NEVER warps. Avoid global flashing.

## Navigation and storytelling ethics
Auto-start motion if user preference allows, but do not imply the site detects the actual person: "noticed us" is a narrative illusion caused by eye-to-camera direction and pointer motion, not camera/gaze/face recognition. Do **not** request camera/microphone permission. Do not capture, store, transmit or infer visitors' identities/mouse data. Cursor follow is purely ephemeral local motion.

## Film and site state machine (draft)
`BOOT/POSTER -> WALK/[SKIN_MICRO_SHIFT_1, SKIN_MICRO_SHIFT_2 (OPTIONAL; no UI change)] -> WATER_CONTACT/RIPPLE_1 -> LOOK_UP/DOLLY_IN -> RECOGNIZED/RIPPLE_2 -> COLOR_SHIFT -> MACRO_INTERACTIVE -> (SCROLL_OUT) -> CONTENT`.
Interruption states: `OFFSCREEN_PAUSED`, `REDUCED_MOTION_STATIC`, `MEDIA_FAILURE_POSTER`, `USER_SCROLL_EARLY`.
**All events should be idempotent, recoverable after seeking and triggered by authoritative media frame/time, not drifting timers.** UI color transition must be synchronized even if video stalls, loads late, or is resumed. If audio/video sequencing fails, preserve stable functional page.
