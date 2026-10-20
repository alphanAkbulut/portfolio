# PORTFOLIO MASTER HANDOFF — START HERE

> **V4 branch update — 2026-10-20:** On `portfolio-chameleon`, the active scope is [the single-chameleon hero development plan](chameleon/07-v4-development-plan.md), awaiting user plan approval before build. The V3 choices, branch creation and design-preview write instructions below are historical context and do not authorize current work. Preserve other branches. Read [current decisions](chameleon/05-resume-and-decisions.md) and [sources](chameleon/08-sources-and-evidence.md).

Last documented: 2026-10-20. Status: **PLANNING / AWAITING DESIGN CHOICE**.
Source: collaborative portfolio design conversation + verified GitHub source and prior commits.
**Read this before editing anything.** Companion files: [vision](01-product-vision-and-decisions.md), [implementation](02-technical-plan-and-roadmap.md), [resume prompt](03-resume-next-session.md), [BPMN plan](bpmn-hero-concept.md).

## Mission
Turn a generic static personal website into a premium, fast, memorable, quietly funny interactive product that demonstrates an experienced Senior Product Owner / Technical Product Manager's judgment. An interviewer should see professional credibility *first* and discover tasteful industry-specific personality as they explore. Preserve real work and references. Avoid a generic AI-generated dashboard, visual noise, ornamental screenshots, fake KPIs, distracting mascots, intrusive gimmicks, and stock animations.

Core narrative: **"From complexity to clarity."** Initial landing experience must create authentic WOW through exceptionally smooth, cinematic, coherent, restrained motion. Apple-inspired quality and microinteraction finesse, original visual language (not copied Apple artwork or code). Current preferred default font: **Manrope**; compare against **Instrument Sans** in preview; decision not final.

## Exact CURRENT decision blocking further hero building
Ask the user to select which design direction to prototype FIRST, or accept a user-proposed hybrid:
- **V3A — Flowing Intelligence (assistant's recommendation)**: sculptural, luminous, intertwined ribbons/threads; complexity organically untangles into structured form; subtle travelling energy pulse; cinematic 3D depth.
- **V3B — Particle Intelligence**: substantial controlled particle cloud; particles assemble into deliberate geometry then dissolve/reform; refined evolution of existing droplets.
- **V3C — Decision Architecture**: architectural, branching 3D connections and illuminated decisions, BPMN-adjacent visual grammar.
The user had not chosen A/B/C at handoff. **Do not assume V3A is approved.** User's latest instruction is to document everything now because LLM credits are running out; **do not build prototypes until explicitly authorized**.
Questions asked in chat: "İlk hangi tasarımı prototiplememi istersin? V3A, V3B, V3C?" The response should resume from that question, not restart discovery from scratch.

## Existing URLs and versions
- Repository: https://github.com/alphanAkbulut/portfolio
- GitHub Pages LIVE (production): https://alphanakbulut.github.io/portfolio/ — deployed from **main**; do not change without explicit approval.
- Netlify site name was set by user to **alphanakbulut**; **design-preview** is configured as a branch deploy (user confirmed likely works); use Netlify's actual deploy URL from UI rather than invent or guarantee a URL.
- `main`: canonical published site. Verified previous production head `83281218007d730c60a8047f0ab5382d988a6ddf` (recheck before writes).
- `design-preview`: latest Apple-inspired / Manrope / atmosphere work, selected case screenshot removed. At documentation start `ff224c2d7c162e56589dd1cf583d336ccae30677`; this branch will gain **documentation-only** commit(s).
- `snapshot/particle-hero-v1`: intentionally immutable reference snapshot of earlier particle design; do not edit.
- `experiment/bpmn-hero-v2`: isolated branch created from earlier preview to prototype real BPMN storytelling; **NOT implemented**, only a plan at this point; do not edit without authorization.
- Future V3 experiment: create a **new separate branch** after design direction approved, e.g. `experiment/hero-v3a-flowing-intelligence`; do not conflate project versions with already deployed releases.
- User also mentioned owning "a domain". Exact separate custom domain name/registrar/DNS status is **not established** in this transcript. Do not infer or change DNS. GitHub Pages URL preservation is established.
- Netlify Free may support multiple sites/branch previews, subject to current plan/limits. Check exact current account/plan before relying on additional resources. The existing branch preview is simplest; alternative: separate demo project/site if user prefers.

## Safety / release controls
1. Before edits: verify current branch, HEAD, existing assets; no forced changes.
2. Preserve user's links, CV, selected work and main site; never discard without consent.
3. Prototype independently, compare preview screenshots/videos, perform functional, responsive, performance and accessibility checks.
4. **Never automatically merge experiment -> design-preview or main**.
5. Every milestone commit should record rationale, screenshots or visual QA observations when available, and rollback SHA.
6. Do not claim a deploy or visual test succeeded merely because a GitHub commit succeeded.

## Current site information
- Static HTML/CSS/JavaScript. Main assets: `index.html`, `styles.css`, `apple-style.css`, `hero-graph.css`, `hero-graph.js`, `typeface-preview.js`.
- Original particle network: right-side SVG + Canvas 2D synthetic intake/analyze/evidence/decision/rules/provider/delivery paths, obstruction/resolve lightning, AA mark, full-bleed ambient particles, manual pause/color/drop shapes, 20-second automatic visible-time cycle. **Temporary baseline** only. Preserve reference branch for rollback.
- Current selected cases area has screenshot REMOVED at user request; text-led, case links remain.
- Site is English-language copy; collaboration with user in Turkish.
- Public BPMN source repo: https://github.com/alphanAkbulut/public-service-license-process-bpmn2.0-case. Review original image/model before faithfully animating paths.
- Repo is publicly accessible; document **no private contact/credential/DNS secret, token, sensitive company data**.

## Quick next-session contract
Read all four documents; inspect actual repository state. Confirm the user's V3A/B/C choice. Only after consent, branch safely, make a self-contained hero prototype, provide independently viewable Netlify preview, visually QA it; iterate on user feedback. Keep meaningful humor optional and low-friction, not distracting from career presentation.
