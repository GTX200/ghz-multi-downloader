const CONFIG = {
  OWNER_NAME: "Ghzxyaas",
  WHATSAPP: "6288228736440",

  // Isi dengan URL file MP3 milikmu.
  // Kosongkan jika tidak ingin musik otomatis.
  MUSIC_URL: "",

  // WAJIB sama dengan nama Secret di Cloudflare.
  RAPIDAPI_KEY_ENV: "RAPIDAPI_KEY",

  // =========================
  // YOUTUBE
  // =========================
  YOUTUBE_API_HOST:
    "youtube-media-downloader.p.rapidapi.com",

  YOUTUBE_DETAILS_PATH:
    "/v2/video/details",

  // =========================
  // TIKTOK
  // =========================
  TIKTOK_API_HOST:
    "all-in-one-social-media-downloader1.p.rapidapi.com",

  TIKTOK_API_PATH:
    "/media",

  // =========================
  // FACEBOOK
  // =========================
  FACEBOOK_API_HOST:
    "facebook-reel-and-video-downloader.p.rapidapi.com",

  FACEBOOK_API_PATH:
    "/app/main.php",

  // =========================
  // INSTAGRAM
  // =========================
  INSTAGRAM_API_HOST:
    "all-in-one-social-media-downloader1.p.rapidapi.com",

  INSTAGRAM_API_PATH:
    "/media"
};


const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Authorization"
};


function json(data, status = 200) {
  return new Response(
    JSON.stringify(data, null, 2),
    {
      status,
      headers: {
        "Content-Type": "application/json; charset=utf-8",
        ...corsHeaders
      }
    }
  );
}


