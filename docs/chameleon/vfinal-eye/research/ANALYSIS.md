# Göz derinliği / taban oranı — araştırma v1

28 Ekim 2026. Kapsam: gözün dış örtüsü, görünür açıklığı ve hareketi. Model ve V5 demo değiştirilmedi. Önceki analizler korunuyor. Bu belge yeni araştırma ve karar önerisidir; anatomi onayı değildir.

## Karar

**L’yi artırmak için kanıt yok. Önce B ve a sabitken L’nin %100, %90 ve %85 kaldığı adayları karşılaştırmak öneriliyor.** Bu yüzdeler biyolojik ölçüm değil, kontrollü tasarım deneyi. Mevcut dış profilin dolgunluğu ile dışarı taşma mesafesi farklı parametrelerdir. Keskin koni yerine yuvarlatılmış omuzlar, geniş uç ve kökte yumuşak geçiş korunmalı.

En riskli varsayım: fotoğrafta daralan görünen gözün gerçek fiziksel derinliğinin de daraldığını sanmak. Kamera ve bakış yönü bunu tek başına üretebilir. Bu nedenle fotoğraflardan çıkan izdüşüm oranı doğrudan 3B model katsayısına çevrilmedi.

## B, L ve a neyi ölçüyor?

- B: dış örtünün kafaya bağlandığı taban kesitinin açıklığı. Görseldeki görünür kök çizgisi yalnız bunun vekilidir.
- L: bu taban düzleminden açıklık merkezine, tabana dik yöndeki dışa taşma mesafesi. Ekrandaki düşey yükseklik değil.
- a: uç açıklığının çapı; dışarıdan gördüğümüz retina değil, kapak açıklığı ve onun gerisindeki optik yüzeylerdir.
- Lmax: taban vekiline en uzak dış konturun mesafesi. Eski hareket ölçümleri bunu kullanıyor. L ile aynı olmak zorunda değil.

Eski `eye-shape-geometry.png` sağ panelinde B/a/L açıkça şematikti. Çizimin cetvelle oranını almak hayvan ölçümü üretmez. Göz bebeği, kapak açıklığı ve bütün göz küresi çapını da birbirine karıştırmamak gerekir.

## Yerel kanıt: yeniden kontrol edilen görseller ve hesaplar

`motion-reference.jpg`, `skin-fold-reference.jpg`, `eye-shape-geometry.png` ve V37 `front-neutral.png` doğrudan açılıp incelendi. Hareket montajındaki mevcut elle işaretlenmiş konturlar yeniden hesaplandı; yeni işaretleme veya yeni birey örneklemesi yapılmadı. Hesaplar `measurements.json` içinde.

| Yaklaşık zaman | Görüntü solu Lmax/B | Görüntü sağı Lmax/B |
|---|---:|---:|
| 0,00 s | 0,629 | 0,536 |
| 0,50 s | 0,617 | 0,527 |
| 1,25 s | 0,602 | 0,511 |
| 2,00 s | 0,619 | 0,494 |

B yaklaşık 131–161 piksel; eski işaretleme duyarlılığı ±5 piksel olarak kaydedilmiş. Bu bir güven aralığı değil. Dört kare aynı hayvanın pozlarıdır; popülasyon veya dört bağımsız örnek değildir. Stok hareket görselinin türü bağımsız doğrulanmış değildir; panter bukalemunu için kesin tür normu sayılamaz.

Solda çıkıntı yaklaşık aynı kalırken uç kök boyunca yer değiştiriyor. Sağda açıklık görünür hâle geliyor ve kontur farklılaşıyor. Bu, sabit boyutta bir gözün dönüşü, perspektif ve yerel deri katlanmalarıyla uyumludur; göz hacminin büyüyüp küçüldüğünü kanıtlamaz.

Panter videosunun `skin-fold-reference.jpg` montajında köke yakın alt ve yan deri kıvrımları ile daha dolgun hareketli dış örtü ayrılıyor. F06 hareket bulanıklığı taşıyor; ince kıvrım veya kesin açıklık ölçümü için kullanılmamalı. Montaj, deri hareketinin konumunu destekler; elastik katsayı, gerilme veya milimetre cinsinden derinlik vermez.

