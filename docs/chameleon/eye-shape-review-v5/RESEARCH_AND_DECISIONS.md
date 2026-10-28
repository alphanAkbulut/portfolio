# Araştırmadan V5'e: neye göre neyi değiştirdik?

28 Ekim 2026. Amaç, yeni model üretmeden önce göz dış örtüsünün profilini ve açıklık boyutunu kullanıcıyla somut olarak karşılaştırmaktır. Tüm değerler aşağıda ölçüm, yorum veya tasarım kontrolü olarak ayrılmıştır.

## Problem ve korunacaklar

Kullanıcı V37'nin iç göz görünüşünü ve bağımsız hareketlerini başarılı buldu. Dış pullu kubbenin kafaya göre büyük ve fazla misket gibi göründüğünü belirtti. Daralan profil çizilirken açıklığın kaybolması veya fazla sivri uca dönüşmesi ayrıca reddedildi. Bu yüzden dış kubbe, açıklık ve içerideki göz yüzeyi ayrı kavramlar olarak tutuldu. Görünen alanı “retina” diye ölçmedik; fotoğrafta retina ölçülmez.

## Odaklı kaynaklar ve ölçümler

Yerel `outputs/eye-analysis/` içindeki dört dosya:

| Kaynak | Gözlem / yöntem | Sonuç ve sınır |
|---|---|---|
| `aperture-ratio-reference.jpg` | 10/11/12 s panellerindeki mevcut sarı açıklık ve turkuaz kubbe konturları tekrar ölçüldü; eşdeğer çap sqrt(en×boy). | Yaklaşık 0,302 / 0,298 / 0,300. Önceki manuel çizgilerin denetimi; bağımsız 3B anatomik ölçüm değil. |
| `motion-reference.jpg` | Dört pozda iki gözün konturu, görünür kök vekili ve üç görünür koyu açıklık elle işaretlendi. | Görüntü solunda çıkıntı/kök yaklaşık 0,60–0,63, en dış noktanın kök üzerindeki yüksekliği 0,59→0,48. Ölçek/kök eğimi hizalandı; 3B kamera hareketi giderilmedi. |
| `skin-25-consecutive-frames.jpg` | F00–24 sıralı gözlem. F06/F21 bulanık; F05–07 ve F19–22 geçiş aralıkları. | Bulanıklık anatomiye eklenmedi. Kare aralıkları saccade süresi veya biyolojik sabit sayılmadı. |
| `skin-fold-reference.jpg` | Kafa–kapak bağlantısı ve alttaki yay biçimli katlar karşılaştırıldı. | Sert eşit kalınlıkta manşet yerine yerel katlar gerekir; gerçek gerinim/kıvrım derinliği ölçülmedi. |

