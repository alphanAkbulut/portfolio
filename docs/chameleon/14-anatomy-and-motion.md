# Anatomi ve hareket — kanıt, küçük tasklar ve E1
2026-10-20. Yalnız portfolio-chameleon. Kullanıcı göz, bütün hayvanın şekli/hareketi ve kuyruğun ayrı analiz edilmesini istedi; küçük tasklarla ilerleme tercihi sürüyor.

## Yön değişikliği
D5.3'ün siyah açıklık işareti kullanıcı tarafından düğme gibi bulundu. D5.3 göz tasarımı olarak **REJECTED**; yalnız deri dağılımı deneyi olarak korunur. Renk animasyonu öncelik olmaktan çıktı. Yeni sıra: göz hacmi → kafa bağlantısı/bakış → deri → hareket; kuyruk ve yürüyüş ayrı kanıt kapıları. Tüm hayvanın biyolojik analizi tamamlandı denmez.

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
| E1 göz hacmi | Nötr gri; açıklık, yanak tabanı; ön/yan/üç çeyrek | Düğme yerine belirgin kapak hacmi; açıklık içinde pupil; kullanıcı oran değerlendirmesi | İlk artefakt hazır; görsel onay bekliyor |
| E1.1 kafa bağlamı / oran | Temsili panter kafa yan siluetiyle göz konumu ve oranı | Alın, ağız çizgisi ve yanak içinde gözün oturuşu; final asset olarak sunulmaz | Önerilen sonraki adım |
| E2 bakış pozları | Sabit başta sol/orta/sağ/yukarı/aşağı pozlar | Açıklık görünümü doğru yönde değişir; kapak tabanı kopmaz; mesh çakışmaz | NOT STARTED |
| E3 göz hareketi | Referans video analizi + iki gözlü kısa tarama/hedefe yönelme | Ölçülen veya açıkça tasarlanmış hızlar ayrılır; gözler sürekli eşzamanlı değil; hedef koordinasyonu var | NOT STARTED |
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
- **Görsel durum: kullanıcı değerlendirmesi PENDING.** Simetrik/düzenli zarf ve oval destek hâlâ basitleştirilmiş; foto-gerçeklik, panter anatomik doğruluğu veya hareket kanıtı yok. Pul/renk ekleyerek biçim kusurları kapatılmadı.

## Blender'da görme
.blend dosyası tüm sahneyi içerir: kapak mesh'i, destek, iris/pupil, ışıklar ve kamera. Blender'da File → Open ile outputs/e1/eye-form-v1.blend açılır. Bu, bir PNG'den farklı olarak döndürülüp düzenlenebilir sahnedir. Ön/yan/üç çeyrek PNG'ler Blender açmadan incelenebilir. GUI etkileşimi bu taskta test edilmedi; background yeniden açma test edildi.
