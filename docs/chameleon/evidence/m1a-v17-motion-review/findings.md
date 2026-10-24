# M1a — V17 göz–deri hareketi, 25 Ekim 2026

Durum: mevcut sürümün teşhisi ve karşılaştırma kaydı. Yeni model sürümü üretilmedi. Kullanıcı göz bölümünü tek başına kullanılabilecek kalite parçası olarak geliştirmeyi önceliklendirdi. Bu, bitmiş bağımsız web asset'i olduğu anlamına gelmez.

## Tekrarlanabilir kontrol

Kaynak `outputs/body-study/chameleon-study-v17-graded-scales.blend`; beklenen SHA256 `8181189517408c0e2a3ccd9ab9e5affd442cf90a9660dddff8bb51861d8a8fc6`. Betik `work/eye-motion-review/review.py`. Yalnız bellekte kamera/render ayarı; kaynak .blend kaydedilmez. Son manifest hash ile korunmayı doğrular.

1–90 aralığında tam ve yarım kareler dahil 179 örnekte değerlendirilmiş kapak yüzeyinin ilk 128 kök noktası karşılaştırıldı. Maksimum kök kayması 0, sonlu olmayan koordinat yok. En büyük yarım-kare nokta yer değiştirmesi 23. karede yaklaşık .0331 sahne birimi; biyolojik birim veya kabul eşiği değildir. Bu ölçüm hızın doğal olduğunu, deri hacminin korunduğunu veya tüm pulların çarpışmasızlığını kanıtlamaz.

## Görsel bulgular

Altı bakış aynı kamera/ışıkla üretildi. Nötr/öne/yukarı/aşağı kareler yakın incelendi. Siyah yüzeyin derinliği ve ışık yansıması korunuyor. Ana göz dışbükey formunu ve öne bakış açıklık payını koruyor; bunlar yeniden tasarlanmayacak.

- **Açıklık çevresi:** Çok küçük pullu geniş bant ana kapak pullarından hâlâ ayrışıyor. V17 sürekli dağılımı ana kapakta uyguluyor; V16'dan kalan `Near eye | patterned crater lip` ayrı kenar nesnesinin çocuğu ve onun rijit dönüşümünü izliyor. Kaynak `g12_patterned_lip.py` bunu doğruluyor. Bu nedenle ana kapakla tek deformasyon alanı olduğu iddia edilemez. Birleşimde süreksizlik olasılığı var; nicel kenar mesafesi henüz ölçülmedi.
- **Alt/yan kıvrımlar:** Bazı pul sıraları yığılmış/üst üste gelmiş gibi okunuyor. Bu görsel bulgu kesin mesh kesişim ölçümü değildir. Ana deri, pul tabanı ve ayrı kenar arasındaki açıklık/örtüşme ölçülmeli.
- **Malzeme:** Tek renkli sade clay, büyük pürüzsüz pul tepeleri ve düzenli ışık tepkisi plastik hissini koruyor. Bu tur malzeme değiştirilmedi. Deformasyon kusurunu renk ile örtme.
- **Yukarı bakış:** Geniş beyaz yansıma optik yüzeyde görülebiliyor; ışık tepkisi var ancak doğal göz kabulü için daha yumuşak bir aydınlatma karşılaştırması gerekecek. Mevcut derinlik sessizce değiştirilmeyecek.

## Sonraki tek dilim: M1b açıklık–kapak birleşimi

Önce altı pozda mevcut iki yüzeyin sınır mesafesini ve en kötü ara karelerini ölç. Ardından v17'yi koruyup aday sürümde krater geometrisi/optik derinliği/ana silueti değiştirmeden kenar pullarının köklerini ana kapak deformasyonuyla uyumlu taşı. İnce iç kenar korunur; eski kalın desensiz halka geri getirilmez. Boyut geçişinde karışık ara pullar kullanılır; tekdüze uzun elipsler yok.

Kabul: aynı altı bakış + hareket geçişlerinde görünür boşluk/sert basamak/pul yüzmesi olmaması; kök kayması olmaması; optik yüzey ve kabul edilen ana göz formunun öncekiyle karşılaştırılması. Tüm deri veya yürüyüş bu dilime dahil değil. Kullanıcıya aday karşılaştırması gösterilmeden nihai sürüm kabul edilmez.

M1c alt/yan kıvrım ve pul sıkışması, sonra küçük materyal testi. Sonradan bağımsız web parçası için iki göz kontrolü, export, runtime hareket ve performans ayrıca gerekecek.


## Teslim ve UI doğrulaması

[90 karelik mevcut hareket kaydı](eye-motion.mp4). Altı PNG ve iki boyutlu inceleme HTML sayfası yerel `outputs/eye-motion-review-v17` klasöründedir; bu committe yalnız video, bulgular, ölçüm ve yeniden üretim betiği arşivlenir. Tarayıcıda iki video 6 saniye olarak açıldı; oynatma sırasında ikisi de ilerledi, medya hatası yoktu. Duraklatmada her iki video da paused=true olarak doğrulandı. Kaynak model hash’i değişmedi. Tam biyolojik hareket kabulü verilmedi.
