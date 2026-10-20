# V4 first release — uygulanabilir geliştirme planı
Tarih: 2026-10-20 (Europe/Istanbul). Durum: **PLAN ONAYI BEKLİYOR — BUILD BAŞLAMADI**.
Hedef repo/dal: `alphanAkbulut/portfolio / portfolio-chameleon`.
Bu belge önerilen sistemi anlatır; çalışan ürün veya teslim garantisi değildir. Güncel kapsam ve uygulama sırası bakımından eski 01–06 belgelerindeki çelişen önerilerin önüne geçer; yaratıcı ayrıntılar bu belgelerde korunur.

## 1. Karar özeti ve kapsam
**Öneri:** Önce lisansı uygun, düzenlenebilir panter bukalemunu varlığını doğrula. Blender 4.5 LTS ile aynı karakterden 3–5 saniyelik kalite kanıtı üret; aynı varlığın Three.js gerçek zamanlı yakın planını ve video/3D birleşimini karşılaştır. Canlı göz ve scroll çıkış kapısı geçmeden uzun film üretme. Hibrit başlangıç hipotezidir, kesin mimari kararı değildir.

V4 ilk teslimi: **tek yüksek kaliteli, çalışan sinematik hero ve mevcut sayfada ona eşlik eden semantik palet dönüşümü**. Alt bölümlerin metinleri, iş geçmişi, CV, linkler, sayfa akışı korunur. Siteyi yeniden tasarlamak yok. Altı varyant, bölüm başına sürprizler, ziyaretçi sonrasında yeni etkileşimler, BPMN, mizah özellikleri ve yeni backend sonraki kapsamdır.

| Konu | Durum |
|---|---|
| Fotogerçekçi panter bukalemunu, bağımsız gözler, gerçekçi yürüyüş | Kullanıcı gereksinimi; henüz üretilmedi |
| Sağdan sola yürüyüş, çok hafif lokal renk değişimleri | İlk kalite prototipinde en az bir lokal değişim denenir; sessizce kaldırılıp başarılı sayılmaz |
| Su içme → ilk su/cam/yazı ripple → içerken fark etme → yüzünü kameraya çevirme | Zorunlu hikâye sırası |
| İkinci ripple → tüm gövde ve tüm site palet dönüşümü → yakın plan/canlı göz | Zorunlu; sabit video göz takibi sayılmaz |
| Scroll ile zoom out, performans ve erişilebilir fallback | Zorunlu |
| Tek tür/tek varlık/tek başlangıç-son renk profili | İlk teslim kapsamı |
| 6 ziyaret varyantı | Gelecek; mevcut 06 tasarımı backlog |
| Planı commit etmek | Bu görevde yetkili |
| Kod/3D/video üretimi, ücretli servis, deploy, production merge | Bu görevde yapılmaz; build plan onayından sonra |

