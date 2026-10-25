# V18 aday — baş–göz kökü deri geçişi

25 Ekim 2026. Kullanıcı, gerçek referansta baş derisinin gözün çıkıntılı tabanını hafif kabarık bir katla sardığını gösterdi. Bu, siyah göz açıklığının kenarıyla aynı bölge değildir. Bu iş yalnız baş–göz kökü içindir; daha önce önerilen açıklık–kapak düzeltmesi uygulanmadı.

## Korunan kabul

V17 göz pul dokusu kullanıcı tarafından kabul edildi. V18 doğrudan bu dosyadan üretildi. Ana göz pulları, kapağın şekil anahtarları, açıklık kenarı ve iç optik yüzey değiştirilmedi; veri hashleri manifestte. Kaynak v17 üzerine kaydedilmedi. Yeni katman tabanın bir bölümünün önünde durduğundan oradaki görünürlük değişebilir; “görüntünün her pikseli aynı” iddiası yoktur. V18 henüz kullanıcı tarafından kabul edilmedi.

## Yapılan küçük değişiklik

İki ayrı yeni nesne: baş yüzeyine raycast ile oturan bir deri geçişi ve bu yüzeye bağlı 872 küçük bombeli pul. Dış sınır başta sabit; iç sınır mevcut göz kapağının kök tarafındaki 12. halkasını izler. Üstte dar, altta biraz daha geniş/yumuşak hacim; alt kıvrımlara küçük poz bağımlı sıkışma verilmiştir. Rastgele ama sabit seed ile düzensiz ince pullar; gözün mevcut ana pul dağılımı yeniden üretilmedi.

İlk aday fazla geniş halka gibi göründüğünden aynı onaysız adayın bandı daraltıldı; tepe yüksekliği azaltıldı. Referans v17 her iki denemede de korundu. İlk deneme final veya kullanıcı kabulü olarak arşivlenmedi.

Bu geometri ayrı ek yüzeydir; henüz tek parça kapalı manifold deri değildir. Tam biyolojik strain simülasyonu değildir. Sahne birimindeki genişlik ve kıvrım değerleri görsel tasarım parametreleridir, fotoğraftan alınmış anatomik ölçüler değildir. Alt tabakadaki pullarla tüm öz-kesişimler henüz taranmadı. Materyal hâlâ clay; doğal deri malzemesi tamamlanmadı.

## İnceleme ve yeniden üretim

Yerel çalışma kökü: `/Users/alphanakbulut/Documents/Codex/2026-10-20/referenced-chatgpt-conversation-this-is-an`.

- Blender adayı: `outputs/eye-root-v18/chameleon-eye-root-v18.blend` (yerel; GitHub'a yüklenmedi).
- Üretim: `work/eye-root-v18/build.py`; v17 dosyasını gerektirir. Ayrı aday çıktısının üzerine yazar; kabul edilmiş sürüm üzerinde otomatik çalıştırma.
- Hareket doğrulaması: `work/eye-root-v18/verify_motion.py`; yeni katmanın sınırları 1–90 arasında yarım kareler dahil 179 örnekte kontrol edilir. Sonuç `manifest.json` içinde.
- Nötr/öne/yukarı/aşağı renderlar aynı kamera ve ışıkta incelendi. Genel gövde veya uzak göz bu kapsamda değil.
- [Nötr aday](neutral.png), [hareket kaydı](root-motion.mp4). V17 karşılaştırması: [önceki hareket](../m1a-v17-motion-review/eye-motion.mp4).

Sonraki adım kullanıcı görsel değerlendirmesidir. Daha fazla kıvrım/kalınlık istenirse yalnız bu yeni katman ayarlanmalı; kabul edilmiş ana göz desenine dokunulmamalı. Uç bakışlarda yüzey penetrasyonu ve bütün deri birleşiminin topolojik temizliği üretim öncesi açık işlerdir.
