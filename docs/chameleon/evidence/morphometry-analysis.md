> Historical local record, preserved on 2026-10-25. Relative artifact paths refer to the original local outputs directory, not GitHub. Statements saying no commit describe their original task. Current status: ../15-current-state-and-resume.md.

# Panter bukalemunu: 10 fotoğraflık oran incelemesi

Tarih: 24 Ekim 2026. Durum: elle işaretlenmiş 2B fotoğraf analizi; model değiştirilmedi.
İncelenen model: outputs/body-study/chameleon-study.blend (B2). Yan görünüş Blender 4.5.14 ile ortografik olarak yeniden render edildi; .blend kaydedilmedi.

## Yöntem ve sınırlar

10 ayrı internet fotoğrafı incelendi. Tür kaynaklarda Furcifer pardalis olarak sunuluyor. Fotoğraf sayısı 10; bunların bağımsız 10 birey olduğu doğrulanmadı. Yaş, kondisyon, stres ve kamera kalibrasyonu bilinmiyor. Bu rastgele/temsilî biyolojik örneklem değildir; ortalamalar bilimsel tür standardı değildir.

Her fotoğraf üzerinde boyun merkezi N, kuyruk kökü T, burun, baş tepesi, çene, sırt ve karın konturları elle işaretlendi. N ve T görünür dış biçimden tahmini seçildi; omur veya kloak noktası değildir. **Gövde uzunluğu L = fotoğraftaki N–T mesafesi = 1** kabul edildi. Kamera eğimi bu eksenle giderildi; perspektif ve gövdenin kameraya dönüşü giderilemedi. Ölçüler mm/cm değildir, SVL ile eşit değildir. CSV'deki piksel ölçüsü analiz boyutuna aittir; sources.json özgün ve analiz boyutlarını içerir.

Baş uzunluğu burun–N eksen projeksiyonudur. Baş yüksekliği işaretli tepe–çene noktalarının eksene dik farkıdır. Gövde yüksekliği, eksenin %15–85 bölgesinde sırt–karın mesafesinin maksimumudur. Üst/alt derinlikler eksenin tam ortasında ölçülür. Çene seviyesi çene ile orta karının eksene dik koordinatlarının farkıdır: pozitifse çene yukarıdadır. Bu değer dünya düşeyindeki yerden yüksekliği ölçmez. Kontur uzunlukları çizilen parça boyunca 2B poligon yay uzunluklarıdır; dikenlerin her biri dahil değildir.

Eskizler seyrek noktalı analitik konturlardır, ayrıntılı anatomik çizimler değildir. Bacaklar ve gözler bu ölçümün dışında tutuldu. Ham koordinatlar landmarks.json içinde; kaynak fotoğraf üzerine aynı çizgilerin bindirmesi inceleme.html içinde bulunur. İşaretleme tek gözlemciye aittir; tekrarlı işaretleme hatası ölçülmedi. Sonuçlarda iki ondalık kullanmak hassasiyet garantisi değildir.

## Ölçüm sonucu

| Ölçü / L | 10 fotoğraf ortalaması | Min–maks | B2 model |
|---|---:|---:|---:|
| Baş uzunluğu | 0.41 | 0.35–0.52 | 0.39 |
| Baş yüksekliği | 0.41 | 0.25–0.55 | 0.35 |
| Gövde yüksekliği (orta %15–85 içinde maksimum) | 0.50 | 0.26–0.69 | 0.52 |
| Orta sırtta eksen üstü yükseklik | 0.31 | 0.11–0.45 | 0.26 |
| Orta karında eksen altı derinlik | 0.16 | 0.10–0.24 | 0.26 |
| Çenenin orta karına göre yüksekliği (+ yukarı) | -0.06 | -0.11–0.03 | 0.12 |
| Görünen/tahmini kuyruk yolu — TAM UZUNLUK DEĞİL | 1.21 | 0.94–1.52 | 1.49 |
| Sırt konturu yay uzunluğu | 1.15 | 1.00–1.25 | 1.07 |
| Karın konturu yay uzunluğu | 0.99 | 0.94–1.05 | 1.10 |

