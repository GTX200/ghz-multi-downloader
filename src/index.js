const CONFIG = {
  OWNER_NAME: "Nama Admin / Owner",
  WHATSAPP: "6281234567890",
  MUSIC_URL: "https://example.com/music.mp3",

  // Store the key as a Cloudflare Secret named RAPIDAPI_KEY.
  RAPIDAPI_KEY_ENV: "RAPIDAPI_KEY",

  // Supplied YouTube Media Downloader API.
  YOUTUBE_API_HOST: "youtube-media-downloader.p.rapidapi.com",
  YOUTUBE_DETAILS_PATH: "/v2/video/details",

  // Fill these only after subscribing to the corresponding APIs.
  TIKTOK_API_HOST: "all-in-one-social-media-downloader1.p.rapidapi.com",
  TIKTOK_API_PATH: "/media",
  FACEBOOK_API_HOST: "facebook-reel-and-video-downloader.p.rapidapi.com",
  FACEBOOK_API_PATH: "/app/main.php",
  INSTAGRAM_API_HOST: "all-in-one-social-media-downloader1.p.rapidapi.com",
  INSTAGRAM_API_PATH: "/media"
};

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Authorization"
};

function json(data, status = 200) {
  return new Response(JSON.stringify(data, null, 2), {
    status,
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      ...corsHeaders
    }
  });
}

