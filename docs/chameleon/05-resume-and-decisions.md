# Decision register + next LLM session instructions

**Güncel devam (2026-10-20):** E1 kullanıcı tarafından şimdilik yeterli bulundu; nihai kabul hareket ve deriyle yapılacak. Shutterstock 11428904 filigranlı veiled önizlemesi 48 zaman örneğinde incelendi. Kanıt, belirsizlik, yeniden üretim bilgisi ve somut güncelleme kabulü [14 — anatomi ve hareket](14-anatomy-and-motion.md) içinde. Bu tur yalnız analiz/dokümantasyon; model değişmedi. Önerilen sonraki task mevcut E1 sahnesinde deri kaplı iki göz hareket deneyi; ayrı statik E1.1 varyantı ertelendi. Task sınırında kullanıcı kararı; ücretli işlem/deploy yok. Aşağıdaki eski checkpoint'ler tarihsel kayıttır.

> **Güncel V4 kapsamı (2026-10-20):** Yalnız `portfolio-chameleon`; plan onayı gelmeden build yok. İlk release tek fotogerçekçi panter bukalemunu hero, canlı bağımsız gözler ve tüm site palet geçişidir. Altı varyant sonradır. Güncel uygulama sırası, karar kapıları ve kabul sözleşmesi için [07 — geliştirme planı](07-v4-development-plan.md) ve [08 — kaynak/kanıt](08-sources-and-evidence.md) geçerlidir; aşağıdaki eski öneriler çelişirse 07 önceliklidir.

Date: 2026-10-20. Treat this as the canonical handoff. This file explicitly distinguishes AGREED vs PROPOSED.

## Committed creative decisions (AGREED for initial experiment)
- A dedicated branch/version: **`portfolio-chameleon`** in the existing portfolio repository, NOT replacing main or existing `design-preview`.
- More like **a realistic wildlife short film** than cartoon mascot or abstract neon animation.
- Chameleon starts natural-scale inside forest and **walks right-to-left**; forest subtly moves as camera tracks; head stays visible near center when close up.
- During uninterrupted right-to-left walking, suggest **up to two small local skin-color fluctuations** at different moments, with no colored stepping props, no requirement for contact and **no UI palette change**. Visual/biological credibility wins over the number: one or zero is preferable if the animation cannot remain convincing. This is storytelling, not a verified physiological sequence.
- Chameleon reaches water, drinks; touch creates a genuine water ripple. **While drinking**, it unexpectedly pauses as if it has noticed some disturbance (NO sound required); one independently moving eye reacts first and then the head turns toward the camera.
- Ripple triggers synchronized optical ripple on **Liquid Glass components** including very briefly their text; **main headline stays still**. Effects obvious but not distracting.
- After this pause, chameleon raises head, notices visitor. **Second stronger ripple** conveys "Eyvah, bizi fark etti!" Immediately after this, body coloration changes and **the ENTIRE site's semantic color palette transitions** in unison.
- Camera slowly moves in toward head/eyes. At macro scale **independent eye tracking** begins: left-screen cursor => left-screen visible eye; right => right-screen visible eye; non-target eye scans independently. Provide center/touch behavior; don't assume anatomical right equals screen right.
- Scroll at any time => smoothly zoom OUT and allow immediate continuation to other content. New palette persists on subsequent sections.
- No audio by default; no huge flash, major hero headline warping, fake face recognition or camera permissions.
- High performance, responsive, accessible, reduced-motion fallbacks. Existing real case study and contact links preserved.
- Use real-photo micro-scale, eye anatomical and color quality from two user-supplied screenshots as visual standards, not the assistant's flat cartoon drafts.
- Nature/film thematic integration, trust/peace first, warmth and surprise second; restraint in effects.

## Updated decision 2026-10-20 — remove colored-object dependency
Earlier brainstorm: walking over two differently colored objects causes two small leg color changes. **SUPERSEDED**. No color-changing contacts/objects are required. The current narrative uses a continuous realistic forest walk with optional two very subtle regional coloration shifts (production choice: material masks in prerecorded animation). First global website color change must occur ONLY after eye contact/second glass ripple, when the full-body skin shift begins. An apparent sound/vibration stimulus is **performed by the animal's sudden pause and gaze**, without actual webpage audio. Adapt film timing rather than forcing the longer scene into 20s.

