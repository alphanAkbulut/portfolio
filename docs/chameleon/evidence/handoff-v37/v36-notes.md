> Historical local delivery note. Paths below refer to the original outputs/work folders in PROJECT_STATUS.md, not to this archive directory. Current handoff: [PROJECT_STATUS.md](../../../../PROJECT_STATUS.md).

# V36 — diğer üç bacakta yuvarlatılmış gövde bağlantısı

Kaynak V35. V23–V25 notları ilk ön bacağın pilot çalışma olduğunu, diğer uzuvların eski aşamada bırakıldığını doğruladı. V32 dört bacağın konumunu taşımıştı; üç kökün tüp uç geometrisi kalmıştı. Bu sürüm o eksikliği tamamlar.

Diğer ön bacak ve iki arka bacağın ilk altı taban halkası, gövde yüzeyine teğet başlayan 24 aralıklı yuvarlak geçişle değiştirildi. Distal bacak ve ayakların konumları korunur. Genişleyen yüzey üzerinde eski pulları germek kusur oluşturduğu için bu köklerdeki tam pul hücreleri yenilendi. Yeni hücreler mevcut distal küçük pullara kademeli yaklaşır; deri ağırlıkları yeni kök yüzeyinden alınır.

İlk çalışılan ön bacak, baş, iki göz ve V35 kuyruğu değiştirilmedi. İskelet konumları ve beş animasyonun eğrileri korunur. Body, LeftEye, RightEye ve Neck_Bone isimleri devam eder.

## Kontrol

- Önce/sonra: dört bacak aynı kamera ve ışıkla kontrol edildi. Sayfa değişen üç bacağı karşılaştırır.
- preservation.json: izin verilen üç proksimal bölge dışında bütün köşe koordinatları ve ağırlıklar; gözler, iskelet ve beş Action karşılaştırması.
- verification.json: GLB yeniden içe aktarımı, isimler, beş klip, normalize ağırlıklar ve her klibin beş karesinde eklem koordinatları.
- walk-check görselleri: dışa aktarılan gerçek GLB'nin üç yürüyüş anında üç birleşimin yakın planları.

Bu, tek Body nesnesi içindeki görsel olarak teğet bir bağlantıdır; gövde ve uzuv tabanları manifold kaynakla birleştirilmiş değildir. Örneklenen pozların kontrolü her olası poz için fiziksel deri veya çarpışma garantisi vermez.

Önceki V35 dosyaları yerinde durur. V36 bu Mac'te kaydedildi; GitHub'a veya canlı siteye yayınlanmadı.

Üretim: work/limbs-v36/build.py, repair_surface.py, finish.py. Kontroller: preserve.py, verify.py, poses.py. Elenen pul taşıma adayı teslim edilmez; teslim dosyaları bu klasördeki chameleon-animated-v36.blend ve .glb dosyalarıdır.