## Yorum ve düzeltme hedefi

- Baş uzunluğu 0.39; referans ortalaması 0.41. Büyük bir baş uzunluğu değişikliği için kanıt yok.
- Gövde yüksekliği 0.52; referans ortalaması 0.50 ve çok geniş 0.26–0.69 aralığı var. “Türün gövdesi mutlaka %10 daha ince” sonucu çıkarılamaz. Duruş, bu oranda belirleyici.
- Modelin orta karını eksenin 0.26 altında; fotoğraflarda ortalama 0.16. Modelin alt hacmi fazla aşağı taşmış görünüyor. Üst sırtı ise 0.26 ile örnek ortalaması 0.31'in altında: sorun toplam yükseklikten çok hacmin dağılımı.
- Çene modelde orta karından 0.12 L yukarıda; fotoğraf ortalaması −0.06 L ve aralık −0.11…+0.03. Bu işaretlemeyle model tüm örneklerden daha yukarıda. Kullanıcının “baş alt gövdeye yakın olmalı” gözlemini destekliyor. Fakat bütün kafayı 0.18 L aşağı taşımak otomatik doğru çözüm değildir: boğazın dolgunluğu, boyun bağlantısı ve karın hattı birlikte düzeltilmeli.
- Önerilen sonraki küçük iş: yalnız baş–boyun–karın siluetini düzeltmek; baş uzunluğunu korumak, çeneyi karın çizgisine yaklaştırmak, ensedeki keskin çukuru yumuşatmak. Mevcut deriyle yan ve üç çeyrek görünüşte kontrol; henüz rig/animasyon çalışması değil.

## Kuyruk: neden tek ortalamayla uzatmayacağız?

Tablodaki 1.21 ortalama, 10 çizilen **projeksiyon yolunun** ortalamasıdır. Bazı yollarda örtülü kesimler tahmin edildi, bazı uçlar görünmüyor; bu sayı tam anatomik kuyruk uzunluğu olarak kullanılamaz. Yalnız 04'ün uzatılmış kuyruğu bu grupta yeterince açık: 1.25 L (n=1). Tek fotoğraf tür standardı oluşturmaz. Modelin görünen yolu 1.49 L; bu veriler “kuyruk kesin daha kısa, yeniden %30 uzat” iddiasını desteklemiyor. Önce kökün kalınlığı, düzgün incelme ve kıvrım biçimi düzeltilmeli. Tam uzunluk kararı için aynı düzlemde uzatılmış kuyruklar veya güvenilir SVL/kuyruk ölçü tablosu gerekir.

## Duruş kontrolü

04 alçak/uzanmış duruş; 02–03 yüksek gövde örnekleri; 08 ve 10 belirgin eğimli/oblik örnekler. Bunların hiçbirini doğrulanmış “nötr yürüyüş” olarak etiketlemiyoruz. Sadece 04,05,06,09 alt kümesiyle tekrar hesaplamak aşağıdaki sonuçları verir; bu da yeni bir biyolojik ortalama değildir:

- Baş uzunluğu: 0.37 (n=4).
- Gövde yüksekliği (orta %15–85 içinde maksimum): 0.42 (n=4).
- Çenenin orta karına göre yüksekliği (+ yukarı): -0.03 (n=4).

## Kaynaklar ve tek tek sınırlamalar

Erişim: 24 Ekim 2026. Kaynak fotoğraflar araştırma referansı; model dokusu veya yayımlanacak site varlığı olarak kullanılmadı. Görsel pano yerel inceleme içindir. GitHub’a fotoğraf yüklenmedi.