## Important architecture choices still PROPOSED / NOT VALIDATED
- Film-led hybrid: offline-rendered photoreal chameleon/forest with compressed video and a separate runtime-interactive eye component; **unproven compositing**. Alternate full 3D may be necessary. Do not prematurely promise feasibility.
- Species is now panther chameleon (Furcifer pardalis), explicitly requested. Specific locality/morph, asset license and photographic source rights remain unverified.
- Forest Calm to Golden Curiosity are initial palette candidates, NOT definitive user approval. Exact transition hues should match accepted character material and readability.
- Exact duration of film beats, ripple displacement magnitude, camera crop/framing, cost/availability of creation tools, video format constraints and hosting budget need testing.
- A pre-rendered fixed gaze is a degraded accessibility/error fallback only. It does not meet the requested live cursor tracking acceptance. Failure of both hybrid and realtime requires an explicit scope/resource decision.
- Need clarify only what is essential after initial feasibility proof; user does not want repeated speculative questionnaires.

## Güncel decision register — 2026-10-20
| ID | Karar | Durum / gerekçe |
|---|---|---|
| V4-01 | Yalnız portfolio-chameleon; doküman commit'i şimdi, build plan onayı sonrası | Kullanıcının açık talebi |
| V4-02 | İlk release tek sinematik hero ve tek renk davranış profili | Kararlaştırıldı; 6 varyant sonraki kapsam |
| V4-03 | Tür panter bukalemunu; lokalite/morf asset aşamasında | Tür kararlı, asset henüz seçilmedi |
| V4-04 | Yürüyüşte hafif lokal değişim; tam değişim ikinci ripple sonrası | Gereksinim; eski sessizce sıfıra indirme esnekliği kabulü karşılamaz |
| V4-05 | Foto-gerçeklik + canlı bağımsız göz + scroll çıkış kapısı uzun filmden önce | Önerilen uygulama sırası; 07 G1/G2 |
| V4-06 | Blender 4.5 LTS + kontrollü asset; hibrit ve realtime kısa karşılaştırma | Öneri, doğrulanmadı; nihai mimari G2 |
| V4-07 | Saf video live gaze yerine geçmez | Kabul sınırı; yalnız degraded fallback |
| V4-08 | Fiyat, model hesabı, donanım, Netlify preview bilinmeyenleri | Açık; 08 kaynak kaydı; garanti yok |
| V4-09 | Eski V3A/B/C seçimi V4 için yeniden sorulmaz | V4 kapsamı kullanıcı tarafından seçildi |
| V4-10 | Production/domain/diğer branch değişikliği yok | Kararlaştırıldı |

## Sonraki oturum
**Güncel task sınırı:** önce [09 task kaydını](09-skin-task-log.md) oku. D1 onayı tüm build için onay sayılmaz; her task sonunda durup kullanıcı kararını bekle.

Repo HEAD ve kullanıcı onayını kontrol et. 07 ve 08'i, sonra 01–06 yaratıcı ayrıntılarını oku. Onay yoksa build başlatma. Onay geldiyse önce G0 varlık/hak/ortam kaydı, sonra G1/G2 için 3–5 saniyelik kalite ve canlı göz/scroll deneyi yap; bütçe/erişim gerektiren somut bağımlılıkları ilgili kapıda çöz. Altı varyant, uzun film veya web efektleriyle başlama. main/design-preview/snapshot/BPMN ve DNS değişmez.

## Güncel durum
Kullanıcı küçük tasklarla ilerlemeyi ve her task sonunda onay için durmayı istedi; D1 ortam kontrolünü başlatmayı onayladı. D1 ve D1.1 tamamlandı; Blender kuruldu ve küçük CPU render ile doğrulandı. D2 araştırması tamamlandı, asset seçilmedi. G0 kısmen ilerledi; G1–G4 NOT STARTED. Film, rig, shader, preview, performans ve görsel kabul kanıtı yok. D3a sayfa incelemesi tamamlandı; D3b yerel inceleme eksik. Kullanıcı onayıyla D4 bağımsız yama hedefi hazırlandı; D5 render üretildi, kalite revizyonu ve kullanıcı değerlendirmesi bekleniyor. Ayrıntı ve devam noktası: [09 — deri task kaydı](09-skin-task-log.md).

## Son checkpoint — D1.1
Kullanıcının açık talebiyle Blender 4.5.14 LTS kuruldu; paket/imza ve 64×64 CPU smoke render doğrulandı. D2 varlık araştırması sürüyor; ücretli satın alma veya üretim yetkisi yok. Güncel kanıtlar [09 task kaydında](09-skin-task-log.md). Eski “kurulum yetkisi yok / Blender yok” ifadeleri D1 tarihindeki durumu anlatır.

