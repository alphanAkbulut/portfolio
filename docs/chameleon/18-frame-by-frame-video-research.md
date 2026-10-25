# Kare kare video araştırması — yöntem, bulgular ve devam noktası

25 Ekim 2026 · Arşiv V1 · **Araştırma ve arşivleme tamamlandı; yeni Blender biçimi veya portföy yayını yapılmadı.**

Bu çalışma, bir referansın yalnızca beğenilip modele benzetilmesinden öte, hangi kareden hangi gözlemi çıkardığımızı ve bunun tasarım kararını nasıl etkilediğini görünür kılar. Tür **Furcifer pardalis**. Kesin lokalite/renk varyantı seçilmedi. Kullanıcı mevcut göz ve çevresini korumamızı istedi; analiz bu kabulü sessizce değiştirmiyor.

## Arşivi aç

- [Araştırma paketi ve dosya kapsamı](evidence/video-review-v1/README.md)
- [İnteraktif sayfanın HTML dosyası](evidence/video-review-v1/index.html)
- [Ayrıntılı anatomi bulguları](evidence/video-review-v1/analysis.md)
- [360 kare kayıt tablosu](evidence/video-review-v1/frame-register.csv)
- [23 olay ve zamanları](evidence/video-review-v1/events.json)
- [Üç elle işaretlenmiş görünüş ölçümü](evidence/video-review-v1/measurements.json)
- [Özgün kaynak kimliği](evidence/video-review-v1/source.json) ve [medya atıfları](evidence/video-review-v1/ATTRIBUTION.md)

GitHub HTML dosyasını kod olarak gösterir. `portfolio-chameleon` dalını indirip bu klasördeki `index.html` dosyasını tarayıcıda açın. İnteraktif kareler için internet gerekmez; özgün Commons videosu haricidir. Bu commit kendiliğinden bir GitHub Pages/Netlify adresi oluşturmaz.

## Sorudan kanıta: çalışma günlüğü

| Adım | Yapılan işlem | Kalıcı kanıt | Sınır |
|---|---|---|---|
| Kaynağı tanıma | Kullanıcı Türkçe Wikipedia dosya bağlantısını verdi; aynı dosyanın Commons kaydı incelendi | source.json: eser sahibi, tarih, lisans, dosya kimliği | Türkçe sayfa araçta açılmadı; Commons üzerinden doğrulandı |
| Önceki işi ayırma | Önceki göz kıvrımı çalışması ilk 25 ardışık kare ve saniyelik özetlerdi | Önceki 17 numaralı belge tarihsel kayıt olarak korunur | Yeni kaynak veya bağımsız birey gibi sayılmadı |
| Videoyu çözme | 1920×1080, nominal 24 fps, F000–F359 çıkarıldı | 360 satırlık kayıt ve tam boy JPEG hashleri | Konteyner PTS ayrı ölçülmedi |
| Tam süreyi inceleme | 15 panodaki 24'er kare atlamadan görsel tarandı | sequence-00.jpg–sequence-14.jpg | Her karede ayrı landmark veya pul takibi yapılmadı |
| Ayrıntıya dönme | Sekiz seçili göz pozu doğal piksel boyutunda karşılaştırıldı | eye-detail-sequence.jpg ve tam boy keyframes | Hareket bulanıklığı olan karelerden pul boyutu çıkarılmadı |
| Görünüşü ölçme | F000/F168/F336'da elle yaklaşık sınırlar işaretlendi | measurements.json, SVG işaretler | Tek birey, perspektifli görüntü; gerçek göz/kafa oranı değil |
| Olayları kaydetme | 23 belirgin görsel değişim işaretlendi | events.json, sayfadaki olay düğmeleri | 23 kesin saccade veya bütün mikrohareketlerin tam listesi değil |
| Modelle karşılaştırma | Yerel V25'in mevcut ön/üst renderları görüldü | analysis.md içindeki açık karşılaştırma | Aynı kamera eşleşmesi kurulmadı; yeni yüzde ölçek kararı verilmedi |
| Koruma kontrolü | V25 hash'i önceki kayıtla eşleşti | verification.json | Dosyanın değişmemesi, anatominin doğrulanmış olduğu anlamına gelmez |
| Arşivleme | Görseller, kayıtlar, doküman ve bağımsız sayfa sürümlendi | manifest.json, package-verification.json | Tam boy 360 JPEG ve .blend bu pakette yok; kapsam açıkça listelendi |

## Ana bulgular ve tasarım yolculuğu

### Göz ve kafa

Video büyük bir dış göz kütlesi gösteriyor; fakat bu, düz kafa yüzeyine oturtulmuş tek bir küre gibi okunmuyor. Pullu kapak, başa bağlanan esnek deri ve yükseltili baş kenarı ayrılıyor. İki göz arasındaki geniş merkezi yüzey ve yanak hacmi de gözün algılanan boyutunu etkiliyor.

Ölçümde görünen yakın kapak yatay genişliği / iki gözün dış uçları arası yatay açıklık üç karede yaklaşık 0.33, 0.32, 0.31. Bu sayılar kafatası eni veya kafa uzunluğu oranı değildir. Önceki yandan fotoğraf oranlarıyla birleştirilmez; tür ortalaması veya küçültme çarpanı yapılmaz. Önce kafa hacimleri düzeltilmeli; korunmuş göz daha sonra eşlenmiş açıda değerlendirilmelidir.