## Bizim V5 ne yapıyor, ne yapmıyor?

V5’in sadece göz konturunu üreten `eyes`, `path` ve `apertureEye` bölümleri okundu; gövde/bacak/kuyruk kodu taranmadı.

| V5 konturu | B | Açıklık merkezine L | L/B | Uç yayının en dış noktası/B |
|---|---:|---:|---:|---:|
| Görüntü solu | 287 px | 195 px | 0,679 | 0,702 |
| Görüntü sağı | 287 px | 210 px | 0,732 | 0,754 |

Bunlar kaynak fotoğrafa çizilmiş hedef konturun koordinatlarıdır; Blender yüzey ölçümü değildir. Görüntüdeki iki tarafın farklı değerleri gerçek model asimetrisi kanıtı da değildir. Fotoğrafın gerçek kökünü ayrıca eşleştirmeden tabloyu model kusuru diye sunamayız.

Profil kontrolü Bézier ara noktalarını değiştiriyor; kök ve uç x koordinatları sabit. Dolayısıyla omuzlar daralsa da L aynı. Açıklık kontrolü uç yüksekliğini ve küçük uç yayını daraltıyor; açıklık merkezini taşımıyor. Daha doğal profil ile daha az çıkıntı ayrı kararlar olmalı.

Mevcut V37 `head-inspection.json` kaydında LeftEye ve RightEye sınır boyutları üç eksende yaklaşık 0,431947. Bu kayıt küresel nesne boyutlarıyla uyumlu; görünür pullu örtünün taban düzlemini belirlemez. Nesnenin tüm çapını L veya B yerine kullanmak hatalıdır. Bu tur güncel blend yeniden taranmadı; eski kayıt yeni dosyanın doğrulaması diye sunulmuyor.

## Bilimsel kaynaklar ve kullanılabilecek sonuçlar

### 1. Dış form