function escapeHtml(value) {
  return String(value ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}


/* =========================================================
   WEBSITE
========================================================= */

function html() {
  return `<!DOCTYPE html>
<html lang="id">

<head>
<meta charset="UTF-8">

<meta
  name="viewport"
  content="width=device-width,initial-scale=1"
>

<meta
  name="theme-color"
  content="#080d1c"
>

<meta
  name="description"
  content="GHZ Multi Downloader - YouTube, TikTok, Facebook dan Instagram"
>

<title>GHZ Multi Downloader</title>

<style>

*{
  box-sizing:border-box;
}

body{
  margin:0;
  min-height:100vh;
  font-family:Arial,system-ui,sans-serif;
  color:white;

  background:
    radial-gradient(
      circle at top,
      #24315e,
      #0a0f20 45%,
      #05070d
    );
}

.wrap{
  width:min(900px,92%);
  margin:auto;
  padding:30px 0;
}

.hero{
  text-align:center;
  padding:25px 0;
}

.logo{
  width:75px;
  height:75px;
  margin:auto;

  display:grid;
  place-items:center;

  border-radius:23px;

  font-size:35px;
  font-weight:900;

  background:
    linear-gradient(
      135deg,
      #6c5ce7,
      #00c6ff
    );

  box-shadow:
    0 15px 50px #00c6ff30;
}

h1{
  font-size:clamp(32px,8vw,55px);
  margin:15px 0 5px;
}

.sub{
  color:#aeb9d5;
}

.card{
  background:#10172bee;

  border:1px solid #293555;

  border-radius:24px;

  padding:22px;

  box-shadow:
    0 25px 80px #0008;
}

.row{
  display:flex;
  gap:10px;
  flex-wrap:wrap;
}

input{
  flex:1;
  min-width:200px;

  padding:16px;

  border-radius:14px;

  border:1px solid #35415e;

  background:#080e1c;

  color:white;

  outline:none;
}

input:focus{
  border-color:#6c5ce7;
}

button{
  padding:15px 19px;

  border:0;
  border-radius:14px;

  color:white;

  font-weight:800;

  cursor:pointer;

  background:
    linear-gradient(
      135deg,
      #6c5ce7,
      #00aeea
    );
}

button:disabled{
  opacity:.6;
  cursor:not-allowed;
}

.platforms,
.formats{
  display:flex;
  gap:8px;
  margin-top:14px;
  flex-wrap:wrap;
}

.platforms button,
.formats button{
  background:#18223a;
  border:1px solid #33415f;
}

.platforms button.active,
.formats button.active{
  background:
    linear-gradient(
      135deg,
      #6c5ce7,
      #00aeea
    );
}

#status{
  display:none;

  margin-top:15px;

  padding:14px;

  border-radius:13px;

  background:#0a1223;

  border:1px solid #263653;

  color:#bac8e4;

  word-break:break-word;
}

#result{
  margin-top:18px;
}

#thumb{
  display:none;

  max-width:180px;

  max-height:220px;

  object-fit:cover;

  border-radius:12px;

  margin:0 auto 15px;

  display:block;
}

#title{
  text-align:center;
  line-height:1.5;
}

.info{
  display:grid;

  grid-template-columns:
    repeat(auto-fit,minmax(180px,1fr));

  gap:12px;

  margin-top:18px;
}

.info div{
  padding:16px;

  border-radius:16px;

  background:#0a1221;

  border:1px solid #202d49;
}

.owner{
  margin-top:18px;

  display:flex;

  align-items:center;

  justify-content:space-between;

  gap:12px;

  flex-wrap:wrap;
}

.wa{
  background:#20c875;
}

.small{
  font-size:12px;
  color:#8390aa;
  line-height:1.5;
}

footer{
  text-align:center;

  color:#66728d;

  font-size:12px;

  margin-top:25px;
}

@media(max-width:600px){

  .row button{
    width:100%;
  }

  .owner button{
    width:100%;
  }

  .platforms button,
  .formats button{
    flex:1;
  }

}

</style>
</head>


<body>

<div class="wrap">

<section class="hero">

  <div class="logo">↓</div>

  <h1>GHZ Multi Downloader</h1>

  <div class="sub">
    YouTube • TikTok • Facebook • Instagram
  </div>

</section>


<section class="card">

  <div class="row">

    <input
      id="url"
      type="url"
      placeholder="Tempel URL video / foto..."
      autocomplete="off"
    >

    <button id="process">
      ⚡ PROSES
    </button>

  </div>


  <div class="platforms">

    <button
      class="active"
      data-platform="auto"
    >
      🌐 AUTO
    </button>

    <button data-platform="youtube">
      ▶️ YouTube
    </button>

    <button data-platform="tiktok">
      🎵 TikTok
    </button>

    <button data-platform="facebook">
      📘 Facebook
    </button>

    <button data-platform="instagram">
      📸 Instagram
    </button>

  </div>


  <div class="formats">

    <button
      class="active"
      data-format="mp4"
    >
      🎬 MP4
    </button>

    <button data-format="mp3">
      🎵 AUDIO
    </button>

    <button data-format="jpg">
      🖼️ JPG
    </button>

  </div>


  <div id="status"></div>


  <div
    id="result"
    style="display:none"
  >

    <img
      id="thumb"
      alt="Thumbnail"
    >

    <div id="title"></div>

    <button
      id="download"
      style="width:100%;margin-top:12px"
    >
      ⬇️ DOWNLOAD FILE
    </button>

  </div>


  <div class="info">

    <div>
      <strong>🌐 Multi Platform</strong>

      <p class="small">
        URL dapat dideteksi otomatis.
      </p>
    </div>


    <div>
      <strong>🔐 API Aman</strong>

      <p class="small">
        API key disimpan sebagai Cloudflare Secret.
      </p>
    </div>


    <div>
      <strong>📱 Responsive</strong>

      <p class="small">
        Cocok untuk Android dan desktop.
      </p>
    </div>

  </div>


  <div class="owner">

    <div>

      <strong>
        ${escapeHtml(CONFIG.OWNER_NAME)}
      </strong>

      <div class="small">
        Admin / Owner
      </div>

    </div>


    <button
      class="wa"
      onclick="openWA()"
    >
      💬 WhatsApp Admin
    </button>

  </div>


  <p class="small">
    Gunakan hanya untuk konten yang Anda miliki
    atau memang diizinkan untuk diunduh.
  </p>

</section>


<footer>
  © ${new Date().getFullYear()} GHZ Multi Downloader
</footer>

</div>


<audio
  id="music"
  loop
></audio>


<script>

let selectedFormat = "mp4";

let selectedPlatform = "auto";

let lastUrl = "";


/* PLATFORM */

document
  .querySelectorAll("[data-platform]")
  .forEach(btn => {

    btn.onclick = () => {

      document
        .querySelectorAll("[data-platform]")
        .forEach(x =>
          x.classList.remove("active")
        );

      btn.classList.add("active");

      selectedPlatform =
        btn.dataset.platform;
    };

  });


/* FORMAT */

document
  .querySelectorAll("[data-format]")
  .forEach(btn => {

    btn.onclick = () => {

      document
        .querySelectorAll("[data-format]")
        .forEach(x =>
          x.classList.remove("active")
        );

      btn.classList.add("active");

      selectedFormat =
        btn.dataset.format;
    };

  });


/* STATUS */

function showStatus(text){

  const box =
    document.getElementById("status");

  box.style.display = "block";

  box.textContent = text;
}


/* WHATSAPP */

function openWA(){

  const number =
    ${JSON.stringify(CONFIG.WHATSAPP)};

  window.open(
    "https://wa.me/" + number,
    "_blank",
    "noopener,noreferrer"
  );
}


/* MUSIC */

const music =
  document.getElementById("music");

const MUSIC_URL =
  ${JSON.stringify(CONFIG.MUSIC_URL)};


document.addEventListener(
  "click",
  () => {

    if (!MUSIC_URL) return;

    if (!music.src) {

      music.src = MUSIC_URL;

      music.volume = 0.3;
    }

    music
      .play()
      .catch(() => {});

  },
  { once:true }
);


/* PROCESS */

document
  .getElementById("process")
  .onclick = async () => {

    const input =
      document.getElementById("url");

    const button =
      document.getElementById("process");

    const result =
      document.getElementById("result");

    const url =
      input.value.trim();


    if (!url) {

      showStatus(
        "❌ Masukkan URL terlebih dahulu."
      );

      return;
    }


    let parsedUrl;

    try {

      parsedUrl = new URL(url);

    } catch {

      showStatus(
        "❌ URL tidak valid."
      );

      return;
    }


    if (
      parsedUrl.protocol !== "http:" &&
      parsedUrl.protocol !== "https:"
    ){

      showStatus(
        "❌ URL harus menggunakan HTTP atau HTTPS."
      );

      return;
    }


    button.disabled = true;

    button.textContent =
      "⏳ MEMPROSES...";


    result.style.display = "none";


    showStatus(
      "⏳ Menghubungi API..."
    );


    try {

      const response =
        await fetch(
          "/api/download?url=" +
          encodeURIComponent(url) +
          "&format=" +
          encodeURIComponent(selectedFormat) +
          "&platform=" +
          encodeURIComponent(selectedPlatform),
          {
            method:"GET",
            cache:"no-store"
          }
        );


      const data =
        await response.json()
          .catch(() => ({}));


      if (!response.ok) {

        throw new Error(
          data.error ||
          "API gagal memproses permintaan."
        );
      }


      if (!data.url) {

        throw new Error(
          "API tidak mengembalikan URL file."
        );
      }


      // URL provider tidak dibuka langsung.
      // Worker mengambil dan mengalirkan file ke browser.
      lastUrl =
        "/api/file?url=" +
        encodeURIComponent(data.url) +
        "&format=" +
        encodeURIComponent(data.format || selectedFormat) +
        "&title=" +
        encodeURIComponent(data.title || "GHZ-Media");


      const title =
        document.getElementById("title");


      title.textContent =
        data.title ||
        "Media siap";


      const meta =
        document.createElement("div");


      meta.className = "small";


      meta.textContent =
        "Platform: " +
        (data.platform ||
          selectedPlatform) +
        " • Format: " +
        (data.format ||
          selectedFormat);


      title.appendChild(meta);


      const thumbnail =
        document.getElementById("thumb");


      thumbnail.style.display =
        "none";


      if (data.thumbnail) {

        thumbnail.src =
          data.thumbnail;

        thumbnail.onload =
          () => {
            thumbnail.style.display =
              "block";
          };

      }


      result.style.display =
        "block";


      document
        .getElementById("download")
        .onclick = () => {

          if (!lastUrl) return;

          window.location.href = lastUrl;

        };


      showStatus(
        "✅ Media siap. Tekan BUKA HASIL."
      );


    } catch (error) {

      console.error(error);

      showStatus(
        "❌ " +
        (
          error.message ||
          "Terjadi kesalahan."
        )
      );

    } finally {

      button.disabled =
        false;

      button.textContent =
        "⚡ PROSES";

    }

  };

</script>

</body>
</html>`;
}


/* =========================================================
   PLATFORM DETECTION
========================================================= */

function detectPlatform(rawUrl) {

  try {

    const host =
      new URL(rawUrl)
        .hostname
        .toLowerCase()
        .replace(/^www\./, "");


    if (
      host === "youtube.com" ||
      host === "youtu.be" ||
      host.endsWith(".youtube.com")
    ){
      return "youtube";
    }


    if (
      host === "tiktok.com" ||
      host.endsWith(".tiktok.com")
    ){
      return "tiktok";
    }


    if (
      host === "facebook.com" ||
      host === "fb.watch" ||
      host.endsWith(".facebook.com")
    ){
      return "facebook";
    }


    if (
      host === "instagram.com" ||
      host.endsWith(".instagram.com")
    ){
      return "instagram";
    }


    return "unknown";

  } catch {

    return "unknown";

  }
}


/* =========================================================
   YOUTUBE VIDEO ID
========================================================= */

function youtubeVideoId(rawUrl) {

  try {

    const u =
      new URL(rawUrl);


    const host =
      u.hostname
        .toLowerCase()
        .replace(/^www\./, "");


    if (host === "youtu.be") {

      return (
        u.pathname
          .split("/")
          .filter(Boolean)[0] ||
        null
      );

    }


    if (
      host === "youtube.com" ||
      host.endsWith(".youtube.com")
    ){

      if (
        u.pathname ===
        "/watch"
      ){

        return (
          u.searchParams.get("v") ||
          null
        );

      }


      const parts =
        u.pathname
          .split("/")
          .filter(Boolean);


      if (
        parts[0] === "shorts" ||
        parts[0] === "embed" ||
        parts[0] === "live"
      ){

        return parts[1] || null;

      }

    }


    return null;

  } catch {

    return null;

  }
}


/* =========================================================
   URL VALIDATOR
========================================================= */

function isHttpUrl(value) {

  return (
    typeof value === "string" &&
    /^https?:\/\//i.test(value)
  );

}


/* =========================================================
   MEDIA URL FINDER
========================================================= */

function findMediaUrl(data, format) {
  // Prefer known API media structures. This prevents thumbnails, avatars,
  // favicons, and 48x48 icons from being selected as the download file.
  const wanted = format === "mp3" ? "audio" : format === "jpg" ? "image" : "video";
  const candidates = [];
  const isUrl = value => isHttpUrl(value);

  function extensionOf(url) {
    try {
      const m = new URL(url).pathname.toLowerCase().match(/\.([a-z0-9]{2,5})$/);
      return m ? m[1] : "";
    } catch { return ""; }
  }

  function add(url, meta = {}) {
    if (!isUrl(url)) return;
    candidates.push({
      url,
      key: String(meta.key || "").toLowerCase(),
      type: String(meta.type || "").toLowerCase(),
      ext: String(meta.ext || extensionOf(url)).toLowerCase(),
      width: Number(meta.width || 0),
      height: Number(meta.height || 0),
      bitrate: Number(meta.bitrate || meta.audioBitrate || 0),
      hasAudio: meta.hasAudio === true || meta.hasAudio === "true"
    });
  }

  function addObject(obj, key = "") {
    if (!obj || typeof obj !== "object" || Array.isArray(obj)) return;
    const meta = {
      type: obj.type || obj.mimeType || obj.mediaType || "",
      ext: obj.ext || obj.extension || "",
      width: obj.width || obj.w || 0,
      height: obj.height || obj.h || 0,
      bitrate: obj.bitrate || obj.audioBitrate || obj.averageBitrate || 0,
      hasAudio: obj.hasAudio
    };
    for (const field of ["url", "downloadUrl", "download_url", "src", "link"]) {
      if (isUrl(obj[field])) add(obj[field], { ...meta, key: key + " " + field });
    }
  }

  // YouTube Media Downloader: videos.items / audios.items.
  if (format === "mp4" && data?.videos) {
    const items = Array.isArray(data.videos) ? data.videos : Array.isArray(data.videos.items) ? data.videos.items : [];
    for (const item of items) addObject(item, "videos");
  }
  if (format === "mp3" && data?.audios) {
    const items = Array.isArray(data.audios) ? data.audios : Array.isArray(data.audios.items) ? data.audios.items : [];
    for (const item of items) addObject(item, "audios");
  }

  // Unified social API: media[] with type=video/audio/image.
  if (Array.isArray(data?.media)) {
    for (const item of data.media) {
      if (!item || typeof item !== "object") continue;
      const type = String(item.type || "").toLowerCase();
      if ((wanted === "video" && type === "video") ||
          (wanted === "audio" && type === "audio") ||
          (wanted === "image" && (type === "image" || type === "photo"))) {
        addObject(item, "media " + type);
      }
    }
  }

  // Image mode: explicitly rank real thumbnail/image fields and reject tiny icons.
  if (format === "jpg") {
    const images = [];
    function collectImage(value, key = "", depth = 0) {
      if (depth > 10 || value == null) return;
      if (typeof value === "string") {
        if (isUrl(value)) images.push({ url: value, key: key.toLowerCase(), width: 0, height: 0 });
        return;
      }
      if (Array.isArray(value)) {
        for (const item of value) collectImage(item, key, depth + 1);
        return;
      }
      if (typeof value !== "object") return;
      const width = Number(value.width || value.w || 0);
      const height = Number(value.height || value.h || 0);
      for (const field of ["url", "src", "image", "thumbnail", "downloadUrl"]) {
        if (isUrl(value[field])) images.push({ url: value[field], key: (key + " " + field).toLowerCase(), width, height });
      }
      for (const [k, v] of Object.entries(value)) {
        if (!["url", "src", "image", "thumbnail", "downloadUrl"].includes(k)) collectImage(v, key + " " + k, depth + 1);
      }
    }
    collectImage(data);
    images.sort((a, b) => {
      const score = item => {
        const marker = (item.key + " " + item.url).toLowerCase();
        let s = 0;
        if (/thumbnail|image|photo|picture|cover/.test(item.key)) s += 400;
        if (/favicon|icon|avatar|profile|logo|48x48|32x32|24x24|16x16/.test(marker)) s -= 2000;
        s += Math.min(item.width * item.height, 6000000) / 5000;
        if (/\.(jpg|jpeg|png|webp)(?:$|[?#])/.test(item.url.toLowerCase())) s += 100;
        return s;
      };
      return score(b) - score(a);
    });
    const realImage = images.find(item => !/favicon|icon|avatar|profile|logo|48x48|32x32|24x24|16x16/.test((item.key + " " + item.url).toLowerCase()));
    if (realImage) return realImage.url;
  }

  // Generic fallback for providers with a different response shape.
  function walk(value, key = "", depth = 0) {
    if (depth > 10 || value == null) return;
    if (typeof value === "string") {
      if (isUrl(value)) add(value, { key });
      return;
    }
    if (Array.isArray(value)) {
      for (const item of value) walk(item, key, depth + 1);
      return;
    }
    if (typeof value !== "object") return;
    addObject(value, key);
    for (const [k, v] of Object.entries(value)) walk(v, k, depth + 1);
  }
  walk(data);

  function score(item) {
    const marker = (item.key + " " + item.url).toLowerCase();
    let points = 0;
    if (format === "mp4") {
      if (item.type === "video") points += 700;
      if (item.hasAudio) points += 450;
      if (/videos|video|download|stream|play/.test(item.key)) points += 300;
      if (/\.mp4(?:$|[?#])/.test(item.url.toLowerCase())) points += 250;
      if (/videoplayback|googlevideo|tiktokcdn|fbcdn|cdninstagram/.test(marker)) points += 150;
      if (/image|thumbnail|photo|avatar|favicon|icon|logo/.test(marker)) points -= 2000;
    }
    if (format === "mp3") {
      if (item.type === "audio") points += 700;
      if (/audios|audio|music|mp3|m4a|opus|aac/.test(item.key)) points += 300;
      if (/\.(mp3|m4a|aac|opus)(?:$|[?#])/.test(item.url.toLowerCase())) points += 250;
      if (/image|thumbnail|photo|avatar|favicon|icon|logo|video/.test(marker)) points -= 2000;
    }
    if (format === "jpg") {
      if (item.type === "image") points += 700;
      if (/image|photo|jpg|jpeg|picture|thumbnail|cover/.test(item.key)) points += 300;
      if (/\.(jpg|jpeg|png|webp)(?:$|[?#])/.test(item.url.toLowerCase())) points += 200;
    }
    return points;
  }

  candidates.sort((a, b) => {
    const byScore = score(b) - score(a);
    if (byScore) return byScore;
    if (format === "mp4" && b.hasAudio !== a.hasAudio) return b.hasAudio ? 1 : -1;
    return ((b.width * b.height) - (a.width * a.height));
  });

  const best = candidates.find(item => {
    const marker = (item.key + " " + item.url).toLowerCase();
    if (/favicon|avatar|profile|logo|icon|48x48|32x32|24x24|16x16/.test(marker)) return false;
    if (format === "mp4" && /image|thumbnail|photo/.test(marker)) return false;
    if (format === "mp3" && /image|thumbnail|photo|video/.test(marker)) return false;
    return score(item) > 0;
  });
  return best?.url || null;
}

/* =========================================================
   API RESPONSE JSON
========================================================= */

async function readApiResponse(response) {

  const text =
    await response.text();


  let data = {};


  try {

    data =
      text
        ? JSON.parse(text)
        : {};

  } catch {

    data = {
      raw: text
    };

  }


  return data;
}


/* =========================================================
   FILE DOWNLOAD / PROXY HELPERS
========================================================= */

function safeFilename(value, format = "mp4") {
  const base = String(value || "GHZ-Media")
    .replace(/[\\/:*?"<>|]+/g, " ")
    .replace(/\s+/g, " ")
    .trim()
    .slice(0, 120) || "GHZ-Media";

  const ext =
    format === "mp3" ? "mp3" :
    format === "jpg" ? "jpg" :
    "mp4";

  return base.endsWith("." + ext)
    ? base
    : base + "." + ext;
}


/* =========================================================
   RAPIDAPI REQUEST
========================================================= */


async function rapidGet(
  url,
  env,
  host
){

  const key =
    env[CONFIG.RAPIDAPI_KEY_ENV];


  if (!key) {

    throw new Error(
      "RAPIDAPI_KEY belum tersedia di Cloudflare Secrets."
    );

  }


  const response =
    await fetch(
      url,
      {
        method:"GET",

        headers:{
          "x-rapidapi-host": host,
          "x-rapidapi-key": key,
          "Accept":
            "application/json"
        }
      }
    );


  return response;
}


/* =========================================================
   YOUTUBE
========================================================= */

async function youtubeRequest(
  sourceUrl,
  format,
  env
){

  const videoId =
    youtubeVideoId(sourceUrl);


  if (!videoId) {

    throw new Error(
      "Video ID YouTube tidak ditemukan."
    );

  }


  const u =
    new URL(
      "https://" +
      CONFIG.YOUTUBE_API_HOST +
      CONFIG.YOUTUBE_DETAILS_PATH
    );


  u.searchParams.set(
    "videoId",
    videoId
  );

  u.searchParams.set(
    "urlAccess",
    "normal"
  );

  u.searchParams.set(
    "videos",
    "true"
  );

  u.searchParams.set(
    "audios",
    "true"
  );


  const response =
    await rapidGet(
      u.toString(),
      env,
      CONFIG.YOUTUBE_API_HOST
    );


  const data =
    await readApiResponse(
      response
    );


  if (!response.ok) {

    throw new Error(
      data.message ||
      data.error ||
      "YouTube API gagal."
    );

  }


  // For YouTube JPG, use a known full-size thumbnail instead of recursively
  // selecting a tiny icon/avatar returned by the API. hqdefault is widely available.
  const mediaUrl =
    format === "jpg"
      ? `https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`
      : findMediaUrl(data, format);


  if (!mediaUrl) {

    throw new Error(
      "URL media YouTube tidak ditemukan pada respons API."
    );

  }


  return {
    success:true,
    platform:"youtube",
    format,
    url:mediaUrl,

    title:
      data.title ||
      data.videoDetails?.title ||
      "YouTube Media",

    thumbnail:
      data.thumbnail?.url ||
      data.thumbnail ||
      null
  };

}


/* =========================================================
   FACEBOOK
========================================================= */

async function facebookRequest(
  sourceUrl,
  format,
  env
){

  const u =
    new URL(
      "https://" +
      CONFIG.FACEBOOK_API_HOST +
      CONFIG.FACEBOOK_API_PATH
    );


  u.searchParams.set(
    "url",
    sourceUrl
  );


  const response =
    await rapidGet(
      u.toString(),
      env,
      CONFIG.FACEBOOK_API_HOST
    );


  const data =
    await readApiResponse(
      response
    );


  if (!response.ok) {

    throw new Error(
      data.message ||
      data.error ||
      "Facebook API gagal."
    );

  }


  const mediaUrl =
    findMediaUrl(
      data,
      format
    );


  if (!mediaUrl) {

    throw new Error(
      "URL media Facebook tidak ditemukan pada respons API."
    );

  }


  return {
    success:true,
    platform:"facebook",
    format,
    url:mediaUrl,

    title:
      data.title ||
      data.name ||
      data.result?.title ||
      "Facebook Media",

    thumbnail:
      data.thumbnail ||
      data.thumbnailUrl ||
      data.image ||
      null
  };

}


/* =========================================================
   TIKTOK / INSTAGRAM
========================================================= */

async function socialRequest(
  sourceUrl,
  platform,
  format,
  env
){

  const host =
    platform === "tiktok"
      ? CONFIG.TIKTOK_API_HOST
      : CONFIG.INSTAGRAM_API_HOST;


  const path =
    platform === "tiktok"
      ? CONFIG.TIKTOK_API_PATH
      : CONFIG.INSTAGRAM_API_PATH;


  const u =
    new URL(
      "https://" +
      host +
      path
    );


  u.searchParams.set(
    "url",
    sourceUrl
  );


  const response =
    await rapidGet(
      u.toString(),
      env,
      host
    );


  const data =
    await readApiResponse(
      response
    );


  if (!response.ok) {

    throw new Error(
      data.message ||
      data.error ||
      platform.toUpperCase() +
      " API gagal."
    );

  }


  const mediaUrl =
    findMediaUrl(
      data,
      format
    );


  if (!mediaUrl) {

    throw new Error(
      "URL media " +
      platform.toUpperCase() +
      " tidak ditemukan pada respons API."
    );

  }


  return {
    success:true,

    platform,

    format,

    url:mediaUrl,

    title:
      data.title ||
      data.name ||
      data.caption ||
      data.result?.title ||
      platform.toUpperCase() +
      " Media",

    thumbnail:
      data.thumbnail ||
      data.thumbnailUrl ||
      data.image ||
      data.result?.thumbnail ||
      null
  };

}


/* =========================================================
   RAW PROVIDER API RESPONSE
   Mode ini sengaja tidak memilih/mengubah URL media.
========================================================= */

async function rawProviderRequest(
  sourceUrl,
  platform,
  env
){

  let host;
  let apiUrl;

  if (platform === "youtube") {
    const videoId = youtubeVideoId(sourceUrl);

    if (!videoId) {
      throw new Error("Video ID YouTube tidak ditemukan.");
    }

    host = CONFIG.YOUTUBE_API_HOST;

    const u = new URL(
      "https://" +
      host +
      CONFIG.YOUTUBE_DETAILS_PATH
    );

    u.searchParams.set("videoId", videoId);
    u.searchParams.set("urlAccess", "normal");
    u.searchParams.set("videos", "true");
    u.searchParams.set("audios", "true");

    apiUrl = u.toString();
  }

  else if (platform === "facebook") {
    host = CONFIG.FACEBOOK_API_HOST;

    const u = new URL(
      "https://" +
      host +
      CONFIG.FACEBOOK_API_PATH
    );

    u.searchParams.set("url", sourceUrl);
    apiUrl = u.toString();
  }

  else if (
    platform === "tiktok" ||
    platform === "instagram"
  ) {
    host =
      platform === "tiktok"
        ? CONFIG.TIKTOK_API_HOST
        : CONFIG.INSTAGRAM_API_HOST;

    const path =
      platform === "tiktok"
        ? CONFIG.TIKTOK_API_PATH
        : CONFIG.INSTAGRAM_API_PATH;

    const u = new URL(
      "https://" +
      host +
      path
    );

    u.searchParams.set("url", sourceUrl);
    apiUrl = u.toString();
  }

  else {
    throw new Error("Platform tidak didukung.");
  }

  return rapidGet(
    apiUrl,
    env,
    host
  );
}


/* =========================================================
   CLOUDFLARE WORKER
========================================================= */

export default {

  async fetch(
    request,
    env
  ){

    /* CORS */

    if (
      request.method ===
      "OPTIONS"
    ){

      return new Response(
        null,
        {
          headers:
            corsHeaders
        }
      );

    }


    const requestUrl =
      new URL(
        request.url
      );


    /* =====================================================
       WEBSITE
    ===================================================== */

    if (
      requestUrl.pathname === "/" ||
      requestUrl.pathname === "/index.html"
    ){

      return new Response(
        html(),
        {
          headers:{
            "Content-Type":
              "text/html; charset=UTF-8",

            "Cache-Control":
              "no-cache"
          }
        }
      );

    }


    /* =====================================================
       HEALTH CHECK
    ===================================================== */

    if (
      requestUrl.pathname ===
      "/api/health"
    ){

      const key =
        env[
          CONFIG.RAPIDAPI_KEY_ENV
        ];


      return json({
        success:true,

        rapidapi_key:
          Boolean(key),

        worker:
          "GHZ Multi Downloader"
      });

    }


    /* =====================================================
       FILE PROXY / DOWNLOAD
    ===================================================== */

    if (
      requestUrl.pathname ===
      "/api/file"
    ){

      if (request.method !== "GET" && request.method !== "HEAD") {
        return json({
          success:false,
          error:"Method tidak didukung. Gunakan GET atau HEAD."
        }, 405);
      }

      const mediaUrl =
        requestUrl.searchParams.get("url");

      const format =
        requestUrl.searchParams.get("format") || "mp4";

      const title =
        requestUrl.searchParams.get("title") || "GHZ-Media";

      if (!mediaUrl || !isHttpUrl(mediaUrl)) {
        return json(
          {
            success:false,
            error:"URL media tidak valid."
          },
          400
        );
      }

      if (!["mp4","mp3","jpg"].includes(format)) {
        return json(
          {
            success:false,
            error:"Format file tidak didukung."
          },
          400
        );
      }

      try {

        const upstreamHeaders = {};
        const range = request.headers.get("Range");

        if (range) {
          upstreamHeaders["Range"] = range;
        }

        const mediaResponse =
          await fetch(mediaUrl, {
            method:request.method,
            headers:upstreamHeaders,
            redirect:"follow"
          });

        if (!mediaResponse.ok && mediaResponse.status !== 206) {
          return json(
            {
              success:false,
              error:
                "Server media mengembalikan HTTP " +
                mediaResponse.status
            },
            502
          );
        }

        const upstreamType =
          (mediaResponse.headers.get("Content-Type") || "").toLowerCase();

        // Jangan biarkan thumbnail/HTML/JSON tersimpan sebagai MP4/MP3.
        if (request.method === "GET") {
          if (format === "mp4" && /^(image\/|text\/html|application\/json)/.test(upstreamType)) {
            return json({
              success:false,
              error:"Provider mengembalikan bukan video. Silakan proses ulang URL."
            }, 502);
          }

          if (format === "mp3" && /^(image\/|video\/|text\/html|application\/json)/.test(upstreamType)) {
            return json({
              success:false,
              error:"Provider mengembalikan bukan audio. Silakan proses ulang URL."
            }, 502);
          }
        }

        const headers =
          new Headers(mediaResponse.headers);

        const filename =
          safeFilename(title, format);

        headers.set(
          "Content-Disposition",
          'attachment; filename="' +
          filename.replace(/"/g, "") +
          '"'
        );

        if (!headers.get("Content-Type")) {
          headers.set(
            "Content-Type",
            format === "mp3"
              ? "audio/mpeg"
              : format === "jpg"
                ? "image/jpeg"
                : "video/mp4"
          );
        }

        headers.set("Cache-Control", "no-store");
        headers.set("Access-Control-Allow-Origin", "*");

        // Streaming: file besar tidak dibuffer seluruhnya di Worker.
        return new Response(
          mediaResponse.body,
          {
            status:mediaResponse.status,
            statusText:mediaResponse.statusText,
            headers
          }
        );

      } catch (error) {

        console.error("File proxy error:", error);

        return json(
          {
            success:false,
            error:
              error?.message ||
              "Gagal mengambil file media."
          },
          502
        );
      }

    }


    /* =====================================================
       DOWNLOAD API
    ===================================================== */

    if (
      requestUrl.pathname ===
      "/api/download"
    ){

      const sourceUrl =
        requestUrl.searchParams
          .get("url");


      const format =
        requestUrl.searchParams
          .get("format") ||
        "mp4";


      let platform =
        requestUrl.searchParams
          .get("platform") ||
        "auto";


      /* URL */

      if (!sourceUrl) {

        return json(
          {
            error:
              "Parameter url wajib diisi."
          },
          400
        );

      }


      /* FORMAT */

      if (
        ![
          "mp4",
          "mp3",
          "jpg"
        ].includes(format)
      ){

        return json(
          {
            error:
              "Format harus mp4, mp3, atau jpg."
          },
          400
        );

      }


      /* VALIDATE URL */

      try {

        const parsed =
          new URL(sourceUrl);


        if (
          parsed.protocol !==
            "http:" &&
          parsed.protocol !==
            "https:"
        ){

          return json(
            {
              error:
                "URL harus menggunakan HTTP atau HTTPS."
            },
            400
          );

        }

      } catch {

        return json(
          {
            error:
              "URL tidak valid."
          },
          400
        );

      }


      /* AUTO DETECTION */

      if (
        platform === "auto"
      ){

        platform =
          detectPlatform(
            sourceUrl
          );

      }


      /* RAW API MODE */

      // raw=1 = kembalikan respons provider RapidAPI apa adanya.
      // Worker tidak memilih URL media dan tidak membuat respons pengganti.
      if (
        requestUrl.searchParams.get("raw") === "1"
      ){

        try {

          const providerResponse =
            await rawProviderRequest(
              sourceUrl,
              platform,
              env
            );

          const headers =
            new Headers(providerResponse.headers);

          headers.set(
            "Access-Control-Allow-Origin",
            "*"
          );

          return new Response(
            providerResponse.body,
            {
              status: providerResponse.status,
              statusText: providerResponse.statusText,
              headers
            }
          );

        } catch (error) {

          return json(
            {
              success:false,
              error:
                error?.message ||
                "Gagal mengambil respons API provider."
            },
            502
          );

        }
      }


      /* PLATFORM */

      if (
        ![
          "youtube",
          "tiktok",
          "facebook",
          "instagram"
        ].includes(platform)
      ){

        return json(
          {
            error:
              "Platform tidak didukung."
          },
          400
        );

      }


      /* EXECUTE */

      try {

        if (
          platform ===
          "youtube"
        ){

          return json(
            await youtubeRequest(
              sourceUrl,
              format,
              env
            )
          );

        }


        if (
          platform ===
          "facebook"
        ){

          return json(
            await facebookRequest(
              sourceUrl,
              format,
              env
            )
          );

        }


        if (
          platform === "tiktok" ||
          platform === "instagram"
        ){

          return json(
            await socialRequest(
              sourceUrl,
              platform,
              format,
              env
            )
          );

        }


        return json(
          {
            error:
              "Platform tidak didukung."
          },
          400
        );


      } catch (error) {

        console.error(
          "Download error:",
          error
        );


        return json(
          {
            success:false,

            error:
              error?.message ||
              "Gagal memproses media."
          },
          502
        );

      }

    }


    /* =====================================================
       NOT FOUND
    ===================================================== */

    return json(
      {
        error:
          "Not Found"
      },
      404
    );

  }

};
