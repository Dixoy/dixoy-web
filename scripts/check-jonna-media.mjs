// Verify each published Jonnathan media asset from GitHub Actions before launch.
// Cloudflare R2 custom domain must serve all paths, not just the first video.
import { readFileSync } from "node:fs";

const catalog = JSON.parse(readFileSync(new URL("../app/jonnaSanchez/videos.json", import.meta.url), "utf8"));
const { origin } = JSON.parse(readFileSync(new URL("../public/media/portfolio/filmaker/media-origin.json", import.meta.url), "utf8"));
const base = process.env.FILM_MEDIA_ORIGIN || origin;
if (!/^https:\/\//.test(base)) throw new Error("Media origin must be HTTPS.");
const media = catalog.flatMap(film => [
  ["full", film.src], ["preview", film.previewSrc], ["poster", film.poster],
].map(([type, path]) => ({ label: `${film.id} / ${type}`, url: new URL(path, base).href })));

async function probe(asset) {
  try {
    const response = await fetch(asset.url, {
      method: "HEAD",
      headers: { "User-Agent": "DIXOY-Portfolio-Media-Check/1.0" },
      signal: AbortSignal.timeout(20000),
      redirect: "follow",
    });
    const mime = response.headers.get("content-type") || "";
    if (!response.ok || mime.includes("text/html")) {
      return { ...asset, status: response.status, mime, ok: false };
    }
    return { ...asset, status: response.status, mime, ok: true };
  } catch (error) {
    return { ...asset, ok: false, error: String(error) };
  }
}

let failed = 0;
for (let i = 0; i < media.length; i += 5) {
  const group = await Promise.all(media.slice(i, i + 5).map(probe));
  for (const result of group) {
    console.log(`${result.ok ? "OK" : "FAIL"} ${result.label} — ${result.status ?? result.error} ${result.mime ?? ""} ${result.url}`);
    if (!result.ok) failed++;
  }
}
console.log(`Validated ${media.length} assets; failures: ${failed}`);
if (failed) process.exitCode = 1;
