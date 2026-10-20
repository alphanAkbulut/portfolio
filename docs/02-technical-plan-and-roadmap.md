# Technical architecture, execution roadmap, versioning and quality gates

> **V4 branch update — 2026-10-20:** On `portfolio-chameleon`, the active scope is [the single-chameleon hero development plan](chameleon/07-v4-development-plan.md), awaiting user plan approval before build. The V3 choices, branch creation and design-preview write instructions below are historical context and do not authorize current work. Preserve other branches. Read [current decisions](chameleon/05-resume-and-decisions.md) and [sources](chameleon/08-sources-and-evidence.md).

Updated 2026-10-20. Companion: [master](00-START-HERE.md), [vision](01-product-vision-and-decisions.md), [resume](03-resume-next-session.md).

## Repo baseline and constraints
Repository `alphanAkbulut/portfolio`, currently a static SPA-like single HTML page with multiple sections. Existing assets: `index.html`, `styles.css`, `apple-style.css`, `hero-graph.css`, `hero-graph.js`, `typeface-preview.js`. Preserve actual CV PDF, email, LinkedIn, GitHub, live demo and case-study links. Read all relevant files before refactoring. Prefer scoped styles and modular code. Do not automatically introduce React, bundler, backend or database to make a one-screen animation.

Deployment:
- GitHub Pages from `main`: production, no experimentation.
- Netlify currently watches `design-preview`; user set site name `alphanakbulut`. New branches require branch-deploy activation or PR preview; GitHub repo branch itself does not imply a live Netlify URL.
- Existing snapshots: `snapshot/particle-hero-v1`, `experiment/bpmn-hero-v2` (no working BPMN animated implementation yet).
- For V3 choice create `experiment/hero-v3a-flowing-intelligence`, `experiment/hero-v3b-particle-intelligence`, or `experiment/hero-v3c-decision-architecture` based on *approved* choice, from verified desired baseline. Do not reuse existing V2 branch for an unrelated aesthetic.
- Consider a new Netlify project/URL if this helps side-by-side UX comparisons; Free limits depend on current provider policies. Do not modify domain/DNS.
- Document branch, commit, preview URL, screenshot evidence, next action on every significant milestone.

## Three.js / GSAP architecture choice — decision framework
**Do not treat a library as a design strategy.** First prototype geometry and movement using minimal original code. Options:
1. CSS/SVG/Canvas 2D: lightest dependencies, excellent for text and flat particles. Limited convincing 3D perspective, volumetric light, ribbons and parallax.
2. Three.js (WebGL): appropriate for V3A true 3D meshes/tubes/ribbons with physically coherent depth, geometry motion, custom shader/material and controlled camera. Costs: GPU use, bundle size, browser/WebGL failures, accessibility/SEO fallback. Prototype selectively and measure.
3. GSAP: optional timeline orchestration and damping for camera/mesh/DOM transitions. Can instead use requestAnimationFrame plus deterministic easing for small simple scenes. Respect GSAP license/version; avoid proprietary paid features.
4. Shader code: optional custom flow, glow or surface distortion if justified; complexity isolated and documented; fall back gracefully.
5. Spline or downloaded UI packs: not default; potential licensing/load/privacy/control issues. Prefer original authored code.
Use versioned dependency pinning and explicit license checks. Ensure no remote runtime content beyond approved fonts/assets when possible. If adopting a bundler (Vite as candidate), document why, build/preview commands, Netlify publish dir and GitHub Pages base path /portfolio/. Preserve static fallback.

Proposed compositional split:
- `hero-scene`: visual-only transparent scene with controls for start/pause/reset, consistent lifecycle and visibility throttling.
- `hero-controller`: semantic, deterministic state machine (intro -> evolution/decision -> resolution -> rest -> loop). No tight coupling to frame render.
- `hero-content`: accessible real text, CTA, labels independent from WebGL.
- `hero-fallback`: responsive still/SVG/gradient for reduced motion, WebGL unsupported or power constrained environments.
- `hero-config`: a small set of safe tuned parameters, never unbounded random density or untestable breakpoint magic.
- Optional `joke-features` loaded after primary website; each independently disable-able/feature-gated.

