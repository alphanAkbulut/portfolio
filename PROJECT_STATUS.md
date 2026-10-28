# PROJECT_STATUS — Panter Bukalemunu Teknik Devir Teslimi

**Devir güncellemesi:** 28 Ekim 2026 · **Son model üretimi:** 26 Ekim 2026 · **Tür:** *Furcifer pardalis* · **Model:** V37 göz animasyonu adayı / V36 korunmuş temel.

Bu dosya güncel durumun giriş noktasıdır. Eski tarihli plan ve raporlar tarihsel kanıttır; güncel model durumunu bu belge geçersiz kılana kadar aşağıdaki kayıt belirler. Belge bir tamamlanmış ürün, biyolojik doğruluk veya bütün dosyaların GitHub yedeği iddiası değildir.

> **28 Ekim ek çalışma:** Kullanıcı göz şekli için V3–V5 demo/analiz çalışmasını başlattı. [V5 karar kaydı ve testler](docs/chameleon/eye-shape-review-v5/README.md): profil daraltma ve açıklık küçültme kontrolleri; gerçek model V37 olarak korunuyor. Aşağıdaki devir kapsamı bu yeni demo talebinden önceki kayıttır.

## 0. Yeni yapay zeka için ilk 60 saniye

**28 Ekim kapsam kararı:** Şu an yalnız devir tamamlanıyor. Canlı bağımsız hedef/imleç takibi, web entegrasyonu ve performans optimizasyonu ertelendi. Yeni model, animasyon cilası veya uygulama build'i için bu belge tek başına çalışma yetkisi değildir. Aşağıdaki sonraki adımlar, kullanıcı tekrar başlatırsa kullanılacak devam rehberidir.

1. Mevcut karakteri yeniden üretme. Kabul edilmiş göz formunu, pulları, yumuşak deri geçişlerini ve bağımsız göz davranışını koru.
2. Son dosya `outputs/eyes-v37/chameleon-animated-v37.blend`; son GLB aynı klasörde `chameleon-animated-v37.glb`. Geri dönüş kaynağı V36'dır.
3. **İlk iş:** V36 ve V37 `idle_look` kliplerini aynı kamerada karşılaştır; hızlı göz hareketlerini, kısa duraklamaları ve baştan önce odaklanmayı görsel olarak doğrula. V37 için bu kontrol henüz yapılmadı.
4. Sadece ilgili göz fonksiyonlarını oku. Tüm projeyi, gövde/bacak/kuyruk kodlarını tekrar tarama. Başka bölgeyi değiştirmek yeni ve ayrı iştir.
5. Gerçek göz kemikleri **`Eye_L` ve `Eye_R`**. `LeftEye_Bone` ve `RightEye_Bone` dosyada yok. Mesh nesneleri `LeftEye` ve `RightEye`.
6. **Next.js/Tailwind/React Three Fiber kurulmuş değil. `public/` altında son model yok.** Bunları mevcut altyapı diye anlatma.
7. GitHub deposu `alphanAkbulut/portfolio`, çalışma dalı `portfolio-chameleon`. Yerel üretim klasörü bir Git checkout değildir. `main`, `design-preview`, snapshot dalları ve canlı site korunacak.

## 1. Proje altyapısı ve gerçek dosya konumları

### 1.1 Mevcut sistem ile istenen mimarinin ayrımı

| Alan | Doğrulanan durum |
|---|---|
| Portföy deposu | https://github.com/alphanAkbulut/portfolio |
| Geliştirme dalı | `portfolio-chameleon` |
| Mevcut web kaynakları | Kök dizinde `index.html`, `styles.css`, `apple-style.css`, `hero-graph.js`, `hero-graph.css`, `typeface-preview.js`; statik HTML/CSS/JavaScript |
| Next.js App Router | İncelenen dal ağacında `package.json`, Next yapılandırması veya App Router uygulaması yok |
| Tailwind CSS | İncelenen dalda kurulum/yapılandırma kanıtı yok |
| React Three Fiber | İncelenen dalda React/R3F uygulaması veya bağımlılık kaydı yok |
| `public/` içindeki son model | **Yok; doğrulanmış bir yol verilemez** |
| Yerel model inceleme | `outputs/` altındaki HTML, görseller, videolar ve GLB dosyaları; `:8774` yerel sunucusu |
| Canlı portföy | https://alphanakbulut.github.io/portfolio/ — bu modelin entegre edildiği anlamına gelmez |
| Mimari hedef | Üç boyutlu etkileşim/video-hibrit yaklaşımı geçmiş planda değerlendirilmiş; framework geçişi tamamlanmış veya ölçülmüş sayılmaz |

Next.js + Tailwind + R3F, kullanıcının devir talebinde adı geçen hedef teknolojilerdir. Mevcut kaynaklarla çelişen şekilde uygulanmış gibi yazılmamalıdır. Yeni agent gerekirse bu teknolojileri ayrı entegrasyon diliminde kurmalıdır. Bu devir sırasında yeni uygulama, paket bağımlılığı veya framework geçişi yapılmadı.

