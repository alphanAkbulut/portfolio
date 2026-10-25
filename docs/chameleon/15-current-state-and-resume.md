> **V20 burun tarafı kök adayı:** [Görsel/ölçüm/kaynak kaydı](evidence/v20-nose-root/README.md). Kullanıcı arka=kuyruk, ön=burun olarak netleştirdi. Arka bağlantı test edilen bölgede aynen korundu; ön nötr genişliği arka tarafa yaklaştırıldı. Ana göz deseni korunuyor. Ön/arka hareket tam eşdeğer değil; özellikle buruna bakışta nötre göre daralma ölçütü henüz sağlanmadı. V20 aday, kullanıcı kabulü bekler.

> **V19 yönlü kök derisi adayı:** [Yukarı–nötr–aşağı karşılaştırması](evidence/v19-directional-root/README.md). Baş bağlantısı sabit, göz tarafındaki bant bakış doğrultusunda daralır; karşı tarafta genişler. Ana kabul edilmiş göz deseni korunur. Aşağı daralma daha hafiftir; v19 kullanıcı kabulü bekler, v17/v18 korunur.

> **V18 baş–göz kökü adayı:** [Görsel, video, kaynak ve doğrulama](evidence/v18-eye-root/README.md). Yalnız tabana ayrı ince pullu deri geçişi eklendi; v17 ana göz deseni/kapak/optik verileri korunuyor. V18 kullanıcı kabulü bekler, v17 kabul edilmiş referans olmaya devam eder. Bu iş siyah açıklık çevresindeki bant düzeltmesi değildir.

> **Kabul edilmiş göz dokusu:** Kullanıcı 6 saniyelik M1a/v17 videosundaki göz pul desenini beğendi ve korunmasını istedi. Ana pul katmanını yeniden üretmeyin/değiştirmeyin; kaynak üzerine yazmayın. [Kabul kapsamı, sabit video ve SHA256 kaydı](evidence/m1a-v17-motion-review/findings.md). Önceki kusur notları genel doku değişikliği yetkisi değildir.

> **M1a hareket incelemesi tamamlandı (25 Ekim):** [Bulgular ve mevcut v17 hareket kaydı](evidence/m1a-v17-motion-review/findings.md). 179 ara/tam karede kök kayması yok; açıklık kenarı–kapak geçişi ve kıvrımlarda pul yığılması açık. Model değiştirilmedi. Sonraki küçük iş M1b kenar–kapak birleşimi; genel beden araştırmasının tamamlandığı anlamına gelmez.

> **Görsel arşivi eklendi:** [Sürümlü prototip galerisi, referans panosu, videolar ve kaynak dizini](evidence/archive-2026-10-25/README.md). Yerel dosya envanteri ile GitHub'a gerçekten yüklenen dosyalar ayrı işaretlidir.

# V17 devir noktası — 25 Ekim 2026

Bu dosya güncel durumun giriş noktasıdır. Önceki B1/E1 durum kayıtları tarihseldir; silinmediler. Bu kayıt başka bir LLM'in sohbeti bilmeden devam etmesi içindir. Tasarım gerekçeleri ve kullanıcı kararları kaydedilir; biyolojik doğruluk veya üretim kalitesi onayı verilmez.

## Değişmez kapsam

- Yalnız `alphanAkbulut/portfolio`, `portfolio-chameleon`. Main, design-preview, snapshot dalları, production/DNS ve diğer projeler korunur.
- Tür: **Furcifer pardalis**, panter bukalemunu. Kesin locality/morph seçilmedi. Veiled/Jemen referansları yardımcıdır; panter ölçüsü yerine geçmez. AI görseller biyolojik kanıt değildir.
- İlk release tek sinematik hero ve tek kaliteli varyant. Altı varyant sonraya bırakıldı. Fotogerçekçilik hedef, mevcut durum değil.
- Küçük incelenebilir işler; her tamamlanan dilimde kullanıcıya sonucu göster, sonraki işe geçmeden kullanıcıya model değiştirme fırsatı ver. Gereksiz kopya dosya/video üretme. Model erişimi/fiyatı/başarısı hakkında garanti verme.
- Gövde/ayak/deri hareketini son aşamaya erteleme. Ayrıntılandırmadan önce küçük deformasyon testleri yap. Tam sahne kurgusu ve son animasyon cilası daha sonra.

