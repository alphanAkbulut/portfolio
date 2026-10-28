> Historical local delivery note. Paths below refer to the original outputs/work folders in PROJECT_STATUS.md, not to this archive directory. Current handoff: [PROJECT_STATUS.md](../../../../PROJECT_STATUS.md).

# V31 — seyirciye tam baş dönüşü

## Sorun ve düzeltme
V30 `idle_look` klibinde başın yatay dönüşü yalnızca ±0.035 radyandı (yaklaşık ±2°). Bu, biyolojik bir hareket sınırı değil, ilk rig denemesinin küçük genlikli animasyon tercihiydi; seyirciye yüzünü döndürme hedefini karşılamıyordu.

V31 yalnızca `idle_look` klibini değiştirir. V30 dosyaları korunur. Modelin vertex verisi, deri ağırlıkları, materyalleri, `walk` ve `drink` klipleri dışa aktarılmış GLB düzeyinde V30 ile karşılaştırılır; sonuç `preservation.json` içindedir.

## Yeni hareket — 8 saniye
- Başlangıçta kısa bekleme.
- Yaklaşık 0.96–2.96 saniye: baş ve ön gövde yumuşakça seyirci yönüne döner; gözler bakışı tamamlar.
- 2.96–5.28 saniye: yüz seyirciye dönük kalır.
- 5.28–7.28 saniye: yumuşakça başlangıç pozuna döner.
- Son kısa bekleme ile kapalı döngü tamamlanır.

Toplam baş yönü, mevcut önizleme kamerasına göre yaklaşık 80.7° yatay ve 10.2° yukarı dönüş içerir. Yatay dönüşün 15°'lik bölümü ön gövdeye, kalanı boyuna dağıtılır. Ayaklar aynı temas noktalarında tutulur. Bunlar **animasyon tasarım değerleridir**; Furcifer pardalis için ölçülmüş doğal eklem sınırları değildir.

## Bilimsel yanıt
Bukalemunlar başlarını sağa–sola hareket ettirir. Flanders'ın [1985 çalışması](https://doi.org/10.1016/0042-6989(85)90204-4), yatay hareketli hedefin baş hareketleriyle takip edildiğini; [1988 çalışması](https://pubmed.ncbi.nlm.nih.gov/3258966/) görsel hedef takibi ile baş/gövde koordinasyonunu inceler. Dolayısıyla “bukalemun başını çeviremez” açıklaması doğru değildir. Bu çalışmaların erişilen özetleri, modelimizin türünde 80° saf boyun dönüşünün doğal üst sınırını doğrulamaz. Bu nedenle tam seyirci yönelmesi boyun ve ön gövdeyle paylaşılır; sahne için hazırlanmış bir animasyon olarak değerlendirilir.

## Kamera ve kullanım
Seyirci yönü, V30'daki sabit ortografik önizleme kamerasıdır: model yönü −X, kamera yönü normalize(−1.8, −11, 2). Baş yönünün bu kamera doğrultusuyla yaptığı hata `change-report.json` içinde ölçülür. Web sitesindeki kamera farklı konuma taşınırsa klip kendiliğinden yeni kamerayı izlemez; çalışma zamanında ek bir look-at kontrolü gerekir. Bu sürüm sabit seyirci yönüne gömülü animasyondur.

GLB içinde yine yalnızca `walk`, `idle_look`, `drink` bulunur. `LeftEye`, `RightEye` ve `Neck_Bone` isimleri korunur. Önceki yürüyüş root-motion ve dosya boyutu notları [V30 belgesinde](v30-notes.md) geçerlidir.

## Dosyalar ve doğrulama
- `chameleon-animated-v31.blend` ve `chameleon-animated-v31.glb`: yeni sürüm.
- `verification.json`: GLB klipleri, süreleri, yeniden içe aktarma ve döngü kontrolü.
- `preservation.json`: korunması gereken V30 alanlarının karşılaştırması.
- `change-report.json`: kamera yönü, dönüş paylaşımı ve IK doğrulaması.
- `../../work/rig-v31/look_patch.py`: yalnızca değişen animasyona ait ek adapter; mevcut hareket çözücüsünü yeniden kullanır.
