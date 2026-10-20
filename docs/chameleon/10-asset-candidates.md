# D2 — Bukalemun varlık adayları
Tarih: 2026-10-20. Dal: `portfolio-chameleon`.
Durum: **RESEARCH COMPLETE / ASSET NOT SELECTED**.
[Task kaydı](09-skin-task-log.md) · [Üretim planı](07-v4-development-plan.md)

## Sonuç ve öneri
Öncelik ücretsiz seçenek. Bu araştırmada, tüm gereksinimleri doğrulanmış ücretsiz bir **panter bukalemunu + düzenlenebilir deri + bağımsız iki turret göz + uygun web dağıtım hakkı** paketi bulunamadı. Bu, böyle bir paketin bulunmadığı kanıtı değil.
Bir ücretsiz mesh adayı ve dört karşılaştırma adayı kaydedildi. Hiçbir asset satın alınmadı/indirilmedi; dosya içeriği, anatomi, gerçek görsel kalite ve rig kontrolü yapılmadı. Ücretli seçenekler yalnız alternatifleri görünür kılmak için listelendi.

**Önerilen sonraki küçük task D3a:** ücretsiz Trouvaille modelinin gerçek lisans bağlantısını ve indirilebilir dosyasını erişilebilir normal sayfadan doğrula; haklar uygunsa örneği yerelde mesh/UV/doku/rig açısından incele. Tür farklıysa veya kalite düşükse bunu üretim modeli seçme. Ücretsiz dosyaya erişilemiyorsa indirildi/inceleme yapıldı deme.
Bu aşama için önceki Sol High önerisi sürer; model değişimi henüz gerekmiyor. D4/D5 görsel deri tasarımına geçerken kullanıcıya ayrıca Astra Orta önerilecek.

## D3 güncellemesi — 2026-10-20
Normal tarayıcıda A adayı açıldı: lisans bağlantısı CC BY 4.0; FBX/glTF/GLB, UV mevcut; **PBR No, Rigged No, Animations 0**. İndirme giriş istiyor; dosya alınmadı. Önceki D2 erişim sınırı tarihsel olarak korunuyor; güncel kanıt ve devam için [11 ön inceleme](11-free-asset-preflight.md) geçerli.

## Aday matrisi
“İlan” satıcı/üretici beyanıdır; teknik doğrulama değildir. Fiyatlar arama/açılan sayfa görünümü, vergi ve güncel checkout hariç; harcama izni değil.

