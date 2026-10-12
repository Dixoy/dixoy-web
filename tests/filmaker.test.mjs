import assert from "node:assert/strict";
import { readFileSync, existsSync } from "node:fs";
import { join } from "node:path";
import test from "node:test";
import ts from "typescript";

// Use the project's TypeScript compiler without requiring a new test runner.
const source = readFileSync(new URL("../app/portafolio/filmaker/catalog.ts", import.meta.url), "utf8");
const { outputText } = ts.transpileModule(source, { compilerOptions: { module: ts.ModuleKind.ESNext, target: ts.ScriptTarget.ES2020 } });
const { parseFilms, resolveFilmAssets } = await import(`data:text/javascript;base64,${Buffer.from(outputText).toString("base64")}`);
const film = { id: "mi-proyecto", title: "Mi proyecto", category: "Campaña", src: "/media/portfolio/filmaker/mi-proyecto.mp4", width: 1080, height: 1920 };

test("an empty catalog is a valid coming-soon page", () => assert.deepEqual(parseFilms([]), []));
test("accepts MP4 with optional preview, poster and description", () => {
  const item = { ...film, previewSrc: "/media/portfolio/filmaker/previews/mi-proyecto.mp4", poster: "/media/portfolio/filmaker/mi-proyecto.webp", description: "Descripción" };
  assert.deepEqual(parseFilms([item]), [item]);
});
test("rejects duplicate IDs before they can corrupt gallery navigation", () => assert.throws(() => parseFilms([film, film]), /repetido/));
test("rejects invalid dimensions and missing required titles", () => {
  for (const invalid of [{ width: 0 }, { height: -1 }, { width: 1.5 }, { height: "1920" }, { title: " " }]) assert.throws(() => parseFilms([{ ...film, ...invalid }]));
});
test("rejects invalid catalog roots and entries", () => {
  for (const input of [null, {}, [null], [[]]]) assert.throws(() => parseFilms(input));
});
test("rejects unsafe paths and media with the wrong type", () => {
  for (const src of ["javascript:alert(1)", "//example.com/video.mp4", "/media/portfolio/filmaker/../private.mp4", "/media/portfolio/filmaker/cover.jpg"]) assert.throws(() => parseFilms([{ ...film, src }]));
  assert.throws(() => parseFilms([{ ...film, poster: film.src }]));
});
const masonrySource = readFileSync(new URL("../app/portafolio/filmaker/masonry.ts", import.meta.url), "utf8");
const masonryJS = ts.transpileModule(masonrySource, { compilerOptions: { module: ts.ModuleKind.ESNext, target: ts.ScriptTarget.ES2020 } }).outputText;
const { layoutFilms } = await import(`data:text/javascript;base64,${Buffer.from(masonryJS).toString("base64")}`);
const collection = parseFilms(JSON.parse(readFileSync(new URL("../public/media/portfolio/filmaker/videos.json", import.meta.url), "utf8")));

test("editorial priority follows the original filenames: 1.1, 1, 2 through 12", () => {
  assert.deepEqual(collection.slice(0, 13).map(item => item.title), ["1.1", ...Array.from({ length: 12 }, (_, i) => String(i + 1))]);
});
test("mixed-ratio gallery contains every card without overlap at desktop and mobile widths", () => {
  const snapshot = JSON.stringify(collection);
  for (const [width, columns, gap] of [[1380, 4, 18], [1960, 4, 18], [956, 3, 18], [716, 2, 12], [346, 2, 12], [276, 2, 12]]) {
    const { cards, height } = layoutFilms(collection, width, columns, gap);
    assert.equal(cards.length, 22);
    for (let i = 0; i < cards.length; i++) {
      const card = cards[i];
      assert.ok(card.top >= 0 && card.left >= 0);
      assert.ok(card.left + card.width <= width + 0.001);
      assert.ok(card.top + card.height <= height, "The footer must start after the last card");
      if (i > 0) assert.ok(card.top >= cards[i - 1].top, "Later pieces must not precede the selected priorities visually");
      for (const other of cards.slice(i + 1)) {
        assert.ok(card.left + card.width <= other.left + 0.001 || other.left + other.width <= card.left + 0.001 || card.top + card.height <= other.top + 0.001 || other.top + other.height <= card.top + 0.001, "Cards must not overlap");
      }
    }
    assert.deepEqual(cards.slice(0, columns).map(card => card.top), Array(columns).fill(0));
    assert.equal(JSON.stringify(collection), snapshot);
  }
});
test("masonry handles empty and single-video collections", () => {
  assert.deepEqual(layoutFilms([], 400, 2, 12), { cards: [], height: 0 });
  const { cards, height } = layoutFilms([film], 400, 2, 12);
  assert.equal(cards.length, 1);
  assert.equal(height, Math.ceil(cards[0].height));
});
test("the committed catalog resolves public media or existing local files", () => {
  const mediaConfig = JSON.parse(readFileSync(new URL("../public/media/portfolio/filmaker/media-origin.json", import.meta.url), "utf8"));
  const catalog = JSON.parse(readFileSync(new URL("../public/media/portfolio/filmaker/videos.json", import.meta.url), "utf8"));
  for (const item of resolveFilmAssets(parseFilms(catalog), process.env.FILM_MEDIA_ORIGIN ?? mediaConfig.origin)) {
    for (const asset of [item.src, item.previewSrc, item.poster].filter(Boolean)) {
      if (asset.startsWith("/")) assert.ok(existsSync(join(process.cwd(), "public", asset)), `Missing asset: ${asset}`);
    }
  }
});
test("R2 origin resolves full videos, previews and posters without mutating the catalog", () => {
  const item = { ...film, previewSrc: "/media/portfolio/filmaker/previews/mi-proyecto.mp4", poster: "/media/portfolio/filmaker/posters/mi-proyecto.webp" };
  const [resolved] = resolveFilmAssets([item], "https://media.example.com/");
  for (const key of ["src", "previewSrc", "poster"]) assert.equal(resolved[key], "https://media.example.com" + item[key]);
  assert.equal(item.src, film.src);
  assert.deepEqual(resolveFilmAssets([film]), [film]);
  assert.equal(resolveFilmAssets([film], "https://media.example.com")[0].poster, undefined);
});
test("rejects origins with insecure schemes, credentials or accidental paths", () => {
  for (const value of ["http://media.example.com", "not-a-url", "https://user:secret@media.example.com", "https://media.example.com/folder", "https://media.example.com?token=secret", "https://media.example.com/#video"]) assert.throws(() => resolveFilmAssets([film], value));
});