### Burun

Geniş orta tabla, yükseltili iki yan kenar ve ağız çizgisinin üzerinde öne uzanan kısa çıkıntı ayrı hacimler. V25'teki yuvarlak burun kütlesi bu ayrımı zayıflatıyor. Genel şişirme/uzatma yerine bu yüzeylerin ayrı biçimlendirilmesi önerildi. Burun ucunun odak dışı olması nedeniyle çatallanma derinliği ve burun deliği biçimi bu klipten kesinleştirilmedi.

### Ağız ve dudak/çene kenarları

Kapalı ağzın ince hattı, iki yanında pullu çene kenarlarıyla birlikte okunuyor. Burun çıkıntısı bu hattan ayrı ve daha yukarıda. Modelde yüzeyden kopuk tel gibi çizgi veya kalın desensiz halka hedef değil. Belirgin bir ağız açma döngüsü görülmediğinden çene menteşesi, ağız içi ve dil hareketi doğrulanmadı.

### Hareket ve kıvrımlar

F005–007, F019–022, F056–058, F167–168 ve F183–185 gibi karşılaştırmalar açıklığın yönüyle kapak/kök görünüşünün birlikte değiştiğini gösteriyor. F247–250 daha öne dönük açıklık ve parlak optik görünüm için güçlü referans. Uzak gözün F093–095 ve F111–114'teki değişimleri, iki gözün aynı zamanlamayla kopyalanmaması gerektiğini gösteriyor. Son bölümde yüzün kadrajdaki yeri de değişiyor; her piksel kayması göz deformasyonu değildir.

Bunlar görsel gözlemlerdir. Tam 3B dönüş açısı, deri gerinimi, fiziksel sertlik veya gecikme ölçülmedi. Farklı karelerin görüntüdeki alanını doğrudan gerçek hacim değişimi diye okumuyoruz.

## Korunacaklar ve sıradaki küçük iş

Yerelde kabul edilen göz/çevre sürümü V22; son omuz adayı V25. GitHub'daki daha eski V17/V20 durum kayıtları tüm yerel modelin güncel yedeği değildir. Bu commit V21–V25'in tam model/geometri arşivini yüklemiyor. Yakın göz tamamlanmış ayrıntı çalışmasıdır; karşı göz ve diğer uzuvlara aktarım ayrı açık işlerdir.

Sonraki öneri: ayrı bir kafa/burun/ağız adayı; aynı ışık ve yan/ön/üst açılarla önce/sonra karşılaştırması. Onaylı göz geometrisi, pul deseni, optik yapı ve hareket korunacak. Yeni baş yüzeyi göz kökünü yutmamalı; ağız çizgisi yüzeye oturmalı; burun tablanın orta ve yan kenarları renk olmadan da okunmalı. Omuz çıkış yüksekliği ve pazubant etkisi çözülmüş sayılmıyor.

## Bağımsız araştırma sitesi / portföyde şifreli alan

**Durum: kullanıcı fikri kaydedildi; uygulama veya yayın kararı verilmedi.** Bu paketteki bağımsız statik sayfa ilk incelenebilir örnektir. Önerilen sonraki küçük ürün adımı: kaynak listesi → klip detayı → kare/olay seçimi → gözlem/yorum/karar → model sürümü bağlantısı. İkinci adım, gerekirse iki kareyi karşılaştırma ve bölgeye göre filtreleme. Bunlar bu V1'de varmış gibi sunulmaz.

Mevcut `alphanAkbulut/portfolio` reposu **herkese açık** olarak doğrulandı. Buraya commit edilen araştırma özel sayılmaz; ileride siteye şifre eklemek GitHub geçmişindeki kopyaları gizlemez. Gerçekten özel tutulacak araştırma için özel depolama ve sayfanın yanı sıra medya dosyalarını da yetkilendiren sunucu/hosting erişim kontrolü gerekir. Tarayıcı içindeki sabit parola veya JavaScript ile gizleme erişim koruması olarak kabul edilmeyecek.

Sonraki kullanıcı kararı: açık portföy vaka çalışması mı, yalnız davetlilerin erişeceği özel araştırma alanı mı? Bu seçim yapılmadan hosting/provider, ücret, kullanıcı hesabı, repo görünürlüğü, DNS veya production değiştirilmez. Şu anki izin, bu açık repoya araştırma dokümanı ve sayfa kaynağını commit etmektir.

## Kabul ve doğrulama

- Kayıt 0–359 kareleri boşluksuz içerir; 15 önizleme atlası bütün kareleri kapsar.
- 23 olay doğru kare/zaman kaydına bağlıdır; üç ölçüm ham koordinatlarla korunur.
- İncelenen 15 JPEG pano ve seçili tam boy kareler yerel kaynakla aynı byte içeriğidir.
- Sayfada ileri/geri, olay atlama, ilk/son kare sınırı, tam boy bağlantısı ve yükleme hatası durumu bulunur. Çalıştırılmış kontroller paket doğrulama dosyasında ayrı listelenir; yazılmış kontrol, çalıştırılmış test sayılmaz.
- Kaynak atfı/lisans, yorum sınırları ve eksik 3B kanıt açıkça görünür.
- Commit sonrası uzak ağaç ve dosya kimlikleri yerel yükleme listesiyle karşılaştırılır. Canlı portföy ve model dosyaları bu değişikliğin kapsamında değildir.
