# Bölgesel deri / hareket kanıt atlası — başlangıç ve açık araştırma

25 Ekim 2026. **Durum: kısmi; yüzlerce farklı poz incelemesi tamamlanmadı.** Bu belge mevcut gözlemleri yeni araştırma hedeflerinden ayırır. Fotoğraf indirilmiş olması analiz edildiği anlamına gelmez.

## Gerçek kapsam

- Önceki gövde analizi: 10 fotoğraf, 10 bağımsız birey olduğu doğrulanmadı. Kaynak/ölçüm/nokta kayıtları `evidence/morphometry-*` dosyalarında. 2B perspektif ölçüler; bilimsel tür standardı değil.
- Panter göz videosu: tek klip, nominal 360 kare/24 fps. Önceki çalışma 0–14 saniye özet kareleri ve ilk 25 ardışık kareyi inceledi; bunlar kısmen örtüşür. 360 karenin tümünün incelendiği iddia edilmiyor. Bu turda altı işaretli kare ve iki özgün çözünürlüklü fotoğraf kırpımı yeniden görsel karşılaştırıldı.
- Kullanıcının ayak/kuyruk/deri ekran görüntüleri yardımcıdır; tür, birey, ışık ve tam hareket sekansı her karede doğrulanmadı. Su içme hızı sabit kareden ölçülemez.
- Aşağıdaki 4 bilimsel kaynak kontrol edildi. Bunlar yüzlerce pozluk görsel örneklem yerine geçmez.

## Kaynaklar: neyi destekler, neyi desteklemez?

