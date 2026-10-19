# Product vision, creative brief, decisions and rejected directions
Updated 2026-10-20. **This is the durable design/product rationale.**
Related: [start](00-START-HERE.md), [technical/roadmap](02-technical-plan-and-roadmap.md), [handoff](03-resume-next-session.md).

## Audience and positioning
Primary audience: recruiters, hiring managers, technical product leadership, engineering/design collaborators viewing Senior Product Owner / Technical Product Manager credentials. Context: extensive travel technology, API/provider integrations, e-commerce, complex business rules and workflow design. A pleasant joke about real product delivery is appropriate; a chaotic game site is not. Short attention spans demand legibility and clear story.

Experience promise: **Premium first impression, evidence-based substance, discoverable delight**.
Hierarchy: (1) cinematic landing hero; (2) professional identity and real results/cases; (3) optional interactive examples and human personality; (4) reliable ways to contact. Users must access essential content without hover, animation, audio or waiting.

## Agreed design character
- Distinctive, deliberate, tasteful, exceptionally polished. Dark midnight/navy base; subtle mint/cyan glows allowed as visual accent. Avoid harsh vertical shade discontinuities between page-wide particles and localized SVG; previous screenshots exposed this flaw.
- Typography and whitespace are principal materials. Default **Manrope** currently; **Instrument Sans** optional experiment for more editorial sensibility. Apple/system font available in the preview-only `TYPE STUDY` control. Final font selection OPEN. Do not invent/ship SF Pro binaries.
- Prefer high craft/quality rather than more components: original, sculptural motion, integrated light, continuous depth, smooth damping/easing, adequate performance. Avoid dashboard-like graphics, cartoon noise or arbitrary luminous spaghetti.
- Glass/translucency only where it serves functional chrome; do not put every content block in a glass card. Restrained shadows, no banding, minimal outlines.
- Hero title: **"From complexity to clarity."** Text remains clear and readable, even with motion passing behind it. Current particles extend across hero and become denser near the right diagram; initial introduction originates left and moves right.
- Mobile layout is first-class. Reduced-motion static equivalent and proper focus/contrast required.

## Visual direction candidates — PENDING explicit user choice
### V3A Flowing Intelligence (preferred by assistant, NOT approved yet)
Luminous slender metallic/silky threads or coherent continuous ribbons suspended in deep dark space; an initially entangled composition gently unknots or rearranges into clear order. Depth through perspective, lighting and camera easing; a restrained energy pulse communicates transformation. NOT generic neon tunnels, stock torus knots, or chaotic procedural noodles. Test whether photorealistic/material quality works at useful sizes without dominating typography.

### V3B Particle Intelligence
Dense yet performant particles/points, spatially meaningful flocking/formation and controlled morph, at times a cloud, at times structured paths. A visible narrative with beginning/transformation/rest, unlike today's disconnected moving specks. Keep light falloff coherent, no sharp split between left and right. NOT gratuitous explosion.

### V3C Decision Architecture
An elegant architectural system of forks, rails, nodes/portals and synchronized illumination; meaningful decision rather than generic branching. Can inspire or later merge with BPMN case, but landing design doesn't have to reproduce all BPMN semantics.

Any hybrid should be consciously evaluated; no automatic mixing of all alternatives.

## Humor / personality candidates — ideation, not approved or implemented
1. **Scope Creep Easter Egg** (strong initial candidate). User intentionally discovers a tiny playful trigger. Tooltip "Just one small change…" grows from 1 requirement to 3/7/12, ends with "Schedule refinement"; restore normal layout with one click. Never misrepresent real requirements or disrupt primary navigation.
2. **BPMN: Choose Your Disaster** (strong candidate). Users can choose Happy Path, Missing Documents or Inspection Failed; lightning traverses source-supported gateways and loops. Microcopy example: "The document was attached. Just not the right one." True process demo separated from jokey annotations.
3. **Kinetic Typography** (strong candidate). The word "complexity" starts slightly unstructured then resolves; short human aside "Usually takes more than one sprint." Respect readability and reduced-motion.
4. **Corporate Mode / Reality Mode**. Optional control swaps/augments selected prose; professional default. Example corporate "Aligning cross-functional stakeholders"; reality "Making sure five departments agree on what 'done' means." Maintain serious CV and truthful job history.
5. **Tiny PO/AI character**. Reacts sparingly to exceptions/blocker and resolution. Requires original artwork, restraint and accessibility. High risk of cheap-looking generic mascot; likely later.
6. **Stakeholder approval mock loading gag**. Only an explicitly opted-in toy, NEVER block real page loading. Examples "Analyzing…100%", "Development ready…100%", "Waiting for stakeholder approval…99%", then "Let's add one more requirement." Not the real status of anything.
Humor is an Easter egg or controlled mode, not persistent punchlines, fake statistics, or personality imposed on every paragraph. Keep interfaces keyboard/touch accessible and easily dismissible.

