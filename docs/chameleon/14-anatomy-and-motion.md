# Anatomi ve hareket — kanıt, küçük tasklar ve E1
2026-10-20. Yalnız portfolio-chameleon. Kullanıcı göz, bütün hayvanın şekli/hareketi ve kuyruğun ayrı analiz edilmesini istedi; küçük tasklarla ilerleme tercihi sürüyor.

## Yön değişikliği
D5.3'ün siyah açıklık işareti kullanıcı tarafından düğme gibi bulundu. D5.3 göz tasarımı olarak **REJECTED**; yalnız deri dağılımı deneyi olarak korunur. Renk animasyonu öncelik olmaktan çıktı. Güncel sıra: mevcut göz hacmi → aynı sahnede deriyle birlikte bakış/hareket deneyi; kuyruk ve yürüyüş ayrı kanıt kapıları. Tüm hayvanın biyolojik analizi tamamlandı denmez.

## Kaynaklar ve sınırları
Kontrol tarihi 2026-10-20. Kullanıcının fotoğrafları görsel referans; lisanslı texture olarak kullanılmadı, GitHub'a kopyalanmadı.

| Kaynak | Gözlenen kanıt | Üretim kararı / açık sınır |
|---|---|---|
| [Lustig vd., 2013](https://pmc.ncbi.nlm.nih.gov/articles/PMC3743880/) | Birleşmiş kapakların açıklığı, bakış yönüne göre görüntüde dairesel/oval/dar görünür; araştırma bunu bakış sınıflaması için kullanır | Açıklığın perspektifini modelle. Kaynak common chameleon; panter için kesin açı/oran ölçüsü değil |
| [Ketter Katz vd., 2015](https://pubmed.ncbi.nlm.nih.gov/26157161/) | İki hedefin tek gözlerle takibi; bağımsızlık davranışa göre koordinasyon içerir | Ayrı göz kontrolü ve ortak hedefe yönelme durumları gerekli; rasgele kesintisiz dönme yeterli değil. Süre/hızlar henüz ölçülmedi |
| [Scientific Reports, 2025](https://www.nature.com/articles/s41598-025-20357-3) | Uzun/kıvrımlı optik sinir ve geniş göz dönüşleri arasındaki işlevsel ilişki araştırılıyor | İç siniri modellememiz gerekmiyor; kaynak rig'in kesin dönüş limitlerini kanıtlamaz |
| [Luger vd., 2020](https://pubmed.ncbi.nlm.nih.gov/31883141/) | Kuyruk omurları kök/uç boyunca farklılaşır; kavrayıcı türlerde küçük distal omurlar dala sarılmayı destekler | Kök/uç için ayrı bükülme dağılımı önerisi. Panterde tam rig kemik sayısı/açı sınırı çıkarılamaz |
| [Spinner vd., 2014](https://www.nature.com/articles/srep05481) | Ayak ve kuyruk tutunma yüzeylerindeki mikro yapılar, sürtünmeyle ilişkilendirilir | Tutunma animasyonunda temas/kayma kontrolü gerekiyor; yalnız dekoratif sarmal değil |
| [Brice Miller — Chameleon eye, 2018](https://commons.wikimedia.org/wiki/File:Chameleon_eye.jpg) | Sayfa yazar/CC BY-SA 4.0 ve structured data içinde panther chameleon tanımı veriyor | Ek referans bağlantısı; piksel dosyası bu taskta incelenmedi/kopyalanmadı; görüntüden oran ölçüldü denmez |

Erişim sınırı: PMC3866397 tam metin robot kontrolüne takıldı; Higham locomotion PDF açılışı hata verdi. Bu kaynaklar okunmuş tam metin kabul edilmedi. Henüz panter bukalemunu hareket videosundan kare-kare ölçüm yok.

## Biyolojik hedef ve modelleme hipotezi ayrımı
**Görsel referanslarda açık:** kafadan belirgin çıkıntı yapan deri kaplı göz hacmi, küçük açıklık, gözün üstünde ince pullar, kafa/yanakta farklı pul büyüklükleri. Anatomik final oranlar ölçülmedi.
**Modelleme önerisi:** kapak zarfı, açıklık kenarı, içeride iris/pupil ve daha sonra kornea ayrı kontrol edilebilir parçalar. Göz ekseni değişirken taban kafaya bağlı kalmalı; açıklık ve deri deformasyonu birlikte değerlendirilmeli. Bu bir biyomekanik kas simülasyonu vaadi değil.
**Kuyruk önerisi:** incelen uç, dinlenme kıvrımı, açılma, dala sarılma ve bırakma ayrı pozlar; uzunluk korunmalı, segmentler birbirine/bedene girmemeli, tutunduğu dalın içinden geçmemeli.
**Yürüyüş önerisi:** ayak yerleşimi, kavrama/bırakma, gövde ilerlemesi ve kuyruk desteği birlikte analiz edilmeli. Sürekli sinüs salınımını gerçek yürüyüş sayma.

## Task sırası ve gözlenebilir kabul
| Task | Küçük teslim | Kabul kapısı | Durum |
|---|---|---|---|
| E1 göz hacmi | Nötr gri; açıklık, yanak tabanı; ön/yan/üç çeyrek | Düğme yerine belirgin kapak hacmi; açıklık içinde pupil; kullanıcı oran değerlendirmesi | Kullanıcı şimdilik yeterli buldu; hareket/deri kabulü değil |
| E1.1 kafa bağlamı / oran | Temsili panter kafa yan siluetiyle göz konumu ve oranı | Alın, ağız çizgisi ve yanak içinde gözün oturuşu; final asset olarak sunulmaz | Ayrı statik çıktı ertelendi; gereken bağlam hareket sahnesine alınacak |
| E2 bakış pozları | Sabit başta sol/orta/sağ/yukarı/aşağı pozlar | Açıklık görünümü doğru yönde değişir; kapak tabanı kopmaz; mesh çakışmaz | NOT STARTED |
| E3 göz hareketi | Referans video analizi + iki gözlü kısa tarama/hedefe yönelme | Ölçülen veya açıkça tasarlanmış hızlar ayrılır; gözler sürekli eşzamanlı değil; hedef koordinasyonu var | Video analizi tamamlandı (aşağıda); animasyon NOT STARTED |
| E4 deri entegrasyonu | E1/E2 onaylı formda ince göz pulları → karışık geçiş → yanak | Doku kayması/esnemesi ve yakın/uzak okuma kontrol edilir | NOT STARTED |
| T1 kuyruk incelemesi | Panter özelinde foto/video poz haritası | Tür/poz/kaynak doğrulanır; dinlenme ve kavrama ayrılır | Genel anatomi ön araştırması var; task tamamlanmadı |
| T2 kuyruk biçimi | Kökten uca incelen model; açık/kıvrık/kavrama pozları | Uzunluk/çap sürekliliği, öz-kesişim ve dal teması kontrolü | NOT STARTED |
| T3 kuyruk hareketi | Sarılma/bırakma kısa deney | Temas sırasında kayma ve pop yok; fiziksel doğruluk iddiası sınırlandırılır | NOT STARTED |
| L1 tüm vücut şekli/yürüyüş | Panter referanslarından siluet, ayak fazları, gövde/kuyruk ilişkisi | Tür doğruluğu ve ayak kayması; uzman asset ihtiyacı yeniden değerlendirilir | NOT STARTED |

Her task sonunda kullanıcı kararı. Önceki D1–D8 planı silinmez; bu işler D3 asset/anatomi ve D8 bölge entegrasyon bağımlılıklarını açar. Uzun film, canlı cursor veya release'e geçiş izni değildir.

## E1 gerçek çıktı ve doğrulama
- [Kaynak script](../../scripts/chameleon/create_eye_form.py), [manifest](e1-manifest.json).
- Yerel outputs/e1: eye-form-v1.blend; front.png, side.png, three-quarter.png. Blender 4.5.14, Cycles CPU, 48 samples, 900×760. Üç açı ayrı render; aynı mesh, materyal ve ışık.
- Önceki siyah dış küre yerine açık kapak zarfı ve içine yerleştirilmiş iris/pupil. Yanak desteği basit oval hacim; gerçek kafa yok.
- Profilin yüksekliği/genişliği ve açıklık oranı tasarım varsayımı. Açıklık çapı/maksimum zarf çapı yaklaşık 0.157; biyolojik ölçüm olarak sunulmaz.
- İlk render'da pupil iris yüzeyinin altında kaldı; bu deneme work/e1/attempt-1 içinde korundu. Katman derinliği düzeltildi ve yeniden render alındı.
- Son ön/üç çeyrek görüntü ve ilk yan görünüm incelendi; yan son render hash'i ilk yan görünümle aynı. .blend yeniden açıldı, kapak nesnesi ve pupil/iris derinlik sırası kontrolü geçti.
- Render çağrıları: 8.12 / 4.07 / 6.58 s. Toplam task süresi değil.
- **Görsel durum: kullanıcı “göz fena değil şimdilik” dedi; hareket ve deriyle doğrulama bekliyor.** Simetrik/düzenli zarf ve oval destek hâlâ basitleştirilmiş; foto-gerçeklik, panter anatomik doğruluğu veya hareket kanıtı yok. Pul/renk ekleyerek biçim kusurları kapatılmadı.

## Blender'da görme
.blend dosyası tüm sahneyi içerir: kapak mesh'i, destek, iris/pupil, ışıklar ve kamera. Blender'da File → Open ile outputs/e1/eye-form-v1.blend açılır. Bu, bir PNG'den farklı olarak döndürülüp düzenlenebilir sahnedir. Ön/yan/üç çeyrek PNG'ler Blender açmadan incelenebilir. GUI etkileşimi bu taskta test edilmedi; background yeniden açma test edildi.


## Güncel devam sözleşmesi — video analizi (2026-10-20)
Bu bölüm göz çalışmasının güncel devam noktasıdır; yukarıdaki E1 üretim kaydı tarihsel kanıttır. Kullanıcı gereksiz aynı görünümlü dosyalar üretilmemesini istedi. **Tek gelişen Blender sahnesi; anlamlı hareket ve deri testi.** Bu analiz turunda model, script veya site değiştirilmedi. Yeni göz sıfırdan üretilmeyecek: mevcut E1 taban alınarak deformasyon ve ince pul yüzeyi eklenecek. Bu öneri henüz uygulanmadı; task sınırında kullanıcı kararı beklenir.

### Kaynak kimliği, yeniden üretim ve hak sınırı
- [Shutterstock 11428904 — Macro shot in 4K UHD of a veiled chameleon's eyes](https://www.shutterstock.com/tr/video/clip-11428904-macro-shot-4k-uhd-veiled-chameleon%27s-eyes). Sayfa üreticisi: mark smith nsb; sayfa yükleme tarihi 2015-08-28.
- İncelenen: halka açık **filigranlı önizleme**, orijinal 4K değil. Sayfadaki tür veiled chameleon; projenin hedefi panter bukalemunu. Bu kayıt panterin kesin kafa oranlarına, göz açılarına veya deri anatomisine kanıt sayılmaz.
- [Önizleme medya adresi](https://www.shutterstock.com/shutterstock/videos/11428904/preview/stock-footage-macro-shot-in-k-uhd-of-a-veiled-chameleon-s-eyes.webm); URL ileride değişebilir.
- Yerel çalışma alanında `outputs/chameleon-eye-reference.webm`. SHA-256: `2fc7308fc8bb232adf4bf9b7d90e1130470ce5bae4f8c0f1c5110c4b8eef50a5`.
- Tarayıcı süresi 11.878 s; Blender çözümlemesi 596×336, 356 kare, nominal 29.9700298 fps. Bunlar önizleme dosyasının ölçümleri; gerçek hayvan hareketinin çekim hızı veya ağır çekim olmadığı doğrulanmadı.
- Blender 4.5.14 video sequencer ile 0–11.75 s arasında 0.25 s aralıklı **48 örnek** çıkarıldı ve sekiz temas sayfasında görsel incelendi. Sıfır tabanlı kaynak indeks `round(t*fps)`; Blender sahne karesi indeks+1. Tablo zamanları istenen nominal örnek zamanlarıdır; gerçek indeks/fps en yakın kareye yuvarlanır. Container PTS çözümlemesi yapılmadı.
- Yerel scratch: `work/video-analysis/dense/extract.py`, `metadata.json`, `00.png…47.png`, `board-0.jpg…board-7.jpg`. Bunlar repo teslimatı değildir; silinirlerse yukarıdaki yöntem ve kaynak hash'i ile yeniden üretilebilir. Videonun her karesi tek tek incelendi denmez.
- Video ve kareler GitHub'a eklenmedi; satın alma/lisans edinme yok. Filigran kaldırılmadı. Görüntü texture, reklam veya dağıtılabilir ürün asset'i olarak kullanılmayacak.

### Gözlem tablosu
**Yön sözlüğü:** L = görüntünün solu, R = görüntünün sağı; hayvanın anatomik sol/sağı değildir. “İç” yüz orta çizgisine, “dış” kadrajın yanına doğrudur. “Açıklık” görünen kapak açıklığıdır; siyah görünen alanın tamamını ölçülmüş pupil çapı kabul etme. Baş/kamera hareketinden arındırılmış izleme yapılmadı.

| Örnek zamanı | Görsel kanıt | Güven ve sınır |
|---|---|---|
| 0–0.75 s | L açıklığı belirgin görünmez. R'de 0.25 s örneğinde hareket bulanıklığı, 0.50–0.75'te dış tarafta dar açıklık görülür | Yön değişimi yüksek güven; başlangıç/bitiş/hız ölçülmedi |
| 1–1.50 s | L hacminin dış çizgisi değişir; R açıklığı içe doğru daha okunur hale gelir | Göreli değişim; başın küçük hareketi de görüntüye katkı verir |
| 1.50–2.75 s | R açıklığı görünür kalır; L büyük ölçüde açıklıksız pullu yüzey gösterir | İki göz aynı görünen yönü paylaşmaz; hangi nesneye baktıkları bilinmez |
| 3–4.25 s | L'nin üst/iç kenarında bazı karelerde çok dar koyu iz, 3.75 civarında biçim/bulanıklık değişimi vardır | Küçük açıklığın kesin konumu düşük güven; buradan göz kırpma çıkarılmaz |
| 4.50–5.75 s | L'nin görünen pullu yüzeyi yön değiştirir; 5.50 civarı kenarda dar iz, 5.75'te alt/dış tarafta açık oval görünüm vardır. R daha sabittir | Açıklığın yeniden görünmesi yüksek güven; kesin geçiş süresi değil |
| 6–7.50 s | L dış/alt, R daha iç/üst tarafta görünür. L açıklığı giderek daralır; R göreli olarak korunur | Bağımsız kontrol gereksinimi için güçlü görsel örnek |
| 7.75–8.25 s | 8.00'de L'de bulanıklık; 8.25'te L açıklığı gizlenmiş ve yüzey/siluet değişmiştir. R açıklığı görünür kalır | Hareket olayı bu aralıkta; 0.5 s süren tek dönüş olduğu iddia edilmez |
| 8.25–9.75 s | L açıklığı büyük ölçüde görünmez; R görünür ve küçük değişiklikler yapar | “Bekleme” tamamen hareketsizlik demek değildir |
| 10–10.75 s | R açıklığı aşağı/dış tarafa kayar; L 10.50'de belirgin görünür, 10.75'te de açıktır | İki gözün olay zamanları aynı değil |
| 11–11.75 s | R 11.00'de bulanık, ardından dışa yönelir ve 11.75'te açıklığı büyük ölçüde gizlenir. L görünür kalır | R açıklığının yok oluşunu pupil küçültme animasyonuyla taklit etme |

Bu tablo bir animasyon mocap kaydı değildir. 0.25 s örnekleme hızlı hareketin ara fazlarını atlayabilir. Hareket bulanıklığı tek başına biyolojik saccade sınıflaması veya hız kanıtı değildir. Derece/saniye, anatomik limit, kas kuvveti, deri gerinimi, hedef mesafesi ve niyet ölçülmedi. Kesin olay süresi gerekirse yalnız ilgili kısa aralık tam kaynak kare hızında incelenmeli; tüm video için gereksiz yeni çıktı üretilmemeli.

### Biçim ve deri: ne görüldü, ne çıkarıyoruz?
1. **Gözlem:** göz, kafa yüzeyinin üstünde belirgin hacim oluşturuyor; pullu örtü açıklığa kadar geliyor. Açıklık merkezde sabit bir siyah düğme gibi kalmıyor. **Uygulama sonucu:** iris/pupil içeride, kapak zarfı dışarıda olmalı; büyük çıplak parlak küre yapma.
2. **Gözlem:** yön değişiminde açıklık yuvarlak/oval/dar/gizli görünümler alıyor ve dış siluet de değişiyor. **Çıkarım:** 2D pupil kaydırma yeterli değil; kapak zarfının yönü ve perspektif örtülmesi birlikte gerekli. Videodan örtünün ne kadarının rijit dönüş, ne kadarının gerçek deformasyon olduğu ayrıştırılamaz.
3. **Gözlem:** taban çevresinde kıvrım/gölge bantları ve kafaya devamlılık var. **Rig hipotezi:** taban bağlantısını sabit tutup uç bölgesinin dönüşünü yumuşak ağırlıklarla dağıtmak, sert sap üzerinde dönen küreden daha uygun ilk testtir. Kas simülasyonu olduğu iddia edilmez.
4. **Gözlem:** gözde daha küçük pullar, kafa orta bölümünde daha büyük hücreler görülüyor; birleşme homojen değil. **Malzeme kararı:** ince göz pulları → karışık küçük/orta boy geçiş → iri kafa pulları. Eşit büyüklükte boncuk dizisi veya keskin boyut sınırı yapma. Hareketli yerde pulların neden küçük olduğu bu kliple biyolojik olarak kanıtlanmaz.
5. **Sınır:** 596×336 ve sıkıştırma tek tek pulların gerçek esnemesini/gözeneklerini ölçmeye yetmez. Renk parlaklığı pigment dışında ışık, yüzey yönü ve video işlemeden etkilenir. Bu video fizyolojik renk dönüşümü kanıtı olarak kullanılamaz.

### Mevcut E1 üzerinde önerilen teknik güncelleme — henüz uygulanmadı
- Mevcut `create_eye_form.py` ve E1 sahnesini okuyup gerçek nesne/topoloji durumunu doğrula. Lathe kapak mesh'i deney tabanıdır; topo yetersizse yalnız deformasyon için gerekli değişikliği yap. Önceki E1 checkpoint'ini koru; paralel statik v2/v3 galerileri üretme.
- İki göz için ayrı bakış kontrolü, kafa uzayında taban ankrajı ve zarfın içinde dönüş merkezi. Kontrol adlarında anatomik taraf ile kamera tarafını karıştırma. Merkez/limitler bu ilk deneyde **tasarım parametresi**, ölçülmüş biyolojik sayı değil.
- Kapak tabanında düşük, uçta artan düzgün deformasyon ağırlığı dene. Taban boşluğu, hacim çökmesi, aşırı gerilme oluşursa şekil düzeltmeleri kullan. Bütün zarfı tek sert nesne olarak menteşeden çevirmek kabul edilmez.
- Iris/pupil ve açıklık yönünü birlikte sür; açıklığın kenardan kaybolmasını geometri/örtülme üretsin. Görünürlüğü siyah diski küçültüp büyüterek taklit etme. Kornea parlaklığı açıklık içinde sınırlı; plastik boncuk görünümü yaratmamalı.
- Pul koordinatlarını başlangıç yüzeyine/UV'ye bağla; mesh deformasyonunu takip etsin. Dünya uzayında sabit procedural koordinatlar yüzey üzerinde kayma yaratabilir. Ayrı pul geometrisi varsa aynı deformasyon alanına bağla; yüzeyden ayrılmasın.
- İlk malzeme sade olsun: ince bombeli mikro yapı, dar aralıklar, kontrollü pürüzlülük. Renkle form kusurunu örtme. Mevcut D5 sonuçları dağılım fikri sağlar, doğrudan hazır anatomik göz kaplaması değildir.
- Hareket ritmi ayrı “bakışı koru → yeniden yönel → yerleş” olaylarından oluşsun. İki gözü sürekli aynı sinüsle veya bağımsız beyaz gürültüyle döndürme. Kaynak ritmi esin verir; gerçek süreyi kopyaladığını iddia etme.
- Kamera odaklı ortak bakış ilerideki anlatım durumudur. Referanstaki hayvanın kamerayı/avı fark ettiği doğrulanmadı. Cursor kontrolü ve WebGL entegrasyonu bu adımda yok.

### Sonraki küçük teslim ve kabul kapısı
**Öneri:** E2 poz kontrolünü önce aynı sahnede doğrula; ardından E3/E4'ün en küçük kesişimi olan **deri kaplı iki gözün kısa hareket testi**. Yeni göz tasarımı değil, E1'in güncellenmesidir. Önce nötr/dış/yukarı pozlarda taban ve açıklık kontrolü; başarısızsa animasyon render'ına geçme. Başarılıysa tek 6–8 s önizlemede bir göz bakışı korurken diğeri yön değiştirsin, sonra roller değişsin. Bu süre üretim önerisidir, biyolojik ölçüm veya onaylı bütçe değildir.

Aynı klipte normal baş kadrajı ve kısa göz yakın planı değerlendirilsin; kamera hareketi deformasyon değerlendirmesini karıştırmasın diye her kadrajda kısa sabit bölüm kullanılsın. İlk teslim: **bir düzenlenebilir ana .blend ve bir kısa önizleme**; test kareleri scratch'te kalsın. Renk dönüşümü bu test kabul edilene kadar ertelensin.

Kabul kriterleri:
- Nötr ve uç test pozlarında kafayla taban arasında görünür açıklık/ayrılma yok.
- Açıklık yön değiştirirken doğal perspektifle daralır/gizlenir; yüzey üstünde kayan düğme görünümü yok.
- İki göz en az bir bölümde farklı yön/olay zamanına sahip; birinin sabit tutulması diğerini hareket ettirmiyor.
- Pullar yüzeye bağlı, kareler arasında kayma/sıçrama/ayrılma yok; yakın planda ağır gerilme veya şişme yok.
- İnce göz dokusundan iri kafa dokusuna karışık boyutlarla süreklilik var; büyük ölçek geçiş çizgisi görünmüyor.
- Normal kadrajda gürültü/titreşim, yakın planda plastik boncuk etkisi incelenmiş; gerçek zaman performansı henüz test edildi denmiyor.
- .blend yeniden açılıp ana kontrol ve en az üç poz doğrulanmış; kısa video gerçekten oynatılarak kontrol edilmiş.
- Son kabul kullanıcının hareket + deri değerlendirmesi. Tam panter anatomisi, bütün karakter, kuyruk, yürüyüş ve hero kabulü değildir.

### Sonradan okuyacak LLM için kesin durum
DONE: E1 nötr biçim, önceki deri deneyleri, bu veiled önizlemesinin 48 örneklik nitel analizi.
NOT DONE: deri kaplı hareketli göz, rig, tam kafa/karakter, panter hareket ölçümü, kuyruk/yürüyüş deneyi, canlı cursor, site değişimi.
NEXT: kullanıcı bu somut E1 güncellemesini onayladığında mevcut script/sahneyi kontrol et; yalnız yukarıdaki küçük teslimi gerçekleştir; sonuç ve sorunları bu belgeye işle. Kullanıcının son talebi bu turda derin analiz ve repo kaydıdır; analiz bitmesini animasyonun tamamlanması sayma.


## Güncel sahne sözleşmesi — kullanıcı onaylı, 2026-10-20
Bu bölüm önceki kesintisiz yürüyüş, üç toplam basış, 7. saniyede fark etme ve çene teması önerilerinin yerine geçer.
1. Sağdan sola yürüyüş: dört ayağın HER BİRİ iki kez kaldırılıp yeniden basar (8 basış). Ayaklar aynı anda değil, doğrulanacak yürüyüş fazlarıyla ilerler.
2. 0.5 s duruş: baş ziyaretçiye dönmez, gözler çevreyi tarar; ziyaretçi henüz fark edilmez.
3. Her ayak bir kez daha basar (4 basış; sahne boyunca ayak başına 3, toplam 12).
4. İkinci kısa duruş ve gözle çevre kontrolü; bu duruşun süresi henüz kilitli değil.
5. Baş suya yaklaşır, ağız hafif açılır; kısa çıkan kırmızımsı pembe dil su yüzeyine dokunur. Çene teması şart değil; uzun dil fırlatma/lıkır lıkır içme yok. İlk fiziksel dil-su teması = water-contact: yerel su halkaları ve cam kontroller/yazılarında ripple-1. Ana başlık sabit; site paleti değişmez.
6. İçerken tek göz önce ziyaretçiyi fark eder (eye-notice); dil geri çekilir, baş hızlı fakat kontrollü kalkıp ziyaretçiye yönelir. Başın kilitlenme anı = visitor-recognized; ripple-2, en güçlü gövde renk dönüşümü ve tüm site palet dönüşümü başlar. Baş yükselirken kamera yakınlaşabilir; canlı cursor yalnız yakın plan hazır olunca.
Yürüyüş sırasında bacak/küçük gövde bölgelerinde hafif lokal renk değişimleri korunur; temas nesnesi gerekmez. Bunlar tüm site rengini değiştirmez. Scroll her anda önceliklidir.
**Süre:** 7 s / 20 s kilidi yok. Önce ayak teması, ilerleme ve içme inandırıcılığı; sonra kurgu. Basış sayısı fiziksel hareket kabulüdür, sadece timeline etiketi değildir.
**Kanıt ayrımı:** Kullanıcı kısa dil çıkışı ve pembe-kırmızı görünümü görsel hedef olarak onayladı. İki ekran görüntüsü hareket hızı veya suyla temas anını ölçmez. Dil ucunun küçük su yüzeyine teması yaratıcı sahne kararıdır; türün tüm doğal içme biçimlerinin iddiası değildir.

### İçme kaynak güncellemesi ve sonraki build dilimi
- [MNHN, panter bukalemunu](https://www.mnhn.fr/fr/cameleon-panthere), 2026-10-20 erişim: su damlalarını dille alma davranışını açıklar. Kaynağın kaptan içmeye ilişkin mutlak ifadesi tüm bireyler için deneysel yasak olarak alınmadı.
- [Ueno Zoo, 2015-09-11](https://www.tokyo-zoo.net/topics/news/ueno/4291_23157_2015-09-11.html): panter sergisinde dal/yaprak damlaları ve damlayan su; baş/dil hızını ölçmez.
- [Kim & Bush 2012, Natural drinking strategies](https://thales.mit.edu/bush/wp-content/uploads/2012/04/drinking-JFM.pdf): dil yüzeyi ve su alma mekanikleri; bu bireyin hareket zamanlaması değil.
Tür Furcifer pardalis korunur; cinsiyet/lokalite ve final oranlar seçilmiş sayılmaz.
**Yetki:** kullanıcı bu sahne güncellemesini repoya işlemeyi ve ardından build'e devam etmeyi istedi. Önceki “analiz sonrası onay bekle” bu küçük devam adımı için aşılmıştır.
**İlk build dilimi:** E1 göz geometrisini yeniden kullanarak tek düzenlenebilir bütün-vücut hacim taslağı; gövde, kafa, dört bacak/temas, incelen kıvrık kuyruk ve kısa pembe dil. Ölçüler tasarım hipotezi; anatomik final, iskelet doğrulaması veya yürüyüş implementasyonu olarak sunulmaz. Tam 12 basış, kuyruk deformasyonu ve su fiziği sonraki ayrı kabul kapılarıdır. Önce bütüncül biçim okunurluğu sınanır; fotogerçekçi deri eklenmez.

## B1 — bütün vücut hacim taslağı, gerçek build sonucu
2026-10-20; sahne sözleşmesi commit'i `3744c270128e1ca120d44073ffe168d53726885c` ardından üretildi.
- Mevcut E1 .blend açıldı; kapak mesh'i iki göz için yeniden kullanıldı. E1 orijinali korunur.
- Tek güncel çalışma sahnesi: `outputs/body-study/chameleon-study.blend`; önizleme `body-overview.png`; teknik kayıt `manifest.json`.
- [Üretim script'i](../../scripts/chameleon/create_body_study.py). Önkoşul: yerel `outputs/e1/eye-form-v1.blend`; yoksa önce mevcut `create_eye_form.py` ile E1 üret. Script kendi B1 çıktısını günceller; önceki kullanıcı düzenlemesi varsa çalıştırmadan koru.
- Blender 4.5.14 LTS / Cycles CPU; 1200×760, 32 sample. Kaydedilen sahne yeniden açıldı; dört ayrı bacak ve iki E1 kapak nesnesi doğrulandı.
- Görsel incelendi: bütün gövde/kafa, dört bacak (uzaktakiler kısmen örtülü), kıvrık kuyruk ve kısa pembe dil var. İlk kuyruk birleşimi kırık bulundu; aynı çalışma sahnesinde düzeltildi. İlk deneme scratch'te korunur.
- **Görsel durum REVISE / kullanıcı değerlendirmesi:** boyun/uzuv birleşimleri hâlâ ayrı hacimler olarak okunuyor; kafa ve göz oranları ölçülmedi, kuyruk geçişinde yüzey izi kalıyor, dal kuyruğun iç kıvrımını kısmen örtüyor. Parmaklar karşılıklı kavrama kütleleri; nihai parmak sayısı/dağılımı değil. Gövde fazla geometrik; fotogerçekçi veya anatomik final kabul edilmez.
- Dil yalnız kısa çıkış ve renk hedefini gösteren statik nesne; su teması, geri çekilme veya içme animasyonu yok.
- Armature/iskelet, gerçek yürüyüş fazları, 12 basış, kuyruk açılması, doku, renk geçişi ve ripple uygulanmadı. Screenshot veya .blend açılması bunların çalıştığını kanıtlamaz.
- Sonraki küçük adım: panter yan/ön referanslarına göre kafa–gövde ve eklem yerleşimini düzeltme, ardından bir doğrulanabilir yürüyüş döngüsü. Anatomik referans kapısını atlayıp sentetik yürüyüşü biyolojik doğru diye etiketleme. Kullanıcı task sınırında değerlendirecek.
