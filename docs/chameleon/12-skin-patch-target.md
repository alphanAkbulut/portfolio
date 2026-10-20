# D4 — Küçük deri yüzeyinin hedefi
Tarih: 2026-10-20. Dal: portfolio-chameleon.
Durum: **D4 hedef/deney sözleşmesi hazır; görsel onay bekliyor. D5 render başlamadı.**
Kaynak revision: c2120de2aa622dc593c7823095f51b8595c06c15.

## Yetki ve amaç
Kullanıcı Sketchfab hesabı olmadığını bildirdi; hazır hayvan modeli olmadan kendi küçük yüzeyimizi kullanma önerisini ve D4'e geçişi onayladı. Astra Orta'yı seçtiğini bildirdi. Bu, tam karakter veya web build onayı değildir.
En riskli varsayım: bağımsız bir küçük yüzeyde üretilen pul kabartısı yakın çekimde plastik, taş veya balık pulu gibi görünmeden deri hissi verebilir mi? D5 bunu sınayacak. Başarılı yama, tam hayvan anatomisini ya da G1'i kanıtlamaz.

## Tek bölge ve görünüm
- Gövdenin yan yüzeyini temsil eden, kendi ürettiğimiz hafif dışbükey dikdörtgen yama. Göz, baş, bacak, kuyruk ve anatomik model yok.
- Başlangıç çalışma ölçeği 40 × 30 mm; bu biyolojik ölçüm değil, tekrarlanabilir deney ölçeği.
- Yaklaşık 0.7–1.2 mm çaplı, kenarları yuvarlatılmış düzensiz hücreler. Birkaç daha iri pul; düzgün altıgen döşeme, üst üste balık pulu, sivri taş veya eş boy baloncuk görünümü reddedilir.
- Sığ kabartı başlangıcı 0.08–0.18 mm; ince ve yumuşak aralıklar. Siyah derin çatlaklar kullanılmaz.
- Büyük ölçekte bir yumuşak pigment bandı, pul ölçeğinde düşük genlikli renk farkı, en küçük ölçekte yüzey pürüzü. Aynı rastgele gürültü bütün katmanları yönetmez.
- Bu sayılar **üretim hipotezidir**; fotoğraftan ölçülmedi ve tüm vücuda uygulanmayacak.

## İki renk durumu — önerilen ilk deneme
| Durum | Ana renk, sRGB taslak | İkincil renk | Amaç |
|---|---|---|---|
| A / sakin | yaprak yeşili #4B7950 | soluk yeşil #94A66A | doğal ve sakin başlangıç |
| B / sıcak | sarı-yeşil #81954B | sıcak açık ton #B8AD69 | aynı derinin daha sıcak hali |
Hex değerler shader'a girerken sRGB → linear dönüşümü gerektirir; render pikselinin bu hex ile aynı olması beklenmez. Bunlar final site token'ları değildir.
İlk B denemesinde pigment bandının maskesi, geometri, kabartı, kamera ve ışık A ile aynı kalır. Renk değişimi kabartıyı eritmemeli. Tüm yüzeye düz hue döndürme yerine iki palette de aynı yapısal maskeler kullanılır.
D4'te fizyolojik doğruluk iddiası veya final lokalite seçimi yok. İlerideki lokal geçiş D6'dır; D5 yalnız iki ayrı sabit durum sunar.

## Işık ve malzeme deneyi
- Nötr gri çevre; geniş yumuşak ana ışık üst/yan tarafta, zayıf dolgu. Orman, sis ve dramatik renkli ışık yok.
- Ana kamera yüzeye yaklaşık 30° eğik; kabartı ve aralıklar okunabilir. İkinci nötr gri malzeme kontrolü pigmentin kabartı kusurlarını örtmesini önler.
- Başlangıç: Principled BSDF, metallic 0, roughness yaklaşık 0.55 (kontrollü 0.45–0.65 varyasyon). Islak/vernikli parlaklık hedeflenmez.
- İlk deneme için subsurface kapalı; gerekirse sonraki tek değişkenli revizyonda değerlendirilir. Bu, gerçek derinin fiziksel parametre ölçümü değildir.
- Cycles CPU başlangıç yolu; kurulum smoke testinde doğrulanmış yol bu. Metal GPU render henüz doğrulanmadı.
- Sabit exposure ve view transform; tüm karşılaştırmalarda aynı değerler. Kamera, ışık, seed ve parametreler üretim scripti/manifest içinde kaydedilecek.