function html() {
  return `<!DOCTYPE html>
<html lang="id">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<meta name="theme-color" content="#080d1c">
<title>GHZ Multi Downloader</title>
<style>
*{box-sizing:border-box}
body{
 margin:0;
 min-height:100vh;
 font-family:Arial,system-ui,sans-serif;
 color:white;
 background:
 radial-gradient(circle at top,#24315e,#0a0f20 45%,#05070d);
}
.wrap{width:min(900px,92%);margin:auto;padding:30px 0}
.hero{text-align:center;padding:25px 0}
.logo{
 width:75px;height:75px;margin:auto;
 display:grid;place-items:center;
 border-radius:23px;
 font-size:35px;font-weight:900;
 background:linear-gradient(135deg,#6c5ce7,#00c6ff);
 box-shadow:0 15px 50px #00c6ff30
}
h1{font-size:clamp(32px,8vw,55px);margin:15px 0 5px}
.sub{color:#aeb9d5}
.card{
 background:#10172bee;
 border:1px solid #293555;
 border-radius:24px;
 padding:22px;
 box-shadow:0 25px 80px #0008;
}
.row{display:flex;gap:10px;flex-wrap:wrap}
input{
 flex:1;min-width:200px;
 padding:16px;
 border-radius:14px;
 border:1px solid #35415e;
 background:#080e1c;
 color:white;
 outline:none
}
button{
 padding:15px 19px;
 border:0;border-radius:14px;
 color:white;font-weight:800;
 cursor:pointer;
 background:linear-gradient(135deg,#6c5ce7,#00aeea)
}
button:disabled{opacity:.6}
.platforms{display:flex;gap:8px;margin-top:14px;flex-wrap:wrap}.platforms button{background:#18223a;border:1px solid #33415f}.platforms button.active{background:linear-gradient(135deg,#6c5ce7,#00aeea)}
.formats{display:flex;gap:10px;margin-top:14px;flex-wrap:wrap}
.formats button{background:#18223a;border:1px solid #33415f}
.formats button.active{background:linear-gradient(135deg,#6c5ce7,#00aeea)}
#status{
 display:none;
 margin-top:15px;
 padding:14px;
 border-radius:13px;
 background:#0a1223;
 border:1px solid #263653;
 color:#bac8e4
}
.info{
 display:grid;
 grid-template-columns:repeat(auto-fit,minmax(180px,1fr));
 gap:12px;margin-top:18px
}
.info div{
 padding:16px;
 border-radius:16px;
 background:#0a1221;
 border:1px solid #202d49
}
.owner{
 margin-top:18px;
 display:flex;
 align-items:center;
 justify-content:space-between;
 gap:12px;
 flex-wrap:wrap
}
.wa{background:#20c875}
.small{font-size:12px;color:#8390aa;line-height:1.5}
footer{text-align:center;color:#66728d;font-size:12px;margin-top:25px}
@media(max-width:600px){
 .row button{width:100%}
 .owner button{width:100%}
}
</style>
</head>

<body>
<div class="wrap">

<section class="hero">
 <div class="logo">↓</div>
 <h1>GHZ Multi Downloader</h1>
 <div class="sub">YouTube • TikTok • Facebook • Instagram</div>
</section>

<section class="card">
 <div class="row">
  <input id="url" type="url" placeholder="Tempel URL video / foto...">
  <button id="process">⚡ PROSES</button>
 </div>

 <div class="platforms">
  <button class="active" data-platform="auto">🌐 AUTO</button>
  <button data-platform="youtube">▶️ YouTube</button>
  <button data-platform="tiktok">🎵 TikTok</button>
  <button data-platform="facebook">📘 Facebook</button>
  <button data-platform="instagram">📸 Instagram</button>
 </div>

 <div class="formats">
  <button class="active" data-format="mp4">🎬 MP4</button>
  <button data-format="mp3">🎵 AUDIO</button>
  <button data-format="jpg">🖼️ JPG</button>
 </div>

 <div id="status"></div>
 <div id="result" style="display:none">
  <img id="thumb" style="display:none;max-width:180px;border-radius:12px;margin:auto" alt="">
  <div id="title"></div>
  <button id="download" style="width:100%;margin-top:12px">⬇️ BUKA HASIL</button>
 </div>

 <div class="info">
  <div><strong>🌐 Multi Platform</strong><p class="small">URL dapat dideteksi otomatis.</p></div>
  <div><strong>🔐 API Aman</strong><p class="small">API key tidak ditulis di HTML.</p></div>
  <div><strong>📱 Responsive</strong><p class="small">Cocok untuk Android dan desktop.</p></div>
 </div>

 <div class="owner">
  <div><strong>${CONFIG.OWNER_NAME}</strong><div class="small">Admin / Owner</div></div>
  <button class="wa" onclick="openWA()">💬 WhatsApp Admin</button>
 </div>

 <p class="small">Gunakan hanya untuk konten yang Anda miliki atau memang diizinkan untuk diunduh.</p>
</section>

<footer>
© ${new Date().getFullYear()} GHZ Multi Downloader
</footer>

</div>

<audio id="music" loop></audio>

<script>
let selectedFormat = "mp4";
let selectedPlatform = "auto";
let lastUrl = "";

document.querySelectorAll("[data-platform]").forEach(btn => {
  btn.onclick = () => {
    document.querySelectorAll("[data-platform]").forEach(x => x.classList.remove("active"));
    btn.classList.add("active");
    selectedPlatform = btn.dataset.platform;
  };
});

const music = document.getElementById("music");

document.addEventListener("click", () => {
  if (${JSON.stringify(CONFIG.MUSIC_URL)}.includes("example.com")) return;

  if (!music.src) {
    music.src = ${JSON.stringify(CONFIG.MUSIC_URL)};
    music.volume = .3;
  }

  music.play().catch(() => {});
}, {once:true});

document.querySelectorAll("[data-format]").forEach(btn => {
  btn.onclick = () => {
    document.querySelectorAll("[data-format]")
      .forEach(x => x.classList.remove("active"));

    btn.classList.add("active");
    selectedFormat = btn.dataset.format;
  };
});

function showStatus(text) {
  const box = document.getElementById("status");
  box.style.display = "block";
  box.textContent = text;
}

function openWA() {
  const number = ${JSON.stringify(CONFIG.WHATSAPP)};
  window.open("https://wa.me/" + number, "_blank");
}

document.getElementById("process").onclick = async () => {

  const input = document.getElementById("url");
  const button = document.getElementById("process");
  const url = input.value.trim();

  if (!url) {
    showStatus("❌ Masukkan URL terlebih dahulu.");
    return;
  }

  try {
    new URL(url);
  } catch {
    showStatus("❌ URL tidak valid.");
    return;
  }

  button.disabled = true;
  button.textContent = "⏳ MEMPROSES...";
  showStatus("⏳ Menghubungi API...");

  try {

    const response = await fetch(
      "/api/download?url=" +
      encodeURIComponent(url) +
      "&format=" +
      encodeURIComponent(selectedFormat) +
      "&platform=" +
      encodeURIComponent(selectedPlatform)
    );

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.error || "API error");
    }

    if (!data.url) {
      throw new Error("API tidak mengembalikan URL file.");
    }

    lastUrl = data.url;
    document.getElementById("title").innerHTML =
      "<strong>" + (data.title || "Media siap") + "</strong>" +
      "<div class='small'>Platform: " + (data.platform || selectedPlatform) +
      " • Format: " + (data.format || selectedFormat) + "</div>";

    if (data.thumbnail) {
      const im = document.getElementById("thumb");
      im.src = data.thumbnail;
      im.style.display = "block";
    }

    document.getElementById("result").style.display = "block";
    document.getElementById("download").onclick = () => window.open(lastUrl, "_blank");
    showStatus("✅ Media siap. Tekan BUKA HASIL.");

  } catch (error) {

    console.error(error);
    showStatus("❌ " + error.message);

  } finally {

    button.disabled = false;
    button.textContent = "⚡ PROSES";

  }
};
</script>

</body>
</html>`;
}