### 1.2 Yerel kök ve sürümler

Yerel çalışma kökü:

```text
/Users/alphanakbulut/Documents/Codex/2026-10-20/referenced-chatgpt-conversation-this-is-an
```

| Rol | Çalışma köküne göre yol | Boyut, byte |
|---|---|---:|
| Son düzenlenebilir aday | `outputs/eyes-v37/chameleon-animated-v37.blend` | 464802446 |
| Son GLB adayı | `outputs/eyes-v37/chameleon-animated-v37.glb` | 188573780 |
| Önceki korunmuş temel | `outputs/limbs-v36/chameleon-animated-v36.blend` | 464525966 |
| Önceki GLB | `outputs/limbs-v36/chameleon-animated-v36.glb` | 188573780 |
| V37 üretim yaması | `work/eyes-v37/eye_patch.py` | Manifestte |
| Sadece animasyon fonksiyonları | `outputs/eyes-v37/animation-functions.py` | Manifestte |
| V37 sayısal/export kaydı | `outputs/eyes-v37/verification.json` | Manifestte |
| V36 karşılaştırma sayfası | `outputs/limbs-v36/review.html` | Yerel |

**Tam son model yolları:**

```text
/Users/alphanakbulut/Documents/Codex/2026-10-20/referenced-chatgpt-conversation-this-is-an/outputs/eyes-v37/chameleon-animated-v37.blend
/Users/alphanakbulut/Documents/Codex/2026-10-20/referenced-chatgpt-conversation-this-is-an/outputs/eyes-v37/chameleon-animated-v37.glb
```

Dosya adlarının veya boyutlarının eşit olması içerik eşitliği değildir. V36 ve V37 GLB boyutları aynı, SHA-256 değerleri farklıdır:

```text
V37 blend  387d5181f1ed7185183bb8fb738b4f3b9242884ca075330bdec602941da41628
V37 glb    0b398cb589c1d1a64eeabecae86f56e99332fab19e0a5f1d706e1d8b6da380bf
V36 blend  65a4f81ea7b0efda3d128947aee33135ace86e7b6f1f81afd69b5e80d0006ce3
V36 glb    1fe1ea8ec0d6e108506444c01272290d452e75284972672022cfa05c85511f66
```

### 1.3 Yerel sunucu ve araçlar

- Model indirme: http://127.0.0.1:8774/eyes-v37/chameleon-animated-v37.glb
- Korunmuş karşılaştırma: http://127.0.0.1:8774/limbs-v36/review.html
- Kaynak video: http://127.0.0.1:8774/head-video-review/source-player.html
- Tam kare incelemesi: http://127.0.0.1:8774/head-video-review/review.html
- Paketlenmiş araştırma: http://127.0.0.1:8774/video-research-v1/index.html

Bunlar yalnız sunucunun çalıştığı Mac'te geçerlidir; başka makine için indirme/hosting adresi değildir. V36 inceleme sayfasının açık olması V37'nin gösterildiği anlamına gelmez. V37 için ayrıca görsel inceleme sayfası hazırlanmadı.

Sunucu durmuşsa ve port boşsa, çalışma kökünde:

```sh
python3 -m http.server 8774 --bind 127.0.0.1 --directory outputs
```

Blender 4.5.14 LTS kurulum kaydı vardır. Çalıştırılabilir dosya `/Applications/Blender.app/Contents/MacOS/Blender`. V37 logu Blender 4.5 glTF dışa aktarıcısını kullanır. Geometri çalışmaları Blender Python/numpy ağırlıklıdır. Bu yerel araç zinciri bir Next.js build sistemi değildir.

## 2. 3D model anatomisi ve ad sözleşmesi

V37 GLB JSON metadata'sı bu devirde doğrudan kontrol edildi; yüzey/geometri buffer'ları yeniden analiz edilmedi.

| Tip | Gerçek ad | İşlev / dikkat |
|---|---|---|
| Mesh | `Body` | Ana karakter yüzeyleri tek mesh nesnesinde. Tek nesne olmak her yüzeyin manifold kaynaklı olduğu anlamına gelmez. |
| Mesh | `LeftEye` | Ayrı göz nesnesi; adı korunacak. |
| Mesh | `RightEye` | Ayrı göz nesnesi; adı korunacak. |
| Armature/node | `ChameleonRig` | Animasyonların bağlı olduğu rig. |
| Kemik | `Neck_Bone` | Boyun/baş hareketi; `Chest` altında. |
| Kemik | `Eye_L` | `Neck_Bone` altında bağımsız sol göz kontrolü. |
| Kemik | `Eye_R` | `Neck_Bone` altında bağımsız sağ göz kontrolü. |
| İstenen ama mevcut olmayan adlar | `LeftEye_Bone`, `RightEye_Bone` | Bunları arayan kod çalışmaz; mesh adı ile kemik adını karıştırma. |

