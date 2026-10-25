# Panter bukalemunu — 360 karede kafa, burun, ağız ve göz ilişkisi

25 Ekim 2026. **Tamamlanan kapsam: video incelemesi ve yerel referans arşivi. Model değiştirilmedi.** V25 dosyasının SHA256 değeri önceki kayıtla aynı. Kabul edilen V22 göz/çevresi ve V17 göz deseni korunuyor. Bu rapor, önceki ilk 25 karelik deri incelemesini genişletir; önceki çalışmayı silmez.

## Kaynak ve yöntem

Kullanıcının bağlantısı: https://tr.wikipedia.org/wiki/Dosya:Furcifer_pardalis_moving_eyes.ogv . Türkçe dosya sayfası araçta açılamadı; aynı dosyanın [Wikimedia Commons sayfası](https://commons.wikimedia.org/wiki/File:Furcifer_pardalis_moving_eyes.ogv) okundu. MatthiasKabel, 9 Ocak 2011; panter bukalemunu. CC BY-SA 3.0 seçildi. Sayfadaki SHA-1 `d2abec8859fc2edbdf15cbe8ec1b964e7a12c018`, zaten yerelde bulunan özgün videoyla bire bir eşleşti. Video tekrar indirilmedi.

1920×1080, nominal 24 fps, 360 kare. F000–F359 tümü sırayla çıkarıldı; 15 adet 24 karelik panoda **atlamadan görsel tarandı**. Bu, 360 karede tek tek pul takibi veya her kareye elle landmark ölçümü yapıldığı anlamına gelmez. Sekiz seçili göz bölgesi doğal piksel boyutunda ayrıca karşılaştırıldı (F000, 007, 022, 058, 168, 185, 249, 293). F000, F168, F336 tam kareleri ve koordinat kılavuzları burun/ağız/oran için incelendi. V25'in daha önce üretilmiş ön ve üst renderları yeniden görüldü. Yeni model renderı alınmadı.

Zamanlar sıfır tabanlı kare/24 hesabıdır; konteyner PTS ayrı doğrulanmadı. JPEG95 kareler, Standard renk dönüşümüyle Blender VSE'den çıkarıldı; yapay ara kare, keskinleştirme veya restorasyon yok. Başka bir birey, kalibre kamera veya fiziksel ölçü ölçeği yok. Yaş, cinsiyet ve lokalite bu dosya kaydından doğrulanmadı. 360 kare **360 bağımsız hayvan örneği değildir**.

## 1. Gözün kafaya oranı: neyi söyleyebiliyoruz?

**Gözlem:** Yakın pullu göz kubbesi başın kenarından dışarı taşıyor, fakat başın üst yan sırtı ve kapak kökü arasında hacimli bir geçiş var. Göz, düz bir yüzeye yapıştırılmış tek top gibi görünmüyor. Geniş orta burun/alın yüzeyi iki göz arasında belirgin alan tutuyor. Uzak göz hem perspektif hem örtülme hem yönelim nedeniyle daha dar görünüyor; iki gözün gerçek boyutlarının farklı olduğu çıkarılamaz.

Bu klip çoğunlukla önden-obliktir. Yandan burun–arka kafa uzunluğunu güvenilir ölçmek mümkün değil; başın altı son bölümde daha fazla kadraj dışında. Dolayısıyla önceki yan referanslardaki göz/kafa uzunluğu oranına yeni bir video oranı eklenmedi.

**Yalnız bu görüntü için ek bir görünüş ölçüsü:** yakın pullu kapağın yatay sınır kutusu genişliği / iki gözün görünen en dış uçları arasındaki yatay açıklık. Kök manşeti yakın kapak kutusunun dışında tutuldu. Bunlar gerçek göz çapı/kafatası eni değildir.

| Kare | Zaman | Yakın kapak yatay genişliği | İki gözün dış uçları arası | Görünüş oranı |
|---|---:|---:|---:|---:|
| F000 | 0.000 s | yaklaşık 285 px | yaklaşık 860 px | 0.33 |
| F168 | 7.000 s | yaklaşık 280 px | yaklaşık 875 px | 0.32 |
| F336 | 14.000 s | yaklaşık 270 px | yaklaşık 875 px | 0.31 |