Mevcut arşiv: [yerel referans dosyalarının repo arşivi](../evidence/archive-2026-10-25/outputs/eye-analysis/). Commons video kaydı: [Furcifer pardalis moving eyes](https://commons.wikimedia.org/wiki/File:Furcifer_pardalis_moving_eyes.ogv), MatthiasKabel, CC BY-SA 3.0. Stok filigranlı motion görseli farklı kaynak/tür bağlamı olabilir; panter türü ve lisansı doğrulanmış gibi sunulmadı. Bu commit üçüncü taraf fotoğrafları yeniden kopyalamaz. Sayısal türevler `evidence/` içinde; dört yerel kaynağın hash'leri `wide-aperture-shape.json` içindedir.

Kullanıcının [Animal Instinct referansı](https://animal-instinct.it/cdn/shop/articles/1678840_l_219fa154-fe6f-4441-af2c-d321fcfaa688.jpg?v=1744636114&width=2200) ayrıca yukarı yönelmiş görünen açıklık ve altında geniş yüzey için incelendi. Kafa eğik olduğu için görüntü yukarısı gerçek optik elevasyon diye ölçülmedi. Bu fotoğraf yeni lisanslı yayın varlığı olarak pakete alınmadı.

V37'nin `comparison.jpg`, `front-neutral.png`, `V37-side-annotated.jpg` görselleri ayrı model referanslarıdır. Kullanıcı özellikle ön görünüşü beğendi. İşaretli yan görünüşten yaklaşık açıklık/kubbe=0,25; açıklık/ölçülen kafa açıklığı≈0,10 hesaplandı. Manuel 2B kutu ölçüleri `evidence/aperture-lock-v2.json` içindedir. Kafaya göre 0,10 değerini gerçek tür normu veya Blender fiziksel çapı sayma.

## Karar ve revizyon zinciri

| Aşama | Gerekçe / kullanıcı geri bildirimi | Karar |
|---|---|---|
| İlk dar uçlu şema | Açıklık fazla küçük, uç fazla sivri göründü. | İnce koni yerine geniş taban ve yuvarlatılmış daralma. Açıklık ayrı parametre. |
| Yaklaşık 0,30 açıklık adayı | Üç işaretli referans oranı. | Tasarım başlangıcı; sabit bilimsel anatomi normu değil. |
| Hareket konturları | İki göz farklı yönelimlerde; bazı pozlarda açıklık görünmüyor. | Gizlenmeyi kapanma sanma. İç göz/dış örtü ayrı; 2B konturu tekil 3B kesit sanma. |
| V2 koruma kaydı | Kullanıcı V37 iç gözünü korumak istedi. | Açıklık/kafa boyutunu başlangıçta koru; yalnız dış kubbe daralsın. |
| V3 demo | Ayrı şema kafa üzerindeki değişimi göstermedi. | Karşılaştırma anlaşılır değildi; sonraki sürüm aynı fotoğraf üzerine taşındı. |
| V4 demo | Kullanıcı kafa üzerinde profil daraltmayı beğendi. | Mevcut ve hedef konturlar üst üste; açıklık/kök sabit. |
| **V5 demo** | Kullanıcı a açıklığını da bağımsız küçültüp denemek istedi. | Yeni 0–40 kontrolü. V4 sabit açıklık davranışı V5'te sıfır konumunda korunur; diğer değerler yalnız deneydir. |

V5, V2'nin “a daima sabit” kuralını deneme arayüzü için açıkça değiştirir. Bu kullanıcı tarafından istenen kapsam genişlemesidir; göz hareketlerini veya gerçek modeli değiştirmez. Hiçbir slider konumu nihai kabul değildir.

## Geometrik yöntem

V4/V5'te 1100×850 ön render üzerinde elle seçilmiş kök, omuz ve uç noktaları kullanılır. Bunlar görünür 2B sınır vekilleridir, kemik konumları değildir. Profil etkisi p∈[0,1], mevcut ve hedef omuz kontrol noktalarını doğrusal harmanlar; üst/alt yüzey kübik Bézier, uç kısa kuadratik yaydır.

V5 açıklığı için küçültme k∈[0,0.4]:

```
c = (y_top + y_bottom) / 2
h_new = (y_bottom - y_top) / 2 * (1-k)
y_top_new = c - h_new
y_bottom_new = c + h_new
outward_arc_offset_new = outward_arc_offset * (1-k)
```

İki göz aynı k katsayısını alır; merkez ve kök uçları değişmez. Üst/alt eğriler yeni açıklık uçlarına bağlanır. Profil etkisi p ve açıklık küçültme k birbirinden bağımsızdır. Örneğin profil 60, açıklık 20 demek dış gözün %60 küçülmesi değil; hedef kontura %60 geçiş ve çizilmiş açıklık boyutunda %20 küçülmedir.

V5'te mavi çizgi önden eğik görülen açıklığın sınır vekilidir; gerçek 3B çap veya retina ölçüsü değildir. Sabit V37 fotoğrafındaki açıklık/pullar yeniden render edilmediği için yeni konturun arkasında eski yüzey görünür. Bu sınırlama UI'da en üstte yazılıdır.

## Reddedilen deneme ve açık risk

Önceki sade normalize yüzey denemesinde kök geçişini 0,22B bölgesine sıkıştırmak yerel ters yön oluşturdu. 0,46B'ye yaymak örnek ±25° pitch/yaw kontrollerinde ters yönü giderdi; fakat en küçük üçgen alanı yaklaşık %20'ye indi. Bu ciddi sıkışma yüzünden modelin hareket için hazır olduğu iddia edilmedi. Deneme sonuçları `evidence/wide-aperture-shape.json` içinde korunur. V5 bu deformasyon çözümünü uygulamaz.

Fotoğraf konturuna eğri uyum hatası (yaklaşık 2,7 / 5,5 px), elle seçilmiş noktaları ne kadar yakaladığını gösterir; bağımsız anatomik doğruluk değildir. 3B derinlik, iç küre teması, tüm bakışlarda pul kalitesi, birleşik açılarda öz-kesişme ve rig uyumu açık kalır.

## Kabul ve devam

Demo için: iki bağımsız kontrol, açıklığın merkezini koruma, iki gözde aynı ölçek, önce/sonra ayrımı, sıfırlama, fotoğraf anahtarı ve sürümlü JSON. Bunlar demo testinde kontrol edildi.

Model için sonraki ayrı adım: seçilen JSON adayını V37'nin kopyasında yalnız göz örtüsü/açıklığa uygula; aynı kamerada ön/yan/oblik ve seçili hareket pozlarını karşılaştır. Göz nesneleri, gerçek kemik bağlantıları, bağımsız hareketler ve pul geçişleri korunmalı. Bu commit yeni `.blend`/`.glb`, performans optimizasyonu veya site entegrasyonu değildir.