Doğrulanmış kısmi hiyerarşi:

```text
ChameleonRig
└─ Root
   … Torso
      ├─ Chest
      │  └─ Neck_Bone
      │     ├─ Eye_L
      │     └─ Eye_R
      └─ Pelvis
         ├─ Tail_Base [eski kontrol]
         └─ Tail_01 → … → Tail_64
```

GLB skin kaydında **97 joint** var. `Tail_01`–`Tail_64` yeni esnek zincirdir; `Tail_Base` ve `Tail_Curl` adları da dosyada kaldığı için `Tail_` ile başlayan toplam ad sayısı 66'dır. Önek sayısını yanlışlıkla 66 yeni kuyruk segmenti diye yorumlama. Bu devir yeni kuyruk veya uzuv incelemesi yapmadı.

V30 dokümanındaki 33 kemik sayısı eski sürüme aittir. Göz küreleri, pullu göz çevresi, kafa bağlantısı ve yüzey ağırlıkları farklı kavramlardır; yalnız siyah açıklığı kaydırarak bütün göz hareketini temsil etme. Yeni isimlere geçmek gerekiyorsa bütün action/skin/runtime referansları birlikte ele alınmalıdır; bu devirde yeniden adlandırma yapılmadı.

### Klip sözleşmesi

| Action adı | Süre | Mevcut kapsam |
|---|---:|---|
| `walk` | 6 s | Dal üstünde yavaş yürüyüş; ileri kök hareketi vardır. |
| `idle_look` | 8 s | Hafif bekleme hareketi, seyirciye baş dönüşü, bağımsız göz taraması. |
| `drink` | 6 s | Baş/gövdeyi aşağı eğme simülasyonu; gerçek su/dil/ağız mekaniği değil. |
| `tail_coil` | 8 s | Açılma–spirale sarılma–açılma. |
| `tail_wave` | 8 s | Kuyruk kökünden sağa/sola yönlenme. |

V37'de beş Action GLB'ye dahil edildi. GLB kendiliğinden autoplay başlatmaz; uygulama animasyon oynatıcısı gerekir. `walk` eski kayda göre her döngüde X yönünde −0.32 model birimi ilerler: döngüde kapsayıcıya ilerleme eklenmez veya root-motion ayrıştırılmazsa geri sıçrama olur. Ayaklar dal temasına göre hazırlanmıştır; düz zemin yürüyüşü olarak kabul etme.

## 3. Panter bukalemunu göz araştırması

### 3.1 Kaynak ve çalışma kapsamı

Ana kaynak: MatthiasKabel, **Furcifer pardalis moving eyes.ogv**, 9 Ocak 2011:
https://commons.wikimedia.org/wiki/File:Furcifer_pardalis_moving_eyes.ogv

Seçilen lisans **CC BY-SA 3.0**. Kaynak video 1920×1080, nominal 24 fps, 360 kare / yaklaşık 15 saniyedir. Tek klip ve tek bireydir. Yaş/cinsiyet/locality bu dosya kaydından doğrulanmadı.

- F000–F359 sırayla çıkarıldı; 15 adet 24 karelik panoda görsel tarama yapıldığı önceki analiz kaydında belgeli.
- Sekiz yakın plan: F000, F007, F022, F058, F168, F185, F249, F293.
- F000, F168, F336 üzerinde görünür sınır ve oran işaretlemeleri yapıldı.
- 23 görsel olay işaretlendi. Bunlar 23 ölçülmüş fizyolojik saccade veya her mikro hareketin tam kataloğu değildir.
- Optik akış, 3B rekonstrüksiyon, kalibre bakış açısı, kas aktivitesi veya deri gerinimi ölçümü yapılmadı.
- Zamanlar `kare / 24` hesabıdır; konteyner PTS ayrı doğrulanmadı.
- Orijinal video SHA-256: `80f3d33c4d1fec3e45ac4130eb660a18803840c14187a5af5775ec41233a44da`.

Yerel araştırma dosyaları `outputs/head-video-review/` ve `outputs/video-research-v1/` altındadır. GitHub arşivi `docs/chameleon/evidence/video-review-v1/` yolundadır: 360 karenin 960×540 önizlemeleri 15 WebP atlasında, 15 inceleme panosu, 10 seçili tam boy kare, ölçüm/olay/kaynak kayıtları ve yeniden çıkarma betiği bulunur. Orijinal OGV ile 360 tam boy JPEG'in tamamı GitHub paketinde yoktur.

### 3.2 Hareket için önemli gözlemler