## D5 için somut çıktı sözleşmesi — onay sonrası
1. Yeniden üretilebilir Blender scripti ve parametre kaydı; harici ücretli eklenti/doku gerektirmeyen yama.
2. Düzenlenebilir .blend dosyası; A, B ve nötr kabartı kontrolü için aynı sahne.
3. A/B PNG, yaklaşık 768 × 768; aynı kadrajda gri kontrol PNG ve karşılaştırma görünümü. İlk örnekte animasyon yok.
4. Blender sürümü, seed, render motoru, sample/denoise ayarı, süre, hata ve çıktı hash kaydı. Ölçülmeyen bellek/GPU performansı unknown olarak kalır.
5. Çıktılar yerelde saklanır; büyük binary dosyalar otomatik GitHub'a yüklenmez. Kaynak script/manifest uygun küçük task commit'inde tutulabilir.

768 çözünürlük ve küçük yama ilk deneme önerisidir; kullanıcı tarafından belirlenmiş süre/token/para tavanı değildir. Cloud/API/asset satın alma yetkisi yok.

## D5 kabulü ve karar kapısı
| Kontrol | Geçiş kanıtı | Başarısızlık / eksik |
|---|---|---|
| Tekrar üretim | Kaydedilmiş script, seed ve ayarlarla sahne açılır/render alınır | Dosya veya bağımlılık eksikse incomplete |
| Pul okunabilirliği | Tam görüntü ve %100 görünümde sığ kabartı/aralıklar seçilir | Gürültü, siyah çatlak, baloncuk/taş görünümü varsa fail |
| Malzeme | Aynı ışık altında mat-yumuşak yansıma, patlayan beyaz alan yok | Vernik/plastik görünümü varsa revise |
| Renk tutarlılığı | A/B aynı pul ve pigment sınırlarını korur; yalnız renk değişir | Desen/kabartı yer değiştirirse fail |
| Görsel hedef | Kullanıcı gerçek fotoğraf hissine yaklaşımı değerlendirebilir | Ajanın teknik pass'i kullanıcı görsel onayı değildir |

D5 sonunda görseller sunulur ve durulur. Görünüm başarısızsa tek sorunu hedefleyen revizyon önerilir; kaliteyi düşürerek “tamamlandı” denmez. Uzman sculpt/asset gereksinimi açık kalır. Tarayıcı, UV seam, deformasyon, gerçek zamanlı performans ve tüm vücut kapsam dışıdır; sırasıyla D3/D7/D8 ve G1/G2 sahipliğinde.

## Referans, varsayım ve açık riskler
**Dış referans:** [Charles J. Sharp — erkek Nosy Be panter bukalemunu](https://commons.wikimedia.org/wiki/File:Panther_chameleon_(Furcifer_pardalis)_male_Nosy_Be.jpg), fotoğraf tarihi 2018-12-07; kaynak sayfası 2026-10-20 kontrol edildi. Sayfa tür/lokalite, fotoğrafçı ve [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/) bilgisini veriyor. Referans bağlantısıdır; fotoğraf repo'ya kopyalanmadı, texture olarak kullanılmadı. Bu tek fotoğraf iki renk hali arasındaki dönüşümün kanıtı değildir.
**Kullanıcı referansları:** önceki iki ekran görüntüsünün piksel dosyaları bu taskta mevcut değil; görülmüş veya eşleştirilmiş sayılmadı. Kullanıcının bu turda onayladığı bağımsız yama deneyi bunları final hedef yerine koymaz. Tam karakter modelleme/nihai görsel eşleştirme öncesinde tekrar temin edilecek.
**Tasarım varsayımları:** yama boyutu, pul sayısal aralıkları, renkler, malzeme ve ışık parametreleri bu taskın başlangıç önerileridir; biyolojik ölçüm veya onaylanmış nihai görünüm değildir.
**Açık risk:** prosedürel yama yakın çekimde yeterince doğal görünmeyebilir; iyi yama gerçek modele aktarılırken UV/anatomi/rig sorunları çıkabilir. D3b dosya incelemesi incomplete; final karakter ve kullanım hakları henüz seçilmedi.

## Devam noktası
D4 belgesi hazır. Kullanıcıya kısa hedef özeti ver; **D5 ilk sabit deri örneği** için onay bekle. Astra Orta ile ilk deneme önerisi korunur; şu an Astra High gerektiren gözlenmiş sorun yok.
