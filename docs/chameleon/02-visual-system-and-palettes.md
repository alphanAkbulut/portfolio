# Art direction, theme tokens, Liquid Glass components and accessibility

> **Güncel V4 kapsamı (2026-10-20):** Yalnız `portfolio-chameleon`; plan onayı gelmeden build yok. İlk release tek fotogerçekçi panter bukalemunu hero, canlı bağımsız gözler ve tüm site palet geçişidir. Altı varyant sonradır. Güncel uygulama sırası, karar kapıları ve kabul sözleşmesi için [07 — geliştirme planı](07-v4-development-plan.md) ve [08 — kaynak/kanıt](08-sources-and-evidence.md) geçerlidir; aşağıdaki eski öneriler çelişirse 07 önceliklidir.


## Distinctive positioning
User wants **trust and peace, with a surprising moment of warmth and "the creature noticed me" wonder**. Realistic biological motion (water ripples, soft foliage breeze, skin color response, natural eye movement) replaces random futuristic shine. Keep premium editorial UI, enough negative space, high craft and sophisticated contrast; retain the existing brand headline and actual PO/TPM cases. Assistant-created cartoon character illustrations were **explicitly rejected**. User-provided macro wildlife photographs are the visual fidelity standard; do not invent facial smiles or anthropomorphic expressions.

## Composition / lens
- Wide forest establishing shot integrated into right side with **the chameleon entering from right and walking left** toward a water source near central-right.
- Left: unchanged readable "From complexity to clarity." heading and introductory/CTA content, protected by a soft continuous background gradient, not a hard vertical split.
- Forest extends as a coherent integrated backdrop under hero, without stock-photo postcard borders or abruptly different tint/particle density. Camera tracking should move foliage/camera relative to chameleon; support separate foreground/midground/background parallax where the chosen production method allows.
- When recognized: controlled dolly into chameleon head, close-up centered or slightly right of page midpoint, enough margin **to its left and right** for cursor-relative eye behavior. **Responsive crop** must never cover or occlude hero words/mobile CTA.
- No brightly colored stepping objects are needed; walking contains optional very small regional scale color fluctuations. Only the post-recognition full-body transformation changes the global site palette. The animal abruptly pauses while drinking as if alerted, without a required sound cue.
- Film lighting: natural diffuse canopy with physically plausible wet highlights. Tiny reflections and soft shadows, avoid eye-burn bloom. No arbitrary clouds of futuristic droplets.
- Cinematic visual should read as a real animal, not a cute toy; "cute" emerges from plausible curious behavior and independent eyes.
- On scroll camera/crop recedes as document flows; keep interactions smooth.

## Color system: hypotheses, not scientifically guaranteed emotions
Color psychology literature indicates context/culture matter. Do not claim fixed feelings guaranteed by single colors. The emotional story is a compound of luminance, motion speed, organic form, legible contrast and palette.

### Proposed BASE "Forest Calm" — working hypothesis, NOT user-approved final
`#17251F` deep organic background; `#374C3F` forest surface; `#95AF81` sage accent; `#DFC9A0` warm natural highlight; `#F4F0E7` ivory primary text.
Semantic roles (illustrative, verify actual WCAG contrast):
- `--site-bg`: #17251F
- `--site-surface`: #26382F (candidate)
- `--site-text`: #F4F0E7
- `--site-text-muted`: #CED6C8 (candidate)
- `--site-accent`: #B8D0A4 (proposed adjusted accessibility counterpart to #95AF81)
- `--site-glass-tint`: warm translucent dark green with controlled highlight
- `--site-focus`: high-contrast warm ivory or muted gold (must be tested)
Illustrate main theme in a non-cartoon concept frame before implementing.

### Proposed SECONDARY "Golden Curiosity" — triggered by recognition/skin shift; NOT final
`#2D2521` cocoa/earth background; `#65503C` warm surface; `#C99D58` amber/gold; `#F0C68B` warm highlight; `#FFF1DC` cream text. Semantic tokens proposed:
- `--site-bg`: #2D2521
- `--site-surface`: #42342A (candidate)
- `--site-text`: #FFF1DC
- `--site-text-muted`: #E4D7C5 (candidate)
- `--site-accent`: #F0C68B
- `--site-glass-tint`: warm bronze/amber translucent material
Do not color all text amber or swap text from dark/light during middle frames. Keep enough contrast at each interpolation frame.

### Optional "Twilight Wonder" — ideation only
`#27243B`, `#514B74`, `#9C91B9`, `#D9BBC8`, `#F4EEF4`; user has **not selected** it; not necessary for first prototype.
Other older palette concepts Deep Water, Forest & Amber, Storm & Afterglow and Porcelain & Ink are exploration history, not approved implementation palettes.

### Color change behavior
Single semantic theme engine updates **ALL portfolio sections**, not just hero. Backgrounds, surfaces, primary CTA, navigation, glass reflection, borders, links, focus states, chips, contact/footer and any mobile menu must map to token pairs. Guarantee visual hierarchy and readability. The actual chameleon colors and page color family should evolve simultaneously after eye contact, following a deliberate easing curve. Prefer perceptual color interpolation (OKLCH/OKLab or safely tested CSS color-mix) and assess intermediate contrast; do not naively RGB-lerp to low-contrast combinations. Fallback for unsupported CSS features.

## Liquid Glass: functional, not decorative
Functional glass candidates: global sticky/top navigation, a small set of actionable glass buttons, small controls if present. Existing CTA may be solid and must remain clearly clickable; glass should never be applied to every content card.
At `water-contact`, water's wave transforms these glass components **only**. Create shader/SVG filter/SVG feDisplacementMap or an isolated compositing overlay for believable optical refraction; test browser support/quality/CPU. Short-lived transient around 1–1.5 seconds, text displacement around 0.5–0.8 seconds with tuned low amplitude. Visible enough on small controls but not so much that text becomes inaccessible. At `visitor-recognized`, emit a second slightly more noticeable ripple, followed IMMEDIATELY by new theme.
Hero heading stays fixed/readable. Hit targets and semantic text are native DOM unaffected. Screen readers receive no extra repeated text from rippling visual layer; users do not lose tab focus.

## Typography and personality
- Current preview default: **Manrope**; **Instrument Sans** available. Final font remains open.
- Avoid mixing many font families with organic natural visuals. Favor restrained sizing and precision.
- Comical microsurprises (Scope Creep, Corporate/Reality mode, subtle character responses) remain ideas for a later milestone; **don't put a second cartoon mascot into the photorealistic chameleon film**. Chameleon's own gaze provides playfulness.
- Site content remains English; technical plan and discussions may be bilingual.

## Motion, cognition and inclusion
Slow, elegant, low-easing movement; avoid hectic motions, camera shake, looping flashing lightning, high-contrast full-screen flash, giant zoom jumps and surprises that trap scrolling.
Respect `prefers-reduced-motion`: skip camera pushes/ripple distortions or use optional subtle crossfade; retain legible still state and meaningful theme. Honor pause/stop controls where prolonged non-essential motion runs. Comply with WCAG 2.2 (e.g. 1.4.3 contrast, 2.3.1 three flashes threshold, 2.2.2 pause/stop/hide as applicable), verify contrast with actual values. Preserve keyboard and touch access, touch target sizes and visible focus.
