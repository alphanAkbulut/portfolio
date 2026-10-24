> **Görsel arşivi eklendi:** [Sürümlü prototip galerisi, referans panosu, videolar ve kaynak dizini](evidence/archive-2026-10-25/README.md). Yerel dosya envanteri ile GitHub'a gerçekten yüklenen dosyalar ayrı işaretlidir.

> **25 Ekim 2026 güncel durum:** Yerel çalışma v17'ye ulaştı; aşağıdaki B1/E1 ve ilk plan durumları tarihseldir. Önce [güncel devir belgesini](15-current-state-and-resume.md), [tasarım evrimini](16-design-evolution.md) ve [bölgesel deri kanıtını](17-regional-skin-evidence.md) okuyun. Yakın göz hareket denemesi vardır; beden derisi rigli değildir, nihai gerçekçi malzeme ve hero tamamlanmadı. Yüzlerce poz araştırması açık iştir. Büyük Blender dosyaları yereldir; GitHub dokümanı dosya yedeği değildir.

# PORTFOLIO CHAMELEON — V4 Master Brief

> **Güncel V4 kapsamı (2026-10-20):** Yalnız `portfolio-chameleon`; plan onayı gelmeden build yok. İlk release tek fotogerçekçi panter bukalemunu hero, canlı bağımsız gözler ve tüm site palet geçişidir. Altı varyant sonradır. Güncel uygulama sırası, karar kapıları ve kabul sözleşmesi için [07 — geliştirme planı](07-v4-development-plan.md) ve [08 — kaynak/kanıt](08-sources-and-evidence.md) geçerlidir; aşağıdaki eski öneriler çelişirse 07 önceliklidir.