| Referans aralığı | Gözlem | Uygulama anlamı |
|---|---|---|
| F005–007 | Yakın göz açıklığı yön değiştiriyor; geçişte bulanıklık var. | Yavaş ve sürekli sinüs tek başına yeterli değil; kısa geçişler gerekli. |
| F019–022 | Açıklık aşağı ilerlerken kök kıvrımı görünümü değişiyor. | Açıklık ve pullu çevre birlikte değerlendirilmeli. |
| F056–058 | Yeni aşağı yönelim, açıklık daha oval görünüyor. | Perspektifte ovalleşme gerçek kapak kapanması kanıtı değildir. |
| F093–095, F111–114 | Uzak göz yön değiştirirken yakın göz aynı büyük hareketi yapmıyor. | İki göze aynı zaman çizelgesini kopyalama. |
| F162–168 | Uzak açıklık görünmez tarafa yöneliyor; yakın göz aşağı hareket ediyor. | Görünmezlik otomatik olarak göz kırpma diye etiketlenmemeli. |
| F183–185, F247–250 | Yakın açıklık kameraya daha dönük ve yuvarlak; parlak yansıma belirgin. | Göz yüzeyi, kök bağlantısı ve optik yansıma beraber kontrol edilmeli. |
| F291–293 | Yakın göz tekrar aşağı yöneliyor. | Bakış yönüyle kıvrım ve açıklık görünümü değişiyor. |
| F312–336 | Başın kadrajdaki konumu da değişiyor. | Bütün piksel hareketini göz hareketi sayma. |

**Asimetrik zamanlama:** Gözler bağımsız yön değiştirebiliyor; bu, her koşulda birbirinden habersiz iki rastgele hareket üretmek anlamına gelmez. Odaklanma anında koordinasyon gerekir.

**Saccade ve pause mantığı:** Kısa yön değişimi → kısa hedefte kalma → yeni tarama. Referansta görülen ritim animasyon tasarımını yönlendirir; 42 ms, 100 ms veya 125 ms'nin doğrudan videodan ölçüldüğü iddia edilmemelidir. 24 fps kaynak zaten yaklaşık 41.7 ms kare aralığına sahiptir.

### 3.3 Şekil, oran, burun ve ağız bulguları

- Pullu göz kubbesi baştan dışarı taşar; kökte hacimli ve yönle değişen bir deri geçişi vardır. Düz kafaya yapıştırılmış küre görünümünden kaçınılır.
- İki göz arasındaki orta burun/alın tablası geniş; yan kenarlar daha yüksek; ön çıkıntı kısa ve küt okunur. Tabla, göz manşeti ve dudak tek şişkin yüzey olarak birleştirilmemelidir.
- Kapalı ağız hattı ince ve yüzeye oturmalıdır. Burun çıkıntısı ile ağız kapanma hattı aynı yapısal ayrıntı değildir.
- Göz kapağında küçük bombeli pullar, orta tablada daha iri/yassı okunan pullar vardır. Bölge sınırları keskin desen bandı oluşturmamalıdır.
- F000/F168/F336 için görünür kapak eni / iki gözün dış uçları arası oran yaklaşık 0.33/0.32/0.31 çıktı. Bu **görüntüye özgü 2B oran**, gerçek göz çapı/kafatası eni veya tür normu değildir. Modeli bu sayılarla doğrudan küçültme.
- Arka = kuyruğa yakın taraf; ön = buruna yakın taraf. Kullanıcı bu yönleri özellikle netleştirdi.

### 3.4 Diğer araştırmalar ve sınırları

- Madcham tür sayfası, özellikle “Appearance and size”: https://www.madcham.de/en/furcifer-pardalis/ . Yerel kaynaklar `outputs/references/madcham-pardalis/` ve `work/madcham-pardalis/` altında.
- Oran çalışmaları: `outputs/morphometry/analysis.md`, `landmarks.json`, `measurements.csv`, `sources.json`. Bu dosyalar mevcut araştırmaya giriş noktalarıdır; bu devirde baştan analiz edilmedi.
- Kullanıcı Pinterest referansı: https://tr.pinterest.com/pin/422916221263481663/ ; yerel kayıt `outputs/references/pinterest-422916221263481663/`. Gerçek hayvan/video kimliği doğrulanmadan kesin anatomik kanıt sayma.
- Önceki veiled bukalemun göz videosu `outputs/chameleon-eye-reference.webm` ve repo `14-anatomy-and-motion.md` içinde kayıtlıdır; panter türünün ölçüsü yerine geçmez. Stok video lisansı ürün kullanım hakkı anlamına gelmez.
- V30 raporunda Higham & Anderson (2013), Fischer/Krause/Lilje (2010), Molnar ve ark. (2017) iskelet/uzuv kaynakları; Ketter Katz ve ark. (2015) bağımsız/koordineli göz hareketi kaynağı kayıtlıdır. İlgili türler aynı değildir.
- Göz çalışması: https://pubmed.ncbi.nlm.nih.gov/26157161/ . Baş takibi kaynakları V31 raporunda: https://doi.org/10.1016/0042-6989(85)90204-4 ve https://pubmed.ncbi.nlm.nih.gov/3258966/ . Bu devir yeni literatür taraması yapmadı; önceki kaynak kaydını devrediyor.
- Kullanıcının paylaştığı bir Vecteezy görselinde “Generative AI” etiketi görünüyordu. Bu görsel doğal anatomi/eklem sınırı kanıtı olarak kullanılmamalıdır.
- Referans fotoğrafları, video türevleri ve modelin lisansları ayrı değerlendirilir. Commons lisansını diğer fotoğraflara yayma; filigranları kaldırma.

