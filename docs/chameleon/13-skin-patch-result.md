# D5 — İlk sabit deri prototipi
2026-10-20; portfolio-chameleon. Kaynak HEAD: 415ad968a2c99fc998bbb1c1708008431b2fedbc.
**Durum: render artefaktları üretildi; görsel kalite REVISE, kullanıcı kabulü bekliyor. D6 başlamadı.**

## Yetki ve uygulama
Kullanıcı D5 üretimini açıkça onayladı. Blender 4.5.14 LTS ile kendi oluşturduğumuz küçük gövde yaması, iki sabit renk durumu ve nötr kabartı kontrolü üretildi. Hayvan modeli, üçüncü taraf texture, ücretli araç/API kullanılmadı.
Kaynak: [create_skin_patch.py](../../scripts/chameleon/create_skin_patch.py).
Repo kökünden Blender ile background/factory-startup/disable-autoexec seçenekleri ve bu Python scripti çalıştırılır. Script repo kökünün outputs/d5 dizinine yazar; yeniden çalıştırmadan önce mevcut çıktıları ayrı sürüme kopyala. Çalışma ortamında script work/d5 altında çalıştırıldı; aynı iki-seviye göreli çıktı yolu kullanıldı.
PNG ve .blend dosyaları yalnız yerel outputs/d5 altında; repo'ya büyük binary eklenmedi. Script/manifest yeniden üretim girdileridir; platformlar arası bit düzeyinde aynı render garantisi yok.

## Gerçek denemeler
1. Sandbox içinde Blender açılışı exit 139 ile çöktü. Yetkili sandbox dışı çalıştırma başarılı oldu; korumalar/kurulum değiştirilmedi.
2. İlk tamamlanan render boştu: metre ölçeğindeki yama varsayılan kamera near clipping mesafesinin içinde kalıyordu. clip_start=0.001 m ile düzeltildi.
3. İlk görünür render fazla düzenli/mozaik göründü. Tek revizyonla seed konumları düzensizleştirildi, az sayıda seed çıkarıldı, sığ kabartı ve Object koordinatlarına bağlı ince noise eklendi. Kadraj yaklaştırıldı.
İlk iki denemenin script/çıktıları work/d5/attempt-1 ve attempt-2 içinde korundu. Son çıktının önceki başarısızlıkları sildiği iddia edilmez.

## Çıktı ve doğrulama
- skin-A.png, skin-B.png, skin-clay.png: 768×768, görsel olarak açılıp incelendi.
- skin-patch-v1.blend: tekrar Blender'da açıldı; mesh >1000 vertex, kamera clip mesafesi ve çözünürlük kontrolü geçti.
- [render manifest](d5-render-manifest.json): seed 4105, 31,888 scale vertex / 25,245 polygon, CPU, 32 samples, denoise, AgX Medium High Contrast, exposure 0.
- Son üç render çağrısı sırasıyla 9.47 / 8.93 / 8.79 saniye. Bunlar sahne hazırlama veya toplam task süresi değildir. GPU/bellek toplamı ölçülmedi.
- Kamera, ışık, geometri ve material-slot eşlemesi A/B arasında sabit; yalnız palette/base renk durumu değiştirildi. Gri kontrol aynı geometridir.
- Kaydedilmiş .blend A durumunda açılır. B ve gri durumlar script ile yeniden üretilir; kullanılmayan materyallerin dosyada kalıcılığı garanti edilmez.

## D4 hedefinden kontrollü sapmalar
İlk deneme görsel sonucuna göre kabartı 0.06–0.12 mm aralığına indirildi, kadraj 27 mm ortho genişliğine getirildi. Hücreler bazı seed'lerin çıkarılmasıyla daha büyük de olabilir; D4'teki çap aralığı ölçülmüş kabul kriteri olarak uygulanmadı. Bunlar final biyolojik ölçüler değil, deney parametreleridir.

## Kabul değerlendirmesi
| Alan | Sonuç |
|---|---|
| Dosya üretimi / yeniden açma | PASS |
| İki durumda aynı pul yapısı | PASS, script ve yan yana görsel inceleme |
| Yüzey kabartısının okunması | PASS |
| Yakın çekimde doğal deri hissi | REVISE — köşeli Voronoi hücreleri hâlâ mozaik/taş çağrışımı yapıyor |
| Fotogerçekçilik / kullanıcı onayı | NOT PASSED / PENDING |
| Tam karakter / UV / rig / browser | Bu taskta test edilmedi |

Teknik başarı kalite kabulü değildir. Bu yüzey final bukalemun derisi olarak kullanılmaya hazır sayılmaz.
**Önerilen sonraki küçük iş D5.1:** yeni animasyona geçmeden, yalnız pul sınırlarının yuvarlatılması ve boyut/yerleşimin fotoğraf referansıyla karşılaştırılması. Kullanıcının eski gerçek fotoğraf referansları hâlâ mevcut değil; kesin görsel eşleştirme iddiası yok. Kullanıcı kararı beklenir; kendiliğinden D6'ya geçilmez. Astra Orta ile odaklı geometri revizyonu denenebilir; şu anda High zorunluluğu kanıtlanmadı.