## Son checkpoint — D2
Varlık araştırması tamamlandı; [10 aday raporu](10-asset-candidates.md). Ücretsiz adayın lisansı/dosyası henüz doğrulanmadığı için üretim varlığı seçilmedi. Güncel devam noktası D3a ücretsiz model teknik incelemesi; ücretli adaylara kullanıcı kararı olmadan geçilmez. Blender hazır; G0 tamamlanmış değildir. D4/D5'e geçmeden model değişimi için kullanıcıyı uyar.

## Son checkpoint — D3a / D3b erişim engeli
Ücretsiz Sketchfab adayının public lisansı CC BY 4.0 ve metadata'sı doğrulandı; rig yok, animasyon 0, PBR No, UV Yes. D3b yerel dosya incelemesi tamamlanmadı: normal indirme Sketchfab login istiyor. Kullanıcı oturumu veya ayrı alternatif kararı gerekiyor. [11 raporu](11-free-asset-preflight.md) ve [09 devam kaydı](09-skin-task-log.md) güncel. Asset seçildi veya Blender'da incelendi deme.

## Son checkpoint — D4 bağımsız deri yaması
Kullanıcı hesabı olmadığını bildirdi; hazır modelden bağımsız kendi küçük yüzeyimizle D4'e geçişi onayladı ve Astra Orta seçtiğini söyledi. [12 — hedef ve deney sözleşmesi](12-skin-patch-target.md) hazır. D3b tamamlanmadı; final karakter temini açık. D4 dokümanı görsel kalite kanıtı değildir. **Güncel sonraki adım D5 sabit yama render'ı; task sınırında kullanıcı onayı bekleniyor.** Önceki D3b login devam noktası artık zorunlu önkoşul değil; hayvan modeline geçişten önce asset/UV/rig kapısı yine geçerli.

## Son checkpoint — D5 ilk render
Kullanıcı D5 üretimini onayladı. [13 sonuç raporu](13-skin-patch-result.md): üç PNG, .blend yeniden açma başarılı; yakın çekim kalite REVISE, kullanıcı kabulü bekliyor. Güncel task sınırı D5.1 geometri revizyonu önerisi; D6'ya geçme. Tam model temini açık. Kaynak script ve ölçüm manifesti kayıtlı; binary çıktılar yerel.

## Son checkpoint — D5.1 hacim revizyonu
Kullanıcı referans görüntüleri sağladı ve kabartı revizyonunu onayladı. Kavisli kubbe, yuvarlak kenar ve bölgesel pul boyutlarıyla ikinci örnek üretildi; .blend yeniden açma başarılı. D5 korunur. [13 sonuç kaydı](13-skin-patch-result.md). Güncel karar bekleme: kullanıcı D5.1 hacmini değerlendirecek; D6 veya yeni renk çalışması henüz yetkilendirilmedi.

## Son checkpoint — D5.2 bölge ve ölçek
Kullanıcı genişletilmiş karşılaştırmayı onayladı. Üç bölge × yakın A/uzak A/yakın B üretildi ve dosyalar doğrulandı. [13 sonuç](13-skin-patch-result.md). Görsel kabul bekliyor; sonraki öneri basit göz–yanak formunda dağılımları birleştirmek. Sabit renk uç durumları zaman animasyonu değildir. Önceki checkpoint'lerin karar bekleme kayıtları tarihsel; güncel sınır bu paragraf ve 09'dur.

## Son checkpoint — D5.3
Birleşik göz–yanak temsil formu ve kullanıcı talebiyle karışık boyutlu geçiş üretildi. Üç kadraj/renk çıktısı incelendi; .blend tekrar açıldı. [13 sonucu](13-skin-patch-result.md). Güncel sınır: dağılım için kullanıcı değerlendirmesi; animasyon yetkisi henüz yok. Koyu açıklık işareti gerçek göz modeli değildir.

## Son checkpoint — E1 anatomi
Kullanıcı D5.3'ün düğme gözünü reddetti; D5.3 göz tasarımı kabul edilmedi. Renk animasyonundan önce anatomik göz formu ve hareket; kuyruk için ayrı tasklar. [14 kanıt/plan](14-anatomy-and-motion.md). E1 nötr gri üç açı artefaktı var; oran/kafa bağlamı kabulü ve hareket yok. Güncel küçük adım E1 değerlendirmesi ve E1.1 kafa bağlamı önerisi; kullanıcı kararı bekle.