## Gerçekte ne var?

| Alan | Mevcut | Henüz yok / doğrulanmadı |
|---|---|---|
| Beden | Düzeltilmiş baş–boyun–karın silueti, uzatılmış ve incelen kuyruk, kapalı ağız | Tam anatomik rig, yürüyüş, ayak kavrama, kuyruk açılma/kapanma |
| Yakın göz | Küresel dış zarf, hareket eden açıklık, kök kıvrımları, bombeli pullar, sığ parlak iç yüzey; 90 kare/15 fps şekil anahtarı denemesi | Canlı cursor tracking, doğrulanmış tam hareket aralığı, fiziksel deri mekaniği |
| Uzak göz | Önceki proxy | Yakın gözün son özelliklerinin aktarılması ve bağımsız çift göz testi |
| Deri | Yuvarlatılmış bombeli geometri, bölgeler arasında karışık ve sürekli boyut geçişi | Nihai doğal malzeme, renk davranışı, beden pullarının rig bağlantısı, tüm yüzeylerde çarpışma kontrolü |
| Site | Önceki portföy kaynakları | Bu prototipin hero entegrasyonu, runtime performans/LOD/bake, ripple, erişilebilirlik kabulü, yeni Netlify preview |

**Plastik oyuncak hissi açık kalite sorunudur.** Tek zeytin rengi ve sade malzeme form incelemesi içindir. Esneklik sadece bir resim/texture giydirmekle oluşmaz: sürekli alt deri + pozla değişen kıvrımlar + yüzeye bağlı pul katmanı + bölgesel ışık tepkisi birlikte çalışmalı. Her pulu bağımsız lastik top gibi şişirme; beyaz highlight boyama. Görünen parlak göz yüzeyi tam retina modeli değildir.

## Güncel yerel dosya ve erişim sınırı

Çalışma kökü: `/Users/alphanakbulut/Documents/Codex/2026-10-20/referenced-chatgpt-conversation-this-is-an`.

- Güncel Blender: `outputs/body-study/chameleon-study-v17-graded-scales.blend`.
- SHA256: `8181189517408c0e2a3ccd9ab9e5affd442cf90a9660dddff8bb51861d8a8fc6` (yerel manifest; arşiv manifesti ayrıca güncel dosyadan hesaplar).
- Görseller: `outputs/body-study/body-v17-close.png`, `body-v17-overview.png`.
- Önceki kabul edilen şekil/optik karşılaştırması: v16. V17 beden formunu ve gözün optik yüzeyini koruyup yoğunluğu değiştirdi.
- Ortam: Blender 4.5.14 LTS, Python/numpy. Kaynaklar çalışma köküne göre göreli yollar kullanır.

**Büyük .blend dosyaları GitHub'a yüklenmedi. Seçilmiş renderlar ve hareket videoları aşağıdaki sürümlü görsel arşivine eklendi.** Başka makinedeki LLM bu yerel yolu açamaz. `evidence/artifact-index.json` erişim ve hash kaydıdır; yedek dosya değildir. `evidence/source/` mevcut üretim betiklerinin arşividir; temiz checkout'tan uçtan uca tekrar üretim henüz doğrulanmadı. Başlamadan önce v17 veya gerekli kaynak .blend dosyalarına erişimi doğrula; yoksa kullanıcıdan aktarım iste, B1'i son sürüm sanarak baştan üretme.

V17 üretim zinciri: v16 → `work/body-study/graded-skin/build_body.py` → `work/body-study/graded-skin/body-intermediate.blend` → `build_eye.py` → v17. `verify.py` v16/v17 karşılaştırmasıdır. Arşiv betikleri doğrudan çalıştırılacak yeni pipeline değildir; içlerindeki çalışma yollarını koruyarak ayrı çalışma alanına geri koy. Bazı eski betikler kendi sürüm çıktılarının üzerine yazar; incelemeden çalıştırma. Başlangıç B2 betiği `work/body-study/proportions-before/chameleon-study.blend` gerektirir; bu checkpoint GitHub'da yoktur.

