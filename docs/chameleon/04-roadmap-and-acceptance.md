# Execution stages, acceptance criteria and risk register

## Stage 0 — preserve and document (DONE FOR DOCUMENTATION ONLY)
Create branch `portfolio-chameleon` from existing `design-preview` HEAD, commit this full concept without changing production, design-preview, existing snapshots or other experiment. No film/model built yet. Verify the branch and files exist. Preserve GitHub Pages URL and unspecified personal custom domain without DNS modifications.

## Stage 1 — visual fidelity proof (NOT STARTED)
1. Choose a specific species consistent with user's two real reference photos; gather references/usage licenses and annotate actual eye anatomy, skin scale density, realistic color changes and gait.
2. Produce **a short 3–5s photographic-quality motion proof**: chameleon in forest, right-to-left step, small eye motion; compare to reference at 100% crop. Investigate licensed wildlife footage vs 3D animation vs AI video; prioritize persistent anatomy and narrative control.
3. Test on an actual page/mockup crop. Confirm natural-scale wide shot and readability, including mobile. Reject cartoony, fake feet, changing number of toes/eyes, unreliable skin texture, inconsistent tail.
4. Get user's explicit acceptance of visual quality before spending effort on ripple/theme layers. Track asset provenance and licensing.

## Stage 2 — cinematic film and camera (NOT STARTED)
Storyboard continuity using shot A–E; waterfall of events, physical water contact, tracking camera, matched macro eye close-up, responsive crop and early scroll exit. Build video source, poster, fallback. Video doesn't block site loading. Confirm actual clip times and frame cue sheet in a new production notes document.

## Stage 3 — reactive website (NOT STARTED)
Extract/scope global palette semantic tokens; implement Forest->Golden theme across hero AND lower sections, synchronized to `visitor-recognized`. Add glass surface wave on water contact, second wave on first eye contact; optional visual label refraction, without moving semantic text/layout or heading. Verify actual UI frames and accessibility. Keep typography comparison until user confirms font.

## Stage 4 — interactive gaze (NOT STARTED)
Prototype rigged independent eyes in a **small isolated technical study** with user cursor. Compare composited video overlay vs real-time 3D; benchmark and inspect photographic fidelity at macro size. Implement screen-side mapping, center focus, independent scanning, touch fallback and browser lifecycle. Accept only if no edge seams or robotic gaze.

## Stage 5 — scroll and performance (NOT STARTED)
Cinematically smooth dolly-out on any scroll; no scroll lock or blocking. Keep selected theme across site. Test low-power mobile, cross-browser, reduced motion, autoplay denied, slow network, context loss; measure actual loading and responsiveness. Optimize compression and shader cost.

## Stage 6 — preview, feedback, integration (NOT STARTED)
Set up Netlify branch deploy for `portfolio-chameleon` **or** independent project (as user proposed) without changing current site or DNS; verify real URL and build. Publish preview ONLY. Gather explicit visual approval and record chosen outcomes. If accepted, separately plan intentional migration; **never merge or replace main automatically**. All previous concepts and snapshots are rollback points.

## Pass/fail criteria
- Does first second show believable chameleon/forest without blank screen or loader?
- Does animal walk physically right-to-left, staying out of left hero headline?
- Does water droplet/contact animation align with glass/text ripple within the visible frame? Does main title remain stable?
- Does visitor recognition create a clear "it saw me!" sensation through independent eye behavior and a second wave?
- Does skin color change immediately after recognition trigger FULL-site coherent semantic palette transitions?
- Do both side-dependent eyes track correctly without simultaneous mirroring? Does touch/reduced-motion have suitable fallback?
- Does scroll work at any moment, cause seamless zoom-out, and leave theme intact?
- Are visuals photorealistic and look physically grounded, with no generic/cartoon imagery?
- Does performance hold on low-end hardware, with no long task/hitch or oversized network payload? Record measurement.
- Are color contrast, controls, resume, links, correct actual project evidence and all screen widths functional?
- Are rights for production images/models/audio (none by default) clear?
- Is production main intact and is an immediate rollback possible?

## Risk matrix
| Risk | Level | Approach |
|---|---|---|
| Photorealism/rig/eyes not achievable with current time/assets | HIGH | Early photographic proof before code investment |
| Fixed video + live eyes has compositing seam | HIGH | Eye study first, reject or use matched full 3D alternative |
| Big video and WebGL degrade mobile UX | HIGH | Poster first, adaptive encode, lazy eye rig, profiling |
| Color shift undermines trust and readability | MED/HIGH | Semantic tokens, restrained easing, intermediate contrast test |
| Scroll out transition jerks/cuts | MED/HIGH | Matched wide/close shots, continuous progress and early-scroll cases |
| Water/glass refraction not perceptible | MEDIUM | User-tested second stronger ripple; small UI label refraction |
| Distortion hurts usability/accessibility | MEDIUM | Visual-only layer and reduced-motion fallback |
| Misleading biology (surface touch drives color) | LOW/MEDIUM | Creative metaphor, not claim of literal physical biological rule |
| Loss of repo history/site | LOW if process followed | Separate branch, immutable references, explicit merge approval |
| Chat context lost | HIGH unless documented | These GitHub docs and concise next-session prompt |

## Backlog ideas AFTER hero approval
- Scope Creep Easter Egg: grows "just one small change" requirements with clear reset.
- Corporate / Reality Mode; optional playful copy.
- BPMN "Choose Your Disaster" based on real license case, separate project/branch. Not necessarily hero.
- General kinetic typography on a small label only, not mandatory main title.
- No unrelated generic mascot; chameleon itself is our organic personality.

## Definition of done for each milestone
Document exact commit, branch, tested preview URL, demo screenshot/video, performance observations (with tools), asset license, user approval/rejection, remaining gaps and rollback HEAD. Don't say "deployed" without observed deployment evidence.
