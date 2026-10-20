# D3 — Ücretsiz adayın lisans ve teknik ön incelemesi
Tarih: 2026-10-20. Dal: `portfolio-chameleon`.
Durum: **PARTIAL — kaynak dosya indirme/Blender incelemesi için oturum gerekiyor**.
[Task kaydı](09-skin-task-log.md) · [Aday listesi](10-asset-candidates.md)

## Doğrudan doğrulanan kaynak
[Chameleon — Trouvaille / dashdu, Sketchfab](https://sketchfab.com/3d-models/chameleon-3877371976754df68d2b93a181bd4893), model ID `3877371976754df68d2b93a181bd4893`.
Web okuma aracı yine 403 döndürdü; normal Codex tarayıcısıyla herkese açık sayfa açıldı. Lisans ve “More model information” penceresi doğrudan sayfadan okundu. Önceki D2'deki “tam sayfa erişilemedi” sınırı bu metadata için artık kalktı; indirme dosyası henüz erişilmedi.

## Lisans
- Sayfa `CC Attribution` gösteriyor.
- Sayfanın “Learn more” bağlantısı doğrudan [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/)'a gidiyor; sürüm artık sayfa düzeyinde doğrulandı.
- Kaynak/üretici/model URL'si, lisans URL'si ve yapılan değişikliklerin belirtilmesi gereken attribution kaydı hazırlanabilir.
- Bu, yüklenecek paketteki dosyaların veya üçüncü taraf girdilerin ayrıca incelendiği anlamına gelmez. Paket erişiminden sonra lisans/credit dosyaları korunacak.
- Üretim modeline henüz karar verilmedi; indirme veya satın alma yapılmadı.

## Herkese açık teknik metadata
Aşağıdakiler satıcı/sayfa metadatasıdır; yerel dosya incelemesi yerine geçmez.

| Alan | Sayfadaki değer |
|---|---|
| Dahil formatlar | Autodesk FBX; dönüştürülmüş glTF, USDZ, GLB |
| İndirme boyutu | 24 MB |
| Görsel dosyaları | JPG (6), PNG (2) |
| Toplam üçgen | 44.3k |
| Kaynak yüz dağılımı | 2.6k triangle, 20.8k quad, 56 polygon |
| Vertex | 23.2k |
| PBR | **No** |
| Texture | 6 |
| Material | 4 |
| UV Layers | **Yes** |
| Vertex colors | No |
| Animations | **0** |
| Rigged geometries | **No** |
| Morph geometries | 0 |
| Scale transformations | No |

Sayfadaki “image formats” ve “textures” sayıları farklı alanlardır; tek başına dosya kaybı veya hata diye yorumlanmadı. Texture çözünürlükleri, normal/roughness içeriği, gerçek material node yapısı, ayrı göz mesh'leri ve tür/locality henüz UNKNOWN.

## Geçiş kararı
- **Lisans bağlantısı / kamuya açık metadata kontrolü:** PASS.
- **Hazır bağımsız göz rig'i ve animasyon varlığı:** sayfa metadatasına göre yok; hazır animasyonlu karakter beklentisini karşılamıyor.
- **Deri materyali için başlangıç mesh'i:** UV varlığı olumlu; ancak PBR yok etiketi nedeniyle yeniden materyal/doku işi beklenebilir. Ne kadar iş gerektiği dosya açılmadan söylenemez.
- **Panter bukalemunu tür doğruluğu / macro fotogerçek kalite:** UNKNOWN; genel “chameleon” başlığı yeterli kanıt değil.
- **Blender dosya incelemesi:** INCOMPLETE — dosya yok.
- **G0 asset kabulü:** geçmedi. Bu varlık doğrudan ana model seçilmedi; gerekirse mesh/UV çalışma adayı olarak tutuluyor.

## Somut erişim engeli
“Download 3D Model” düğmesine basıldığında **Log in to Sketchfab** penceresi açıldı. Bu tarayıcı oturumunda giriş yapılmış değil.
Yeni hesap oluşturulmadı, üçüncü taraf giriş akışı başlatılmadı, parola/token istenmedi veya kullanılmadı. İndirme akışı/erişim denetimi aşılmadı. Kullanıcı mevcut hesabıyla oturum açarsa normal indirme akışı üzerinden devam edilebilir.

## Sonraki küçük task — D3b
1. Kullanıcının mevcut Sketchfab oturumuyla normal dosya erişimi sağlanır.
2. Lisans/credit ve indirme hash'i kaydedilir; kaynak paketi ayrı korunur.
3. Arşiv dosya listesi incelenir; sadece gereken model/doku verisi çalışma kopyasına alınır.
4. Blender 4.5.14'te auto-run scripts kapalı açılır; mesh/UV/material/texture/armature raporu çıkarılır.
5. Gözler ayrı düzenlenebiliyor mu, normal/roughness eksik mi, tek küçük deri bölgesini değiştirmek mümkün mü soruları kanıtla yanıtlanır.
6. Çıktı PASS/FAIL/UNKNOWN olarak kaydedilip task kapanışında kullanıcıya sunulur.

D3b için model değişimi gerekmiyor; önceki Sol High önerisi sürüyor. D4/D5 deri tasarımı öncesinde kullanıcıya Astra Orta önerisi ayrıca verilecek. Hesap kullanılmayacaksa alternatif asset veya kendi üreteceğimiz küçük yüzey deneyi **ayrı kapsam kararı** olarak sunulur; kaynak dosya incelemesi yapılmış sayılmaz.
