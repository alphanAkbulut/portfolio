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

## D5.1 — Kullanıcı referanslarıyla kabartı revizyonu
2026-10-20. Kullanıcı iki ekran görüntüsü sağladı; hafif kabartılı, üç boyutlu görünüm istedi ve yalnız hacim/dağılım revizyonunu onayladı. İlk görüntü görünüm referansı; ikinci görüntü üzerinde AI-Generated etiketi var, anatomik doğruluk kanıtı sayılmaz. Görüntüler texture olarak kullanılmadı ve repo'ya yüklenmedi; watermark kaldırılmadı.

- Kaynak [create_skin_patch_v2.py](../../scripts/chameleon/create_skin_patch_v2.py), ölçümler [D5.1 manifest](d51-render-manifest.json).
- Aynı A paleti, shader, kamera, ışık, yüzey eğrisi ve render ayarları korundu. Pul yerleşimi değiştiği için tek tek pulların renk ataması piksel düzeyinde aynı değildir.
- Hücre köşeleri iki aşamalı yuvarlatıldı; düz tepe yerine yedi kesitli kavisli kubbe profili oluşturuldu. Yükseklik hücrenin eşdeğer yarıçapının 0.48–0.65 katı; biyolojik ölçüm değil.
- Seed dağılımı yumuşak bölgesel sıkıştırmayla değiştirildi. Küçük/büyük pullar aynı yüzeyde bölgesel dağılıyor.
- Yerel outputs/d5-1: skin-A.png, skin-clay.png, skin-patch-v2.blend ve render-manifest.json. D5 dosyaları korunuyor. Repo'da kaynak ve ölçüm var; büyük binary yok.
- İki 768×768 PNG açılıp görsel incelendi; daha yuvarlak tepeler ve kenar gölgeleri görülüyor. Blender dosyası yeniden açıldı ve 273420 vertex/768 çözünürlük kontrolü geçti.
- CPU render çağrıları 15.10 ve 12.36 saniye; toplam görev süresi/bellek/GPU ölçümü değildir. 235999 polygonluk bu yakın çekim deney geometrisi browser için optimize edilmiş sayılmaz.
- Kabul: **kabartı revizyonu üretildi, kullanıcı görsel değerlendirmesi PENDING**. Fotogerçekçilik/G1 geçmedi; yerleşimde düzen hissi ve referansla yüzey farkları hâlâ değerlendirilmeli. Tam anatomi, renk zenginliği, animasyon bu adımda değiştirilmedi.

**Güncel devam noktası:** D5.1 görselini kullanıcıya göster ve hacim yönü için karar bekle. Onay olmadan D6 animasyona veya yeni malzeme/renk revizyonuna geçme. Önceki D5.1 onay beklentisi kullanıcı tarafından karşılandı; şimdi sonuç değerlendirmesi bekleniyor.

## D5.2 — Bölge × kadraj × renk uç durumları
2026-10-20. Kullanıcı üç bölge önerisini onayladı ve yakın/uzak görünüm ile yakın kadrajda renk değişiminin değerlendirilmesini istedi. Bu task üç bağımsız deri yaması üretir; gerçek kafa modeli, göz hareketi, anatomik deformasyon veya zamansal renk animasyonu üretmez.

### Deney sözleşmesi
- Aynı 40×30 mm civarı yüzey, aynı kamera açısı/ışık/shader/palet.
- Göz çevresi: yaklaşık 0.60–0.65 mm seed aralığı ve dairesel yönlenme; baş: yaklaşık 1.35 mm; gövde: 0.95 mm temel aralık ve bölgesel sıkıştırma. Bunlar biyolojik ölçüm değil, tasarım hipotezi.
- Yakın kadraj ortografik 18 mm, uzak 60 mm. Aynı geometri ekranda 3.33 kat farklı büyüklükte görünür; gerçek film perspektifi veya kamera hareketi testi değildir.
- Her bölge için near-A, far-A, near-B PNG: toplam dokuz 768×768 render. A/B aynı geometri ve ışıkta iki sabit renk uç durumu; zaman tutarlılığı/akıcılık kabulü yok.
- Kaynak [create_skin_regions.py](../../scripts/chameleon/create_skin_regions.py). SKIN_REGION ortam değişkeni eye/head/body seçer; her değer için Blender background/factory-startup/disable-autoexec ile script çalıştırılır. Repo köküne göre outputs/d5-2/<region> çıktıları; yeniden çalıştırmadan mevcut sürümleri koru.
- [Ölçüm manifestleri](d52-render-manifests.json). Yerel comparison.html dokuz görseli bölge başına yakın A / uzak A / yakın B sırasıyla gösterir; görüntü bağlantıları tam PNG'yi açar. Büyük render/.blend dosyaları repo'ya eklenmedi.

### Doğrulama ve sonuç
Dokuz PNG'nin boyut/hash kontrolü geçti. Üç .blend yeniden açıldı, geometri ve yakın kamera ayarı kontrol edildi. Görsel incelemede üç yakın A ile göz uzak A/yakın B incelendi; diğer dört dosya teknik olarak doğrulandı, ayrı ayrıntılı görsel kabul yapılmadı.
- Eye: 548156 vertex; üç render toplam 35.11 s.
- Head: 127512 vertex; üç render toplam 43.45 s.
- Body: 298256 vertex; üç render toplam 46.35 s.
Süreler yalnız render çağrıları; geometri hazırlama ve toplam task süresi değil. GPU/tepe toplam bellek/browser performansı bilinmiyor. Bu yüksek detaylı mesh'ler runtime için hazır değil.

Yakın kadrajda göz örneği daha ince, baş daha iri; uzak göz örneğinde küçük detaylar ortak yüzey dokusuna yaklaşır. Bu ölçek farklılığını gösterir, fotogerçekçilik kabulünü sağlamaz. Yerleşimde yapay düzen ve yumuşak/hamursu malzeme hissi hâlâ risk. Bölge dağılımları bağımsız yamalarda olduğundan gerçek göz kapağından yanağa bağlantı, ağız çizgisi ve hareket sırasında pul deformasyonu henüz kanıtlanmadı. D5/D5.1 çıktıları korundu.

**Güncel devam önerisi:** kullanıcı görselleri değerlendirsin; sonraki küçük task, göz–yanak bağlantısını temsil eden basit kavisli formda iki dağılımın birleşmesi. Anatomik final model olarak sunulmaz. Sonrasında yakın kadrajda gerçek shader renk animasyonu ayrıca onaylanır; uç durum PNG'leri animasyon diye sunulmaz. D6 ve tam karakter build'i otomatik başlamaz.
