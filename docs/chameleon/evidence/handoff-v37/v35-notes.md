> Historical local delivery note. Paths below refer to the original outputs/work folders in PROJECT_STATUS.md, not to this archive directory. Current handoff: [PROJECT_STATUS.md](../../../../PROJECT_STATUS.md).

# V35 — ileriden başlayan spiral ve yumuşak kuyruk kökü

Bu Mac’te kaydedilen yeni aday. V34 dosyaları korunmuştur. GitHub veya canlı siteye yayınlanmadı.

## Değişiklikler

- Sıkı spirale ayrılmadan önceki bölüm 0,40’tan 0,95 model birimine çıkarıldı. Bu bölüm kapalı pozda yumuşak bir aşağı kavis oluşturur. Toplam merkez hattı uzunluğu 5,44449 ve burun–kök uzunluğuna oranı yaklaşık 1,33 korunur.
- Kökün eski, yana kaçmış ve ani çöküntü oluşturan çekirdeği yerel olarak kaldırıldı. Yeni birleşim mevcut gövdeye kaynaklıdır; dolgun üst konturu ve alt hattı kademeli olarak kuyruk kesitine geçer.
- Nötr kök sağ/sol kesitleri orta düzleme göre oluşturuldu. Gerçek çekirdek yüzeyinden 120 ışın çiftiyle yapılan ölçüm `root-symmetry.json` dosyasındadır. Pulların rastlantısal yerleşimi birebir aynalanmaz.
- Kök pulları yenilenen yüzeye yerleştirildi. Hareket bölgesindeki küçük pullar ve kuyruk boyunca değişen boyutlar kademeli geçiş kullanır.
- 64 kuyruk kemiği ve `tail_wave` sağ/sol hareket eğrileri V34 ile birebir korundu. `tail_coil` 8 saniyelik açılma–sarılma–açılma döngüsüdür.

## Korunan alanlar ve üretim kaynağı

V35, V34’ün üretim tarifinin odaklı değişikliğidir; tarifi yeniden üretmek için değişmemiş V33 dosyası kaynak olarak açılır. Teslimatın korunma karşılaştırması V34 ile yapılır. Baş, gözler, bacaklar, aksiyel gövdenin x<=1,08 bölümü, bu bölgelerin ağırlıkları ve ilk üç animasyonun kuyruk dışındaki eğrileri birebir korunmuştur. Kökün daha geriye yayılan onarımı ve sınırı geçen tam pul hücreleri değişiklik kapsamındadır.

`Body`, `LeftEye`, `RightEye` nesneleri ve `Neck_Bone` korunur. Beş klip: `walk`, `idle_look`, `drink`, `tail_coil`, `tail_wave`.

## Kontroller

- `verification.json`: GLB yeniden içe aktarımı; beş klip, nesne/kemik isimleri, deri ağırlıkları, döngü sınırları ve her klipte beş karede bütün eklem konumları.
- `preservation.json`: V34 ile korunan geometri/ağırlıklar, gözler, eski animasyon eğrileri ve tam `tail_wave` eğrilerinin karşılaştırması.
- `root-symmetry.json`: çekirdeğin gerçek kesitlerinden simetri ölçümü.
- `review.html`: durdurulabilen, zaman çizgisinden ilerletilebilen gerçek GLB renderları. Önizleme 6 kare/sn, model klibi 24 kare/sn olarak örneklenir. 48 karelik önizleme 8 saniyeyi gösterir. Bu hafif önizleme bir 3D model görüntüleyici değildir.
- `tail-coil.webp`: aynı döngünün bağımsız animasyonlu görüntüsü.

Kontrol edilen animasyonlar fiziksel deri/temas simülasyonu değildir; her olası elle verilmiş poz için çarpışmasızlık garantisi yoktur. İlk kısmi kök düzeltmesinde kalan yüzey kusuru giderilerek kök yüzeyi yeniden oluşturuldu; elenen yakın planlar work/tail-v35 altında tutulur.

Yalnızca değişen üretim kodları work/tail-v35/curves.py, surface.py ve build.py dosyalarındadır. preview.py, verify.py, preserve.py ve check_root.py teslimat kontrollerini üretir.