## 4. V36 / V37 uygulama durumu

### 4.1 Sürüm evrimi — kısa navigasyon

| Sürüm | Ana değişiklik / anlamı |
|---|---|
| V17 | Kullanıcının beğendiği göz pul görünümü ve hareket denemesi. |
| V18–V22 | Göz–kafa bağlantısı, burun tarafında kaybolma/örtüşme ve pul boyutu geçişleri üzerine odaklı iterasyonlar. |
| V23–V25 | İlk ön uzuvda pilot birleşim ve deri/pul geçişi. Diğer uzuvların o aşamada geride kalması daha sonra gerçek kusur oldu. |
| V26–V27 | Baş/ense/burun biçimi iterasyonları. |
| V28–V29 | Web formatı için Body + iki ayrı göz düzeni; gözler arasındaki görünüş farkı düzeltmeleri. |
| V30 | Temel rig ve `walk`, `idle_look`, `drink`. |
| V31 | `idle_look` sırasında seyirciye belirgin baş dönüşü ve göz odaklanması. |
| V32 | Anatomi/uzuv yerleşimi devam çalışması; eski üç uzuv kökü henüz tam düzelmemişti. |
| V33–V35 | Uzun/esnek kuyruk, sıkı spiral, kökten yönlenme, daha yumuşak ve simetrik çıkış; iki kuyruk klibi. |
| V36 | Diğer üç uzuv kökünün yuvarlatılması ve kademeli pul geçişleri; ilk başarılı uzuv, baş, gözler ve V35 kuyruk korunur. |
| V37 | Yalnız göz dönüş kanallarına hızlı geçiş/duraklama ve odaklanma zamanlaması cilası. |

Bu tablo yerel sürüm geçmişidir; her satırın ayrı GitHub commit'i olduğu anlamına gelmez. Eski plan kapılarının tamamı bu sürümlerle otomatik kapanmış sayılmaz.

### 4.2 V36'nın koruma sınırı

V36 teslim kaydı diğer üç proksimal uzuv kökünü düzeltir. İlk başarılı ön uzuv, baş, iki göz, bütün V35 kuyruk, rig ve beş Action korunmuştur. `preservation.json` bu alanları; `verification.json` GLB reimport, isimler, ağırlıklar ve örneklenmiş animasyon pozlarını kontrol eder. Üç yürüyüş anındaki görseller önceki turda incelendi.

Bu, tek Body nesnesi içinde görsel olarak teğet birleşimdir; bütün uzuv tabanlarının manifold kaynaklı olduğu iddia edilmez. Örneklenmiş pozların geçmesi her olası pozda çarpışmasızlık garantisi değildir. V36 göz yamasının güvenli kaynak checkpoint'idir; yeniden gövde üretimi gerekmez.

### 4.3 V37'den önceki bağımsız göz hareketi

V30'da her göz için quaternion dönüşleri üretilmişti. Ortak ritim korunurken yanlara özgü faz/yön farkı uygulanıyordu:

- `idle_look` tarama genliği 0.09 rad; `walk` 0.035 rad.
- Dikey taramada 0.055 rad katsayısı ve yanlara özgü faz kullanıldı.
- `drink` sırasında aşağı yönelim ayrı hesaplandı.
- Bu hareketler sinüs tabanlı animasyon tasarımıydı; videodan izlenmiş 3B açı verisi değildi.

V31 `idle_look` içinde ön gövde ve boyun dönüşünü birleştirerek seyirciye yönelmeyi artırdı. Gözlerde odak zarfı ile yaklaşık ±0.70 rad yönlenme kullanıldı. Önizleme kamerası sabittir; web kamerasını taşıyınca otomatik izleme oluşmaz. Yaklaşık 80.7° toplam yatay baş yönelmesi, 15° ön gövde payı ve yaklaşık 10.2° yükselme tasarım değerleridir; türün ölçülmüş boyun sınırları değildir.

### 4.4 V37'nin tam teknik davranışı

Kaynak dosya V36 açılır. Yama yalnız `walk`, `idle_look`, `drink` içindeki `Eye_L` ve `Eye_R` `rotation_quaternion` F-curve'lerini yeniden örnekler. Baş/boyun eğrilerine yeni keyframe yazmaz. Diğer nesneleri veya geometriyi yeniden üretmez.

