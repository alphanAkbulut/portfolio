# Decision register + next LLM session instructions
Date: 2026-10-20. Treat this as the canonical handoff. This file explicitly distinguishes AGREED vs PROPOSED.

## Committed creative decisions (AGREED for initial experiment)
- A dedicated branch/version: **`portfolio-chameleon`** in the existing portfolio repository, NOT replacing main or existing `design-preview`.
- More like **a realistic wildlife short film** than cartoon mascot or abstract neon animation.
- Chameleon starts natural-scale inside forest and **walks right-to-left**; forest subtly moves as camera tracks; head stays visible near center when close up.
- Chameleon reaches water, drinks; touch creates a genuine water ripple.
- Ripple triggers synchronized optical ripple on **Liquid Glass components** including very briefly their text; **main headline stays still**. Effects obvious but not distracting.
- Chameleon raises head, notices visitor. **Second stronger ripple** conveys "Eyvah, bizi fark etti!" Immediately after this, body coloration changes and **the ENTIRE site's semantic color palette transitions** in unison.
- Camera slowly moves in toward head/eyes. At macro scale **independent eye tracking** begins: left-screen cursor => left-screen visible eye; right => right-screen visible eye; non-target eye scans independently. Provide center/touch behavior; don't assume anatomical right equals screen right.
- Scroll at any time => smoothly zoom OUT and allow immediate continuation to other content. New palette persists on subsequent sections.
- No audio by default; no huge flash, major hero headline warping, fake face recognition or camera permissions.
- High performance, responsive, accessible, reduced-motion fallbacks. Existing real case study and contact links preserved.
- Use real-photo micro-scale, eye anatomical and color quality from two user-supplied screenshots as visual standards, not the assistant's flat cartoon drafts.
- Nature/film thematic integration, trust/peace first, warmth and surprise second; restraint in effects.

## Important architecture choices still PROPOSED / NOT VALIDATED
- Film-led hybrid: offline-rendered photoreal chameleon/forest with compressed video and a separate runtime-interactive eye component; **unproven compositing**. Alternate full 3D may be necessary. Do not prematurely promise feasibility.
- Species, license and original photographic asset source unknown.
- Forest Calm to Golden Curiosity are initial palette candidates, NOT definitive user approval. Exact transition hues should match accepted character material and readability.
- Exact duration of film beats, ripple displacement magnitude, camera crop/framing, cost/availability of creation tools, video format constraints and hosting budget need testing.
- Eye tracking technical implementation may require a pre-rendered fixed version as fallback if full 3D eye integration fails.
- Need clarify only what is essential after initial feasibility proof; user does not want repeated speculative questionnaires.

## To next assistant — start with this exact prompt
"Inspect GitHub repo `alphanAkbulut/portfolio`, branch `portfolio-chameleon`. Read every file under `docs/chameleon/`, plus `docs/00-START-HERE.md` and `docs/02-technical-plan-and-roadmap.md`; inspect the actual existing hero code, branches, Netlify status and production safety. Do not infer unimplemented film/3D capabilities from documents. Provide a brief resumption summary and a proof-of-realism plan. Use the user's two photoreal chameleon image references if available; otherwise request them again before making a model. The new V4 concept has been accepted for isolated experimentation, but the docs commit contains NO working animation yet. Build only the first 3–5 second visual fidelity prototype in `portfolio-chameleon` when authorized. Protect main/design-preview/snapshot/BPMN branches and avoid DNS changes. Do not claim Netlify is connected to this new branch until verified. Record actual evidence, measured performance, costs and asset rights. We will approve the chameleon quality before extending to the full 20-second story." 

## Next action
1. Verify current repo and read docs.
2. **Address capability risk first**: can we source/build sufficiently photorealistic wildlife animation and separately controllable eyes with acceptable performance? Produce/test a short asset-quality proof; decide film hybrid vs real 3D from evidence.
3. Only once satisfactory: complete screenplay, reactive glass/labels, synced full-site theme, eye behavior and scroll-out.
4. Deliver Netlify experimental preview, not main.
