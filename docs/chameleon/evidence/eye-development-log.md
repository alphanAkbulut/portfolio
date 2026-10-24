> Historical local record, preserved on 2026-10-25. Relative artifact paths refer to the original local outputs directory, not GitHub. Statements saying no commit describe their original task. Current status: ../15-current-state-and-resume.md.

# Göz: boyut, üç boyutlu çıkıntı ve hareketli deri analizi

24 Ekim 2026 — analiz tamamlandı; göz modeli değiştirilmedi.
Kaynak model: `outputs/body-study/chameleon-study-v3.blend`. SHA256 ve gerçek geometri ölçüleri `measurements.json` içinde. Dosyanın değişmediği hash ile doğrulandı. Yan/ön/üst/üç çeyrek ortografik renderlar `model-four-views.jpg` içinde.

## 1. Fotoğraf ölçümü: ne ölçüldü?

Önceki 10 panter bukalemunu fotoğrafı yeniden kullanıldı. Kaynak adresleri ve özgün görsel hashleri `../morphometry/sources.json` içinde; referans numaraları aynı. `reference-eye-ratios.jpg` üzerindeki turuncu elipsler göz küresini değil **dıştan görünen pullu göz kapağı kulesini** yaklaşık sınırlar. Elips merkezi/yarıçapı ve hesaplar `reference-measurements.json` içinde.

Eşdeğer çap = 2√(rx×ry); baş uzunluğu önceki burun–boyun eksen projeksiyonu. Bu normalize edilmiş 2B oranların ortalaması **0,31**, aralığı **0,26–0,35**, n=10 fotoğraf. Tek gözlemcinin elle sınırlandırması; özellikle 02,05,06 düşük çözünürlükte. Birey bağımsızlığı, yaş ve kamera kalibrasyonu bilinmiyor. Bilimsel tür ortalaması veya milimetrik ölçü değildir. Göz yönü elipsin görünüşünü değiştirir.

Modelin kapak kökü çapı/önceki baş uzunluğu yaklaşık **0,57**. Bu 3B kök halkası çapıdır; fotoğrafların görünür kule çapıyla bire bir aynı ölçü değildir. Dolayısıyla “tam %46 küçült” kararı çıkarmıyoruz. Ancak yan görünüşteki büyük kapak alanı ve dört açıdaki hacim, gözün başa göre iri kaldığını destekliyor. İlk boyut denemesi için 0,35–0,40 görünür çap/baş oranı önerilir: bu bir **tasarım denemesi hedefi**, doğrulanmış biyolojik sınır değildir. Kök, kapak gövdesi, açıklık ve çıkıntı ayrı ayarlanmalı; bütün gözü tek ölçekle küçültmek yetmez.

## 2. Mevcut 3B modelin ölçüsü ve bulgular

| Özellik | Model ölçüsü / gözlem |
|---|---|
| Kök halkası eşdeğer çapı | 0,691 tasarım birimi |
| Kök merkezi–en ileri halka merkezi mesafesi | 0,418 birim; kök çapının 0,61'i |
| İç açıklık çapı | 0,105 birim; kök çapının 0,15'i |
| Göz kapağı geometrisi | 101 halka; dönel simetriden üretilmiş, hafif oval |
| Deformasyon düzeni | Armature yok; göz shape key'i yok; göz parent'ı yok |
| Göz–baş bağlantısı | Ayrı meshler; üst/üç çeyrek görüntüde açık siyah yarık |
| Deri görünüşü | Yanakta belirgin hücreler; gözde çok daha silik/bulanık yüzey; birleşimde kesinti |

**0,418 gerçek hayvanın göz çıkıntısı değildir.** Modelin kendi kök halkasından ölçülür; yanağın gerçek yüzeyinden ölçülen görünür çıkıntıyla da eşit değildir. Kalibre edilmiş aynı bireyin ön/üst/yan görüntüleri veya 3B taraması olmadan panter türü için doğru çıkıntı oranı saptanamadı. Yalnız yandan fotoğraflarla bunu tahmin edip garanti etmeyeceğiz.

Ön görünüş dışa açılmayı gösteriyor, üst görünüş ise başa yapışan tabanın oturmadığını ortaya çıkarıyor. En kritik hata bu açık birleşimdir. Dönme ekseni de kök halka merkezine otomatik bağlanmamalı; gözün orbital hacmi içindeki bir pivot denenmeli. Kökten menteşe gibi dönme, koca kapağı yanağı terk eden bir koniye dönüştürür.

## 3. Anatomik kanıt ile animasyon varsayımını ayırma

Anderson & Higham'ın anatomi bölümünde dışarı taşan gözün pullu kapaklarla çevrelendiği ve küçük bir merkezi açıklık bulunduğu açıklanır. Bu nedenle görünen dış kütle çıplak göz küresi değildir; pullu kapak sistemidir. [Chameleon Anatomy, §2.3](https://www.researchgate.net/profile/Timothy-Higham/publication/258346020_Chameleon_anatomy/links/004635334bb0e4859e000000/Chameleon-anatomy.pdf).