Önemli nüans: **Temel bağımsız hareket korunarak yeniden örneklenmiştir; özgün göz keyframe'leri V37 içinde byte-byte aynı değildir.** Ayrı, açılıp kapatılabilir NLA additive track oluşturulmadı. Geri dönüş/karşılaştırma için değişmemiş V36 dosyası tutulur.

| Parametre | Değer |
|---|---:|
| Hızlı geçiş zarfı | 0.042 s |
| Hedefte kısa bekleme | 0.100 s |
| Küçük açısal offset'in geri sönmesi | 0.180 s |
| Temel zamanın yakalanma aralığı | 0.138 s |
| Sağ göz olay gecikmesi | 0.370 s |
| `idle_look` odak girişinde zaman ilerletme | En fazla 0.125 s |
| Yama örneklemesi | 24 fps sahnede yarım kare aralığı, yaklaşık 48 Hz |
| Quaternion interpolasyonu | Normalize quaternion, işaret sürekliliği, LINEAR keyframe |
| Kuvvet çarpanları | idle 1.0; walk 0.55; drink 0.30 |

Sol göz olay başlangıçları: **0.45, 3.45, 5.05, 6.65 saniye**. Sağ göz bunlardan 0.37 saniye sonra. Klip sonuna 0.4 saniyeden az kalan olaylar çıkarılır; 6 saniyelik klipler son olayı almaz.

Açısal offset çiftleri derece cinsinden `(yaw, pitch)`: `(2.3, 1.1)`, `(-1.7, 0.8)`, `(1.4, -1.2)`, `(-2.0, 0.7)`. Bunlar deterministik tasarım değerleridir. İki gözün olayları farklı zamanda gerçekleşir, fakat offset dizileri tamamen ayrı stokastik davranış modeli değildir.

Fonksiyon haritası:

- `curves(action)`: Blender action kanallarını, katmanlı action yapısı dahil toplar.
- `smooth(x)`: sınırlandırılmış cubic smoothstep.
- `eye_time(...)`: kısa duraklamada temel göz hareketinin zamanını tutar; sonra yakalar. `idle_look` odak girişinde yumuşak biçimde en fazla 125 ms ilerletir.
- `saccade_offset(...)`: hızlı yükselen, kısa sabit kalan, yumuşak sönen küçük yaw/pitch düzeltmesi üretir.
- `polish_eyes(action)`: değişiklikten önce temel göz eğrilerini değerlendirir; offset'i kemiğin rest yönüne dönüştürüp quaternion ile birleştirir, sonra yalnız dört quaternion kanalını yazar.

`eye_patch.py` tam çalıştırıcıdır. `animation-functions.py` yalnız fonksiyonları içerir; `rig` ve `fps` bağlamını çağıran taraf sağlamalıdır. Üretim yaması mutlak Mac yolu içerir ve aynı hedefi yeniden yazabilir. Başka makinede yol uyarlanmadan çalıştırma; V37'yi tekrar tekrar kaynak yapıp katmanı biriktirme. Yeni çalışma V38 gibi ayrı hedefte ve açık kaynak seçimiyle yapılmalı.

### 4.5 Doğrulananlar ve henüz doğrulanmayanlar

**Doğrulanan:**

- V37 `.blend` ve `.glb` yerelde oluştu; boyut ve SHA-256 bu devirde yeniden kaydedildi.
- Gerçek GLB metadata'sında üç mesh adı, kritik kemikler, 97 joint ve beş klip var.
- Önceki export kontrolünde iki göz için animasyon kanalları bulundu.
- Yama aşamasında göz döngüsü başlangıç/son quaternion farkı sıfır raporlandı.
- Temel eğriye en büyük göz farkları: idle sol 4.506° / sağ 3.602°; walk 1.397° / 1.412°; drink 0.792° / 0.737°.

**Henüz doğrulanmayan / açık:**

- V37'nin gerçek GLB oynatımında sıçrama, duraklama ve odaklanmanın doğal görünmesi.
- Gözün hedefe gerçekten baştan tam 125 ms önce ulaştığı ölçümü. Kod maksimum zaman ilerletmesi yapar; dünya uzayında hedefe varış ölçülmedi.
- 48 Hz Blender keyframe örneklemesinin export sonrası aynı zaman çözünürlüğünde kaldığı. Export force sampling kullanır; 24 fps örnekleme çok kısa hareketleri yaklaşık bir kareye indirebilir.
- V37 için bağımsız, kapsamlı V36–V37 geometri/rig/diğer kanal hash karşılaştırması ve tam GLB reimport testi. Yama kodunun sınırlı kapsamı böyle bir testin yerine geçmez.
- Kullanıcının V37 için görsel kabulü.
- Canlı cursor tracking, gerçek hedef seçimi, anatomik açı limitleri ve gözler arasında hedefe bağlı koordinasyon.
- Video hareketlerinin kare kare 3B ölçülüp modele aktarılması. Bu yapılmadı; V37 referansın ritminden esinlenmiş matematiksel ciladır.

## 5. Yeni agent tam olarak nereden başlamalı?