## BPMN differentiation
Real implemented municipal license process from https://github.com/alphanAkbulut/public-service-license-process-bpmn2.0-case and its original `diagrams/license-process-bpmn.jpg`. Repo summary: application intake, completeness/eligibility, parallel technical assessment, inspection, correction/reinspection, formal decision, issuance/closure. XOR choice vs AND split/join, return loops, terminal issued/rejected/withdrawn. Avoid inventing departments, gateway outputs or arrows. Animate genuine process evidence only after verifying the detailed diagram. May be **better in a dedicated interactive case-study** with a small hero teaser instead of crowding landing page. This placement is still a *recommendation*, not a locked decision.

## Work already done and preserved
- Professional static site with cases, experience, credentials, CV, contact.
- UI polish / font study in design-preview (default Manrope).
- Original SVG+Canvas decision tree; its glows and particles expanded behind title. Follow-up feedback: noticeable shade discontinuity fixed with unified background; stronger left-to-right wave and density toward right. These refinements are experiment history, not necessarily aesthetic endpoint.
- 20s ambient/resolve/AA/replay cycle now automatic; pause/reduced motion.
- Selected cases & prototypes: user found big right-side onboarding screenshot ugly and distracting; screenshot removed while keeping case text and demo/case-study links.
- Branches main, design-preview, snapshot/particle-hero-v1, experiment/bpmn-hero-v2 established to isolate experiments.
- User explicitly does NOT want a rewrite, deletion of past work, unapproved production merge or domain migration.

## Rejections and non-goals
- No complete website rewrite without need/approval.
- No new domain configuration by default.
- No forced user action to reveal core hero motion: must be apparent automatically, ideally ~20s coherent cycle while in view.
- No overflow, overlapping cards, sharp shade lines or separate-unrelated left/right particle fields.
- No fake product metrics, false employer/client claims or fabricated BPMN branch semantics.
- No mandatory click on "Resolve blocker" just to see a demo.
- No giant permanent toy overlay, unsolicited sound, auto-playing distracting long video, performance-hostile WebGL without fallback.
- No clone of Apple's code/look-and-feel or unlicensed ThreeUI packages.

## Decision ledger (distinguish actual decisions from ideas)
| Topic | State | Reason |
|---|---|---|
| Preserve production GitHub Pages URL/main | DECIDED | Existing site must stay available |
| Preserve current preview & V1/BPMN branch | DECIDED | Safe side-by-side experiments and rollback |
| No rebuild from scratch | DECIDED | Valuable existing content and infrastructure |
| Premium/Apple-inspired original motion language | DECIDED direction | Desired quality benchmark |
| Manrope current default | IMPLEMENTED provisional | User likes option; direct comparison remains open |
| Instrument Sans as competitor | AVAILABLE, OPEN choice | More editorial alternative |
| Full-hero ambient particles/automatic 20s trigger | IMPLEMENTED in preview | No invisible manual gate |
| Remove agency screenshot in Selected Cases | IMPLEMENTED preview | Visual hierarchy user feedback |
| Build BPMN replacement as separate experiment | DECIDED approach; NOT built | Real proof of capability and rollback |
| Three.js + GSAP | CANDIDATE, not requirement | Only if true 3D depth/smoothness justify complexity |
| V3A versus V3B versus V3C | **OPEN: ask user first** | Avoid expensive unwanted build |
| Which humor features to ship and where | OPEN | Prioritize taste and CV clarity |
| Own custom domain mapping | UNKNOWN | Do not touch or guess |