## Hero narrative and timing
Current synthetic baseline: 3.9 sec intro, 6.1 blocked, 1.85 surge, 6.1 logo, 2.05 rewind; ~20sec total visible time. For a new V3 scene DO NOT cargo-cult exact frames; preserve requirement **automatic, coherent, visible ~20-second loop with opening, transformation and closure**, no click needed. Start with a meaningful frame and immediate atmosphere (no blank screen). Pause off-screen/hidden; continue without a startling jump. Respect reduced motion and `prefers-reduced-motion`; offer deliberate replay and optional pause. Do not flash whole screen or create photosensitive strobe.

Suggested scene tests:
- V3A: gentle convergence -> entangled strands -> physical-looking untangling -> aligned form -> passing light impulse -> graceful reset.
- V3B: ambient cloud -> attracted points/path -> cohesive geometric arrangement -> sustained resolved frame -> release.
- V3C: latent architectural paths -> meaningful branches -> illuminate decision route -> coherent convergence -> reset.
Do not ship if motion looks generic or the typographic hero is illegible.

## Milestones / release process
**M0 — Documentation and baseline (THIS REQUEST).** Record vision, source, unresolved choice, technical tradeoffs, examples, do-not-change list. Commit docs ONLY to `design-preview`; production stays unchanged. No prototype work.
**M1 — Select a visual direction.** User chooses A/B/C or hybrid; establish branch and acceptance criteria. Retain fixed reference screenshots of current site at several widths where possible.
**M2 — Visual spike.** Create only hero prototype, not a whole website, feature flag/fallback included, use the simplest renderer meeting design. Output Netlify preview; measure performance; no claims without actual browser validation.
**M3 — Evaluate and iterate.** Compare original particle hero, V3 prototype and BPMN concept. Get explicit user visual approval before broadening scope. May reject V3 and retain V1; experiments are not sequential replacements.
**M4 — BPMN process experience** (can run as an independent concept after approval). Extract original BPMN image; generate verified finite-state scenarios and semantically accurate lightning paths. Consider full standalone case demo with small first-screen teaser. Separate branch; do not overwrite aesthetic hero experiment.
**M5 — Humor polish.** Add a *small* selection of optional features: scope creep Easter egg, kinetic headline, reality mode; preserve professional content and avoid overloading UI. A mascot or fake loading gag only if intentionally approved.
**M6 — Integration and shipping.** Merge only accepted individual features, remove temporary type picker and debugging controls, QA mobile/desktop, SEO, a11y, motion preferences, JS errors, source links, deployment/build; tag known-good release. Get explicit permission to change production main.

## Quality bar: definition of done
Visual: no unintentional vertical color boundary; seamless full-width atmospheric layers; coherent 3D or 2D materials and lighting; typography unoccluded; restrained and original design; UI never visually overlaps at 320/375/768/1024/1440/1920 CSS widths. Stable scene when scrolling; no layout jumps.
Engineering: automatic animation trigger works; 20s narrative intentional, not repetitive flicker; pause/reduced motion; no catastrophic GPU/fallback errors; resizing and context loss supported if WebGL; stop when tab hidden/offscreen; manage ResizeObserver/IntersectionObserver/listeners disposal; maintain layer ordering and pointer events; test on Safari desktop/iPhone as available; sensible FPS and bundle sizes observed and recorded, not invented.
Product: authentic experience/portfolio links, no fabricated claims, genuinely optional humor and simple controls, English copy polish, fast CTA, real case-study evidence.
Release: Netlify preview URL actually tested; source branch and precise commit logged; no unreviewed main/DNS writes; rollback branch/commit known.

## Risks and mitigations
- Shiny WebGL scene cheapens serious resume: develop isolated A/B/C alternatives; honest side-by-side review, user veto.
- Heavy performance/battery use: adaptive density, DPR cap, throttle/pause, reduce motion, static fallback.
- Contrast collision with hero words: separate scene and text layers, restrained light near title, test mobile.
- Plugin/version/license surprises: pin dependencies and review licenses before integration.
- BPMN inaccurate branch logic: diagram-derived node/flow map and tests; no guesses; see `bpmn-hero-concept.md`.
- Design fragility from CSS override pileup: consolidate approved CSS at integration milestone rather than infinite patches; preserve working snapshot.
- LLM context loss: always begin with `docs/00-START-HERE.md` and `docs/03-resume-next-session.md`, record decisions as commits and notes before coding.

## Deliverables for next coding assistant
A per-prototype standalone design brief, animation state diagram, source code scoped to hero, functioning preview (not just screenshot), small screenshot comparison set, verified performance/accessibility findings, commit URL, rollback SHA, a short decision note saying whether to retain/iterate/reject. Never represent conceptual pictures as working implementation.