### A. İlk küçük iş: mevcut göz cilasının kabulü

1. V36'yı kaynak/karşılaştırma olarak koru. V37'de `idle_look` klibini seç.
2. Aynı kamera ve hızla iki sürümün göz yakın planını göster. Özellikle olay başlangıçlarının öncesi/sonrası ve başın seyirciye dönüş girişini incele.
3. İki gözün aynı anda aynı yönü kopyalamadığını, 100 ms beklemelerin fark edilir ama mekanik olmadığını kontrol et.
4. Başın/Neck_Bone'un temel hareketi değişmeden gözlerin önden hedefe yöneldiğini ölç. Bir karelik sıçrama, göz kökünde açılma/gömülme veya istemsiz senkronizasyon varsa sadece göz zamanlama/offset fonksiyonunu düzelt.
5. Export edilmiş GLB'yi de oynat; yalnız Blender görünümünü kabul etme. Sonuç ve örnek kareleri kaydet; kullanıcıya küçük farkı göster.

Bu iş için okunacak dosyalar: `PROJECT_STATUS.md`, `outputs/eyes-v37/animation-functions.py`, `outputs/eyes-v37/verification.json`; gerekirse araştırmadaki `events.json`. Gövde/bacak/kuyruk kodlarını okumaya gerek yok.

### B. Ertelenen iş: canlı bağımsız göz takibi

Bu kod henüz yoktur. Kurulursa temel animation mixer pozunun üstüne sınırlandırılmış göz yönelimi eklenmeli; her kare baz pozdan başlanmalı, offset birikmemelidir. `Eye_L`/`Eye_R` ayrı kontrol edilir, kafa parent dönüşümü hesaba katılır, gaze/animation çakışması önlenir. Hedefe ulaşma, kısa bekleme ve doğal tarama durumları ayrılmalıdır. Bu bir öneridir; hazır bileşen adı veya uygulanmış R3F hook'u değildir.

### C. Ertelenen web entegrasyonu ve kalan ürün işleri

188.6 MB GLB bir web formatıdır fakat mobil kullanıma optimize edilmiş teslimat değildir. LOD, pul detayını texture/normal bake'e taşıma, sıkıştırma ve cihaz ölçümü ayrı iş olarak ele alınmalıdır; kullanıcı onaylı görünümü bozmamalıdır. Next.js/R3F geçişi gerekiyorsa önce küçük yükleme/klip oynatma denemesi yapılmalıdır. Uygulama kurulmadan `useGLTF`, `useAnimations`, `Canvas` veya `public/models/...` varmış gibi referans verme.

Nihai orman sahnesi, dil–su teması, ripple, site palet geçişi, scroll kamera, erişilebilirlik/reduced-motion ve production kabulü tamamlanmış değildir. `drink` klibi bunların yerine geçmez.

Korunan hikâye niyeti: 8 footfall → kısa göz taraması → 4 footfall → güvenlik taraması → dil/su teması → bir gözün ziyaretçiyi fark etmesi → başın yönelmesi → ikinci ripple ve karakter/site palet değişimi → canlı göz takibi/scroll çıkışı. Bu, tamamlanmış klip orkestrasyonu değil, eski kararlarda saklanan ürün akışıdır. Ziyaretçi animasyonu izlemeye zorlanmamalıdır.

## 6. GitHub commit geçmişi ve devir güncellemesi

### 6.1 Doğrulanan geçmiş

Bu devirden önce `portfolio-chameleon` HEAD: **`7c95e50ff8f7b8177d37eabd004f17f69213d784`**. `main` geçmişiyle karıştırma. Aşağıdaki kayıtlar bu dalın commit listesinden okundu:

| Commit | Rol |
|---|---|
| `71292b88b3f1` | Deri bölgeleri ve farklı ölçek/renk uçlarının karşılaştırması. |
| `8a5d4549a0a9` | Göz–yanak geçişinde pul büyüklüğü karışımı. |
| `74f52f85654f` | Nötr göz zarfı ve anatomi/hareket değerlendirmelerinin ayrılması. |
| `77d4a4b2c32c` | Göz hareketi kanıtları ve E1 test tanımı. |
| `3744c270128e` | Footfall ve dil/su temas hikâyesi kararı. |
| `144c84d298a6` | E1 gözlerini kullanan düzenlenebilir beden kil çalışması. |
| `e2c469b096a0` | V17 tasarım geçmişi ve devir checkpoint'i. |
| `3d8907076167` | Render/hareket/kaynak arşivi. |
| `9d29fa56c5b6` | V17 göz hareketi temel kaydı. |
| `7644d3245652` | Kullanıcının kabul ettiği V17 göz pul görünümünün korunması. |
| `17558eaa4385` | V18 göz kökü adayı. |
| `cb47d092beb5` | V19 yönlü göz kökü derisi. |
| `184eae181b85` | V20 burun tarafı bağlantısı ve kalan hareket açığı. |
| `3ca3074065f3` | Atıflı panter göz videosu iframe referansı. |
| `7c95e50ff8f7` | 360 karelik araştırma arşivi. |