**Status:** D1 + D1.1 COMPLETE; Blender 4.5.14 installed and smoke-tested; D3a public license/metadata checked; D3b local inspection incomplete; D4 independent skin-patch target documented; D5.3 eye rejected; E1 neutral eye envelope produced; provisionally sufficient for motion testing; 48-sample reference-video analysis documented; skinned eye motion not implemented; B1 whole-body clay blockout produced (REVISE; no rig/gait); asset not selected; hero implementation NOT STARTED. **Updated:** 2026-10-20. **Branch:** `portfolio-chameleon` in [alphanAkbulut/portfolio](https://github.com/alphanAkbulut/portfolio). This documentation is the canonical handoff for this V4 concept. Read EVERY file in this folder before coding.

## Vision, one sentence
A breathtakingly realistic, nature-documentary-like chameleon in a living forest walks through the forest with optional subtle localized skin color fluctuations (without touching special colored props), drinks and suddenly pauses as if alerted, disturbs the real water and the website's glass components, notices the visitor, changes color **together with the entire website**, and makes independent eye contact with the cursor; scrolling gracefully pulls the camera back and enters the actual portfolio.

The initial viewer emotion is **calm and trust**, then discovery and surprise: **"Eyvah, bizi fark etti!" / "Oh, it noticed us!"** Unlike decorative 3D particles, each major UI motion has an intelligible story cause. Delight is earned through realism, not childish cartoon faces.

## Navigation
- [14 — Anatomy and motion](14-anatomy-and-motion.md): evidence, E1 eye form and separate eye/tail/locomotion task gates.
- [13 — First skin render result](13-skin-patch-result.md): actual outputs, failed attempts, measured render times and visual quality gap.
- [12 — Skin patch target](12-skin-patch-target.md): independent patch, scale/light/color hypotheses and D5 render acceptance contract.
- [11 — Free asset preflight](11-free-asset-preflight.md): verified CC BY 4.0 and metadata; missing rig/PBR, login gate and pending Blender inspection.
- [10 — Asset candidates](10-asset-candidates.md): free-first shortlist, licensing/rig gaps and D3a inspection proposal.
- [09 — Skin task log](09-skin-task-log.md): current task, D1 environment findings, approval boundaries and next single step.
- [07 — V4 development plan](07-v4-development-plan.md): current scope, tools/models, PoC gates, milestones, costs, acceptance and release plan.
- [08 — Sources and evidence](08-sources-and-evidence.md): checked sources, access limitations and unknowns.
- [01 — Film and interaction screenplay](01-cinematic-story-and-interaction.md): shot-by-shot triggers, eyes, waves, theme changes and scrolling.
- [02 — Visual system and palettes](02-visual-system-and-palettes.md): composition, materials, typography, liquid glass, colors, WCAG.
- [03 — Architecture and performance](03-architecture-and-performance.md): source video vs 3D, timeline, fallback, performance, asset licensing.
- [04 — Delivery roadmap, risks and tests](04-roadmap-and-acceptance.md): isolation, milestones, exact acceptance criteria, backlog and verification.
- [06 — Color behavior, six visit variants and millisecond timeline](06-color-behavior-and-variant-engine.md): physiology, spatial color-mask coverage, contrast palettes, six curated states, synchronized frame cues and random-per-visit loading.
- [05 — Next session prompt and decision register](05-resume-and-decisions.md): open questions and copyable LLM instructions.
- General portfolio vision: [../00-START-HERE.md](../00-START-HERE.md), [../01-product-vision-and-decisions.md](../01-product-vision-and-decisions.md), [../02-technical-plan-and-roadmap.md](../02-technical-plan-and-roadmap.md).
- Alternate, independent BPMN plan: [../bpmn-hero-concept.md](../bpmn-hero-concept.md).

## Örnek göz hareketi videosu

Kullanıcının sağladığı ana hareket referansı: **[Videoyu Shutterstock'ta aç — 11428904](https://www.shutterstock.com/tr/video/clip-11428904-macro-shot-4k-uhd-veiled-chameleon%27s-eyes)** · [Filigranlı WebM önizlemeyi aç](https://www.shutterstock.com/shutterstock/videos/11428904/preview/stock-footage-macro-shot-in-k-uhd-of-a-veiled-chameleon-s-eyes.webm).

Yaklaşık 12 saniye; veiled bukalemun gözleri. Hedef panter bukalemunu olduğundan kesin tür oranı referansı değildir. [48 zaman örneğinin analizi, dosya kimliği ve modelleme kararları](14-anatomy-and-motion.md#kaynak-kimliği-yeniden-üretim-ve-hak-sınırı) mevcut anatomi belgesindedir. Yerel önizleme: `outputs/chameleon-eye-reference.webm`; bu yerel yol GitHub'da medya dosyası olduğu anlamına gelmez. Repo kaynak bağlantılarını tutar; video binary'si yeniden yayımlanmadı, ürün kullanım lisansı edinilmedi.

## Source of design truth
The user provided two **photographic chameleon references in the conversation** on 2026-10-20, exhibiting realistic micro-scales, anatomically realistic independently movable turret eyes, vivid natural skin colors, gripping feet and curled tail. Their imagery is NOT licensed or guaranteed to be stored in this GitHub repository. **Ask user to re-share assets before modeling if not available.** Never substitute the assistant's earlier cartoon mockup. Choose a specific plausible chameleon species and study real locomotion, eye structure, and scale appearance. Photo realism is a hard quality gate.

## Current baseline / do not damage
- Live GitHub Pages production `main`: https://alphanakbulut.github.io/portfolio/ — do not update without permission.
- `design-preview`: current Manrope/Instrument Sans, atmospheric particle hero, 20s auto-loop and simplified text-only Selected Cases card. Netlify was connected to this branch; **new V4 branch does not automatically have a Netlify URL**.
- `snapshot/particle-hero-v1` is an immutable V1 reference; `experiment/bpmn-hero-v2` is independent BPMN concept/branch.
- `portfolio-chameleon` is a separate experimental VERSION, not a separate repo and not a replacement for main or the custom domain. User owns a domain but its exact name / DNS mapping were not established; do not edit DNS.
- Preserve contact information, CV, experience, case studies, accessible navigation/CTA and existing brand headline **"From complexity to clarity."**
- Prototype the hero ONLY before considering full-site changes. The concept **does require theme token plumbing across the existing site** for accurate demo, but avoid refactoring unrelated sections.

## Explicit exclusions
No cartoon mascot, smiling wide-eyed character, simplified flat illustrated lizard, giant generic 3D knot, overdone mint/cyan-on-navy tech palette, fake metrics, required "play" click, forced 20-second watching, mandatory sound, full-screen strobe, freezing scrolling, persistent text deformation, visual breaks between left text and right scene, or production publishing without explicit approval.

## Meaning of "build"
The user's latest instruction was to **push the FULL technical, creative, UI/UX, color and build specification** as a separate named version. Do not claim a photorealistic film or eye-tracking implementation exists. Next coding session must first obtain approval of the development plan in 07; then proceed with G0–G2 only within the approved scope and resource limits. Do not overwrite approved baselines.

## Handoff priority
1. Protect production and all snapshots.
2. Solve photo-realistic asset and movement plausibility **before** building website effects.
3. Verify that high-quality motion can run smoothly under realistic mobile constraints (poster+optimized video before heavyweight full-scene 3D).
4. Synchronize film state and site theme from a **single authoritative timeline**.
5. Evaluate the eye-tracking approach without knowingly promising impossible interaction inside fixed video.
6. Give the user a real Netlify / previewable experience and request visual acceptance.
