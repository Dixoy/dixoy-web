import assert from "node:assert/strict";
import { readFileSync, existsSync } from "node:fs";
import { join } from "node:path";
import test from "node:test";
import ts from "typescript";

// Use the project's TypeScript compiler without requiring a new test runner.
const source = readFileSync(new URL("../app/portafolio/filmaker/catalog.ts", import.meta.url), "utf8");
const { outputText } = ts.transpileModule(source, { compilerOptions: { module: ts.ModuleKind.ESNext, target: ts.ScriptTarget.ES2020 } });
const { parseFilms, shuffledFilms } = await import(`data:text/javascript;base64,${Buffer.from(outputText).toString("base64")}`);
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
test("shuffling preserves the full catalog without mutating the input", () => {
  const films = Object.freeze(Array.from({ length: 10 }, (_, i) => Object.freeze({ ...film, id: `video-${i}` })));
  for (let i = 0; i < 20; i++) {
    const result = shuffledFilms(films);
    assert.notEqual(result, films);
    assert.deepEqual(result.map(item => item.id).sort(), films.map(item => item.id).sort());
  }
  assert.deepEqual(shuffledFilms([]), []);
  assert.deepEqual(shuffledFilms([film]), [film]);
});
test("the committed catalog references files that exist", () => {
  const catalog = JSON.parse(readFileSync(new URL("../public/media/portfolio/filmaker/videos.json", import.meta.url), "utf8"));
  for (const item of parseFilms(catalog)) {
    for (const asset of [item.src, item.previewSrc, item.poster].filter(Boolean)) assert.ok(existsSync(join(process.cwd(), "public", asset)), `Missing asset: ${asset}`);
  }
});