## Korunacak sahne kararı

Her ayak iki kez yer değiştirir (8 footfall) → 0.5 saniye duruş, baş dönmeden gözlerle tarama → her ayak bir kez daha (4 footfall) → kısa güvenlik taraması → kısa pembe/kırmızımsı dilin suya teması ve ilk ripple → tek göz ziyaretçiyi fark eder → dil içeri, baş hızlıca kalkar ve ziyaretçiye yönelir → ikinci ripple, ana gövde/site palet değişimi, kamera yaklaşması. Yürüyüşte çok hafif lokal renk değişimleri. Sonra cursor göz takibi; scroll ile uzaklaşma. Sabit 7 saniye hedefi yok; adım sayısı tamamlanmadan suya teleport yok. Ziyaretçi animasyonu izlemeye zorlanmaz.

## Sonraki küçük işler ve kapılar

1. **R1 bölgesel kanıt atlası:** Ayak üst/alt/uç, kuyruk iç/dış/kök/uç, boyun/omuz/karın için türü doğrulanmış pozlar. Yüzlerce poz isteği açık; mevcut örneklem bunu karşılamıyor. Her kaynağın zamanı, türü, birey/klip kimliği, görünür bölgesi, lisansı ve belirsizliği kaydedilmeli. Aynı klibin 200 karesi 200 bağımsız poz/hayvan sayılmaz.
2. **M1 küçük hareket testi:** Yeni tüm gövde detayına başlamadan bir boyun eğilmesi + tek ön ayakta aç/kavra + kısa kuyruk bükülmesi için düşük yoğunluklu alt deri ve sınırlı pul örneği. Gözde v17'nin mevcut 90 karesi aynı ışıkta test edilir. Kabul: kök ayrılması, yüz ters dönmesi, dal kesişmesi, görünür pul yüzmesi/uzaması yok; sorunlu kareler raporlanır. Tam yürüyüş bu işin dışında.
3. **S1 küçük gerçekçi malzeme testi:** Yalnız göz–yanak–boyun yaması; mevcut geometriyi koru. Bölgesel roughness, mikro pürüz, ölçülü deri ışık geçirgenliği denemesi ve renk katmanları. Nötr/öne/yukarı/aşağı poz; makro/hero/uzak kadraj; sabit ışıkta önce/sonra. Doku kaymamalı, kıvrımlar renk olmadan da okunmalı, ıslak plastik parlaklığı olmamalı. Kullanıcı görsel kabulü olmadan tüm bedene yayma.
4. **M2 beden rig ve yürüyüş:** Ayak temasları, ağırlık aktarımı, kuyruk mesafesi; ardından kabul edilen deri yöntemi yayılır. İlk iki gözün bağımsız kontrolü ayrıca doğrulanır.
5. **Sahne/runtime kapısı:** Su/dil, fark etme, kamera ve renk; ardından bake/LOD/glTF, realtime-hybrid kararı ve tarayıcı/WCAG testleri. Önceki planın mimari PoC kapıları geçilmiş değildir.

Bu sıra önerilen devam sırasıdır; bu commit yeni Blender düzenlemesi, rig veya deploy içermez. Kullanıcının model değiştirme isteği nedeniyle bir sonraki üretim diliminde durup kapsamı net göster.

## Doğrulama durumunun anlamı

Yerel v17 manifesti dosyanın yeniden açıldığını ve v16 ile 1/29/43/57/90 karelerinde göz kapağı/optik/ana bedenin korunduğunu bildirir. Bu turda manifest ve doğrulama logu okundu; tam render/90 kare testi yeniden çalıştırılmadı. Bu testler biyolojik doğruluk, tüm pullarda çarpışmasızlık veya tarayıcı performansı kanıtı değildir.

Okuma sırası: bu dosya → [tasarım evrimi](16-design-evolution.md) → [bölgesel kanıt](17-regional-skin-evidence.md) → [ayrıntılı yerel geliştirme kaydı](evidence/eye-development-log.md) → mevcut 05/07/14 belgelerinin tarihsel kararları. Yerel G1…G12 göz deney etiketleri, 07 planındaki mimari karar kapılarıyla aynı şey değildir.
