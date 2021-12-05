---
title:  SpotifyD ve Spotify TUI ile Spotify Clientinden Kurtulun!
description:  Spotify Client'inin hem çok kaynak harcamasından hem de kapalı kaynak olmasından bıktınız mı? Birde bunu deneyin!
image:  https://miro.medium.com/max/1400/1*eSMLC7QAYGpBVTVrEdU9uA.png
date:  2021-12-04
tags:
    - gnu/linux
    - spotify
    - spotifyd
    - spotify-tui
    - spt
    - macOS
banner: https://repository-images.githubusercontent.com/202787876/9c461080-e9e9-11e9-9cf8-84e405f5f905
---

Sizde benim gibi Spotify'ı sık kullananlardansanız ve orijinal Spotify Client'i bıkkınlık getirdi ise bir de bunu deneyin! Özellikle Spotify'ın Electron.js kullanması sebebi ile boyutu yüksek ve kaynak kullanımı yüksek bir seviyede.

<blog-info>
Bu rehber GNU/Linux dağıtımları ve macOS için hazırlanmıştır.
</blog-info>

# Ne yapabiliriz?
İki çözümümüz var
- [Spotify QT veya](https://github.com/kraxarn/spotify-qt)
- [Spotify TUI kullanmamız gerek](https://github.com/Rigellute/spotify-tui)

Bugün ise Spotify TUI kullanacağız!

# Yeni uygulama oluşturmak

İlk yapmamız gereken Spotify Developer Dashboard üzerinden yeni uygulama oluşturmak, bunu yapmak için [Spotify Developer Dashboard](https://developer.spotify.com/dashboard/) adresine girip yeni uygulama oluşturuyoruz.
![vgy.me](https://i.vgy.me/kabKza.png)
Yeni uygulama oluşturduktan sonra uygulamamız burada görünecek
![vgy.me](https://i.vgy.me/I8GyMJ.png) 
Ardından **Edit Settings** tuşu ile
![vgy.me](https://i.vgy.me/CwDPkT.png)
**Redirect URI** kısmına **http://localhost:8888/callback** URLsini ekledikten sonra aşağıdan kaydediyoruz
Gerekli yerleri doldurduktan sonra burada bize lazım olanlar ise
- Client ID ve
- Client Secret bunları saklayacağız bunlar bize daha sonra lazım.

# SpotifyD

Peki nedir bu SpotifyD? SpotifyD, Spotify TUI'nin çalışması için gerekli olan müzik oynatma için bir daemon yani servistir. Bu olmadan Spotify TUI kullanılabilir ancak Spotify Client gerekir.

### SpotifyD'u kurmak
[SpotifyD](https://github.com/Spotifyd/spotifyd) belirli dağıtımların reposunda bulunmaktadır.

- Arch tabanlı dağıtımlarda `pacman -S spotifyd`
- Ubuntu veya Debian tabanlı dağıtımlarda: [SpotifyD'u derlemek](https://github.com/Spotifyd/spotifyd/wiki/Cross-Compiling-on-Ubuntu)
**NOT:** MacOS kullananlar için SpotifyD ayrıca homebrew'de mevcut.

Sıradaki aşama ise SpotifyD'u konfigure etmek.

### SpotifyD'u konfigure etmek

<blog-info>
Bu aşama önemli ilk önce nasıl kullanıcı adınızı alacaksanız onu göstereceğim
</blog-info>

### Spotify kullanıcı adını almak

İlk önce yapmamız gereken Spotify hesap ayarlarına girmek.

[Bu adrese girdikten sonra](https://www.spotify.com/tr/account/overview/) hemen karşımıza çıkan **Hesap genel görünümü üzerinden**

![vgy.me](https://i.vgy.me/AEL1qf.png)

Bu kullanıcı adını kopyalıyoruz bir sonraki aşamada bu bize gerekli
### Konfigurasyon dosyasını oluşturmak

`mkdir -p ~/.config/spotifyd` `nano ~/.config/spotifyd/spotifyd.conf` komutlarını sırası ile çalıştırarak konfigurasyon dosyasını oluşturuyoruz.

```ini [spotifyd.conf]

[global]
# Spotify kullanıcı adınızı buraya girin
username = "username"

# Buraya Spotify şifreniz aman ha dikkatli olun! 
password = "password"


# Cihazınızın Spotify'da nasıl görüneceği
device_name = "345dev" # Cihaz adınızı buraya girin, ne yazacağınız size kalmış
device_type = "computer"

# Şifrenizi girin ancak burası eğer bilgisayarda Spotify şifrenizi varsa otomatik doldurur
use_keyring = true

# MPRIS desteği özellikle playerctl vb. şeylerde gerekmekte
use_mpris = true


backend = "alsa" # macOS'de burasını portaudio olarak ayarlayın

# Burası siz isterseniz ayarlanır onun dışında böyle kalsın fakat macOS'de omit olarak değiştirin
# device = "alsa_audio_device" 
# control = "alsa_audio_device"  

mixer = "PCM"

volume_controller = "alsa"  # macOS için softvol

# Şarkı değişiminde yapılan oynatıcı komutu / Varsayılan
on_song_change_hook = "command_to_run_on_playback_events"

# Ses bitrate'i size kalmış Spotify Premium ile 320'ye kadar desteklenmekte
# Siz 90, 160 yada 320 yazabilirsiniz
bitrate = 160

# Burası ses depolaması içindir şuan varsayılan olarak kapalı
no_audio_cache = true

# Ses buradan ayarlanabilir
initial_volume = "100"

# Ses normalizasyonu bende ne işe yaradğını bilmiyorum
volume_normalisation = true

# Burasıda ne işe yarıyor bilmiyorum varsayılan olarak böyle
normalisation_pregain = -10
```

Konfigurasyon ayarlandıktan sonra tek yapmamız gereken SpotifyD'u başlatmak. Bundan önce yapmamız gereken ise GNU/Linux'da sistem servislerini başlatmak `systemctl --user start spotifyd` ve `systemctl --user enable spotifyd` komutlarından sonra SpotifyD çalışmaya başlayacak son aşamamız ise Spotify TUI'yi çalıştırmak

# Spotify TUI

[Spotify TUI](https://github.com/Rigellute/spotify-tui) belirli dağıtımların reposunda bulunmaktadır.

- Arch tabanlı dağıtımlarda AUR'dan kurulabilir.
- Snap ile `snap install spt` komutu ile kurulabilir
- Daha fazlası içinde [buradan hangi dağıtım repolarında var görebilirsiniz](https://github.com/Rigellute/spotify-tui#installation)

<blog-info>
İlk aşamada oluşturduğumuz uygulama bize lazım olacak
</blog-info>

Kurduktan sonra `spt` komutu ile Spotify TUI'yi çalıştırıyoruz
![vgy.me](https://i.vgy.me/zFEmg2.png)
Client ID ve Client Secret'ı girdikten sonra Port sorduğunda boş bırakıyoruz bundan sonra tarayıcı sekmesi açılacak ve oradan gerekli bilgileri alacak.

**İşte bu kadar** Spotify TUI artık çalışıyor!

![vgy.me](https://i.vgy.me/snrjlS.png)
Ta da!! Bende böyle ancak şuan sizde müzik oynatamaz çünkü cihaz belirli değildir. `d` tuşuna basarak hangi cihazda oynatacağız onu seçiyoruz. Buradan SpotifyD üzerinde ayarladığımız cihaz adını seçiyoruz.
![vgy.me](https://i.vgy.me/CmgRib.png)
Enter'a bastıktan sonra artık oynatmaya hazır!

### Spotify TUI nasıl kullanılır?

Spotify TUI tamamen tuş ile yönetilir. `?` tuşu ile hangi tuşlar kullanılabilir görebilirsiniz.
**Bazı Tuşlar:**
- `d` oynatma cihazını seçer
- `?` yardım menüsü açar
- Yön tuşları ile yönünüzü belirlersiniz
- `Enter` ile seçersiniz
- `Space` ile müzik oynar/durur
- `ESC` yönlendirme moduna girersiniz
- `+` `-` ile ses seviyesi değişir
- `n` sıradaki şarkı, `p` önceki şarkı (Eğer şarkı 5 saniyeden fazla oynadıysa iki kere basın)
- `>` ve `<` 5 saniye ileri veya geri
- `/` arama çubuğuna girer
- `Ctrl + d` sayfayı aşağı indirir
- `Ctrl + u` sayfayı yukarı indirir
- Ekstra: `v` ile ses analiz sayfasına girilebilir

# Bu kadar!
Artık sizde Spotify TUI ile daha hafif bir Spotify deneyimini tadabilirsiniz.

Eğer sorun yaşadığınız bir yer olur ise Discord üzerinden bana ulaşabilirsiniz: Mehmetali345Dev#6974