Kutular ve ham noktalar `measurements.json`, işaretli görüntüler `index.html` içinde. Sınır başına yaklaşık ±15 px okuma toleransı düşünüldüğünde farkların önemli bölümü işaretleme/perspektif/hareket kaynaklı olabilir. Bu tolerans istatistiksel güven aralığı değildir. **0.31–0.33 tür normu veya modelde ölçek çarpanı değildir; ortalaması hedef olarak kullanılmamalı.** Modelin mevcut ön renderı aynı kamera/bakış yönünü taşımıyor; üstelik karşı göz hâlâ eski vekil. İki görüntüden doğrudan yüzde küçültme çıkarmak uygun değil.

**Model kararı:** Onaylı gözü koru. Önce başın merkez tablasını, yanak/çene hacmini ve burun kenarlarını düzelt; sonra eşlenmiş kamera altında oranı yeniden kontrol et. Gerekiyorsa gözün genel yerleşimi/ölçeği ayrı bir aday ve kullanıcı kararı olmalı. Mevcut göz yakın planının başarılı olması, tüm kafanın oranlarının tamamlandığı anlamına gelmiyor.

## 2. Burun: tek yuvarlak kama yeterli değil

**En yararlı kareler:** F000 ve F168. F336'da yüz görüntüde aşağı kaymış; burun ucu kadrajın altına yaklaşıyor. Göz kökü ve orta tabla hâlâ okunuyor.

- Orta yüzey, öne doğru uzanan geniş ve görece düz/hafif çukur bir tabla gibi görünüyor. Matematiksel düzlem değil; pullar ve yumuşak eğrilik var.
- İki yandaki yükseltili kenar, göz kökünün iç tarafını takip edip burun ucuna doğru ilerliyor. Orta tabla ile göz manşeti aynı yüzey olarak şişirilmemeli.
- Öndeki kısa, küt çıkıntı ağız kapanma hattından daha yukarıda ve onun önüne taşıyor. Dudakla tek yuvarlak çıkıntı halinde birleştirilmemeli.
- Üst tablada iri ve daha yassı okunan çokgen pullar; kenar sırtlarında belirgin kabarıklıklar; kapakta daha küçük, bombeli, karışık yuvarlak/oval pullar var. Başın tümünü gözdeki tek ölçekli desene çevirmek doğru olmaz.
- Uç ve burun deliği olabilecek yanal ayrıntılar çoğu karede odak dışında. Bu klipten burun deliğinin doğru şekli, rostral uç çatalının derinliği veya iki ucun milimetrik asimetrisi ölçülmedi. Madcham tür tanımındaki küçük çatallı rostral yapı bilgisi ve net yan/ön fotoğraflar bu kısmı tamamlamalı.

**V25 karşılaştırması:** Ön ve üst renderlarda geniş, sürekli bombeli bir burun kütlesi var; orta tabla–iki yan sırt–kısa ön çıkıntı ayrımı zayıf. Sadece kafayı büyütmek veya burnu uzatmak bunu çözmez. Değişiklik, onaylı göz ve esnek kök sınırını koruyan yerel kafa biçimlendirmesi olmalı.

## 3. Ağız ve dudak/çene kenarları

**Gözlem:** Özellikle ilk bölümde kapalı ağzın ince koyu birleşme çizgisi yanak boyunca izleniyor. Üzerinde ve altında pul taşıyan çene kenarları var; renkli/açık pul sırası ile fiziksel kapanma çizgisi aynı şey değil. Çizgi burun altından yanlara dolanıyor; tek bir düz ekran çizgisi değil. Alt çene hacmi bunun altında devam ediyor, ancak çenenin tamamı ve boğazın alt sınırı her karede görünmüyor.