| ID / kaynak | Ücret ve erişim | Düzenlenebilirlik / deri / rig kanıtı | Eksik ve karar |
|---|---|---|---|
| A — [Chameleon / Trouvaille (dashdu), Sketchfab](https://sketchfab.com/3d-models/chameleon-3877371976754df68d2b93a181bd4893) | Arama kaydı “Download Free”; CC Attribution etiketi | İlan özeti: 44.3k triangle, 23.2k vertex; açıklama yalnız “chameleon mesh” | Doğrudan sayfa 403 döndü. Tür, dosya biçimi, UV/doku, animasyon ve bağımsız göz rig'i UNKNOWN. **Ücretsiz teknik inceleme için birinci aday; final model olarak kabul edilmedi.** |
| B — [Furcifer pardalis / GabrielCasamasso, TurboSquid 1178059](https://www.turbosquid.com/3d-models/furcifer-pardalis-1178059) | Arama kaydı $149.99; Standard License. Ücretli | İlan özeti türü açıkça panter olarak adlandırıyor; C4D R18/FBX, rigged/animated, 6,508 polygon; 4K diffuse/AO/normal/displacement/roughness ve iki renk | Tam ürün sayfası fetch başarısız; bilgi indekslenmiş satıcı kaydından. C4D rig'in Blender'a aktarımı, göz kontrolü ve web GLB hakkı UNKNOWN. Tür uyumu açısından karşılaştırma; **satın alma önerisi değil**. |
| C — [Walking Chamelion Animated Rigged for Blender / 3dmi, CGTrader](https://www.cgtrader.com/3d-models/animal/reptile/walking-chamelion-animated-rigged-for-blender) | Açılan sayfada $149, Royalty Free | Blender .blend, UV/PBR, 4K/2K dokular ve rig/animasyon beyanı; Blender 3.6 metadata, 15,539 polygon | Tür açıkça Furcifer pardalis diye doğrulanmıyor; modelin tanıtım pozu pakete dahil olmayabilir. Göz joint yapısı ve Blender 4.5 aktarımı denenmedi. Genel lisans, public GLB için açık izin sayılmaz. **Ücretsiz yol başarısız olursa değerlendirilebilecek film adayı.** |
| D — [WJ014 Chameleon / Wjumiawi, Fab](https://www.fab.com/listings/579bf645-e00a-4f4f-905b-ac564c615408?lang=en) | Buy/cart akışı; fiyat ve lisans seçimi dinamik, UNKNOWN | İlan PBR/rig ve dil animasyonu diyor. Açıklama .blend/.obj/.fbx derken format listesi FBX/converted GLB/glTF/USDZ veriyor | Tür, native .blend teslimi ve iki göz rig'i UNKNOWN. “Allows usage with AI: No” etiketi görülüyor; kapsamı açıklığa kavuşmadan AI araçlarına asset aktarılmaz. **Öncelik dışı.** |
| E — [Chameleon animated / Petar Doychev, RenderHub](https://www.renderhub.com/petar-doychev/chameleon-rigged-animated) | Açılan sayfada $12, Extended Use License | 4,329 polygon, FBX/3DS/MAX/ZPR; ilan iki göz kemiği ve 1024×1024 texture belirtiyor | Tür/PBR ve detay kalitesi doğrulanmadı; bağımsız göz kemikleri teknik deneme için ilgili ama macro deri kalitesine kanıt değil. FBX rig aktarımı ve public GLB hakkı açık. **Düşük maliyetli karşılaştırma, otomatik seçim değil.** |

## Lisans kontrolünün sonucu
- Ücretsiz A için CC Attribution'ın tam sürümü, hak sahibinin verdiği link, indirme paketindeki şartlar ve attribution alanları D3a'da kaydedilecek. Sadece arama etiketini kesin lisans kanıtı saymıyoruz.
- [Creative Commons BY 4.0 özeti](https://creativecommons.org/licenses/by/4.0/deed.en) paylaşım/uyarlama ve attribution koşullarını açıklar; A'nın kesin lisansının 4.0 olduğu henüz doğrulanmadı.
- [CGTrader Royalty Free açıklaması](https://help.cgtrader.com/hc/en-us/articles/360015124437-Royalty-Free-License) dağıtımın ürüne dahil edilmesi ve son kullanıcının kaynak modele erişimine yönelik sınırlamalar içeriyor. **Public repoda veya doğrudan URL'de GLB sunmak için uygunluğu kanıtlanmış değil.** Offline render ile runtime asset teslimi ayrı değerlendirilir.
- [RenderHub 3D Content Licensing](https://www.renderhub.com/info/3d-content-licensing) daha büyük ürün içinde kullanım ve dağıtım kısıtlarını tanımlar. “Extended” etiketi tek başına ham veya kolay çıkarılabilir asset'in public repoya konmasına onay değildir.
- Gerekirse satıcıdan somut web kullanım izni sorulabilir; kullanıcı yetkisi olmadan satıcıya mesaj gönderilmedi.

## D3a inceleme sözleşmesi
Girdi: hakları doğrulanmış ücretsiz model dosyası, kaynak URL ve indirme hash'i.
İlk açılış: Blender 4.5.14, auto-run scripts kapalı; kaynak ayrı korunur, inceleme kopyası.
Beklenen çıktı:
1. Mesh adları/yüz sayısı, bağlı materyal/doku listesi, UV varlığı ve doku çözünürlükleri.
2. Armature ve bağımsız iki göz kontrolünün bulunup bulunmadığı; rig yoksa açıkça FAIL/ABSENT.
3. Tek gövde bölgesinin renk maskesi uygulanabilirliği; eksik doku veya deformasyon.
4. Tür/anatomi ve normal/roughness kalitesinin referansla ayrıca değerlendirilmesi.
5. **PASS / FAIL / UNKNOWN / INCOMPLETE** kararı; mevcut asset'i koruyarak rapor.
İlk task ücretsiz dosya erişimi/teknik rapordur. Uzun yürüyüş, tam deri üretimi, satın alma, site entegrasyonu veya kalite garantisi içermez.

## Ücretsiz model uygun çıkmazsa
D3a sonucu gelmeden ücretli modele atlamayız. Deri materyalinin küçük bir kendi ürettiğimiz yüzey parçasında denenmesi bağımsız bir sonraki seçenek olarak sunulabilir; bu, fotogerçekçi tam hayvan/rig görevini kapatmaz. Karakter tedariki açık kalır.

## Kaynak/kanıt sınırı
Yukarıdaki sayfalar 20 Ekim 2026'da arandı. CGTrader, Fab ve RenderHub ürün içerikleri açıldı; Sketchfab 403, TurboSquid ürün açma hatası nedeniyle bunlarda arama özetleriyle sınırlı kalındı. Marketplace tanıtım görselleri bu taskta görsel kalite kabulü olarak incelenmedi. Sonuç bir **araştırma kısa listesi**, üretime kabul edilmiş asset listesi değildir.