Tam SHA/message kayıtları devir paketindeki `commit-history.json` dosyasındadır. Commit sayfası kalıbı: `https://github.com/alphanAkbulut/portfolio/commit/<SHA>`.

### 6.2 Bu devir güncellemesinin kapsamı

- Repo köküne bu `PROJECT_STATUS.md`.
- Kök README ve güncel durum diye eski V17/plan bilgisini sunan giriş belgelerine yeni durum bağlantısı.
- Eski araştırmalar silinmeden tarihsel statü ve okuma önceliği düzeltmesi.
- `docs/chameleon/evidence/handoff-v37/`: son model manifesti, commit geçmişi, V37 göz yaması/fonksiyonları, V37 doğrulama kaydı, V36 koruma/doğrulama kayıtları, ilgili sürüm notları.
- Eski `artifact-index.json` kayıtları korunarak güncel manifest bağlantısı eklenmesi.
- Uygulama kaynakları, anatomi, modeller, main/production/DNS bu devirde değiştirilmez.

Devir commit'i dalda okunarak doğrulanmalı; aynı commit'in SHA'sı kendi içeriğinde güvenilir biçimde önceden yazılamaz. İşlem sonucu ayrı `publication.json` kaydında ve teslim mesajında yer alır. `[skip ci] [skip netlify]` commit notu yayınlama niyeti olmadığını belirtir; deploy ayarlarının yerine geçen teknik garanti değildir.

### 6.3 GitHub arşivi ile model yedeği ayrımı

**Büyük V36/V37 `.blend` ve `.glb` dosyaları bu devir commit'ine dahil değildir.** Dosyalar yerelde korunur; repo manifesti yalnız yol/boyut/hash kaydıdır. GitHub'daki kaynak kod ve raporların varlığı model binary'sine erişim sağlamaz. Başka makineye devir için en az V36 `.blend` ve V37 `.blend`/`.glb` dosyaları ayrıca aktarılmalı; SHA-256 doğrulanmalıdır. Büyük dosyalar için `outputs/handoff-v37/chameleon-handoff-v37.zip` yerel aktarım paketi hazırlanır: V36 `.blend`, V37 `.blend` ve `.glb`, bu belge ve 20 dosyalık devir kayıtları. Zip içeriği açılıp hashlerle kontrol edilir. Paket başka makineye kendiliğinden aktarılmaz; GitHub LFS veya release-asset dağıtımı yapılandırılmadı. Yerel sunucu açıksa indirme: http://127.0.0.1:8774/handoff-v37/chameleon-handoff-v37.zip . Paket hazır/sağlam sonucu ayrı yerel `work/handoff-v37/transfer-verification.json` kaydında bulunur.

Temiz checkout'tan bütün V1–V37 zincirinin yeniden üretilebilirliği doğrulanmış değildir. Özellikle son göz yaması V36 `.blend` gerektirir. Dosya yoksa eski B1/V17'yi son sürüm sanıp karakteri baştan üretme; eksik checkpoint'i açıkça iste.

## 7. Devir kuralları ve açık işlerin önceliği

- Küçük, odaklı, incelenebilir değişiklikler. Kullanıcı tüm scriptin tekrar yazılmasını ve her tur bütün projenin okunmasını istemiyor.
- Onaylı göz/pul/deri geçişlerini koru; önceden iyi çalışan bağımsız hareketi silme.
- Orijinalin üzerine yazma; kaynak sürümünü hash ile belirle ve yeni hedef sürüm oluştur.
- Bir raporun veya kodun varlığını görsel kalite, biyolojik doğruluk veya production başarısı sayma.
- Eski belgelerdeki “plan onayı bekliyor”, “rig yok”, “tek göz tamamlandı” ifadeleri tarihsel durumdur; V37 güncel durumunu geçersiz kılamaz.
- Şu an yalnız devir yetkilidir. V37 görsel kabulü gelecekteki devam noktasıdır; canlı bağımsız hedef/imleç takibi, web entegrasyonu ve performans optimizasyonu kullanıcı tarafından ertelendi. Genel anatomi/renk/sahne/framework yeniden tasarımı ayrı kapsamdır.
- Yeni araştırma gerekiyorsa tek soruya yönelik yap; mevcut 360 kareyi yeniden çıkarma veya bütün literatürü tekrar tarama.
- Bu devirde yeni model üretilmedi, V37 görsel testi yapılmadı, canlı site yayımlanmadı.

**Başarı ölçütü:** Yeni agent son dosyayı doğru yerden açar, gerçek kemik/klip adlarını kullanır, V36'yı koruyarak sadece V37 göz cilasını değerlendirir; eksik web altyapısını ve eksik model transferini yapılmış gibi sunmaz.