- **01** — [Kaynak sayfa](https://www.madcham.de/de/was-kostet-ein-chamaeleon/); [fotoğraf](https://www.madcham.de/wp-content/uploads/2014/09/Furcifer-pardalis-in-Ambanja-2018-1.jpg). Hafif oblik; kuyruk kökü ve iç kıvrımı belirsiz.
- **02** — [Kaynak sayfa](https://www.pardalis.be/nl/autres-especes/46-furcifer-pardalis-ambilobe.html); [fotoğraf](https://www.pardalis.be/168-thickbox_01prem/furcifer-pardalis-ambilobe.jpg). Düşük çözünürlük; yüksek gövde; dal kuyruk yolunu kesiyor.
- **03** — [Kaynak sayfa](https://www.madcham.de/en/furcifer-pardalis/); [fotoğraf](https://www.madcham.de/wp-content/uploads/2014/09/Furcifer-pardalis-Lokalform-Sambava-male-2022-5.jpg). Yüksek gövde/boğaz; kuyruk kameraya kıvrılıyor, tam yol görünmüyor.
- **04** — [Kaynak sayfa](https://commons.wikimedia.org/wiki/File:Panther_chameleon_(Furcifer_pardalis)_male_Montagne_d%E2%80%99Ambre.jpg); [fotoğraf](https://upload.wikimedia.org/wikipedia/commons/b/b9/Panther_chameleon_%28Furcifer_pardalis%29_male_Montagne_d%E2%80%99Ambre.jpg). Yatay/alçak duruş; uzatılmış kuyruk görünür. Kök seçimi yaklaşık.
- **05** — [Kaynak sayfa](https://www.gex-fp.co.jp/exoterra/explore/care-guides/lizards/furcifer-pardalis/); [fotoğraf](https://www.gex-fp.co.jp/exoterra/assets/images/explore/care-guides/lizards/furcifer-pardalis/Careguides_Furcifer_pardalis3_s.jpg). Kuyruk dal tarafından kısmen örtülüyor; alt yol tahmini.
- **06** — [Kaynak sayfa](https://photos.com/featured/panther-chameleon-furcifer-pardalis-martin-harvey.html); [fotoğraf](https://images.imagerenderer.com/images/artworkimages/mediumlarge/2/panther-chameleon-furcifer-pardalis-martin-harvey.jpg). Kavisli gövde; kuyruk kökü dal arkasında.
- **07** — [Kaynak sayfa](https://commons.wikimedia.org/wiki/File:Panther_chameleon_(Furcifer_pardalis)_male_Nosy_Be.jpg); [fotoğraf](https://upload.wikimedia.org/wikipedia/commons/2/2d/Panther_chameleon_%28Furcifer_pardalis%29_male_Nosy_Be.jpg). Kuyruk kameraya yakın ve dal etrafında; perspektif uzunluğu kısaltır.
- **08** — [Kaynak sayfa](https://www.madcham.de/en/furcifer-pardalis/); [fotoğraf](https://www.madcham.de/wp-content/uploads/2017/09/Furcifer-pardalis-aus-Ambilobe-M%C3%A4nnchen-2017-3.jpg). Eğimli gövde; kuyruk kameraya dönüyor, arka segment örtülü.
- **09** — [Kaynak sayfa](https://www.madcham.de/en/furcifer-pardalis/); [fotoğraf](https://www.madcham.de/wp-content/uploads/2017/09/Furcifer-pardalis-aus-Ankaramibe-2017-M%C3%A4nnchen-1.jpg). Boğaz belirgin; kuyruk dalı sarıyor ve bir kısmı örtülü.
- **10** — [Kaynak sayfa](https://www.madcham.de/en/furcifer-pardalis/); [fotoğraf](https://www.madcham.de/wp-content/uploads/2017/09/Furcifer-pardalis-aus-Ambanja-M%C3%A4nnchen-2017.jpg). Belirgin oblik baş/gövde; kuyruk kıvrımı tam olarak aynı düzlemde değil.

## Yeniden üretim ve kontrol

measurements.csv oranları; landmarks.json noktaları; sources.json adres, boyut ve SHA256 kayıtlarını tutar. Pano ve karşılaştırma görsel olarak kontrol edildi. 10 fotoğraf + 1 model satırı doğrulandı. Ölçüm kodu work/morphometry/analyse.py; yeniden çalıştırmak model dosyasını değiştirmez. Orijinal blend üzerinde değişiklik, commit veya push yapılmadı.