Burun çıkıntısının altındaki koyu alan, bir bölümü çıkıntının gölgesi ve örtmesi olabilecek bir bölge. Her koyuluğu açık ağız boşluğu sayma. Bu klipte belirgin bir ağız açma-kapama döngüsü görülmedi. Dolayısıyla çene menteşe ekseni, ağız içi, dudakların açılırken teması veya dil davranışı bu klipten doğrulanamaz.

**Model için sonuç:**

1. Üst ve alt çenenin birbirine oturan yüzeyleri kurulmalı; aralarında ince, yüzeye gömülü bir kapanma hattı kalmalı.
2. Hattın hemen iki yanında az kabarık, pullu kenar bulunmalı; başa yapıştırılmış kalın ve kesintisiz bir halka gibi olmamalı.
3. Burun tablası/rostral uç ile ağız hattı arasında gerçek hacim ve yükseklik farkı korunmalı.
4. Ağız çevresi pulları hattın yönüne uyumlu yerleşmeli. Yeni bir küçük-pul pazubandı gibi keskin sınır oluşturulmamalı. Her yer otomatik olarak göz kadar ince pullu yapılmamalı.
5. V25 ön renderında yanda görünen ince çizgisel elemanların ağız yüzeyiyle ilişkisi ayrıca kontrol edilmeli; dışarıda duran tel etkisi kabul ölçütü değil. Bunun mesh kök nedeni bu video incelemesinde teşhis edilmedi.

## 4. Kare kare hareket kaydı: önemli karşılaştırmalar

Aşağıdakiler görsel yön değişimi aralıklarıdır; kesin fizyolojik başlangıç/bitiş, saccade hızı veya 3B açı ölçümü değildir. “Yukarı/aşağı”, görüntüde açıklığın yeri anlamındadır. `events.json` 23 işaretli olayı, `frame-register.csv` bütün 360 karenin dosyasını, zamanını, hashini ve inceleme panosunu içerir.

| Kareler | Görsel değişim | Model açısından anlamı |
|---|---|---|
| F005–007, 0.208–0.292 s | Yakın açıklık üstten yana geçiyor; F006 bulanık. | Yalnız siyah noktayı kaydırmak yetmez; kapak yüzeyi ve açıklık çevresi beraber yöneliyor. |
| F019–022, 0.792–0.917 s | Açıklık aşağı ilerliyor; alt kök kıvrımının görünüşü değişiyor. | Tek sabit torus yerine yönle değişen geçiş gerekir. |
| F056–058, 2.333–2.417 s | Daha aşağı dönük açıklık; çevresi daha yatay/oval okunuyor. | Görünüşte elipsleşme fiziksel kapanma kanıtı değil. |
| F093–095 ve F111–114 | Uzak göz belirgin yön değiştiriyor, yakın göz aynı büyük hareketi yapmıyor. | İki göz hareketleri eş zamanlı kopyalanmamalı. |
| F162–168, 6.750–7.000 s | Uzak açıklık gizlenirken yakın göz aşağı yöneliyor. | Açıklığın görünmemesi tek başına göz kırpma değil. |
| F183–185, 7.625–7.708 s | Yakın açıklık daha öne yöneliyor, daha yuvarlak görünüyor. | Kök ve açıklık birlikte değerlendirilir. |
| F247–250, 10.292–10.417 s | Açıklık kameraya daha dönük ve yuvarlak; net parlak yansımalar. | Koyu iç yüzey/parlak optik görünüş için güçlü referans. Parlak nokta sabit boyalı benek olmamalı. |
| F291–293, 12.125–12.208 s | Yakın göz yeniden aşağı kayıyor. | Öndeki parlak görünüm ve kapak kıvrımları pozla değişiyor. |
| F312–336, 13.000–14.000 s | Göz hareketleri yanında yüzün kadrajdaki yeri de kayıyor. | Tüm piksel hareketini göz deformasyonu sanma; baş/kamera hareketi ayrıştırılmadı. |
| F345–347, 14.375–14.458 s | Yakın açıklık tekrar daha öne/üste dönüyor. | Son pozda da kök bağlantısı devam ediyor. |

