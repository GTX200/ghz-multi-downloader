# GHZ Multi Downloader — Ready to Upload

Platform:
- YouTube
- TikTok
- Facebook
- Instagram

Format:
- MP4
- MP3 / AUDIO
- JPG

## Upload to GitHub

Upload the contents of this folder to a new GitHub repository.

Then connect the repository to Cloudflare Workers & Pages.

## Cloudflare Secret

Create this secret:

`RAPIDAPI_KEY`

Do not put the API key into `src/index.js`.

## Important

The uploaded source originally had placeholders for TikTok/Facebook/Instagram. This package fills Facebook with the Facebook Reel and Video Downloader endpoint supplied earlier, and uses the unified social-media provider for TikTok and Instagram.

Provider response schemas can change, so media-field detection is intentionally generic.

Use only content you are authorized to download and comply with platform/API terms.
