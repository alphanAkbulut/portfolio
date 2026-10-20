# Copy-paste continuity prompt / next meeting agenda

> **V4 branch update — 2026-10-20:** On `portfolio-chameleon`, the active scope is [the single-chameleon hero development plan](chameleon/07-v4-development-plan.md), awaiting user plan approval before build. The V3 choices, branch creation and design-preview write instructions below are historical context and do not authorize current work. Preserve other branches. Read [current decisions](chameleon/05-resume-and-decisions.md) and [sources](chameleon/08-sources-and-evidence.md).

Written 2026-10-20. This is a **future instructions template**, not approval to develop anything now.

## Suggested prompt for the next LLM session
> Read the GitHub repository `alphanAkbulut/portfolio`, branch `design-preview`. Start with `docs/00-START-HERE.md`, then read `docs/01-product-vision-and-decisions.md`, `docs/02-technical-plan-and-roadmap.md`, and `docs/bpmn-hero-concept.md`. Verify the currently deployed branches, files and commit SHAs. Preserve `main` (GitHub Pages production), `snapshot/particle-hero-v1` and `experiment/bpmn-hero-v2`. Do NOT build or edit yet. Briefly summarize the creative goal, relevant decisions, the current visual state, the technical options, and pending decisions. Then ask me which first V3 visual direction I choose (A/B/C) and wait for the answer. Once I decide and authorize development, create an isolated experiment branch and only then build a functional Netlify-previewable hero prototype, with accessible static fallback and QA. Never assume previous plan suggestions have been approved.

## EXACT unresolved question / choices from previous assistant
"**İlk hangi tasarımı prototiplememi istersin?**"
- **V3A — Flowing Intelligence (assistant's recommendation):** cinematic, intertwined luminous ribbons/sculpture moving from chaos to order; potential Three.js/GSAP, only if justified by effect quality/performance.
- **V3B — Particle Intelligence:** an intentionally structured premium generative particle cloud and purposeful shape transformation; not current generic specks.
- **V3C — Decision Architecture:** sophisticated, illuminated architectural paths, semantic decisions, potentially BPMN-adjacent.
No selection recorded as of this document. Ask without coercing; a hybrid is also possible.

## Other open questions (do not require answers all at once)
- Final default font: Manrope (current provisional) versus Instrument Sans (assistant aesthetic preference).
- Does user want BPMN as hero itself or a teaser linking to dedicated interactive case? Do a visual comparison rather than preemptively decide.
- Which 1–2 humor elements first? Suggested: Scope Creep Easter Egg and kinetic typography. Keep Reality Mode as optional.
- Which Netlify preview topology is easiest: branch deploy vs independent Netlify project? Exact site settings need confirmation.
- Whether a personally owned custom domain is configured, and where; no DNS edits without explicit instruction.
- Exact quality/performance target and mobile device matrix after initial design mockup.
- When to graduate a design to production, explicitly user approved.

## Session closure checklist for future assistants
Update decision ledger with selected/rejected candidates and reasoning; link commit and preview URL (verified); record any deviations from plan, impacted branches, tested screenshots and next required human decision; protect main and snapshots.
