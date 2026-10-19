# Future Hero Concept — BPMN 2.0 Scenario Animation

Status: **proposed / not implemented**. This plan is deliberately separate from the current 20-second particle animation. Do not present proposed BPMN animations as if they are running.

## Source of truth

Original authored case-study: https://github.com/alphanAkbulut/public-service-license-process-bpmn2.0-case

Review the complete original BPMN diagram `diagrams/license-process-bpmn.jpg` before converting shapes and sequence flows to code. The repository's process overview and modeling decisions are helpful summaries but **do not guarantee fidelity to every detailed diagram connector**. Reconstruct only what the diagram and source documentation support.

Source docs:
- `docs/process-overview.md`: intake, eligibility, parallel specialist reviews, inspections, corrections/reinspections, formal decision, issuance/closure.
- `docs/modeling-decisions.md`: XOR gateways choose one outcome; AND gateways split/join parallel reviews; corrections form an explicit loop; issued/rejected/withdrawn are different end states.
- `docs/implementation-notes.md`: process stages → workflow states; gateways → transition rules; roles → permissions; inspections → reassessment transitions.

## Direction

Replace the synthetic 'seven nodes / eight paths' right-side network with an original, carefully simplified process visual based on this **real implemented BA case**, without reproducing a dense full BPMN diagram in the hero. Retain the polished Manrope typography and full-bleed particle atmosphere. Lightning must travel the **actual selected route**; never animate an incorrect branch merely for visual effect.

### Candidate scenarios (derive and validate against source model)

1. Happy path: intake → completeness decision → parallel required technical reviews → site inspection if applicable → formal approval → issued.
2. Missing information: completeness decision routes to correction/resubmission. Return to review, or use closure if the original process calls for it.
3. Inspection correction: finding routes to remedial action → reinspection loop → approval or other modeled outcome.
4. Optional terminal alternatives: rejected / withdrawn. Distinguish these from issued.

Treat any actor names, roles, or detailed transition rules **not evidenced by the published model** as unknown, not invented.

## Visual grammar

- BPMN start/end events: minimal concentric rings; task/activity: restrained rounded rectangle; XOR: diamond with X; AND: diamond with plus; correction loop: curved back-edge.
- Lightning travels on the active sequence flows, using separate tracks on parallel paths, synchronizing at joins.
- Inactive routes stay dim; relevant branch activates; on resolution a single short non-strobing network bloom.
- Render diagram on the right (labeled), low-opacity atmospheric particles across the entire hero including behind 'From complexity to clarity.'
- Make meaningful action evident **automatically**, every 20 seconds, without relying on a button. Show a discreet scenario title; no fictional timer or oversized inspector card.
- Auto rotation scenario selection can be introduced after source fidelity is verified. Define a deterministic finite state machine and transition table; keep UI state independent of rendering.
- CSS/Canvas/SVG or WebGL can be evaluated based on measured performance, not hype. Preserve readability of Manrope headings.
- Respect prefers-reduced-motion: non-flashing static path with readable scenario caption. Pause when tab is hidden/offscreen; prevent animation from obscuring text.
- Ship to `design-preview` / Netlify first; require browser testing at desktop and mobile before approving production.

## Current implementation

The **existing synthetic animation** now auto-runs with a roughly 20-second visible cycle (intro 3.9s, blocked 6.1s, flash 1.85s, logo 6.1s, rewind 2.05s), stops advancing when paused/offscreen and honors reduced-motion preferences. This is a temporary UX fix, **not** the BPMN demo.

## Definition of done for BPMN hero

- Selected scenarios mapped to original BPMN gateways/sequence flows, with sources documented.
- Branch direction, joins, loops, and terminal outcomes tested against source diagrams.
- Smooth 20-second auto-loop, optional replay/pause, no mandatory trigger.
- Original complex BPMN diagram remains accessible through its case-study link.
- No diagram labels overlapping control chrome at 320px to 1920px width.
- Measured, not assumed, performance and accessibility before merging.
