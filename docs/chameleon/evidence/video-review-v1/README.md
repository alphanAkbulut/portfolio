# Panter göz videosu — kare kare araştırma arşivi V1

25 Ekim 2026 · Furcifer pardalis · Tek klip / tek birey · 360 kare / 24 fps.

Bu arşiv gözün kafaya oranı, burun tablası, kapalı ağız hattı ve göz kökü kıvrımlarını hangi kanıtla değerlendirdiğimizi saklar. Araştırma modelin düzeltilmiş veya bütün hayvanın tamamlanmış olduğu anlamına gelmez.

- [İnceleme sayfası kaynak dosyası](index.html) — GitHub HTML çalıştırmaz; klasörü indirip `index.html` dosyasını tarayıcıda açın. Kare gezintisi ve bulgular internet olmadan çalışır; Commons video bağlantısı internet gerektirir.
- [Ayrıntılı bulgular ve model kararları](analysis.md).
- [Yöntem, çalışma günlüğü ve gelecek alan önerisi](../../18-frame-by-frame-video-research.md).
- [360 kare kaydı](frame-register.csv), [23 olay](events.json), [ham ölçüler](measurements.json), [kaynak kimliği](source.json), [paket dosyaları ve hashler](manifest.json).
- [Sekiz yakın planın karşılaştırması](assets/eye-detail-sequence.jpg).

## Gerçekte ne yapıldı?

1. Commons dosya sayfası ve video kimliği kontrol edildi; yerel özgün dosyanın SHA-1 değeri kaynakla eşleşti.
2. 360 kare nominal 24 fps ile çıkarıldı; interpolasyon ve keskinleştirme yapılmadı.
3. Her biri 24 ardışık kare içeren 15 pano atlamadan görsel tarandı.
4. Sekiz seçili göz pozu doğal piksel boyutunda karşılaştırıldı; üç karede görünür sınırlar elle işaretlendi.
5. 23 görsel olay işaretlendi. Bu, 23 fizyolojik saccade ölçümü veya bütün küçük hareketlerin tam kataloğu değildir.
6. Gözlem, yorum, ölçüm sınırı ve önerilen model değişikliği ayrıldı. Kabul edilmiş göz korunarak önce kafa/burun/ağız biçiminin ele alınması önerildi.
7. Kaynak modelin değişmediği hash ile kontrol edildi. Bu paketleme turunda model açılıp değiştirilmedi.

## Görsel kanıt

- [0–1 saniye: F000–F023](assets/sequence-00.jpg)
- [1–2 saniye: F024–F047](assets/sequence-01.jpg)
- [2–3 saniye: F048–F071](assets/sequence-02.jpg)
- [3–4 saniye: F072–F095](assets/sequence-03.jpg)
- [4–5 saniye: F096–F119](assets/sequence-04.jpg)
- [5–6 saniye: F120–F143](assets/sequence-05.jpg)
- [6–7 saniye: F144–F167](assets/sequence-06.jpg)
- [7–8 saniye: F168–F191](assets/sequence-07.jpg)
- [8–9 saniye: F192–F215](assets/sequence-08.jpg)
- [9–10 saniye: F216–F239](assets/sequence-09.jpg)
- [10–11 saniye: F240–F263](assets/sequence-10.jpg)
- [11–12 saniye: F264–F287](assets/sequence-11.jpg)
- [12–13 saniye: F288–F311](assets/sequence-12.jpg)
- [13–14 saniye: F312–F335](assets/sequence-13.jpg)
- [14–15 saniye: F336–F359](assets/sequence-14.jpg)

## Paket kapsamı

Tüm 360 karenin 960×540 WebP önizlemesi; orijinal 15 inceleme panosu; 10 seçili tam boy JPEG; 8 detaylık karşılaştırma panosu; kaynak/ölçüm/olay/kare kayıtları ve Blender yeniden çıkarma betiği dahildir. Özgün OGV, 360 tam boy JPEG'in bütünü ve .blend dosyaları bu pakette yoktur. `frame-register.csv` her satırda önizleme ve tam boy bulunurluğunu ayrı gösterir. `verification.json` özgün yerel çalışma kontrolüdür; `package-verification.json` bu paketin kontrolüdür.

## Yeniden üretim

[Commons dosya sayfasındaki](https://commons.wikimedia.org/wiki/File:Furcifer_pardalis_moving_eyes.ogv) “Original file” bağlantısından OGV'yi alın. SHA-256 `80f3d33c4d1fec3e45ac4130eb660a18803840c14187a5af5775ec41233a44da` olmalı. Blender 4.5.14 ile örnek:

```sh
blender -b --python reproduction/extract_frames.py -- /path/to/source.ogv /path/to/new-output
```

Betik farklı kaynak hash'ini veya dolu çıktı klasörünü reddeder; 360 kareyi nominal FPS ile yeniden çıkarır. Yeni çıktıların JPEG byte hashleri Blender/encoder sürümü nedeniyle değişebilir. Bu biyolojik yorumları otomatik doğrulamaz. Panoların ve ölçülerin kökeni kaynak kayıtlarında ayrı tutulur.

## Atıf ve sınır

Video: **MatthiasKabel**, *Furcifer pardalis moving eyes.ogv*, 9 Ocak 2011, [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Furcifer_pardalis_moving_eyes.ogv), seçilen lisans [CC BY-SA 3.0](https://creativecommons.org/licenses/by-sa/3.0/). Türetilen kare/pano/önizlemelerde kırpma, ölçekleme, etiketleme ve yeniden kodlama yapılmıştır; aynı lisansla paylaşılır. [Haklar ve atıf](ATTRIBUTION.md). Model/proje eserlerinin lisansını bu sayfa değiştirmez.