function detectPlatform(rawUrl) {
  try {
    const host = new URL(rawUrl).hostname.toLowerCase().replace(/^www\./, "");
    if (host === "youtube.com" || host === "youtu.be" || host.endsWith(".youtube.com")) return "youtube";
    if (host === "tiktok.com" || host.endsWith(".tiktok.com")) return "tiktok";
    if (host === "facebook.com" || host === "fb.watch" || host.endsWith(".facebook.com")) return "facebook";
    if (host === "instagram.com" || host.endsWith(".instagram.com")) return "instagram";
    return "unknown";
  } catch { return "unknown"; }
}

function youtubeVideoId(rawUrl) {
  try {
    const u = new URL(rawUrl);
    if (u.hostname.includes("youtu.be")) return u.pathname.slice(1).split("/")[0];
    return u.searchParams.get("v");
  } catch { return null; }
}

function findMediaUrl(data, format) {
  const found = [];
  function walk(v) {
    if (!v) return;
    if (typeof v === "string") {
      if (/^https?:\/\//i.test(v)) found.push(v);
      return;
    }
    if (Array.isArray(v)) return v.forEach(walk);
    if (typeof v === "object") Object.entries(v).forEach(([k,x]) => {
      if (typeof x === "string" && /^https?:\/\//i.test(x)) {
        const key = k.toLowerCase();
        if ((format === "mp3" && /audio|music|mp3|m4a|opus/.test(key)) ||
            (format === "mp4" && /video|mp4|download|stream/.test(key)) ||
            (format === "jpg" && /image|photo|thumbnail|jpg|jpeg/.test(key))) found.unshift(x);
        else found.push(x);
      } else walk(x);
    });
  }
  walk(data);
  return found[0] || null;
}

async function rapidGet(url, env, host) {
  const key = env[CONFIG.RAPIDAPI_KEY_ENV];
  if (!key) throw new Error("RAPIDAPI_KEY belum dibuat di Cloudflare Secrets.");
  return fetch(url, {
    headers: {
      "x-rapidapi-host": host,
      "x-rapidapi-key": key,
      "Accept": "application/json"
    }
  });
}

async function youtubeRequest(sourceUrl, format, env) {
  const videoId = youtubeVideoId(sourceUrl);
  if (!videoId) throw new Error("Video ID YouTube tidak ditemukan.");

  const u = new URL("https://" + CONFIG.YOUTUBE_API_HOST + CONFIG.YOUTUBE_DETAILS_PATH);
  u.searchParams.set("videoId", videoId);
  u.searchParams.set("urlAccess", "normal");
  u.searchParams.set("videos", "true");
  u.searchParams.set("audios", "true");

  const r = await rapidGet(u.toString(), env, CONFIG.YOUTUBE_API_HOST);
  const data = await r.json();
  if (!r.ok) throw new Error(data.message || data.error || "YouTube API gagal.");

  const url = findMediaUrl(data, format);
  if (!url) throw new Error("URL media tidak ditemukan pada respons YouTube API.");

  return {
    success: true,
    platform: "youtube",
    format,
    url,
    title: data.title || data.videoDetails?.title || "YouTube Media",
    thumbnail: data.thumbnail?.url || null
  };
}


async function facebookRequest(sourceUrl, format, env) {
  const u = new URL("https://" + CONFIG.FACEBOOK_API_HOST + CONFIG.FACEBOOK_API_PATH);
  u.searchParams.set("url", sourceUrl);

  const r = await rapidGet(u.toString(), env, CONFIG.FACEBOOK_API_HOST);
  const data = await r.json().catch(() => ({}));
  if (!r.ok) throw new Error(data.message || data.error || "Facebook API gagal.");

  const url = findMediaUrl(data, format);
  if (!url) throw new Error("URL media Facebook tidak ditemukan pada respons API.");

  return {
    success: true,
    platform: "facebook",
    format,
    url,
    title: data.title || data.name || data.result?.title || "Facebook Media",
    thumbnail: data.thumbnail || data.thumbnailUrl || data.image || null
  };
}

async function socialRequest(sourceUrl, platform, format, env) {
  const host = platform === "tiktok"
    ? CONFIG.TIKTOK_API_HOST
    : CONFIG.INSTAGRAM_API_HOST;
  const path = platform === "tiktok"
    ? CONFIG.TIKTOK_API_PATH
    : CONFIG.INSTAGRAM_API_PATH;

  const u = new URL("https://" + host + path);
  u.searchParams.set("url", sourceUrl);

  const r = await rapidGet(u.toString(), env, host);
  const data = await r.json().catch(() => ({}));
  if (!r.ok) throw new Error(data.message || data.error || platform.toUpperCase() + " API gagal.");

  const url = findMediaUrl(data, format);
  if (!url) throw new Error("URL media " + platform.toUpperCase() + " tidak ditemukan pada respons API.");

  return {
    success: true,
    platform,
    format,
    url,
    title: data.title || data.name || data.caption || data.result?.title || platform.toUpperCase() + " Media",
    thumbnail: data.thumbnail || data.thumbnailUrl || data.image || null
  };
}

export default {
  async fetch(request, env) {

    if (request.method === "OPTIONS") {
      return new Response(null, {
        headers: corsHeaders
      });
    }

    const requestUrl = new URL(request.url);

    /*
     * WEBSITE
     */
    if (requestUrl.pathname === "/" ||
        requestUrl.pathname === "/index.html") {

      return new Response(html(), {
        headers: {
          "Content-Type": "text/html; charset=UTF-8",
          "Cache-Control": "no-cache"
        }
      });
    }

    /*
     * MULTI-PLATFORM API GATEWAY
     */
    if (requestUrl.pathname === "/api/download") {
      const sourceUrl = requestUrl.searchParams.get("url");
      const format = requestUrl.searchParams.get("format") || "mp4";
      let platform = requestUrl.searchParams.get("platform") || "auto";

      if (!sourceUrl) return json({error:"Parameter url wajib diisi."},400);
      if (!["mp4","mp3","jpg"].includes(format))
        return json({error:"Format harus mp4, mp3, atau jpg."},400);

      if (platform === "auto") platform = detectPlatform(sourceUrl);
      if (!["youtube","tiktok","facebook","instagram"].includes(platform))
        return json({error:"Platform tidak didukung."},400);

      try {
        if (platform === "youtube") {
          return json(await youtubeRequest(sourceUrl, format, env));
        }

        if (platform === "facebook") {
          return json(await facebookRequest(sourceUrl, format, env));
        }

        if (platform === "instagram" || platform === "tiktok") {
          return json(await socialRequest(sourceUrl, platform, format, env));
        }

        return json({error:"Platform tidak didukung."},400);

      } catch (error) {
        return json({error:error.message || "Gagal memproses media."},502);
      }
    }

    return json({
      error: "Not Found"
    }, 404);
  }
};