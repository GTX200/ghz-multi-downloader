GHZ Multi Downloader - SUPER FIXED

1. Jangan timpa file lama di GitHub jika ingin menyimpannya.
2. Buat folder baru: GHZ-Multi-Downloader-SUPER-FIXED
3. Masukkan index.js, package.json, wrangler.toml ke folder itu.
4. Untuk Cloudflare Worker, deploy folder ini dengan:
   npx wrangler deploy
5. Secret RAPIDAPI_KEY tetap gunakan Secret yang sudah ada.
6. Jangan memakai `wrangler secret put` sebagai perintah deploy source.

Perbaikan utama:
- Provider media tidak dibuka langsung oleh browser.
- Download melewati /api/file dan memakai Content-Disposition attachment.
- Dukungan GET/HEAD dan Range untuk proxy.
- Validasi URL/format lebih ketat.
- Nama file dibersihkan agar aman.
- Tetap mempertahankan API YouTube/TikTok/Facebook/Instagram dari source.
