# Tasarım evrimi ve korunacak kazanımlar

25 Ekim 2026. Kullanıcı geri bildirimleri, yerel analiz kayıtları ve betiklere dayalı karar geçmişi. Tam doğal görünüm onayı değildir. Ayrıntılı parametreler ve sınırlamalar [geliştirme kaydında](evidence/eye-development-log.md).

| Aşama | Sorun / kullanıcı yönlendirmesi | Yapılan değişiklik ve anlamı |
|---|---|---|
| D5 → D5.1 | Düz/geometrik desen deriye benzemiyordu | Yuvarlatılmış kenarlı, sığ bombeli pul taçları; küçük toplar benzetmesi tamamen ayrı küreler olarak uygulanmadı |
| D5.2 → D5.3 | Göz/kafa/beden aynı boyut olamaz; ani geçiş yapay | Bölgesel örnekler, yakın/uzak bakış; irili ufaklı ara dağılım. D5.3 düğme göz reddedildi |
| E1 → B1 | Göz dışa çıkıntılı ve hareketli olmalı; bütün beden görülmeli | Göz formu ve bütün gövde clay taslağı; geçici kabul, anatomik doğruluk değil |
| B2 | Kuyruk dalı deliyor; dil dışarıda; beden kısa/yüksek | Kuyruk mesafesi ve kök/taper, yaklaşık %30 uzatma; beden yaklaşık %10 uzama/%10 yükseklik azaltma; ağız kapandı. Bu yüzdeler kullanıcı tasarım düzeltmesi, bilimsel oran değil |
| v3 | Kafa çok yukarıda, karın ve ense geometrik | 10 fotoğrafta 2B konturlar/ölçüler; baş–boyun–karın hacim dağılımı düzeltildi. Perspektifli fotoğraf ortalaması tür standardı sayılmadı |
| v4 | Göz oranı/bağlantısı | Küçültme ve başa oturan bağlantı; fotoğraf referansına göre görsel ayar |
| v5 | Kökten dönen göz konisi; yanlış hareket | **Reddedildi.** Bu hareket yöntemi geri getirilmemeli |
| v6 | Açıklık yön değiştirmeli, göz içe katlanmamalı | Sabit dışbükey küresel zarf üzerinde açıklık yer değiştirir; kök bandı sabit. Yakın gözde 90 kare denemesi |
| v7–v8 | Bağlantı çıkıntısı ve deri salınımı eksik | İnce kök kenarı, pozla değişen kıvrım yayları, açıklık oranı yaklaşık .29. Bu oran tek kaynakta görüntüden türetilmiş; türün kesin sabiti değil |
| v9 | Önceden beğenilen bombeli doku kaybolmuştu | **Entegrasyon hatası bulundu:** eski B2 açısal bump taşınmış, D5 geometrisi göz animasyonuna aktarılmamıştı. Gerçek bombeli pullar hareketli yüzeye bağlandı |
| v10 | Öne bakarken açıklık baş derisine yapışıyordu | Öne bakışa bağlı dışa açıklık payı; kök ve kabul edilen diğer bakışlar korundu |
| v11 | Bedende hâlâ köşeli desen | Baş/beden/bacak/kuyrukta yuvarlak köşeli bombeli pullar. İlk fazla iri/kabarık deneme azaltıldı; beden pulları hâlâ statik |
| v12 | Siyah göz düz ve mat | Açıklık içinde sığ kavisli koyu parlak yüzey; gerçek ışık yansımaları. Eski disk yeni yüzeyi örttüğünden gizlendi; tam retina/kornea anatomisi değil |
| v13 | Hareket pulları aşırı eliptikleştiriyor | Alanı koruyan teğetsel gerilme sınırı. İlk sert sınırlandırma büyük aralıklar açtığı için reddedildi. Son yöntem de tam doku fiziği veya tüm boşlukların çözümü değil |
| v14 → v15 | Keskin/dar kenar doğal görünmüyor | İnce yuvarlatma yeterli bulunmadı; geniş sığ krater ağzına geçildi. Gerçek yanardağ boyutu değil, yumuşak profil benzetmesi |
| v16 | Krater etrafı desensiz halka oldu | İnce iç kenar dışında bombeli pullar uca taşındı. %98, izdüşümde desen bölgesi hedefi; gerçek 3B pul kaplama oranı değil |
| v17 | Kıvrımda küçükten büyüğe geçiş ani olmamalı | Gaussian bölgesel yoğunluk + smoothstep + karışık boyutlar; göz kökü/eklemler daha küçük. Beden hareket alanları henüz ölçülmüş gerilme değil, anatomik konum varsayımı |

## Doğallık için çalışma ilkeleri

1. Siluet ve bağlantı formu düzelmeden texture ile kusur gizleme. Ense çukuru malzemeyle kapanmaz; gözün başa bağlantısı geometrik olarak okunmalı.
2. Üç ölçek ayrı: bütün beden/deri kıvrımı → pul tacı → mikro yüzey. Birini çoğaltmak diğerinin yerini tutmaz.
3. Pullar düzensiz, yuvarlatılmış çokgensi olabilir; kusursuz küreler, homojen altıgenler veya uzun pirinç taneleri dizisi hedef değil.
4. Küçük pullar hareket bölgelerinden daha iri alanlara karışık ara boyutlarla geçer. Bu kullanıcı tasarım ilkesi; tüm tür için kanıtlanmış biyolojik yasa diye yazılmamalı.
5. Göz altında ve kökte katlanan bütün deri yüzeyi, üzerinde pul desenini taşır. Her kıvrımı keskin oyuk veya her pulu bağımsız sallanan nesne yapma.
6. Renk/geometri ayrılır: sabit ışıkta şekil kabul edilir, renk eklenir, sonra aynı hareket ve kadrajda tekrar karşılaştırılır. Renk kusuru örtmemeli.
7. Uzak göz, ayak uçları, kuyruk iç yüzeyi ve tüm vücut esnekliği henüz bitmedi. Kullanıcının “göz çok iyi” kabulü bunların kabulü değildir.

## Bir sonraki LLM'in tekrarlamaması gereken hatalar

- Eski .blend veya geçici bump materyalini son sürüm diye açmak; sürüm numarası kadar içerik/hash doğrulanmalı.
- Kökten menteşe gibi dönen göz; öne bakışta deri içine kaçan açıklık.
- Kalın desensiz halka, düz siyah disk, elle boyanmış beyaz yansıma.
- Önceden kabul edilen geometriyi yeni küçük düzeltmede istemeden değiştirmek.
- Tek bir güzel still renderını hareket, fotogerçekçilik veya üretime hazır web asset kabulü saymak.
- “Deri giydirildi” diyerek esnek deformasyon da tamamlandı izlenimi vermek. V17'de bu doğru değildir.

Geçmiş kararların tamamı geri alınamaz sözleşme değildir. Yeni kanıtla değişiklik gerekirse sorun, kaynak, önerilen fark ve aynı ışıkta karşılaştırma sun; kullanıcı onaylı şekli sessizce değiştirip yeni başlangıç kabul etme.
