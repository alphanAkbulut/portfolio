# V4 kaynaklar ve kanıt kaydı
Kontrol: **2026-10-20, Europe/Istanbul**. [Geliştirme planı](07-v4-development-plan.md).
Kaynaklar ürün garantisi değildir. Aşağıda belge erişimi, çıkarım ve hesap doğrulaması ayrı tutulur. Ücret/model/koşullar üretim günü yeniden kontrol edilir.

## Repo ve konuşma kanıtı
- [İncelenen immutable repo revision](https://github.com/alphanAkbulut/portfolio/tree/f117d78a46837413f2bfe5b7c1e6385ddd0bcdbb): tüm docs/chameleon dosyaları, eski karar kaydı ve docs/00–03, index.html, üç CSS dosyası, hero-graph.js ve typeface-preview.js okundu.
- Repo ağacı eksiksiz döndü; proje AGENTS.md, package.json, workflow, netlify.toml, film/GLB bulunmadı. GitHub status endpoint'inde sıfır status var; bu başarılı test değil.
- Branch SHA'ları GitHub branch listesiyle doğrulandı; uygulama değişikliği yapılmayacak korunan hedefler 07'de.
- Önceki konuşma ID: 6ad60f6d-a46c-83ed-a4a9-423c44d28637. Kullanıcı metni: önce landing/bukalemun, sonra içerik sürprizleri; önce plan ve GitHub dokümantasyonu. Asistan içerikleri referans işaretçisi olarak döndü; görünmeyen cevabı okuduk iddiası yok.
- Fotoğrafların içerik/lisans incelemesi ve hareket videolarının incelenmesi G0'a açık iş. Fotoğraf, yürüyüş/göz kinematiği kanıtı sayılmıyor.
- Bu görevde runtime/performans/Netlify preview test edilmedi. Plan tahminleri ölçüm gibi sunulmadı.

## S1 Blender
- [Blender 4.5 LTS](https://www.blender.org/releases/4-5/)
- [Blender 4.5 GPL açıklaması](https://docs.blender.org/manual/en/4.5/getting_started/about/license.html)
- [Donanım gereksinimleri](https://www.blender.org/download/requirements/)
Resmî arama sonuçları 4.5 LTS'yi ve uygulama lisansının sanat çıktısına otomatik uygulanmadığını destekliyor; manual/requirements tam sayfa açma bu oturumda başarısız oldu. Bu nedenle tam donanım minimumu veya eklenti lisansı teyit edilmiş sayılmıyor. Planın RAM/VRAM değerleri çalışma önerisi. Kesin patch ve eklenti sürümü kurulum öncesi doğrulanacak.

## S2 Three.js / glTF / PBR
- [GLTFLoader](https://threejs.org/docs/pages/GLTFLoader)
- [MeshPhysicalMaterial](https://threejs.org/docs/pages/MeshPhysicalMaterial)
- [Three.js MIT lisansı](https://github.com/mrdoob/three.js/blob/dev/LICENSE)
- [Khronos glTF belirtimi](https://github.com/KhronosGroup/glTF/blob/main/specification/2.0/Specification.adoc)
- [Blender glTF exporter hedef kılavuzu](https://docs.blender.org/manual/en/4.5/addons/import_export/scene_gltf2.html)
Three.js sayfaları açıldı: loader/material desteği var; fiziksel malzeme özellikleri pixel maliyetini artırabilir. Khronos sonucu format/PBR desteğini doğrular. Blender exporter tam sayfası erişilemedi; kurulu sürümle animasyon/material round-trip G2'de sınanacak. Özel procedural shader/constraintlerin taşınabilirliği varsayılmıyor.

## S3 Encoding
- [FFmpeg lisans ve hukuki hususlar](https://ffmpeg.org/legal.html)
- [MDN codec rehberi](https://developer.mozilla.org/en-US/docs/Web/Media/Guides/Formats/Video_codecs)
Her iki sayfa açıldı. FFmpeg lisansı yapılandırmaya bağlı; codec/container/decode desteği farklı konular. H.264 temel, AV1 opsiyonel seçimimiz uyumluluk ve ölçüm odaklı mühendislik önerisi; her cihazda AV1 veya alpha garantisi değil.

## S4 GSAP
- [Standard License](https://gsap.com/community/standard-license/)
Sayfa açıldı. GSAP MIT varsayılmıyor; native JS/WAAPI alternatifi var. Lisansın ilgili sürüm ve kullanım için uygunluğu entegrasyon öncesi kaydedilecek; plan GSAP'e bağımlı değil.

## S5 Runway
- [Model listesi](https://docs.dev.runwayml.com/guides/models/)
- [API fiyatları](https://docs.dev.runwayml.com/guides/pricing/)
- [Ticari kullanım açıklaması](https://dev.runwayml.com/learn/commercial-use)
Açılan katalogda gen4.5 ve gen4_turbo mevcut. Kontrol tarihinde 1 kredi $0.01; sırasıyla 12 ve 5 kredi/sn. Planın 100 saniye örneği bu oranlardan hesaplandı, teklif veya onay değil. Runway ticari çıktıyı anlaşma/politika koşullarıyla kabul ettiğini açıklıyor; input haklarını ortadan kaldırmaz. Hesaba/planımıza özgü hak, quota ve export/watermark durumu denenmedi. Enterprise güvenceleri standart hesabımız varmış gibi genellenmez.

## S6 OpenAI image generation
- [Resmî image generation kılavuzu](https://developers.openai.com/api/docs/guides/image-generation)
Sayfa açıldı; GPT Image 2.5 Sunburst/Flare adayları dokümante. Mevcut image-generation aracının varlığı oturum yeteneklerinden biliniyor; araç arkasındaki tam model ID'si, API hesabı erişimi ve ücret paketi doğrulanmadı. Nihai model/kalite/size ve ticari kullanım koşulları üretim öncesi kayıt altına alınacak. Üretken görüntü araçları UV'li, rigli 3D hayvan teslimi sayılmaz.

## S7 OpenAI video kullanım dışı
- [Resmî deprecations](https://developers.openai.com/api/docs/deprecations)
Açılan sayfanın 2026-03-24 kaydı Sora 2/Videos API için 2026-09-24 kaldırılma tarihini veriyor. Bu nedenle eski Sora model kartları bulunabilse de aktif API bağımlılığı olarak önerilmiyor. Kullanıcının geçmiş aboneliğinden erişim çıkarımı yapılmadı.

## S8 Google video
- [Gemini API video kılavuzu](https://ai.google.dev/gemini-api/docs/video)
- [Fiyatlar](https://ai.google.dev/gemini-api/docs/pricing)
Video kılavuzu açıldı: Veo 3.1 Preview uçlarının 2026-10-22'de kapanacağı ve alternatif yollar belirtiliyor. Enterprise GA ve Gemini Omni Flash için bu hesaptaki erişim/lisans/fiyat doğrulanmadı; bu görevde geçiş veya satın alma yok. Sırf “Veo var” diye sürdürülebilir production bağımlılığı sayılmadı.

## S9 Biyoloji
- Teyssier ve ark., 2015, [Photonic crystals cause active colour change in chameleons](https://www.nature.com/articles/ncomms7368), DOI 10.1038/ncomms7368.
- [Açık erişim PMC kaydı](https://pmc.ncbi.nlm.nih.gov/articles/PMC4366488/)
Resmî yayın/PMC arama özeti iridophore nanokristal mekanizmasını destekliyor; Nature tam sayfa hata, PMC doğrudan açma CAPTCHA döndürdü. Tam makale/videosu bu görevde incelenmiş sayılmıyor. Önceki 06 belgesindeki daha ayrıntılı biyolojik sayılar ayrıca yeniden doğrulanmalı; release davranışına kanıt diye taşınmıyor. Kamera tetikleyicisi, renk süreleri ve alan oranları sanatsal yorumdur.

## S10 Media zamanlaması
- [requestVideoFrameCallback](https://developer.mozilla.org/en-US/docs/Web/API/HTMLVideoElement/requestVideoFrameCallback)
Sayfa açıldı. Sunulan kareyle ilişkili callback, performans/uyumluluk sınırları nedeniyle tek başına kusursuz frame-lock garantisi değil. Plan media-time state ve fallback ölçümü ister.

## S11 Erişilebilirlik
- [WCAG 2.2](https://www.w3.org/TR/WCAG22/)
- [Pause, Stop, Hide açıklaması](https://www.w3.org/WAI/WCAG21/Understanding/pause-stop-hide.html)
WCAG standardı açıldı. 07'deki oranlar ve kontroller teknik kabul hedefidir. Automated axe/Lighthouse geçmesi tek başına WCAG uygunluğu ispatlamaz; hareket, contrast-on-footage, klavye, screen reader ve gerçek cihaz kontrolleri gerekir.

## S12 Netlify / GitHub
- [Deploy türleri](https://docs.netlify.com/deploy/deploy-overview/)
- [Deploy yönetimi / skip mesajları](https://docs.netlify.com/deploy/manage-deploys/manage-deploys-overview/)
- [GitHub workflow tetikleme](https://docs.github.com/en/actions/how-tos/write-workflows/choose-when-workflows-run/trigger-a-workflow)
Sayfalar açıldı. Branch deploy, production deploy ve immutable deploy URL farklıdır. Netlify belgesi [skip netlify] mesajını açıklıyor. Bu, kullanıcının hesabındaki gerçek ayar/preview başarısının kanıtı değil. Branch rollback planı production publish düğmesine dayanmaz.

## Kanıt sınırı ve yeniden doğrulama
**Doğrulanan:** repo dosya içerikleri/başlangıç SHA'ları, yukarıdaki erişilebilir resmî belgeler.
**Öneri/çıkarım:** hibrit öncelikli PoC sırası, tam baş/üst gövde geçişinin yalnız göz yamasına tercih edilmesi, süre/maliyet/donanım/performans bütçeleri.
**Açık:** gerçek asset hakkı/kalitesi, provider hesabı, Netlify bağlantısı/kota, kurulu yazılımlar, gerçek cihaz performansı, kullanıcı görsel kabulü.
Dış kaynaklar bu başlıkları otomatik kapatmaz. Kaynak erişim hatası veya boş status sonucu başarısız ürün veya başarılı deploy diye yorumlanmaz.