Göz yönü değiştikçe açıklığın daireden elipse ve görünmez duruma geçmesi çalışmalarda yön sınıflandırmasında kullanılır. Açıklık dar görünüyorsa bunu otomatik olarak göz kırpma veya açıklık çapının fiziksel küçülmesi saymamalıyız. Bu çalışma **Chamaeleo chamaeleon** üzerindedir; panter ölçüsü olarak aktarılmadı. [2013 PLOS ONE, Fig.2 ve yöntem](https://journals.plos.org/plosone/article?id=10.1371/journal.pone.0070761).

Üç boyutlu tarama hareketlerinin rastgele üç eksenli yuvarlanma olmadığı, göz pozisyonlarının Listing yasasına yüksek hassasiyetle uyduğu deneysel olarak bildirilir. Rig için sonuç: hedefe yaw/pitch yönelimi ve kontrollü torsiyon; rastgele roll eklememek. Tam biyomekanik model burada kurulmadı. [Sándor, Frens & Henn, 2001](https://pubmed.ncbi.nlm.nih.gov/11448716/).

## 4. Önceki video referansı: göz ve deri birlikte nasıl davranıyor?

[Shutterstock klip 11428904](https://www.shutterstock.com/tr/video/clip-11428904-macro-shot-4k-uhd-veiled-chameleon%27s-eyes). Kaynak adı **veiled chameleon**; panter değildir. Mevcut yerel önizleme: `outputs/chameleon-eye-reference.webm`, 596×336, yaklaşık 29,97 fps. Önceden çıkarılmış kareler yeniden kullanıldı. Bu turda ilk 2,75 saniyelik temas sayfaları incelendi; tüm klibin yeniden kare kare incelendiği iddia edilmiyor. `motion-reference.jpg` dört seçili kareyi gösterir. Zamanlar nominal kare/fps temelli; konteyner PTS doğrulanmadı.

- 0,00 s: görüntünün solundaki kule yana dönük; açıklığı görünmüyor. Sağ tarafta da küçük açıklık seçilemiyor.
- Yaklaşık 0,50–1,25 s: görüntünün sağındaki açıklık görünür hâle geliyor; konumu ve çevresindeki kapak silueti birlikte değişiyor. Yalnızca siyah pupili yüzeyde kaydırmak bunu taklit etmez.
- 1,50–2,75 s: iki göz farklı yönlerde kalabiliyor; sağdaki açıklık daha önden görünürken soldaki yana dönük. Kapak tabanında sıkışmış kıvrımlar seçiliyor; göz bir metal top gibi baş üzerinde kaymıyor.
- İnce pulların tek tek yer değiştirmesi bu çözünürlükte güvenilir izlenemiyor. Deri gerinim yüzdesi, doku kalınlığı, tam pivot veya açısal hız ölçülmedi. Kıvrımların sıkışma/gerilmeyle değiştiği yorumu animasyon hipotezidir; malzeme fiziği ölçümü değildir.

## 5. Önerilen deri ve hareket yapısı — henüz uygulanmadı

1. **Başa bağlı taban:** çevre halkası başla kesintisiz birleşir. Ya ortak topoloji ya da açıklık bırakmayan kontrollü bir örtüşme kullanılır; mevcut açık kenar korunmaz.
2. **Esneyen geçiş halkası:** baş tarafında hareket az, kapağa yaklaştıkça daha fazla. Bir yanda kıvrımlar sıkışır, karşı yanda açılır. Dağılım pose düzeltmeleriyle kontrol edilir; büyük lastik esnemesi yapılmaz.
3. **Yönelen kapak ve iç göz:** açıklık, iris ve pupil tutarlı bir optik eksende kalır. Görünen açıklık açısı geometri/projeksiyonla değişir; kameraya dönük sabit bir disk olmaz.
4. **Pullar:** kapakta küçük, yanakta daha iri; aradaki geçiş karışık boyutlu. Pullar deri yüzeyine bağlı hareket eder. Mevcut Object-coordinate prosedürel doku, vertex deformasyonu altında sabit koordinat alanında kalabileceğinden yüzey üzerinde kayma riski taşır. UV/rest-coordinate tabanlı kaplama ve birkaç takip pulu ile doğrulanmalı. PBR mikrodetay tek başına makro birleşim yarığını kapatamaz.
5. **Çıkıntı ve hacim:** göz büyüklüğü azalırken çıkıntı bağımsız ayarlanır. Bütün koniyi aynı oranda küçültmek veya kapağı başın içine gömmek çözüm değil. Dönüşte hacim çökmesi ve başa çarpma kontrol edilmeli.

## 6. Küçük uygulama görevleri ve kabul kapıları

**G1 — statik göz formu/bağlantısı:** mevcut B3'ü koruyarak yalnız göz kulelerini revize et; dört açıdan aynı kamera ile karşılaştır. Kabul: açık birleşim yarığı yok, açıklık içi boşluk yerine tutarlı iç göz gösteriyor, kapak/yanak pulları kesintisiz geçiyor; görünür çap hedefi değerlendirilmiş. Kullanıcı görsel kontrolünden sonra dur.

**G2 — tek göz hareket testi:** G1 onayından sonra yalnız bir göz, diğer göz sabit. Nötr, yatay ±30°, düşey ±20° ve çapraz pozlar; ardından baş öne bakarken kameraya yönelme. Bunlar mühendislik test pozları, biyolojik limitler değil. Mevcut göz ekseni yana baktığından öndeki kameraya dönüş yaklaşık 77° gerektirir; yalnız ±30° testini geçmek final sahne için yeterli değildir. Pivot ve esneyen taban bu pozda özellikle kontrol edilmeli.

Kabul: tüm testlerde baş bağlantısı açılmaz; pupil/iris kapaktan dışarı çıkmaz; deri ters dönmez; pullar yüzey üzerinde kaymaz; yön değişimi ve kısa sabitleme görülür. Tek bir güzel kare yeterli değil: yakın ve hero ölçeğinde kısa video gerekir. İki bağımsız göz, cursor takibi ve bütün sahne entegrasyonu bu kapıdan sonra ayrı görevdir.

## Doğrulama ve kalan belirsizlik

10 fotoğraf elipsi görsel olarak kontrol edildi; dört gerçek Blender renderı incelendi; modelde rig/deformasyon yapısının bulunmadığı dosyadan okundu; kaynak .blend hash'i değişmedi. Statik araştırma tamamlandı, yeni göz veya hareket testi yapılmadı. Doğru panter çıkıntı oranı, doku mekaniği ve biyolojik dönme merkezi hâlâ ölçülmüş değil. Bu nedenle sonraki çıktı anatomik doğruluk garantili göz değil, referansla karşılaştırılabilir küçük bir form prototipi olacaktır.


## G1 uygulama kaydı

G1 ayrı `outputs/body-study/chameleon-study-v4.blend` dosyasında uygulandı. v3 hash ile korunmuş. Kule radyal boyutu 0,68, eksen boyunca uzunluğu 0,82 ile ayarlandı; iris ve pupil aynı dönüşümle taşındı. Her gözün 128 kök noktası baş yüzeyine ışın testiyle oturtuldu ve 0,018 birim içeri bindirildi. İlk 35 halkada yumuşak geçiş uygulandı. Bu statik örtüşmedir; kaynaklanmış veya hareket testinden geçmiş deri değildir. Göz üzerindeki ince bump görünürlüğü artırıldı; yanakla pul boyutu geçişi hâlâ önizleme düzeyinde. Dört açı kontrol edildi, önceki açık kök yarıkları nötr pozda görünmüyor. Blender dosyası yeniden açıldı. G2 tek göz hareket testi henüz yapılmadı.

## G2 — tek göz hareket testi: uygulandı, görsel kabul geçmedi

Dosya: `../body-study/chameleon-study-v5-eye-motion.blend`. v4 korunmuştur. Kontrol: `G2 near eye control` içindeki `EyeAim` kemiği. 1–90 kare, 15 fps, 6 saniye. Diğer göz ve gövde sabittir.

Kurulan yapı: göz kapağına ağırlıklı, hacim korumalı armature deformasyonu; iris/pupil tam ağırlıkla aynı kemiği takip eder. İlk kök halkaları baş koordinatında sabit kalır. Ara halkalarda etki yumuşak artar. `skin_rest` koordinatları prosedürel dokunun deforme olan yüzeyi takip etmesi için kaydedilmiştir; görsel pul kayması kabulü henüz verilmedi.

Test sırası: nötr → yatay −30° → +30° → düşey +20° → −20° → başın önüne yönelme (~77°) → kısa bekleme → nötr. Bunlar animasyon test açıları/zamanlarıdır, doğal hareket limitleri veya bilimsel hız ölçüleri değildir. “Ön” hedef başın ön eksenidir; eğik yerleştirilmiş test kamerasının konumu değildir.

90 kare boyunca kök nokta kayması ve sonlu geometri değerleri kontrol edildi. Kökün sabit kalması görsel başarı anlamına gelmedi: **büyük öne dönüşte kapak geçiş bölgesi kendi üzerine katlanıyor, koyu yarık ve üçgensel gerilme oluşturuyor.** G2 görsel kabulü FAILED olarak kaydedildi. İlk ağırlık denemesi, baş yüzeyi dışına sınırlama ve pivot/etki yayılımı düzeltmesi sorunu çözmedi. Ara denemeler çalışma klasöründe tutuldu; aynı denemeler onaylanmış sürüm olarak sunulmadı.

En son denemede pivot kök merkezinden göz yönünde 0,22 tasarım birimi ileridedir; deneysel seçimdir. Geçiş halkalarının yüzey sınırı mevcut, fakat kendisiyle çakışmayı önlemiyor. Görünen hata yalnız bir doku hatası değildir; bağlantı geometrisi ve deformasyon düzeni değişmelidir.

Sonraki küçük düzeltme: göz kapağını orbital hacim çevresinde hareket eden hacim ve daha geniş, başa sabit bir çevresel deri geçişi olarak yeniden kurmak; büyük dönüş için düzeltici şekiller eklemek. Aynı öne dönüş ve üst görünüş yeniden sınanmadan çift göz/cursor entegrasyonuna geçilmemeli. Başarısızlığı gizlemek için büyük dönüş testini kaldırmak veya hareket aralığını sessizce daraltmak uygun değil.

## G3 — kullanıcı düzeltmesi: menteşe yaklaşımı reddedildi

Kullanıcı G2'nin yalnız uç pozunu değil hareket mantığını da yanlış buldu. G2, mevcut konik kapak ağını ağırlıklı döndürdüğü için kapağı yatırıyordu; bu çözüm devam ettirilmedi.

Yeni kaynak v4, çıktı `../body-study/chameleon-study-v6-eye-motion.blend`. Yalnız yakın göz yeniden kuruldu. Dışbükey küresel yüzey yaklaşık sabit tutuluyor; açıklık ve çevresindeki yüzey noktaları küre üzerinde yön değiştiriyor. Baş tarafındaki çevresel sınır sabit. İris ve pupil, hareket eden açıklığın normaline hizalanıp hemen arkasında kalıyor. Bu, eklemden sallanan bir koni değil, küresel yüzey üzerinde hareket eden açıklık denemesidir.

Teknik uygulama: 56 halka × 128 çevresel nokta, 0,24 tasarım birimi yarıçap. Yüzey yön dönüşümü çevreden açıklığa doğru dağıtılır; ilk 10 halka önceki baş bağlantısına geçiş yapar. Rest-coordinate doku yüzey noktalarına bağlıdır. Her kare şekil anahtarlarına kaydedildi; dosyanın oynatılması Python handler veya otomatik script iznine bağlı değil. Bu ilk deney kontrol kolaylığı yerine taşınabilirliği tercih eder; nihai etkileşimli rig değildir.

90 karede çevre noktası kayması <1e-6, örneklenen küresel yüzey yüzlerinde yön terslenmesi 0. Kontrol, tüm mesh için kapsamlı self-intersection testi değildir. Yan/eğik ve öne bakışın üst görünüşü incelendi: G2'deki büyük üçgensel katlanma bu kontrol pozlarında görülmüyor. İlk ve son şekil nötrdür; ileri, geri, yukarı, aşağı ve test kamerasına bakış bulunur. Diğer göz sabittir, iki göz birlikte yeniden yapılmış değildir.

**Sınırlar:** Bu bir küresel hareket prototipidir. Gerçek göz kapağının asimetrik şekli, kıvrımların sıkışması ve gerçek deri mekaniği henüz çözülmedi. Yatay test yaklaşık 150° toplam yön değişimini kapsar; kullanıcının bahsettiği tam 180° aralık ayrıca doğrulanmalıdır. Her yöne 180° dönebildiği veya gerçek biyomekanik pivot bulunduğu iddia edilmez. Önce kullanıcının yeni hareket mantığını değerlendirmesi gerekir; ardından doğal kapak şekli ve kıvrımlar işlenmeli.

## G4 hazırlığı — gerçek panter gözünde deri ve kırışıklık incelemesi

**Durum: araştırma tamamlandı; modele yeni deri/kırışıklık uygulanmadı.** Kaynak, MatthiasKabel'in 9 Ocak 2011 tarihli [Furcifer pardalis moving eyes](https://commons.wikimedia.org/wiki/File:Furcifer_pardalis_moving_eyes.ogv) videosudur. 1920×1080, 24 fps, 360 kare/15 saniye; indirilmiş dosyanın hash'i ve inceleme kapsamı `skin-reference-source.json` içindedir. Önceki peçeli bukalemun klibiyle tür ayrımı korunur.

İnceleme kapsamı: klibin 0–14 saniyeleri birer saniye aralıkla tarandı; ilk saniyenin **F000–F024 arasındaki 25 ardışık karesi** ayrıca tek tek karşılaştırıldı. Bütün 360 karenin tek tek analiz edildiği iddia edilmiyor. Zamanlar nominal kare/24 hesabıdır; konteyner zaman damgaları ayrıca doğrulanmadı. Kaynak çözünürlüğü korunarak göz alanı kırpıldı; yapay keskinleştirme veya ara kare eklenmedi. Ham kareler `work/eye-skin-analysis/` altında.

### Gözlenenler

| Kanıt | Gözlem | Uygulamaya etkisi |
|---|---|---|
| F00–F05 / 0–0,208 s | Alt kapakta birden fazla yay biçimli kıvrım, baş tarafında daha dar bir geçiş bandı görülüyor. | Tek düzgün halka yerine birkaç düzensiz yay ve bölgesel geçiş gerekiyor. |
| F06 / 0,250 s | Açıklıkla birlikte pullu yüzeyde hareket bulanıklığı var. | Yalnız pupil hareket etmiyor; fakat bu kare ince pul veya kırışıklık ölçümüne uygun değil. |
| F07 / 0,292 s | Açıklık daha aşağı/yana yönelmiş; renkli pul alanları ve alt kıvrımların izdüşümü değişmiş. | Renk/pul deseni deriyle taşınmalı; dünya koordinatında sabit veya sonradan kaydırılmış bir kaplama olmamalı. |
| F07–F19 / 0,292–0,792 s | Benzer bakış sürüyor; belirgin bir serbest sallanma seçilmiyor. Görüntünün netliği değişiyor. | Sürekli sinüs dalgası veya jöle gibi gecikmeli salınım eklemek için kanıt yok. Netlik değişimi fiziksel şişme sanılmamalı. |
| F20–F21 / 0,833–0,875 s | İkinci yön değişiminde bulanıklık görülüyor. | Yön değişimi ile kırışıklık durumu aynı olayla ilişkilendirilmeli. |
| F22–F24 / 0,917–1,000 s | Yeni bakışta kapak tekrar belirgin; alt kıvrımların görünen derinlik/sıralanışı önceki pozdan farklı. | Tek statik kırışıklık haritası bütün bakışlara yetmez. |
| 7–12 s genel taraması | Açıklık daha önden görünür hale geliyor; kapak silueti ve alt kıvrım bandı tam küre gibi sabit görünmüyor. | G3'ün sabit küresi doğru hareket yönü için başlangıç; nihai anatomik yüzey değil. |

İlk dönüş F05–F07 arasındaki yaklaşık 83 ms'lik örnekleme aralığında, ikinci dönüş F19–F22 arasındaki yaklaşık 125 ms'lik aralıkta gözleniyor. **Bunlar tam hareket süresi, deri gecikmesi veya biyolojik hız ölçüsü değildir.** Pozlama süresi ve hareketin kareler arasındaki gerçek başlangıcı bilinmiyor.

Önceki fotoğraf grubunun 04 ve 07 numaralı Charles J. Sharp panter fotoğrafları da özgün çözünürlükten kırpılarak yeniden incelendi. [04 kaynak](https://commons.wikimedia.org/wiki/File:Panther_chameleon_(Furcifer_pardalis)_male_Montagne_d%E2%80%99Ambre.jpg), [07 kaynak](https://commons.wikimedia.org/wiki/File:Panther_chameleon_(Furcifer_pardalis)_male_Nosy_Be.jpg). 04'te çevresel kat çizgileri belirgin; 07'de daha az belirgin. İkisinde de gözün küçük pulları daha iri baş pullarına bağlanıyor. Her hayvana aynı kalınlıkta eşmerkezli halkalar çizmek uygun değil. Sabit fotoğraf kırışıklığın nasıl hareket ettiğini tek başına kanıtlamaz.

### Çıkarım / bilinmeyen ayrımı

Görüntülerle desteklenen: pullu kapak açıklıkla birlikte yöneliyor; tabanda yay/kıvrım çizgileri mevcut; farklı bakışlarda görünüşleri değişiyor. **Sıkışan tarafta kıvrımların güçlenmesi, gerilen tarafta açılması** makul bir deformasyon hipotezidir. Tek kamerada dönme/perspektif, ışık ve gerçek gerinim ayrışmadığından bu davranışın büyüklüğü henüz ölçülmüş değildir. Aynı pulun doğrulanmış 3B takibi, optik akıştan gerinim hesabı, doku sertliği veya bağımsız deri salınım süresi çıkarılmadı. Embriyonik göz dokusundaki kıvrımları konu alan makale, erişkin dış kapak derisinin hareket kanıtı olarak kullanılmadı.

### G4 için somut küçük uygulama

1. G3'ün kabul edilen bakış mantığını koru. Önce tek göz üzerinde **geniş taban kıvrımları + küçük pul yüzeyi** birlikte çalışsın; diğer göz ve gövde sabit kalsın.
2. Başa yakın çevresel bantta, aralıkları ve uzunlukları farklı yaylar oluştur. Bunlar tamamen eşmerkezli kusursuz halkalar olmasın. İlk örnekte sınırlı sayıda belirgin kat ile başla; fazladan her çizgi biyolojik ölçüm sanılmasın.
3. Kıvrım derinliği/açıklığını bakış pozuna ve yüzeyin yerel sıkışma tahminine bağla. Her tarafta aynı anda kabarıp sönen doku oluşturma. İlk sürümde bağımsız gecikmeli salınım ekleme; videoda kanıtı yok.
4. Büyük kıvrımları düşük genlikli gerçek geometri/deformasyonla, küçük pul pürüzünü yüzeye bağlı koordinatlarla üret. Kıvrım ve pullar birlikte hareket etsin; renk deseni yüzeyden ayrı kaymasın. G3'ün şekil anahtarlarının UV/rest-coordinate gerilimini ayrıca kontrol et.
5. Önce nötr, yukarı ve öne bakışta üç duruş karşılaştır; ardından aynı hareket testinin kısa videosunu üret. Modeli yalnız pürüz haritasıyla kaplayıp bitmiş sayma.

Kabul: kat çizgileri kapak hareketiyle tutarlı değişiyor; kapak hacmi çökmüyor, baş bağlantısı açılmıyor; iri pullar lastik gibi uzamıyor; belirgin doku kayması veya anlamsız sürekli titreme yok. Yakın ve hero ölçeğinde inceleme gerekli. Referansta net seçilemeyen küçük salınım “doğrulandı” diye raporlanmamalı. Tam 180° hareket sınırı önceki açık konu olarak duruyor.

### Artefaktlar / lisans

`skin-fold-reference.jpg`: altı seçili karenin işaretli panosu. `skin-25-consecutive-frames.jpg`: 25 ardışık karenin tamamı. Bunlar MatthiasKabel videosundan kırpılmış, zaman/bölge işaretleri eklenmiş türevlerdir; **[CC BY-SA 3.0](https://creativecommons.org/licenses/by-sa/3.0/)** altında sunulur. Bu lisans bildirimi referans panolarına aittir. Model dosyaları bu araştırma adımında değiştirilmedi; GitHub'a kaynak medya yüklenmedi.

## G4 / v7 — açıklık oranı ve hafif birleşim dudağı (2026-10-24)

Kapsam: yakın gözde açıklık oranı ve başa bağlandığı çevrede bütünleşik kabartı. G3'ün hareketli açıklık yöntemi korunur; uzak göz ve gövde değişmez. Yeni dosya: `../body-study/chameleon-study-v7-eye-rim.blend`; önceki v6 korunur. Bu adım hareketle oluşan deri kırışıklıklarını tamamlamaz.

**Kanıt / ölçüm:** MatthiasKabel'in [Furcifer pardalis videosu](https://commons.wikimedia.org/wiki/File:Furcifer_pardalis_moving_eyes.ogv), 10, 11, 12. saniyelerde yaklaşık öne bakan açıklık. Elle işaretlenen elipslerde eşdeğer çap `sqrt(en*boy)` kullanıldı. Açıklık: deri iç kenarı; kule: dış birleşim dudağı hariç görünen kapak silueti. Sonuç yaklaşık 0.30. Üç kare aynı bireye aittir, üç bağımsız hayvan değildir. Siluet/odak belirsizliği yaklaşık 10 piksel; gerçek göz küresinin çapı fotoğrafta doğrudan ölçülmez. Perspektif ve görünmeyen baş tarafı nedeniyle bu biyolojik sabit veya kalibre edilmiş 3B ölçüm değildir.

**Tasarım kararı:** Model açıklık/küre çapı 0.179'dan 0.29'a getirildi; `theta0=asin(0.29)`, küre yarıçapı 0.24 tasarım birimi. İris diski açıklığın 1.015 katı yarıçapta, siyah merkez 0.88 katı; bunlar görsel başlangıç değerleridir, ayrı anatomik ölçüm değildir. Baş bağlantısındaki düşük kabartı ayrı bir torus eklemek yerine mevcut yüzeyin ilk halkalarına entegre edildi; tepe genliği 0.012 tasarım birimi, çevresel küçük düzensizlikler içerir. Hareketli açıklıkla karıştırılmamalıdır.

**Kontrol:** 90 karede kök sabitliği ve ana kapak yüzeyinde örneklenmiş yüz yönü kontrolü; nötr, öne ve kameraya bakış renderları. Bu test bütün meshler arasında eksiksiz çarpışma/öz-kesişim testi değildir. Dışa doğru büyütülmüş dudak denemesi yüz katlanması kontrolünü geçmedi; teslim dosyası için eksen yönünde düşük kabartı kullanıldı. Kabartının görüntüde okunurluğu ve sonraki kırışıklık katmanıyla birleşimi hâlâ görsel kabul gerektirir.

`g4-reference-measurements.json` ölçüm koordinatlarını, `g4-manifest.json` model parametrelerini ve kontrol sonuçlarını tutar. `aperture-ratio-reference.jpg` MatthiasKabel görüntülerinden işaretlenmiş türevdir, [CC BY-SA 3.0](https://creativecommons.org/licenses/by-sa/3.0/). Bu yerel güncellemede GitHub commit/push yapılmadı.

## G5 / v8 — birleşim kenarı ve bakışa bağlı kıvrımlar (2026-10-24)

**İstenen küçük adım:** v7'de silik kalan baş–göz birleşimini görünür yapmak ve göz yüzeyindeki kıvrımları bakışla birlikte değiştirmek. Sadece yakın göz; gövde, uzak göz, kuyruk, sahne akışı kapsam dışı. v7 korunur. Üretim, v7 ile aynı v4 tabanından G4 oranları ve G3 hareketi yeniden kurularak yapılır; `g5_skin_folds.py` yeniden üretim kaynağıdır.

**Uygulama:** `../body-study/chameleon-study-v8-eye-folds.blend`. Açıklık/küre çap oranı 0.29 korunur. Halka çözünürlüğü 56→88; baş bağlantısındaki geçiş normalize t koordinatıyla korunur. Baş sınırındaki ilk halka sabittir. t≈0.20 çevresine geniş ve düşük bir kabartı eklenir (0.013 tasarım birimi); bu, yüzeyin parçasıdır. Üzerindeki dış halkalar az miktarda gözle deformasyona katılır; tamamı hareketsiz bir aksesuar değildir.

Esnek bantta (t=0.22–0.70) küçük kıvrım yayları gerçek geometriyle oluşur. Bakış yönünün çevresel doğrultuya izdüşümü bir **tasarım amaçlı sıkışma tahmini** sağlar: o tarafta kıvrımlar sıklaşır/yükselir, diğer tarafta yayvanlaşır. Temel genlik 0.0035 tasarım birimidir. Bu değerler gerçek dokudan ölçülmedi. Dinlenme konumundaki koordinatlara bağlı pul dokusu kapakla birlikte deformasyona katılır. Zamanla bağımsız salınım veya sürekli titreşim yoktur. Bilimsel doku simülasyonu, kas modeli ve tam 180 derece doğrulaması değildir.

**Kabul / kontrol:** 90 karede baş bağlantısında kayma <1e-6; ana küresel bölgede örneklenen yüz yönleri ters dönmemeli. Nötr, öne ve yukarı bakış yakın renderlarında birleşim kenarı ve kıvrımlar görünür; açıklık yön değiştirmeli. Bu görüntüler incelendi. Kontroller bütün meshler arasında tam çarpışma veya öz-kesişim kanıtı değildir. Dosya yeniden açılarak 90 kare / 15 fps kısa video üretimi ayrıca kontrol edilir; sonuç `g5-manifest.json` içinde.

**Açık kalite sınırları:** Nötr kıvrımlar hâlâ nispeten düzenli yaylar oluşturuyor. Uç bakışlarda pul dokusu uzuyor; görünür uzama fiziksel deri gerilimi olarak doğrulanmadı. Göz içi düz disk görünümü bu işte değiştirilmedi. Tam fotogerçekçi göz tamamlandı sayılmaz. Bu küçük adımın görsel kabulü kullanıcıda; yeni kapsam otomatik başlatılmayacak. GitHub commit/push yok, yerel çalışma.

## G6 / v9 — kaybolan bombeli pul geometrisinin geri aktarılması (2026-10-24)

**Kök neden:** G5/v8, G1→G3→G4 zincirindeki B2 geçici göz malzemesini taşıyordu. `work/body-study/revise_proportions.py` içindeki `DISTANCE_TO_EDGE` Voronoi + ramp + bump düz çokgen/oluk görünümü veriyordu. D5.3'teki gerçek kabarık pul geometrisi animasyon yüzeyine hiç aktarılmamıştı. Son dosya kullanılmış olması, önceki kabul gören deri çalışmasının entegre olduğu anlamına gelmiyordu; bu entegrasyon eksikliği artık açıkça kaydedildi.

**Referans gözlemi:** `skin-fold-reference.jpg` F00/F05 ve özellikle F07/F19 karelerinde yuvarlatılmış, hafif bombeli pul tepeleri, dar deri aralıkları ve düzensiz boyutlu hücreler seçiliyor. Büyük kırışıklık yayları çok sayıda pulun altındaki deri formu; pulların yerine geçen oyuk desenler değil. F06 hareket bulanıklığı içerdiğinden pul sınırları için kullanılmadı. Tek videodan mikrometre düzeyinde yükseklik veya tüm tür için yoğunluk ölçülmedi.

**Düzeltme:** Kaynak doğrudan v8 `.blend`. `work/d5-3/create_patch.py` içindeki kırpılmış Voronoi hücreleri, köşe yuvarlatma ve bombeli taç profilinin yöntemi G6'ya uyarlandı; eski düz patch mesh olduğu gibi göze yapıştırılmadı. Altı yükselti halkalı gerçek pullar mevcut hareketli göz yüzeyinin koordinatlarına bağlandı. Başlangıçtaki geniş açıklık bandı sınır kırpmasıyla daraltıldı. Eski açısal bump yakın gözden kaldırıldı, altındaki sürekli deri ve G5 kıvrım geometrisi korundu. Sade zeytin tonu yalnız form incelemesi içindir; renk/desen tasarımı tamamlanmış değildir.

`../body-study/chameleon-study-v9-rounded-scales.blend`: önceki v8 korunur. `g6-before-after.jpg`: aynı kamera/ışıkta v8 ve v9 nötr karşılaştırma. `single-eye-rounded-scales.mp4`: aynı 90 karelik bakış denemesi. `g6-manifest.json`: kaynak/çıktı hash, gerçek pul sayısı ve üretim kontrolleri. Blender tekrar açılarak video kare sayısı doğrulanır.

**Doğrulama ve sınırlar:** Nötr ve öne bakış yakından incelendi; bombeli taç ve ince oluklar okunuyor. 90 şekil anahtarına koordinatlar aktarılmış ve sonlu değer kontrolü yapılmıştır; bu çarpışma testi değildir. Uç bakıştaki mevcut yüzey gerilimi pulları fazla uzatıyor; hâlâ çözülmedi. Göz dışındaki baş/gövde eski geçici malzemeyi kullanıyor. Yeni geometri yakın plan kalite prototipidir; web performansı için bake/LOD optimizasyonu yapılmadı. Tam fotogerçekçilik veya biyolojik doku davranışı doğrulanmış sayılmaz. GitHub commit/push yapılmadı.

## G7 / v10 — öne bakışta birleşim kenarından açıklık payı (2026-10-25)

Kullanıcının görsel düzeltmesi: tam öne bakışta hareketli açıklık baş derisine sıfırlanmamalı; kabarık bağlantı kenarının dış tarafında kalmalı. Yukarı/aşağı bakışın kabul edilen formu korunmalı.

Kaynak doğrudan son bombeli pullu v9; eski geçici bump sürümüne dönülmedi. `../body-study/chameleon-study-v10-forward-clearance.blend` ayrı çıktı. Yalnız yatay öne bakış miktarına bağlı, en fazla 0.045 tasarım birimi dış yönlü pay eklendi. Bu sayısal değer referanstan ölçülmüş biyolojik mesafe değildir. Baş kökü ve ilk 18 halka sabit tutuldu; değişim orta kapaktan açıklığa yumuşak geçişle uygulandı. Pul geometrisi aynı uzaysal deformasyon alanıyla taşındı; iris ve pupil de açıklıkla birlikte yer değiştirdi. Yaklaşım gözün tümünü kökten döndürmez.

90 kare kontrolü: kök kayması sıfır, kapak üçgenlerinde v9'a göre yüz yönü tersine dönmesi sıfır. Nötr/yukarı/aşağı/son nötr pozlarda ek yer değiştirme ağırlığı sıfır. Öne ve yukarı renderları üretildi; öne bakış yakın görüntüsü incelendi. Bütün cisimler arası çarpışma veya biyolojik doğruluk testi değildir. V9 kaynak hash'i korunur; `g7-manifest.json` parametre ve kontrol sonuçlarını tutar. `g7-forward-before-after.jpg` aynı kamerada önce/sonra karşılaştırmasıdır. Yeni video üretilmedi; `.blend` içindeki 90 kare oynatılabilir.

Açık kalan: uç bakışta pul uzaması ve gövdenin geçici derisi bu küçük düzeltmenin dışında kaldı. GitHub commit/push yapılmadı.

## V11 — bombeli pul karakterinin beden derisine aktarılması (2026-10-25)

Kullanıcı, gözdeki yuvarlak kenarlı hafif bombeli pul karakterini bedende de istedi. Kaynak doğrudan v10; baş–gövde–kuyruk birleşik yüzeyi ve B2 geçici materyalini kullanan bacak/tutuş yüzeyleri güncellendi. Eski köşeli Voronoi bump kaldırıldı. Yüzey üzerinde değişken aralıklı örneklerden yerel Voronoi hücreleri üretildi, köşeleri yuvarlatıldı ve D5/G6 tarzı altı halkalı sığ bombeli taç geometrisi eklendi. İnce aralıklarda kesintisiz alt deri korunur. Gözlere, anatomik ana gövde formuna ve animasyona müdahale edilmedi.

İlk denemede pullar fazla iri/kabarık ve boyun birleşiminde düzensizdi. Aynı adayda yoğunluk artırıldı, kabarıklık azaltıldı; nihai yakın ve genel görüntü incelendi. Boyutlar kalibre edilmiş biyolojik ölçüm değil, görsel tasarım değerleridir. Bölgesel yoğunluk baş/gövde/kuyruk/bacak ayrımı içerir; tam anatomik dağılım haritası tamamlanmış değildir.

Teslim: `../body-study/chameleon-study-v11-rounded-body.blend`, `body-v11-close.png`, `body-v11-overview.png`, `manifest-v11.json`. V10 korunur. Yeniden açma ve 1/29/43/57/90 karelerinde yakın göz, pul katmanı, iris ve pupil değerlendirilmiş geometrisi/matrisleri v10 ile birebir karşılaştırılır; sonuç manifestte. Bu geometri bir kalite prototipidir: beden pul katmanı statiktir, gelecekteki yürüyüş rigine henüz bağlanmadı; tarayıcı için bake/LOD optimizasyonu ve kapsamlı pul çarpışma kontrolü yapılmadı. Gözdeki uç bakış pul uzaması önceki açık konu olarak kalır. GitHub commit/push yapılmadı.

## V12 — sığ göz açıklığı ve parlak optik yüzey (2026-10-25)

Kullanıcının referansında açıklık içinde hafif derinlik ve siyah yüzeyde ışık yansıması görülüyor. V11 doğrudan kaynak alındı; gövde pulları ve göz kapağı şekil anahtarları korunur. Yalnız yakın gözün düz iç disk görünümü değiştirildi. Eski tam iris diski yeni yüzeyi örttüğü için renderda gizlendi. Kavisli siyah yüzeyin merkezi açıklığın gerisine alındı; açıklığa bağlı dört halkalı ince bir iç kenar eklendi. Kenar/optik yüzey mevcut 90 karelik bakış yönünü ve V10 dışarıda kalma payını takip eder.

Pupil adlı nesne artık görünüm amaçlı kavisli koyu optik yüzeyi temsil eder; eksiksiz kornea/iris/retina anatomisi modellenmedi. Siyah yüzeyin merkezini 0.022 tasarım birimi geriye alma ve 0.016 yarı kalınlık değerleri görsel ayarlardır; kaynak fotoğraftan ölçülmüş anatomik derinlik değildir. Roughness 0.09, coat roughness 0.035 kullanıldı. Işık yansımaları sahneden hesaplanır; boyanmış beyaz leke yok. Ek alan ışığının ikinci konumunda sağ tarafta yeni yansıma belirdiği renderda doğrulandı; varsayılan ışık konumu dosyada korunur.

Teslim `../body-study/chameleon-study-v12-recessed-glossy-eye.blend`, `g8-glossy-eye.png`, `g8-light-response.jpg`, `../body-study/manifest-v12.json`. Nötr ve öne bakış görüntüleri incelendi; öne bakışta yüzey çevredeki yeşil deriyi de yansıtabilir. Işık karşılaştırması aynı bakışta yapılmıştır. Kaynak hash'i korunur. Bu küçük adım tam biyolojik göz modeli, tam çarpışma testi veya tarayıcı materyali doğrulaması değildir. Uç bakıştaki pul uzaması önceki açık konudur. GitHub commit/push yapılmadı.

## V13 — öne bakışta aşırı eliptik pulların düzeltilmesi (2026-10-25)

Kullanıcı V10'un dışarıda kalan öne bakış duruşunu kabul ediyor; fakat aynı pozda pul uzamasını reddediyor. Kaynak son V12: beden pulları, derin/parlak optik göz ve açıklık payı korunur. Yalnız yakın gözün 1402 pulunun 90 şekil anahtarı güncellendi.

İlk denemede üç boyutlu gerilmeyi mutlak sınırlandırmak pullar arasında geniş boşluklar açtı; kabul edilmedi. Son yöntemde her pulun tabanına teğet düzlemde deformasyon uydurulur; tabanın kapladığı alan korunurken iki eksendeki ek gerilmenin oranı 1.10 ile sınırlanır. Nötrde düzeltme devre dışıdır; gerilme arttıkça yumuşak etkinleşir. Başlangıçtaki doğal hücre düzensizliği silinmez: 1.10, son siluetin en/boy oranı değil deformasyonun sınırıdır. Hareketli merkez ve yön korunur; göz kapağına müdahale edilmez.

Öne bakış renderı önceki sürümle karşılaştırıldı: uzun–ince görünüm azaldı. Yerel pul aralıklarında düzensizlik ve olası örtüşmeler kalır; bu yöntem tüm deri alanının yeniden dağıtılmasını çözmez. Tam biyolojik doku mekaniği veya çarpışmasızlık iddiası yoktur. `g9-roundness-comparison.jpg` önce/sonra gösterir. `../body-study/chameleon-study-v13-rounder-moving-scales.blend` ayrı sürümdür; V12 korunur. `manifest-v13.json` kontrolleri tutar. Yeniden açmada 1/29/43/57/90 karelerinde göz kapağı, optik yüzeyler, açıklık kenarı ve ana gövde değerlendirilmiş geometri/matrisleri V12 ile karşılaştırılır. GitHub commit/push yok.

## V14 — açıklık kenarının yuvarlatılması (2026-10-25)

Kaynak V13. Kullanıcının keskin bulduğu açıklık çevresi için yalnız `Near eye | inner aperture reveal` mesh profili değiştirildi: dört doğrusal halkadan, dış yüzeyi ince bir yuvarlak dönüşle iç duvara bağlayan on iki halkalı profile geçildi; iki seviye subdivision ve yumuşak yüz normalleri eklendi. Nesnenin mevcut animasyonu korunur; siyah optik yüzey, derinlik konumu, pul geometrisi ve gövdeye müdahale edilmedi. Profil görsel tasarım ayarıdır, ölçülmüş anatomi değildir.

Nötr ve öne bakış görüntüleri incelendi; kenar geçişi yumuşadı. `g10-rim-comparison.jpg` büyütülmüş nötr karşılaştırmadır; büyütme yeni görüntü detayı üretmez. `../body-study/chameleon-study-v14-soft-eye-rim.blend` yeniden açıldı ve kenar modifier'ı kontrol edildi; kaynak hash korunur (`manifest-v14.json`). Önceki pul dağılımı/gerilme sınırları devam eder. GitHub commit/push yapılmadı.

## V15 — geniş, sığ krater ağzı geçişi (2026-10-25)

Kullanıcı V14'ün dar kenarını reddetti; yanardağ/krater ağzı benzetmesiyle daha yumuşak bir çevre istedi. Yalnız açıklık çevresinin profili ve deri rengi güncellendi. Çevre .110 tasarım birimi yarıçaptan geniş bir yamaçla yükselir, .077 civarında yumuşak tepe yapar ve .0658 iç duvara iner. İki seviye mevcut subdivision korunur. İlk düşük profil pulların altında kayboldu; nihai profil görsel okunurluk için yükseltildi. Bunlar biyolojik ölçüm değil, kullanıcı yönlendirmeli tasarım değerleridir.

Nötr ve öne bakış renderları incelendi. V14'ün ince kenarı yerine geniş yumuşak geçiş seçiliyor. Açıklık etrafındaki geniş bant çevresindeki pullardan daha pürüzsüz; pul geçişinin nihai doğal görünümü hâlâ açık. Bu adım form önerisidir, tam fotogerçekçilik kabulü değildir. Siyah optik yüzeyin konumu/materyali, gövde ve göz hareket anahtarları değiştirilmedi; bant aynı animasyonu izler. Önceki V14 korunur. V15 yeniden açma doğrulandı; `manifest-v15.json` kaynak/çıktı hash tutar. `g11-crater-comparison.jpg` büyütülmüş görsel karşılaştırmadır. GitHub commit/push yapılmadı.

## V16 — krater geçişinde desenin uçlara taşınması (2026-10-25)

V15 şekli korunarak düz bant üzerine küçük, köşeleri yuvarlatılmış bombeli Voronoi pulları eklendi. Yeni katman mevcut kenar nesnesine parent edildi; bakış hareketini birlikte izler. Siyah optik yüzey, ana göz pulu ve beden değişmedi. İçte yalnız ince bir desensiz kenar kaldı.

Kullanıcının %98 hedefi, izdüşümde dairesel bandın desenli bölgesinin alanı olarak uygulandı: dış yarıçap .110, iç .0658; desen başlangıcı `sqrt(inner² + 0.02*(outer²-inner²))`. Bu gerçek yüzey alanının veya pul aralıkları çıkarıldıktan sonraki kaplamanın %98 ölçümü değildir. Doğal pul aralıkları bulunur. Nötr ve öne bakış renderları incelendi. Yeni pullar çevredekilerden daha küçüktür; geçiş dağılımı görsel kabul gerektirir. İlk yeniden açma kontrolünde eski nesne referansına erişim hatası oluştu; doğrulama nesneyi yeniden adından bularak ayrı çalıştırıldı.

Teslim `../body-study/chameleon-study-v16-patterned-eye-rim.blend`, `g12-patterned-rim.jpg`, `manifest-v16.json`. Kaynak V15 korunur. Statik kenar pul katmanı parent hareketi izler; biyolojik deri gerilimi simülasyonu değildir. GitHub commit/push yapılmadı.

## V17 — kıvrım ve eklemlerden başlayan sürekli pul boyutu dağılımı (2026-10-25)

Kullanıcı ilkesi: kıvrılan/hareket eden bölgelerde küçük elemanlar, daha az deformasyon beklenen bölgelerde mevcut iri ölçü; boyut geçişleri ani değil, karışık ara boyutlarla sürekli olmalı. Bu, projede bundan sonraki pul dağılımlarının tasarım kuralıdır. Referansın tek kareleri genel bir biyolojik hareket–pul boyutu yasasını kanıtlamaz; beden henüz rigli olmadığı için hareket bölgeleri anatomik konumlara dayalı varsayımdır.

Kaynak V16. Baş/gövde/kuyruk baz boyutları arasında önceki keskin konum eşikleri smoothstep geçişlerle değiştirildi. Boyun, göz kökü çevresi, omuz/kalça, dirsek/diz ve bilek çevresinde yumuşak Gaussian etki alanları kullanılır; en yoğun bölgelerde hedef aralık yaklaşık %60'a kadar küçülebilir, etki uzaklıkla sürekli azalır. Gövdenin uzak bölgelerinde önceki baz ölçek korunur. Rastgele yerel boyut değişkenliği ara boyutların birlikte bulunmasını sağlar. Ayak/grip alanları daha küçük tasarım ölçeği kullanır.

Yakın gözde pul geometri katmanı yeniden üretildi: açıklık tarafında ince, kapak ortasında daha iri, kök/kıvrım bandına yaklaşırken yeniden ince. İki yönlü smoothstep dağılımıyla ara boyutlar korunur. V13'ün alanı koruyan pul gerilme sınırlaması yeni pulların 90 şekil anahtarına yeniden uygulandı. V16'nın desenli krater ağzı ve parlak optik yüzeyi korundu. Uzak göz hâlâ eski prototip düzeyindedir; yeni yakın göz detaylarının ona aktarılması bu dosyada yapılmadı.

Yakın ve genel render incelendi: boyun/eklem çevreleri inceliyor, ana gövdeye doğru boyutlar büyüyor. Yeni kaynak `work/body-study/graded-skin/build_body.py` ve `build_eye.py`; ara dosya sadece çalışma klasöründe. Teslim `../body-study/chameleon-study-v17-graded-scales.blend`, `body-v17-close.png`, `body-v17-overview.png`, `manifest-v17.json`. Göz kapağı, optik yüzey, açıklık kenarı ve ana gövde geometrisi V16 ile 1/29/43/57/90 karelerinde karşılaştırılır. Beden pul katmanı henüz rigli değil; gerçek hareket sırasında dağılım/deformasyon ayrıca test edilecek. Tüm deri yüzeylerinde çarpışma ve yakın plan geçiş kusursuzluğu garanti edilmez. GitHub commit/push yapılmadı.