### İncelenen mevcut durum — olgular
Başlangıç HEAD: [f117d78a46837413f2bfe5b7c1e6385ddd0bcdbb](https://github.com/alphanAkbulut/portfolio/commit/f117d78a46837413f2bfe5b7c1e6385ddd0bcdbb), gerçek commit tree SHA: `4917c80370c503d6c36c83c9ec42c224f4887c02`.
Repo ağacında proje AGENTS.md, package.json, test paketi, .github/workflows veya netlify.toml yok. Bu, harici Netlify yapılandırmasının olmadığı anlamına gelmez.
- `index.html`: İngilizce semantik içerik, headline, CV, mobil menü; mevcut hero SVG + Canvas ağı; preview noindex/nofollow.
- `hero-graph.js`: bağımsız IIFE, 20 saniyelik parçacık döngüsü, pause ve görünürlük takibi. Three.js, film, canlı bukalemun gözü yok.
- `styles.css → hero-graph.css → apple-style.css`: ardışık override ve çok sayıda sabit renk. Sadece :root rengini değiştirmek tüm siteyi dönüştürmez; özellikle CTA, .alt, .contact, nav, focus/hover ve gradientler ayrıca eşlenmeli.
- `typeface-preview.js`: Manrope/Instrument/System seçimi ve mevcut localStorage; bunun varlığı yeni skin kalıcılığı için izin değildir.
- docs/chameleon/01–06, README ve eski docs/00–03/decision ledger okundu. Eski V3 seçimi artık V4'ü bloke etmez.
- Sohbetin kullanıcı metinleri erişildi; önceki asistan yanıtları yalnız içerik referansı olarak döndü. Ekli fotoğraflar referans olarak listelendi; bu plan için görüntü analizi veya kullanım hakkı doğrulaması yapılmadı. Hareket kanıtı olarak fotoğraf yeterli değildir.
- GitHub status yanıtı `pending`, `statuses=[]`: başarılı CI kanıtı değil. Deploy/workflow listeleme uçları kullanılan bağlayıcı tarafından desteklenmedi. Netlify hesabı, gerçek V4 preview URL'si, plan kotası ve otomatik deploy ayarları **UNKNOWN**.

Korunacak branch başlangıçları:
| Dal | SHA |
|---|---|
| main | 83281218007d730c60a8047f0ab5382d988a6ddf |
| design-preview | fa29dad8c90bfa3b2bde8ea2c4d1b5d73f75425d |
| snapshot/particle-hero-v1 | f1d79c6b18c96fa773c4375ba2546436ecec12a3 |
| experiment/bpmn-hero-v2 | f1d79c6b18c96fa773c4375ba2546436ecec12a3 |

## 2. Somut deneyim ve ölçülebilir kabul sözleşmesi
Aşağıdaki süreler kurgu tahmini; biyolojik sabit veya onaylanmış çalışma bütçesi değil. Bir geçiş yaklaşık 18–30 sn olabilir; 20 sn'ye zorlanmaz, otomatik tekrarlanan global renk döngüsü olmaz. İçeriğe ulaşmak için filmi izlemek gerekmez.

| Beat | Yapılacak iş | Kabul kanıtı |
|---|---|---|
| Poster/başlangıç | Sabit hero alanı ve okunur DOM; hayvan orman içinde doğal ölçekte | JS/media kapalıyken headline, CTA, CV, menü kullanılabilir; boş ekran ve layout sıçraması yok |
| Walk (~0–7 sn) | Sağdan sola gerçek ayak basışı, dal kavrama, kuyruk dengesi; bağımsız göz taraması; 1–2 düşük genlikli lokal deri değişimi | Normal hız + kare incelemesinde kayma, zemine girme, anatomi değişimi yok; site paleti sabit |
| Drink (~7–11 sn) | Türle tutarlı yaprak/damla veya su yüzeyi; su temasında ripple 1 | İlk fiziksel temas kare cue'su ile cam/etiket ripple aynı zaman ekseninde; başlık bozulmaz |
| Notice (~11–14 sn) | İçerken kısa dikkat kesilme; önce göz, ardından baş/yüz kameraya | Duraklama video takılması gibi görünmez; ekstra ses veya kamera izni yok |
| Transform (~4–8 sn, gerekirse daha uzun) | İkinci ripple başlangıcının hemen ardından bölgesel gövde dönüşümü ve site token geçişi | Önce erken UI dönüşümü yok; baş/bacak/kuyruk dahil uygun deri bölgeleri değişir; pupil/tırnaklar ve desen kimliği korunur |
| Macro/live | Kamera yüz/gözlere yavaş yaklaşır; pointer gerçek zamanlı göz rigini sürer | Sol/sağ/merkez/kenar hareketlerine tekrarlanabilir bağımsız yanıt; hazır oynatım değildir |
| Scroll exit | Her beat'ten normal scroll; yakın plandan yumuşak kamera geri çekilmesi | Scroll kilidi yok; ilk wheel/touch/keyboard scroll işlenir; okunur alt içerik ve palet devamlılığı |

**Biyoloji ve sanat ayrımı:** Tür `Furcifer pardalis`; belirli lokalite ve bireyin renk morfu varlık seçiminde belirlenir. Nanokristal mekanizması bilimsel referanstır; gerçek spektral deri simülasyonu teslim kapsamı değildir. Kameranın fark edilmesinin hızlı renk değişimini tetiklemesi sinematik metafordur. UV/anatomik maskelerin yumuşak eşzamanlı olmayan geçişi kullanılır; ekran üzerinde daire yayılımı, tek HSV filtresi, titreşen pixel noise kullanılmaz. 06'daki yüzdeler ve milisaniyeler sanat parametreleridir, bilimsel ölçüm değildir. [S9](08-sources-and-evidence.md#s9-biyoloji)

**Görsel kabul rubriği:** aynı referans ile wide, adım, su teması, göz ve macro kareleri 100% ölçekte karşılaştırılır. Siluet/tür, ayak anatomisi/temas, bağımsız turret gözler, pul yoğunluğu/roughness, temporal tutarlılık, doğal aydınlatma ve UI kompozisyonu ayrı geçer/kalır olarak kaydedilir. Güzel tek kare yeterli değil. Kullanıcı normal hızdaki kısa videoyu görsel olarak kabul etmeden uzun film aşamasına geçilmez. Ayak/deri bozulması veya yapıştırılmış göz izi varsa kalite kapısı geçmez.

## 3. Araçlar, roller ve teslim artefaktları
Seçimler plan önerisidir; hiçbiri bu görevde kurulmadı veya çalıştırılmadı.

| Araç | Somut kullanım | Çıktı / bağımlılık |
|---|---|---|
| Blender **4.5 LTS** (4.x hattı) | Asset inceleme/retopology, UV, rig, foot IK ve animation bake; Cycles kalite referansı, Eevee hızlı önizleme; kamera/water/ışık | Düzenlenebilir .blend, bake dokuları, rig hareket klipleri, master frame sequence; sürüm ve eklentiler PoC'de sabitlenir |
| Uzman 3D asset/artist | Tür doğruluğu, yüksek detay pul sculpt/bake, göz pivot/kapak anatomisi, ayak kavraması ve yürüyüş düzeltmeleri | Lisanslı düzenlenebilir karakter ve gerekirse uzman üretim; hazır asset satın alma öncesi örnek dosya + hak kontrolü |
| Three.js + WebGL2 | Aynı karakterin yakın plan rigini, bağımsız gözlerini, PBR malzemeyi, bölgesel renk shader'ını ve scroll kamerayı çalıştırma | Pinlenmiş modüller, glTF loader ve hata/fallback yönetimi; WebGPU ilk sürüm şartı değil |
| glTF 2.0 / GLB | Rig, mesh, baked animasyon, PBR texture transferi | Tek sürümlü runtime asset; maskeler/cue/config ayrı manifest. Blender node ağları ve constraintler doğrudan aynı sonuçla taşınır varsayılmaz |
| PBR shader/mask pipeline | Base-color, normal, roughness, AO; gerektiğinde sınırlı subsurface yaklaşımı, UV region/activation maskeleri | Aynı UV'de renk durumları, zamanla tutarlı scale-cluster geçişi. Pul başına mesh yerine detay bake; gerçek fizik iddiası yok |
| Native JS + CSS/WAAPI/rAF | Story state, semantic tokens, hareket kontrolü, lifecycle, scroll | Framework rewrite yok. Mevcut statik sayfaya modüler hero |
| GSAP (optional) | Kamera/DOM easing düzeni native yaklaşım karmaşıklaşırsa | Ayrı saat değil, tek story phase üzerinden; lisans sürümü kaydı. İlk PoC için zorunlu değil |
| FFmpeg + ffprobe | Master'dan sessiz H.264 MP4, opsiyonel AV1; poster, crop, bitrate/PTS/keyframe doğrulama | Desktop/mobile encode matrisi, frame cue sheet, encode komutları ve boyut raporu |
| Playwright + axe-core + Lighthouse + DevTools | Otomatik akış/regresyon/a11y/lab ölçümleri; gerçek cihazla manuel görsel kontrol | SHA/cihaz/tarayıcı/ayar taşıyan raporlar; testler build onayından sonra eklenir |
| GitHub + Netlify | Doküman/uygulama sürümleme, test raporu, yalnız izinli V4 preview | Commit, doğrulanmış immutable deploy URL + branch alias + rollback kaydı; domain/production ayarı değişmez |

**LLM rolü:** Bu Codex oturumundaki GPT-6 tabanlı ajan; repo analizi, JS/shader/controller/test taslağı, Blender otomasyon yardımcıları ve raporlama. Gelecek build oturumunda seçili model kimliği ve erişim ayrıca kaydedilir; model değişimi veya ücretli API şartı yok. LLM'in metin üretmesi fotogerçekçi rig/deri üretildiği anlamına gelmez. Anatomik görsel kalite uzman emeği ve gerçek render incelemesi gerektirebilir. Otomasyon betiği yazabilmek uzman artist kalitesi garantisi değildir.

## 4. Görsel/video model karşılaştırması ve seçim
Kontrol tarihi 20 Ekim 2026. Resmî katalogda bulunmak **bu hesaptan erişilebildiği** anlamına gelmez. Hesap, ülke, plan, kota, watermark/export, ticari haklar ve referans yükleme izinleri üretimden önce kontrol edilir. Bu görevde model çağrısı, satın alma veya abonelik yapılmadı. [S5–S8](08-sources-and-evidence.md)

| Seçenek | Bu projede işe yaradığı yer | Risk / karar |
|---|---|---|
| Blender + doğrulanmış 3D asset | Tutarlı karakter, tekrar üretilebilir kamera, göz/ayak kontrolü ve material maskeleri | **Ana üretim önerisi.** En yüksek düzenlenebilirlik; asset/artist maliyeti ve shader parity işi var |
| Mevcut image-generation aracı / GPT Image 2.5 Sunburst veya Flare adayları | Moodboard, kompozisyon, renk/look-dev kareleri | Araç oturumda mevcut; altında hangi modelin çalışacağı garanti değil. API modelleri dokümante, hesap erişimi denenmedi. Görselden rig/UV/animasyon teslimi beklenmez; final doku için dikiş/aydınlatma temizliği gerekir |
| Runway Gen-4.5 (`gen4.5`) | İzinli tek referanstan 3–5 sn alternatif hareket/look testi | **İsteğe bağlı ilk AI video karşılaştırma adayı.** Resmî API listesinde; hesap erişimi UNKNOWN. Ayak, bağımsız göz, ölçek/desen tutarlılığı riskli. Runtime göz tracking üretmez |
| Runway Gen-4 Turbo | Daha düşük maliyetli kaba storyboard/motion denemesi | Gen-4.5 ile aynı input/kabul rubriği; ucuz deneme başarısı kalite kabulü değil |
| Veo 3.1 | Alternatif sinematik hareket testi | Gemini API preview uçları için **22 Ekim 2026 kapanış uyarısı** var. Uzun vadeli bağımlılık seçilmez. GA enterprise veya önerilen Gemini Omni Flash yolunun erişimi/koşulları yeniden doğrulanır |
| Sora 2 / Pro | Eski video adayı | Resmî deprecation kaydı Videos API/Sora 2'nin **24 Eylül 2026 kaldırıldığını** belirtiyor; bu planın aktif API seçeneği değil |
| Lisanslı gerçek wildlife footage | Biyolojik hareket referansı ve film alternatifi | Aynı hayvanın tüm beat'lerini ve camera/eye overlay'ini eşleştirmek zor; stok görüntüyü birebir kontrol edemeyiz. Tek başına live-gaze gereksinimini karşılamaz |

**Seçim kuralı:** Üretken AI zorunlu bağımlılık değil; erişim yoksa plan Blender/asset yolu ile devam edebilir. Uygun 3D varlık da yoksa görsel kaliteyi sessizce düşürmek yerine varlık/uzman temin kapısında durulur. Her AI denemesinde model ID, tarih, giriş hash'i, prompt, gerçek maliyet, sonuç ve reddetme nedeni kaydedilir. Yeniden deneme sayısı/bütçesi kullanıcıyla belirlenmeden sonsuz üretim döngüsüne girilmez.

## 5. Mimari alternatifler ve PoC karar kapıları

| Yaklaşım | Güçlü taraf | Zor kısım | Tercih koşulu |
|---|---|---|---|
| A — Offline film + runtime aynı varlıktan **baş/üst gövde yakın planı** | Orman/walk/water için yüksek offline kalite; küçük runtime sahne | Video→3D el değiştirme, renk yönetimi, aynı lens/perspektif, ışık, DOF, grain, occlusion; scroll geri dönüşü | G1/G2'de birleşim ve scroll gerçekten geçerse önerilen hibrit |
| A2 — Videonun üzerine yalnız iki göz yamama | Küçük mesh/payload | Turret derisi ve kapak/pupil beraber hareket etmeli; video içindeki eski gözün silinmesi, maske, gölge, baş hareketi, renk farkı; **en kırılgan composite** | Varsayılan değil; kısa test kusursuz geçerse değerlendir |
| B — Tam gerçek zamanlı karakter ve sadeleştirilmiş 3D orman | Tek kamera/ışık/rig; bağımsız göz, renk ve her andan scroll en tutarlı | Runtime foto-gerçeklik, mobil GPU/ısı, texture/decode ve indirme maliyeti | A başarısız, B aynı kalite + performansı geçerse |
| C — Saf video + CSS/DOM | En sade teslim, düşük geometrik GPU yükü | Gerçek cursor göz kontrolü yok; arbitrary dolly-out yok | Erişilebilir/arıza fallback'i; **tam V4 kabulü yerine geçmez** |

**Önemli ayrım:** Hibrit düşük runtime maliyeti sağlayabilir fakat compositing'i daha kolay yapmaz. Tam realtime göz ve kamera mantığını basitleştirir fakat foto-gerçek kaliteyi pahalılaştırabilir. Aynı Cycles görüntüsünü GLB'ye aktarınca otomatik aynı görünüm çıkmaz.

### Kapı sözleşmeleri (tümü NOT STARTED)
Her test: input/revision, cihaz, beklenen sonuç, çıktı/ölçüm ve **PASS / FAIL / UNKNOWN / INCOMPLETE** ayrımıyla raporlanır. UNKNOWN geçiş izni değildir. Önerilen gün aralıkları bütçe yetkisi değildir.

| Kapı | Girdi ve deney | Geçiş kanıtı | Kalırsa |
|---|---|---|---|
| G0 — Varlık/erişim/hak | Tek tür asset örneği, lisans, rig/UV, 2 bağımsız turret, hareket referansları | Web'de türev dağıtım ve gerekiyorsa GLB yayın hakkı; rig/ölçek/texture checklist | Alternatif lisanslı asset veya uzman teklifini kullanıcıya sun; üretimi başlatma |
| G1 — Foto-gerçek 3–5 sn | Aynı model: wide adım + macro + lokal maskeli renk; Blender render / web crop | Rubriğin kritik maddeleri geçer, kullanıcı görsel kabulü, render süre örneği | Asset/rig/deri düzelt; kabul olmadan uzun filmi üretme |
| G2 — Live eye + composite + scroll | Aynı kamera/materialden A ve B küçük karşılaştırma; sol/sağ cursor, resize; wide→macro→scroll | Normal hız/100% crop'ta görünür seam yok; doğru gaze; kesintisiz çıkış; hedef cihaz profili | A başarısızsa B; ikisi de başarısızsa uzman/ek bütçe veya açık kapsam kararı. Saf video ile done deme |
| G3 — Bir story/tema | Tam beat akışı, tek palette pair, iki ripple, hatalar | Cuelar, UI/deri phase, pause/seek/scroll tutarlı; tüm site token kapsamı | Yalnız başarısız beat/entegrasyon düzeltilir |
| G4 — Release adayı | Gerçek tarayıcı/cihaz, ağ ve a11y test matrisi | QA raporu, kullanıcı kabulü, lisans kayıtları, rollback tatbikatı | Preview adayı kalır; production veya 6 varyanta geçmez |

G2, eski 04 belgesindeki geç “Stage 4 gaze” sırasının önüne alınmıştır. En riskli varsayım: **aynı varlık yakın planda foto-gerçek, bağımsız canlı gözlü ve kesintisiz scroll-out ile hedef cihazda çalışabiliyor mu?** Bu yanlışsa uzun film ve web efekt yatırımının yönü değişir.

### G2/G4 ölçüm matrisi ve eşik ayrıntısı
Önerilen cihazlar: gerçek iPhone 12 sınıfı iOS Safari, Galaxy A52 sınıfı Android Chrome, integrated-GPU laptop ve masaüstü Chrome/Firefox/Safari. Eldeki cihazlar ilk build oturumunda kaydedilir; bunlar temin edilmiş cihazlar değildir. Playwright WebKit sonucu gerçek iOS testi yerine geçmez. Viewport: 320/375/390/768/1024/1440/1920 CSS px; portrait/landscape ve %200 zoom.
- Her hedefte cold/warm cache, normal ağ ve yavaş 4G; en az 3 tekrar ve medyan/en kötü değer kaydı.
- Ripple cue hedef sapması normal playback'te ≤1 sunulan frame; fallback timing yolunda ≤100ms önerisi. Stalled/hidden durumunda catch-up ripple fırtınası olmamalı; sağlanamıyorsa kesin frame-sync iddiası kaldırılır ve kapı değerlendirilir.
- Gaze grid: 9 ekran bölgesi + hızlı kenar geçişi + pointer leave; hedef göz ve bağımsız diğer göz kaydı. Görsel tracking kullanıcı girdisini 100ms p95 hedef içinde izler; joint limitleri artist tarafından türe uygun belirlenir.
- Composite: aynı frame'in video/3D üst üste ve yan yana karşılaştırması, 3 tekrar handoff, crop/resize ve 5 farklı story anından scroll exit. Görünür kenar, çift göz, ışık/ölçek/perspektif sıçraması kritik hata.
- G0 lisans kaydı alanları: eser/üretici URL, asset sürümü/hash, edinme tarihi, lisans metni sürümü, ticari kullanım, türev, web GLB dağıtımı, public repo izni, attribution ve fatura/kanıtın güvenli yeri. AI çıktı kullanım izni üçüncü taraf haklarından arınmışlık veya telif sahipliği garantisi sayılmaz.

### Runtime sözleşmesi (öneri)
- `StoryController`: tek state ve zaman otoritesi. Video için presented media time/rVFC; destek yoksa currentTime tabanlı toleranslı fallback. Realtime için AnimationMixer ve aynı story clock. İki ayrı setTimeout çizelgesi yok.
- `CapabilityPolicy`: JS/media/WebGL erişimi, reduced-motion, hata, görünürlük; UA string ile “bu cihaz güçlüdür” tahmini yok.
- `ThemeDirector`: skin phase ile aynı normalize ilerleme; DOM tokenları için ayrı kontrast güvenli easing. Başlık/CTA hitbox sabit.
- `EyeController`: iki turret joint; ekran sol-sağ eşlemesi kamera projeksiyonundan; sınırlar, damping, diğer gözün bağımsız yavaş taraması; merkez dead-zone ile jitter önleme. Pointer-leave ambient. Touch'ta scripted/tap gaze; klavye için pointer şartı yok.
- `GlassRippleController`: yalnız seçili nav/control ve etiketin görsel katmanı; gerçek metin ve focus aynı DOM'da. Görsel kopyalar aria-hidden + pointer-events:none. Ana headline bozulmaz.
- `ScrollDirector`: native scroll öncelikli; tüm beat'lerde bailout. Yakın planda gerçek kamera geri çekilir. Hibritte A→3D geçiş ve exit kamera yolu birlikte author edilir; yalnız CSS scale “kamera zoom out çözüldü” sayılmaz.
- `AssetManifest`: hash/version, source license ID, model/texture paths, selected profile, cue times/PTS, camera match, fallbacks, transfer boyutları.
- `BOOT → WALK → DRINK → NOTICE → RECOGNIZED → TRANSFORM → MACRO → CONTENT`; ayrıca PAUSED/HIDDEN/REDUCED/FAILED. Resource disposal, context loss ve tekrar giriş açıkça işlenir.

**Kesintiler için önerilen davranış:** erken scroll recognition öncesiyse Forest kalır, film/cuelar durur; transformation ortasında çıkışta son güvenli phase tutulur ve tüm site aynı palet fazında kalır; tam dönüşüm sonrasında son palet korunur. Yukarı dönüş otomatik yeni film veya renk reset başlatmaz; kullanıcı Replay seçerse başlangıç durumu kurulur. Pause tüm hikâye/gaze/ripple saatlerini durdurur. Seek olayları geçmiş ripple'ları art arda patlatmaz; phase doğrudan yeniden hesaplanır. Media stall sırasında UI önden akmaz. Bu detaylar uygulama önerisidir; kullanıcı görsel incelemesinde doğrulanır.

### Deri/asset pipeline
1. Aynı birey/morf için side/front/macro referansı + gerçek gait/eye/drinking videoları; yalnız telifçe izinli girdiler kullan.
2. Yüksek detay sculpt → retopology/UV → normal/roughness/base-color bake. Gövde/baş/turret/bacak/kuyruk maskeleri ve pupil/tırnak exclusions.
3. Ayak temas rig'i, kuyruk, iki bağımsız turret. Constraints/IK runtime'a taşınacaksa destek ispatı; aksi hâlde bake. Kamera transform ve lens değerlerini dışa aktar.
4. Bölgesel iki renk durumu + UV'ye bağlı düşük frekanslı geçiş alanı. Seed sabit; yüzeye kilitli mikro varyasyon. Normal/roughness karakteri korunur; “renk değişti, deri eridi” hatası reddedilir.
5. Offline lineer compositing/master; web SDR ve tutarlı color space/tone mapping. Aynı referans kare ile RGB/video range/white balance eşleşmesi.
6. GLB + texture manifest; glTF validator, morph/skin/bone doğrulama; özel shader davranışı ayrı runtime kodu. KTX2/mesh compression ancak kalite/decode ölçümüyle.
7. Web'e dağıtılan GLB indirilebilir: yalnız “render kullanımı” lisansı yeterli olmayabilir. Kaynak .blend/texture master'ları haklar izin vermiyorsa public repoya konmaz; güvenli arşiv yolu ve hash kaydedilir.

## 6. Tek profil ve gelecekte random skin
İlk release: `profileId=A`, tek doğrulanmış before/after palet, tek timing/region preset. Kullanıcıya zorunlu skin seçtirme yok; random üretim yok. A/Canopy Gold, Forest→Golden için çalışma adı; kesin renkler asset ve kontrast incelemesinde onaylanır.

Sonraki 6 profil: yalnız hue değil, anatomik region sırası, gecikme, hız/easing, desen içindeki yoğunluk ve uyumlu site tokenları birlikte tanımlanır. Aynı türün anatomisi ve desen kimliği korunur; “altı farklı tür karışımı” olmaz.
- Yeni top-level ziyaret/reload'da önceden onaylı altı profil arasından tarafsız seçim; ziyaret içinde scroll/route/bfcache dönüşü aynı profili korur.
- Aynı profil arka arkaya gelebilir; eşit olasılık eşit gerçek ziyaret sayısı garantisi değildir.
- localStorage/cookie ile no-repeat veya kişiye göre uyarlama ilk kapsamda yok.
- Sadece seçilen profil indirilir; diğer beş video prefetch edilmez. UI ve deri/video tek manifestten eşleşir.
- İlk poster/intro ortak sakin bazda; varyant cue gelmeden renk flash'ı yok.
- Tests: seed ile yeniden üretilebilir seçim, profile-map bütünlüğü, bir ziyaret/tek seçim, yalnız seçilen network asset, fallback deterministik. İstatistik testi tek başına RNG doğruluğu kanıtı sayılmaz.

## 7. Milestone, sahiplik, efor ve teslimler
**Tahmin varsayımı:** bir web/grafik geliştirici (Codex destekli) ve gerektiğinde yetkin 3D artist; düzenlenebilir uygun asset erişimi, bir ana görsel revizyon turu. Bir kişi-gün yaklaşık 6 saat odaklı iş. Efor insan/üretim emeğidir; ajanın aralıksız çalışacağı veya saatleri onaylandığı anlamına gelmez. Tedarik/render kuyruğu ve kullanıcı geri bildirim süresi ayrıca takvime eklenir.

| Milestone | Sorumlu / bağımlılık | Efor aralığı | Teslim ve bitiş ölçütü |
|---|---|---|---|
| M0 Bu plan | Codex; mevcut kaynak okuma | Bu görev | Doküman-only commit, branch/SHA doğrulama; build yok |
| M1 Varlık ve storyboard | Codex + artist; plan onayı | 1–3 kişi-gün | Asset shortlist/hak matrisi, referans board, shot list, G0 |
| M2 Kalite ve mimari PoC | Artist + grafik geliştirici; G0 | 4–8 kişi-gün | 3–5 sn clip, aynı varlığın A/B web deneyi, gaze/scroll kayıtları, G1/G2 kararı |
| M3 Tek sinematik akış | Artist; G1/G2 | 5–10 kişi-gün | Walk/drink/notice/transform, macro/exit path, .blend/master/cue/poster/encode; kritik anatomi hatası yok |
| M4 Site entegrasyonu | Web geliştirici/Codex; G2 ve cue taslağı | 4–7 kişi-gün | Modüler hero, tüm site token map, ripple, pause/scroll/fallback; G3 |
| M5 Performans/erişilebilirlik | Web/grafik geliştirici; M3/M4 | 3–5 kişi-gün | Cihaz testleri, optimize assets, WCAG kontrolleri, hata/reduced-motion matrisi |
| M6 Preview/kabul/rollback | Codex + kullanıcı; M5 ve preview izni | 1–2 kişi-gün | Gerçek V4 URL+SHA, rapor, rollback tatbikatı, G4 |

Toplam uygun asset ile **18–35 kişi-gün**, takvimde yaklaşık **4–8 hafta**; bekleme ve yoğun yeniden üretim hariç. İlk karar verilebilir PoC yaklaşık **5–11 kişi-gün**. Sıfırdan uzman karakter/rig gerekirse yaklaşık **10–25 ek kişi-gün** ve teklif/tedarik beklemesi; toplam 6–12+ haftaya çıkabilir. Bunlar tedarikçi teklifi veya kalite garantisi değil. İlk G1/G2 ölçümünden sonra kalan efor yeniden tahmin edilir. A ve B için iki tam ürün üretilmez; sadece küçük karşılaştırma yapılır.

Her milestone kanıt paketi: kaynak revision + output hash, kısa video/still, test koşulları, gerçek süre/maliyet, lisans kaydı, pass/fail/unknown ve sonraki küçük iş. Başarısız denemeler başarılı sonuç gibi yeniden etiketlenmez.

## 8. Maliyet, lisans ve donanım
**Henüz onaylanmış harcama tavanı yok.** Aşağıdakiler planlama senaryosu; otomatik satın alma/API deneme izni değil. USD kullanımı karşılaştırma içindir, vergi/kur ayrıca.

| Kalem | Bağımlılık / maliyet yaklaşımı |
|---|---|
| Blender, Three.js | Blender GPL; üretilen sanat kendiliğinden GPL olmaz. Three.js MIT bildirimi korunur. Asset/addon hakları ayrıca değerlendirilir [S1–S2] |
| GSAP | Standard License ile aday; MIT varsayılmaz. Kullanılacak sürüm ve dağıtım şekli kontrol edilir; native alternatif mevcut [S4] |
| FFmpeg | Derleme seçeneklerine göre LGPL/GPL; encoder/codec patent ve dağıtım koşulları ayrı. Runtime'a FFmpeg sunucusu gerekmez [S3] |
| Hazır asset | **$50–500 planlama rezervi**, piyasa teklifi değil; uygun rig ve web yeniden dağıtım hakkı garanti değil. G0'da gerçek teklif alınır |
| Uzman üretim | 10–25 gün × varsayımsal $250–700/gün = **$2,500–17,500** senaryo; gerçek teklif alınmadan fiyat taahhüdü yok |
| AI denemeleri | Runway kontrol tarihinde Gen-4.5 $0.12/sn, Turbo $0.05/sn; 20 × 5 sn örnek deneme $12 / $5 yalnız standart üretim bedeli. Vergi, farklı çıktı, input ve düzeltme hariç; bu 20 deneme izni değildir [S5] |
| Render | Yerelde yazılım ücreti yok ama enerji/zaman var. Örnek 24 sn ×30fps=720 kare; ölçülmüş 0.5–5 dk/kare varsayılırsa 6–60 GPU-saat **tek pass**. Ölçüm değildir; 10 temsilî kare ile yeniden hesaplanır |
| Hosting/CI | Netlify plan/kredi/bandwidth ve GitHub Actions kotası UNKNOWN. Örnek 10 MB ×10,000 tam yükleme ≈100 GB medya transferi; cache/izleme oranı etkiler. Ücretsiz kalacağı garanti edilmez |
| LLM | Mevcut hesap kullanım limiti ve seçilen model; ilave API harcaması zorunlu değil. Bilinmeyen token/maliyet sıfır sayılmaz |

Donanım önerisi (resmî minimum iddiası değil): look-dev için 16–32 GB RAM, yeterli disk; final offline render için tercihen 8–12+ GB VRAM veya yeterli unified memory, gerçek sahneyle ölçüm. Bu makinenin GPU/RAM/Blender/FFmpeg kurulumu denetlenmedi. Zayıf cihazda düşük çözünürlüklü PoC yapılabilir; cloud render veya yeni donanım satın alma ayrı karar. Web hedefi bu üretim makinesiyle sınırlı değil.

## 9. Performans ve erişilebilirlik kabulü
**Henüz ölçülmüş başarı yok.** G2 sonunda test cihazları ve geçici bütçeler dondurulur; kaliteyi geçirebilmek için sessizce gevşetilmez.
- Mobil cold-load 4G lab profilinde poster/DOM LCP hedefi ≤2.5 sn, CLS ≤0.1. Field INP ≤200 ms/p75 hedefi ancak yeterli gerçek trafik ve izinli ölçümle doğrulanabilir; Lighthouse sonucu field başarı diye sunulmaz.
- Başlangıç öneri bütçeleri: poster ≤200 KB; kritik HTML/CSS/JS/font toplam transfer ≤500 KB; seçilen mobil media/runtime paketi ≤8 MB, desktop ≤15 MB. Bunlar ölçüm sonrası kabul edilecek hedeflerdir. Büyük varlık hazır olana kadar CTA beklemez; reduced-motion/static modda büyük film/GLB çekilmez.
- Desktop 60fps hedef, mobil motion 30fps taban hedef; 30sn testte p95 frame süresi desktop ≤20ms, mobil ≤40ms önerisi. Gaze pointer→görsel p95 ≤100ms; ölçüm cihazı/termal durum belirtilir. 5 dakika kullanımda ısınma/degrade testi.
- DPR/texture/foliage/shadow kalitesi kontrollü azalır; anatomi ve etkileşim korunur. Kabul eşiği altında static fallback; destekli normal desktop'ta live gaze eksikliği fallback ile gizlenmez.
- H.264 MP4 temel teslim, AV1 yalnız cihaz decode/enerji/boyut avantajı ölçülürse. AV1 codec ile WebM container aynı şey değildir; alpha varsayımı yok. Opaque film + ayrı WebGL layer tercihinde codec alpha gerekmeyebilir. [S3]
- Silent muted playsinline; play() reddi, stalled, 404, codec unsupported, context loss durumunda poster ve normal site. requestVideoFrameCallback her koşulda mükemmel frame lock garantilemez; tolerans G2'de ölçülür. [S10]
- CSS token audit tüm bölümleri ve contact'ın açık zemin/koyu yazı çiftini kapsar. Video üzerindeki metin için yeterli opak scrim; yalnız token renk hesabı yeterli değil.
- WCAG 2.2 AA hedefi: normal yazı 4.5:1, büyük yazı/ilgili non-text UI 3:1; klavye/focus, 320px reflow, 200% zoom, focus obscured olmaması, target minimum 24 CSS px/izinli aralık istisnaları; kullanılabilirlik için mümkün yerde 44px hedef. [S11]
- Otomatik 5sn üzeri hareket için erişilebilir pause/stop; prefers-reduced-motion ilk yüklemede ve değiştiğinde uygulanır. Büyük zoom/ripple ve sürekli göz taraması kapanır; içerik kalır.
- Palet geçişinde uçlar ve en az 20 ara örnek + en kötü gerçek render arka planları test edilir; örneklem tek başına tüm ara renklerin garantisi değil, güvenli luminance/scrim kısıtlarıyla desteklenir. Flash sınırı aşılmaz. Dekoratif kopya yazılar screen reader'da tekrarlanmaz.
- Gaze koordinatları yalnız anlık bellek; kayıt/telemetri/kimlik çıkarımı/camera access yok.

## 10. GitHub / Netlify / CI / rollback planı
Bu görevde **yalnız Markdown**. Belge commit'inde `[skip netlify]` mesajı kullanılarak istenmeyen branch deploy tetiklenmesi azaltılır; bu bir production ayarı değişikliği değildir. Runtime kodu, CI workflow'u veya paket kurulumu yapılmaz. [S12]

### Build onayından sonra
1. `portfolio-chameleon` HEAD ve çalışma ağacı doğrulanır; başka kullanıcı değişikliği varsa korunur. Yalnız bu dalda küçük commitler. main/design-preview/snapshot/BPMN ref'lerine push/merge yok.
2. İlk PoC için statik HTML/ES modules yeterliyse bundler eklenmez. Three.js modül paketlemesi gerekirse küçük build aracı kararı gerekçelendirilir; npm lockfile, sürüm, lisans ve output directory belgelenir. React/backend gerekmez.
3. Planlanan Actions yalnız V4 branch path'lerinde çalışır; production deploy izni/secrets vermez, default permissions read-only. Şimdi workflow eklenmez. Runtime değişiklikleri: syntax/lint, state/cue unit testleri, Playwright Chromium/Firefox/WebKit, axe, asset manifest/hak/size/link kontrolleri ve glTF validator. Media source değişirse ilgili encode/rig testi.
4. Test cases: cue sınırı öncesi/sonrası ve ileri/geri seek; iki ripple'ın doğru sırada/tek kez çalışması; pause/hidden/stall; recognition öncesi tema sabit; ortada scroll phase latch; resize/device rotate; pointer sides/leave; touch/keyboard; WebGL loss/404/no autoplay/no JS/reduced-motion; CTA/CV/contact ve alt içerik regresyonu.
5. Netlify read-only inceleme: doğru hesap/site ID, production branch, sadece V4 branch deploy seçimi, build command/publish dir, repo base path, kota ve preview erişimi. Eski design-preview ve DNS dokunulmadan somut preview ayarı hazırlanır; yayın yetkisi alındığında uygulanır.
6. Static site ise publish repo root olabilir; build aracı seçilirse gerçek çıktı dizini kullanılır. GitHub Pages /portfolio/ ve Netlify / için relative asset URL testi. LFS pointer dosyasının GLB diye yayımlanmadığı, MIME/cache/range/codec yanıtları ve font CORS kontrol edilir.
7. Sonuç URL'si tahmin edilmez: Netlify deploy kaydından alınır. Deploy SHA, branch, immutable URL ve branch alias eşleştirilir; gerçek URL'de browser smoke + telefonda görsel kontrol yapılır. Preview noindex erişim koruması değildir; halka açık lisanslı veri kullanılır.
8. Render/asset üretimi her CI push'ında yeniden koşmaz. Küçük web çıktıları Git'te; büyük kaynaklar için hak/kota uygun arşiv veya LFS seçimi G0'da yapılır. LFS/Netlify indirme davranışı kanıtlanmadan bağımlılık kurulmaz.

### Rollback tatbikatı
- Uygulamadan önce V4 known-good SHA ve karşılık gelen asset manifest/deploy ID kaydedilir; başlangıç dokümantasyon baseline'ı f117d78... mevcut particle code içerir, çalışan V4 değildir.
- Hatalı V4 değişikliği için ileri yönlü revert commit yalnız `portfolio-chameleon` dalına; force-push/reset veya snapshot üzerine yazma yok. Son başarılı preview'in immutable URL'si anında erişilebilir tutulur.
- Branch alias için güvenli yol: önceki doğrulanmış içerikten V4'e revert ve **branch deploy**; eski deploy'u production'a “Publish” ederek geri dönülmez.
- Tatbikat: kontrollü preview adayından known-good V4'e dön; SHA/asset hash, video, CTA/CV, palet ve fallback'i yeniden oku; diğer dal SHA'larını karşılaştır.
- Production entegrasyonu, main merge ve DNS bu planın teslim kapsamı dışında; ayrıca açık izin gerekir.

## 11. Kullanıcıdan gerekenler / gerekmeyenler
**Şimdi gereken:** bu geliştirme yaklaşımının ve ilk G0–G2 PoC aşamasının onayı. Bu onay otomatik sınırsız para/token/render bütçesi değildir.

**İlgili kapıda gereken:** görsel kaliteyi kısa örnek üzerinde kabul/ret; ücretli asset/uzman/API gerekirse somut teklif ve tavan; yalnız erişim yoksa gerekli hesabı güvenli yöntemle bağlama; preview zamanı Netlify erişimi ve yayın izni. Beğenilen fotoğraf/video bağlantıları veya elinizdeki lisanslı dosyalar faydalı; önce mevcut eklerin erişimi kontrol edilir, gereksiz yeniden yükleme istenmez.

**Gerekmeyen:** Blender öğrenmeniz, model sculpt/rig yapmanız, shader yazmanız, API key'i sohbete/repo'ya koymanız, yeni bilgisayar/domain/subscription almanız veya şimdi altı paleti seçmeniz. Kişisel içerik yeniden yazımı ve yeni CV istenmez.

## 12. Açık riskler, varsayımlar ve durma kuralı
| Risk/bilinmeyen | Sorumlu / azaltım | Karar zamanı |
|---|---|---|
| Yeterince gerçekçi, web dağıtımına uygun asset yok | Artist + Codex; G0 shortlist ve örnek inceleme | G0 |
| Üretken videoda anatomik drift | Codex/artist; hiçbir AI çıktısı rubriği atlayamaz | G1 |
| Hibrit göz/baş seam, renk/ışık farkı | Grafik geliştirici; aynı rig/kamera ile kısa karşılaştırma | G2 |
| Mobile full realtime aşırı maliyet | Profiling/LOD + static fallback; kalite ve cihaz kapsamı açık | G2/G4 |
| Erken scroll ve kesintilerde film birleşimi | Story controller + matched exit shot; her beat testi | G2/G3 |
| Model erişimi/servis ömrü değişir | Üretim öncesi katalog/hesap/small paid test ancak bütçe ile | G0 |
| Lisans sadece render'a izin verir | GLB/public source için dağıtım haklarını ayrı doğrula | G0 |
| Süre/maliyet artist veya render sebebiyle artar | Gerçek 10 kare/ilk clip ölçümü ve güncel teklif | G1 |
| Netlify ayarı/kota bilinmiyor | Yetkili read-only hesap incelemesi; bilinmeyeni “başarılı” sayma | M6 öncesi |
| Erişilebilir cam efekti yeterince görünür değil | Gerçek küçük kontrol üstünde görsel/klavye test; headline sabit | G3 |

Uygun asset ve hedef cihazların temin edileceği **varsayım**, henüz kanıt değil. Hiçbir PoC bugün tamamlanmış değildir. Kapı kalırsa **çıktı → kanıt → kalan risk → en küçük sonraki iş → gerekli karar** sunulur. Bir kapının başarısızlığı bütçesiz yeni hafta/çağrı izni olmaz. Kaliteyi veya gerçek cursor tracking'i sessizce kapsamdan çıkararak tamamlandı denmez.

Onay sonrası ilk eylem: G0 varlık/hak/ortam kontrolü ve G1/G2 için somut deney sözleşmesi. Uzun film, altı varyant veya production değişikliğiyle başlanmaz.