F000 alt kökte belirgin yay kıvrımları, F168 üst bağlantıda daha açık bir katlanma alanı gösteriyor. Bu, kıvrımların hareketle dağıldığı önceki yaklaşımı destekliyor. F000–F007 arasındaki görünür farklar **kafa derisi içine gömülme/ortadan kaybolma** gerektirmiyor. Ancak buradan kesin gerinim yüzdesi, deri kalınlığı, malzeme sertliği, hareket gecikmesi veya hacim korunumu hesaplanamaz. Optik akış ve 3B rekonstrüksiyon yapılmadı.

## 5. Sıradaki küçük uygulama

Video, ana biçim işine dönüş kararını güçlendiriyor. **İlk aday kafa/burun/ağız biçimi için ayrı sürüm:** geniş orta tabla, yumuşak yükseltili yan sırtlar, kısa ön çıkıntı ve yüzeyle birleşen kapalı çene hattı. Onaylı gözün geometrisi, pul deseni, optiği ve hareketi korunacak. Omuz çıkışı ve pazubant ayrı açık işler olarak kalır; bu analiz bunları çözmüş sayılmaz.

Kabul kontrolü: aynı açıdan önce/sonra; ayrıca yan/ön/üst görünüş. Göz hareketinin burun ve dudakları sürüklememesi, göz kökünün yeni başa gömülmemesi, ağız çizgisinin yüzeyden kopmaması, renk olmadan da tabla ve çene hacminin okunması. Kamerası eşlenmemiş görüntülerden yüzdeyle göz küçültme yapılmayacak. Klipte görülmeyen burun deliği ve ağız içi ayrıntıları net ek referans olmadan kesin biçimde icat edilmeyecek.

## Dosyalar ve doğrulama

- `index.html`: kare ileri/geri, zaman sürgüsü, olaylara atlama, işaretli oranlar ve bütün ardışık panolar.
- `frames/000.jpg`–`359.jpg`: 360 tam boy kare; dosyaların tümü okunabilir ve 1920×1080 olarak doğrulandı.
- `sequence-00.jpg`–`14.jpg`: 15 ardışık pano. `eye-detail-sequence.jpg`: sekiz yakın detay.
- `source.json`, `measurements.json`, `events.json`, `frame-register.csv`: kaynak, ham ölçüler ve olay kayıtları.
- `verification.json`: özgün video kimliği ve V25'in değişmeden kaldığı hash kontrolü.

Önceki çalışma yerelde tamamlandı; bu belge şimdi GitHub için sürümlü V1 arşivine alındı. Arşivin gerçek medya kapsamı aşağıdaki ek notta belirtilir. Karelerden türetilen panolar ve işaretli görseller MatthiasKabel atfıyla CC BY-SA 3.0 olarak saklandı. Önceki Madcham fotoğraflarının farklı telif durumu bu videonun lisansıyla değiştirilmez.


## GitHub V1 arşiv notu

Bu raporun yukarıdaki dosya/doğrulama bölümü özgün **yerel çalışma** kapsamını anlatır. GitHub paketinde 360 tam boy JPEG'in tamamı yok: 360 adet 960×540 önizleme 15 WebP atlasındadır; tüm karelerin gerçekten incelendiği 15 ardışık JPEG pano aynen korunur. Seçili 10 kare `keyframes/` altında 1920×1080 olarak vardır. F359 paket uç kontrolü için eklenmiştir; yeni bir bağımsız biyolojik ölçüm değildir. Sekiz yakın plan panosu, ham ölçüler, 23 olay, 360 satırlık kayıt ve yeniden çıkarma betiği de pakettedir. Özgün 14 MB OGV Commons kaynağında ve yerel arşivde kalır. Başka bir makinede tam boy kareler özgün video ve `reproduction/extract_frames.py` ile yeniden çıkarılabilir.

Bu tur yeni biyolojik ölçüm veya yeni Blender modeli üretmedi. Araştırma, AI destekli tek gözlemcili görsel analizdir; hakemli çalışma, bağımsız insan etiketi veya 3B doku ölçümü değildir. Eksik araştırma: gerçek 3B oranlar, pul parçacığı izleme, deri gerinimi, tam çene hareketi ve uzuv videoları.
