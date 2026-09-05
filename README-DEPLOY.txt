GHZ Multi Downloader V5

YouTube AUDIO:
- Menggunakan provider youtube-mp3-audio-video-downloader.p.rapidapi.com
- Endpoint /download-mp3/{videoId}?quality=high
- Worker memanggil RapidAPI dari server sehingga RAPIDAPI_KEY tidak bocor ke browser.
- MP3 benar-benar dikonversi oleh provider, bukan sekadar mengganti ekstensi.

YouTube MP4:
- Tetap memakai provider YouTube Media Downloader dari V4.
- Alasan: dokumentasi API baru yang diberikan mendokumentasikan /download-mp3 dan /download-m4a, tetapi tidak mendokumentasikan endpoint download MP4.
- V5 tidak mengarang endpoint MP4 yang tidak terdokumentasi.

TikTok/Facebook/Instagram tetap seperti V4.

Deploy:
  npx wrangler deploy

Jangan ganti Secret RAPIDAPI_KEY jika sudah benar.

Catatan provider audio:
- MP3 quality: low/mid/high. V5 memakai high.
- Dokumentasi menyebut MP3 lebih lambat untuk video panjang; M4A lebih cepat.