**S1 — [Teyssier vd., 2015](https://pmc.ncbi.nlm.nih.gov/articles/PMC4366488/), F. pardalis.** Renk değişiminde iridoforlardaki nanokristal düzeni ve pigmentler birlikte rol oynar; yetişkin erkeklerde bölgelere göre renk/aydınlık tepkisi farklıdır. Örneklerde yeşil zemin sarı/turuncuya, mavi alanlar beyazımsıya kayarken kırmızı alanların parlaklığı artabilir. Uygulama çıkarımı: tüm bedene tek hue döndürme ve renk değişirken pul şişirme yerine anatomik renk maskeleri. Makaledeki süreç birkaç dakika ölçeğinde; hero'nun hızlı dramatik dönüşümü sanatsal zaman sıkıştırmasıdır. Bu çalışma deri kırışıklığı rig parametrelerini vermez.

**S2 — [Spinner vd., 2013](https://pubmed.ncbi.nlm.nih.gov/23504635/), karşılaştırmalı Chamaeleonidae.** Ayak ve kuyruğun temas bölgelerinde mikroskobik setae incelenir; Furcifer dahil cinslerde yapılar farklılaşır ve sürtünmeye katkı sağlar. Tam örnek tür listesi bu çalışmada doğrulanmadığından sayıları doğrudan panter rigine taşımıyoruz. Uygulama çıkarımı: temas yüzeyini gövde puluyla kopyalamama, mikroyapıyı görünür kalın kıla dönüştürmeme.

**S3 — [Spinner vd., 2014](https://www.nature.com/articles/srep05481), Chamaeleo calyptratus.** Kavrama, tırnak ve temas yüzeyi birlikte ele alınır; deney hayvanı panter değildir. Yardımcı mekanik referans, panter ayak oranı ve sürtünme katsayısı standardı değildir. Ayak altı ile üstünü ayrı değerlendirme gerekçesidir.

**S4 — [Zippel vd., 1999](https://pubmed.ncbi.nlm.nih.gov/29847883/), F. pardalis ve Corucia.** Panter kuyruğunun kavrama anatomisi, uzun tendon bağlantıları ve omur kontrollü mekanizması incelenir. Uygulama çıkarımı: kökten tek parça dönen spiral yerine segmentli bükülme kontrolü. Makale özeti görünür pul/kırışıklık amplitüdü veya animasyon eğrisi vermez.

**V1 — [MatthiasKabel, panter göz videosu](https://commons.wikimedia.org/wiki/File:Furcifer_pardalis_moving_eyes.ogv), CC BY-SA 3.0.** Kaynak kimliği, hash, kareler ve kırpım koordinatları `evidence/skin-reference-source.json` içinde. Türe uygun göz için temel hareket referansı; tek birey, tek açı. Gözün alt yay kıvrımları ve başa bağlanan dar bant, renkli pul taçlarından daha büyük ölçekte biçim değiştirir. F06/F20–21 gibi bulanık geçiş karelerinden pul boyutu/gerilme ölçülmez. Görsel analizdir; optical-flow veya 3B doku strain ölçümü yapılmadı.

**V2 — [Kullanıcının Shutterstock veiled göz klibi](https://www.shutterstock.com/tr/video/clip-11428904-macro-shot-4k-uhd-veiled-chameleon%27s-eyes).** Önceki 48 örnekli yardımcı inceleme; panter geometrisine doğrudan ölçek aktarılmaz. Lisanslı ürün asset'i olarak kullanılmaz. Üçüncü taraf fotoğraf/video dosyaları bu commit'e eklenmedi.

## Bölgesel gözlem → uygulama → eksik kanıt

| Bölge | Gözlenen / kanıt sınırı | Tasarım karşılığı ve kontrol |
|---|---|---|
| Göz açıklığı ve kapak | V1 ve fotoğraf 04/07: ince bombeli düzensiz pullar, dar açıklık, yansımalı iç yüzey; kamera açısı görünen oranı değiştirir | V17 şekli korunur. Açıklık etrafındaki küçük pullar, orta alanda iri, kökte yeniden ince; hareket boyunca geçiş/kenar çarpışması kontrolü |
| Göz kökü / alt kıvrım | V1: katlı yaylar boyunca desen devam eder; sabit düzgün halka gibi değildir | Ana deri kıvrımı pulların altından şekillenir. Doku koordinatları yüzeye bağlı kalır. Gerçek zaman gecikmesi/gerilme henüz ölçülmedi |
| Yanak / ağız çizgisi | 04/07: kapaktan daha iri ve yuvarlatılmış çokgensi hücreler, ağız boyunca yönlenmiş sıra; tümü eş küre değil | Bölge maskesi ve yön alanı. Ağız açılırken sıraların kopmaması ayrıca test edilmeli |
| Ense / boğaz | Kullanıcı referanslarında dolgun geçiş ve kıvrım görülür; duruş/ışıkla görünüm değişir | Ense boşluğunu texture ile kapatma. Baş aşağı/yukarı pozları için referans eşleştirme eksik; sabit olukları tüm pozlara kopyalama |
| Yan gövde / karın | 10 gövde fotoğrafı biçim için kullanıldı; mikro doku için çoğunda çözünürlük yetersiz | Gövdeyi her yerde aynı küre taçlarıyla doldurma. Karın/yan yüzey ayrımı için yüksek çözünürlüklü yakın referans gerekli |
| Omuz / kalça / dirsek / diz | V17 küçük pul alanları anatomik konuma göre varsayıldı; gerçek strain haritası değil | Eklem bükülürken içte sıkışma, dışta açılma aday davranış; doğrudan videoyla doğrulanmalı, abartılı elastik pul uzamasından kaçınılmalı |
| Ayak üstü / uç / kavrama yüzeyi | S2/S3 temas tarafının ayrı mikro yapısını destekler; pantere ait uçların çok açılı yakın hareket dizisi eksik | İki/üç parmak demeti ve tırnaklar ayrı incelenmeli; mevcut grip proxy nihai el değil. Üst ve alt materyal/yoğunluk maskeleri ayrı |
| Kuyruk kökü / dış kavis / iç kavis / uç | Kullanıcı karelerinde kalından inceye uzun spiral; fotoğrafta dalın önünde/arkasında oluşu hareketi kanıtlamaz | Segmentli merkez çizgisi; iç kavis kıvrımı ve dış kavis gerilmesi referansla ayarlanmalı. Dal penetrasyonu, öz-kesişim ve ani çap kırılması test edilir |
| Farklı renk durumları | S1 ve görseller bölgesel farklılık gösterir; fotoğraf ışığı/pozlama karışır | Önce aynı birey/aynı klip öncesi-sonrası. Farklı locality/female/juvenile fotoğrafları aynı hayvanın renk evresi diye eşleştirme |

## Yüzlerce poz araştırmasını yapılabilir küçük işlere bölme

Kullanıcının talebi açık araştırma işi olarak korunur. Sayı uğruna aynı kareyi çoğaltma. Atlasın her satırı: kaynak URL, türün doğrulanma dayanağı, birey/klip kimliği, kare/zaman, bölge, açı, eylem, netlik/örtülme, renk/ışık, görülen ayrıntı, belirsizlik, lisans.

Sıra: (R1a) ayak açık/kavrama/bırakma, üst–alt–yan; (R1b) kuyruk gevşek/sıkı spiral, açılma/kavrama, kök/uç; (R1c) baş eğilmesi, boyun–boğaz–omuz; (R1d) aynı bireyde renk değişimi ve geniş gövde. Her dilimde yalnız o bölgeye ilişkin karar ver, kullanıcıya kısa pano + bulgu + eksik kanıt sun. Yüzlerce kullanılabilir poz sayısı, kapsanan bağımsız klip/birey ve bulanık/tekrarlı elenen kare sayısı ayrı raporlanmalı. Bu sayılar henüz üretilmedi.

Fotoğraftaki koyu çizgi hem gölge hem pigment olabilir. Normal/displacement yüksekliğini tek aydınlatmadan kesin çıkarmayacağız. Aşırı katlı görünümü kalıcı mesh kabartısı yapmadan, aynı bölgenin açık ve bükülmüş halini karşılaştıracağız. Yeni görsel atlas tamamlanmadan bütün bedene yeni skin/motion uygulanmayacak.
