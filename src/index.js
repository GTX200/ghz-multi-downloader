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

  const candidates = [];


  function add(url, key = "") {

    if (!isHttpUrl(url)) {
      return;
    }


    candidates.push({
      url,
      key: String(key).toLowerCase()
    });

  }


  function walk(value, key = "") {

    if (!value) return;


    if (typeof value === "string") {

      if (isHttpUrl(value)) {
        add(value, key);
      }

      return;
    }


    if (Array.isArray(value)) {

      for (const item of value) {
        walk(item, key);
      }

      return;
    }


    if (
      typeof value === "object"
    ){

      for (
        const [k, v]
        of Object.entries(value)
      ){

        if (
          typeof v === "string" &&
          isHttpUrl(v)
        ){

          add(v, k);

        } else {

          walk(v, k);

        }

      }

    }

  }


  walk(data);


  if (!candidates.length) {
    return null;
  }


  const score = item => {

    const key =
      item.key;


    let points = 0;


    if (
      format === "mp3" &&
      /audio|music|mp3|m4a|opus|aac/.test(key)
    ){
      points += 100;
    }


    if (
      format === "mp4" &&
      /video|mp4|download|stream|play|url/.test(key)
    ){
      points += 100;
    }


    if (
      format === "jpg" &&
      /image|photo|jpg|jpeg|picture|thumbnail|cover/.test(key)
    ){
      points += 100;
    }


    if (
      format === "mp3" &&
      /video|image|thumbnail|photo/.test(key)
    ){
      points -= 50;
    }


    if (
      format === "mp4" &&
      /image|thumbnail|photo/.test(key)
    ){
      points -= 50;
    }


    if (
      format === "jpg" &&
      /audio|video|mp4|m4a/.test(key)
    ){
      points -= 50;
    }


    return points;

  };


  candidates.sort(
    (a,b) =>
      score(b) - score(a)
  );


  return candidates[0]?.url || null;
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


  const mediaUrl =
    findMediaUrl(
      data,
      format
    );


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
            method:"GET",
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