[El Mansi ve ark., 2016 — Development of eye regions and Harderian glands in young Chameleo chameleon](https://ijarbs.com/pdfcopy/mar2016/ijarbs9.pdf), s.59: genç adi bukalemunlarda dışarı uzanan konik göz bölgesi tarif ediliyor. Tam metin okundu. Bu, yuvarlatılmış konik örtü fikrine nitel destek; yetişkin Furcifer pardalis için derinlik kalıbı değil. Tablo 1’deki antero-posterior/dorso-ventral terimler bizim taban–uç eksenimiz değildir; buradan L/B türetilmedi. Tablo başlığı/birim sunumu da doğrudan model ölçeklemesi için yeterince açık değil. PDF sayfa görseli aracı hata verdi; şekilden yeni ölçüm yapılmadı.

### 2. Hızlı dönüş ve sakin evreler

[Ketter Katz ve ark., 2015 — Eye movements in chameleons are not truly independent](https://pubmed.ncbi.nlm.nih.gov/26157161/), DOI 10.1242/jeb.113084. Erişilen birincil araştırma özeti, iki hedefin ayrı gözlerle izlenebildiğini ve daha uzun yumuşak takip evrelerinin ani adımlarla değiştiğini bildiriyor. Bağımsız kontrol korunmalı; fakat her koşulda alakasız rastgele hareket yerine tarama, tek gözle takip ve ortak hedefe odaklanma ayrılmalı. Yayıncının tam metnine erişim başarısız; kesin süre/hız dağılımı çıkarılmadı.

### 3. Dönüş sınırı ve burulma

[Gaze stabilization çalışması, 1993](https://pubmed.ncbi.nlm.nih.gov/8217944/), DOI 10.1017/S0952523800006167: ölçülen toplam hareket aralığı yatay 180°, düşey 80°; iki gözün spontan sakkadları bağımsız. Bunlar tür/deney koşuluna ait toplam aralıklar; panter rig’ine doğrudan ±180° veya güvenli hareket limiti olarak uygulanamaz.

[Chameleon eye position obeys Listing’s law, 2001](https://doi.org/10.1016/S0042-6989(01)00111-0): erişilen araştırma özeti göz yöneliminin üç serbest rastgele dönme yerine iki boyutlu bir kısıtla uyumunu bildiriyor. Uygulama önerisi: optik eksen üzerinde bağımsız rastgele roll eklememek; yaw/pitch ve tutarlı quaternion yönelimi kullanmak. Sıfır Euler-roll’un Listing yasasını tam uyguladığı iddia edilmemeli. Tam metin erişimi 403 verdi.

### 4. Görünür açıklık ve kamera

[Lustig ve ark., 2013 — Relating Lateralization of Eye Use to Body Motion](https://pmc.ncbi.nlm.nih.gov/articles/PMC3743880/): indekslenmiş yöntem metni göz yönünü açıklığın daire/oval/hilal görünümünden sınıflandırıyor. Tam sayfa erişimi doğrulama engeline takıldı. Bu nedenle yalnız erişilen yöntem pasajı kullanıldı. Görünür elips küçüldü diye fiziksel a’yı küçültmek zorunda değiliz. İdeal düz daire izdüşümünde küçük/büyük eksen oranı yaklaşık |cos θ| olur; gerçek eğri örtüde örtülme ve perspektif de vardır. Bu formül biyolojik deformasyon ölçümü değildir.

## Motion ve skin için somut sonuç

1. **Korunacak:** mevcut iki bağımsız göz kontrolü, kabul edilmiş iç göz görünümü, pullar ve yumuşak kök geçişleri.
2. **Şekil:** geniş kök, yuvarlatılmış daralma ve sonlu açıklık. L, B ve a ayrı parametreler. Ucu uzatarak sivriltmek önerilmiyor.
3. **Hareket:** hedefe kısa geçiş + daha sakin bakış/takip evreleri. Sürekli yüksek frekanslı titreşim bilimsel sakkad karşılığı değil. Kesin milisaniye ve hız değerleri bu kaynaklardan doğrulanmadı.
4. **Baş/göz ilişkisi:** ortak hedefe dönerken gözlerin önce yönelmesi bir animasyon hipotezi olarak denenebilir; evrensel sabit gecikme diye yazılmamalı. Başa bağlı göz yönü ile dünya hedefi arasındaki dönüş tutarlı olmalı.
5. **Deri:** kökün kafayla bağlantısı korunup çevre dokuda yumuşak deformasyon denenmeli. Tek sert koniyi döndürmek kökü koparabilir; tüm örtüyü kafa ile sabitlemek de hareketi öldürür. Gerilme/katlanma göz pozuna bağlı yerel olmalı; sabit halka eklemek veya her bakışta gözün tamamını ölçeklemek önerilmiyor. Bu bir modelleme çıkarımı; dokunun fiziksel katsayıları ölçülmüş değil.

## Sonraki en küçük deney ve kabul koşulları

Öneri, henüz uygulanmadı: aynı kamera/B/a ile L ölçeğini 1,00 / 0,90 / 0,85 karşılaştır. Mevcut V5 merkez oranları böylece solda 0,679 / 0,612 / 0,578; sağda 0,732 / 0,659 / 0,622 olur. Bu adaylar gerçek hayvandan kesin çıkarılmış ölçüler değildir.

Gerçek model kararı için görünür örtünün tabanını önden ve üstten eşleştir; kalibre edilmemiş stok görseldeki 0,49–0,63 aralığını zorunlu hedef yapma. Nötr, aşağı çapraz, yukarı ve öne odaklı pozlarda aynı parametreyi sınamak gerekir. Kabul: iç göz kaybolmamalı, açıklık örtüden ayrılmamalı, kafa-kök aralığı oluşmamalı, yüzeyler ters dönmemeli, pullarda ani boy sıçraması olmamalı. Tek güzel nötr görüntü yeterli değil.

**Açık kalan kanıt:** yetişkin panter bukalemunu için kalibre edilmiş gerçek 3B L/B, mevcut pullu model örtüsünün aynı tanımla ölçümü, fiziksel deri gerilme verisi ve kaynak videonun güvenilir yüksek zaman çözünürlüklü sakkad süreleri. Bu taramada bunlara doğrudan kullanılabilir değer bulunamadı. Bu nedenle “L kesin şu kadar değişmeli” sonucu verilmedi.
