> Historical local delivery note. Paths below refer to the original outputs/work folders in PROJECT_STATUS.md, not to this archive directory. Current handoff: [PROJECT_STATUS.md](../../../../PROJECT_STATUS.md).

# V30 — temel iskelet ve üç bağımsız animasyon

Kaynak: `../web-v29/chameleon-web-v29.blend`. Kaynağa yazılmaz. V30, V29 geometrisine eklenen bir iskelet/animasyon katmanıdır; anatomiyi, pulları, materyalleri veya göz simetrisini yeniden üretmez.

## Anatomik dayanak ve sınırlar

- Higham & Anderson (2013), *Function and Adaptation of Chameleons*, s. 65–69, şekil 4.1 ve 4.3: beş yürüyüş karesi ve XROMM iskelet görselleri incelendi. Ön/arka uzuvların farklı eklem zincirleri, dal üzerindeki temas ve omuz hareketliliği rig tasarımına yol gösterdi. Ön gövde küçük hareketli, arka bölüm ayrı kontrollüdür. [Bölüm PDF](https://biomechanics.ucr.edu/Higham%26Anderson_2013.pdf).
- [Fischer, Krause & Lilje 2010](https://doi.org/10.1016/j.zool.2009.07.001): biplanar X-ray/XROMM temelli gövde ve kuşak işlevi. Bu kaynakta görülen iskelet, yukarıdaki şekil 4.3'te tekrar sunulmuştur.
- [Molnar ve ark. 2017](https://pubmed.ncbi.nlm.nih.gov/28517034/): mikro-CT ve diseksiyonla ön/arka uzuv ve karşılıklı kavrayan parmak gruplarının kas anatomisi. Bu sürümde kavrayıcı gruplar ayrı kontrol edilir; tek tek parmaklar modellenmez.
- [Ketter Katz ve ark. 2015](https://pubmed.ncbi.nlm.nih.gov/26157161/): göz taramasında farklı yönlerde fakat bağlama göre koordineli hareket. İki göz aynı hareketin kopyası değildir; ortak ritim ve farklı yön/zaman kullanır.

**Tür ayrımı:** Modelimiz *Furcifer pardalis*. İskelet/kinematik çalışmalarının çoğu *Chamaeleo calyptratus*, göz çalışması *Chamaeleo chamaeleon*, yürüyüş fotoğraf dizisi *Bradypodion occidentale* üzerinedir. Buradaki eklem koordinatları mevcut modelin kesitlerinden çıkarılmıştır. Açılar, süreler ve adım uzunluğu animasyon tasarım değerleridir; *F. pardalis* için ölçülmüş biyomekanik veri olarak sunulmaz. Bu, anatomik referanslı temel bir deformasyon rig'idir; tam kas/iskelet simülasyonu değildir.

## Yerleşim ve korunan alanlar

- `Body` tek mesh nesnesi olarak kalır. Eski gibi içinde ayrık yüzey bileşenleri vardır; kapalı Boolean birleşim yapılmaz.
- `LeftEye`, `RightEye` ayrı küresel mesh nesneleridir. İkisi de kendi göz kemiğiyle hareket eder.
- `Neck_Bone` adı birebir korunur. Boyun–kafa geçişi yumuşak ağırlıklarla dağıtılır.
- 33 kemik: kök, gövde, göğüs, pelvis, boyun, iki kuyruk kontrolü, dört uzuvda kuşak/üst/alt/ayak/iki kavrama grubu ve iki göz kontrolü.
- Her uzvun omuz/kalça, dirsek/diz ve bilek noktaları mevcut yüzeyin halka merkezlerinden çıkarıldı. Bunlar anatomik yüzey tahminleridir; BT'den ölçülmüş kemik merkezleri değildir.
- Kaynak parça kimlikleri doğrulanarak ağırlık atandı; çakışan yüzeylere yanlış uzvun kemiği verilmez.
- Başın kendi pulları, göz kulesi, ağız, burun ve esnek bağlantı ayrılır. Gözün iç açıklığı ve desenli çevresi göz kemiğini takip eder; kafa bağlantısı boyunca etki azalır.
- Eski pul boyutları ve yoğunluk geçişleri korunur. Yeni bir pul üretimi veya keskin desen bandı yoktur. Hareket sırasında yüzeyle birlikte deformasyon olur; bu sürüm fiziksel deri/katlanma çözücüsü içermez.

## Klipler

| Action | Süre | Davranış |
|---|---:|---|
| `walk` | 6 s | Yavaş dal yürüyüşü, çapraz uzuv fazları, uzun destek fazı, ayağın kalkıp ileri taşınması; iki kavrama grubunun salınımda hafif açılması. |
| `idle_look` | 8 s | Hafif gövde yükselmesi/salınımı, küçük boyun ve kuyruk hareketi, farklı yönlerde göz taraması. Kapalı döngü. |
| `drink` | 6 s | Gövde ve başın yumuşakça aşağı eğilmesi, küçük yutkunma benzeri baş hareketleri ve başlangıç pozuna dönüş. Kapalı döngü. |

`drink` bir **baş/gövde eğilme simülasyonudur**. Su yüzeyi, sıvı, dil çıkarma veya ağız açma mekaniği içermez; doğrudan ölçülmüş içme hareketi iddiası yoktur.

## Web'de oynatma

GLB içinde üç isimli animasyon bulunur; otomatik oynatmayı web uygulamasındaki animasyon oynatıcısı başlatır. GLB dosyası kendi başına autoplay kararı vermez.

`walk` **ileri kök hareketi** içerir: her 6 saniyede Blender/glTF X ekseninde **−0.32 model birimi**. Döngüde uzuv pozları kapanır, kök konumu kapanmaz. Kesintisiz ileri yürüyüş için her turda üst kapsayıcı nesneye −0.32 X ekleyin; aksi halde oynatıcı klibi başa sarınca model geri sıçrar. Alternatif olarak web tarafında `Root.position` kanalını çıkarıp modeli yerinde yürütün ve üst kapsayıcıyı hareket ettirin. Otomatik klip geçişlerinde kısa crossfade kullanın; ilk denemede `idle_look` seçin.

Model dal üstünde kavrama pozuna göre hazırlanmıştır; düz zemine basan ayak yürüyüşü değildir. Kliplerde dal nesnesi dışa aktarılmaz. Sahneye ayrıca uygun bir dal/temas yüzeyi yerleştirilmelidir.

## Doğrulama

`rig-report.json`: kaynak SHA, dinlenme pozunda geometri farkı, kemik listesi, eklem noktaları, IK sapması, klip süreleri ve yürüyüş temas örnekleri.

`verification.json`: GLB içindeki klipler/süreleri, hareketli kanallar, skin ağırlıkları, gerekli isimler, döngü poz farkı ve GLB tekrar içe aktarımında eklem konumu karşılaştırması. Önizlemeler dışa aktarılan GLB'den üretilir.

Tam ayrıntılı kaynak korunmuştur. Bu dosya web formatındadır fakat mobil için optimize edilmiş LOD değildir; boyut ve cihaz performansı ayrıca değerlendirilmelidir.

## Yeniden üretim

Yalnızca bu sürümün ek adapter'ı: `../../work/rig-v30/build.py`. Anatomiyi oluşturan eski kod tekrar yazılmadı. `provenance.json` kaynak bileşen sınırlarını içerir ve V29 vertex örnekleriyle kontrol edilir. `verify.py` dışa aktarılmış dosyayı tekrar açar.

Kaynak araştırma PDF'si ve sayfa görüntüleri yalnızca yerel çalışma klasöründedir; yayınlanmış teslimata kopyalanmamıştır. Bu görevde GitHub'a gönderim veya canlı site yayını yapılmaz.
