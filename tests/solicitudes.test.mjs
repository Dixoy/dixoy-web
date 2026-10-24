import test from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
const read = path => readFileSync(new URL("../" + path, import.meta.url), "utf8");

test("flujo de solicitud, endpoint seguro y alternativas", () => {
  const page = read("app/solicitar/page.tsx");
  const flow = read("app/solicitar/RequestFlow.tsx");
  assert.match(page, /<RequestFlow\s*\/>/);
  assert.match(flow, /host === "dixoy.co" \|\| host === "www.dixoy.co"/);
  assert.match(flow, /https:\/\/staging\.app\.dixoy\.co\/api\/public\/solicitudes/);
  assert.match(flow, /https:\/\/app\.dixoy\.co\/api\/public\/solicitudes/);
  assert.match(flow, /sessionStorage/);
  assert.doesNotMatch(flow, /localStorage\.setItem/);
  assert.match(flow, /response\.status === 429/);
  assert.match(flow, /Continuar por WhatsApp/);
  assert.match(flow, /Enviar por correo/);
});

test("conservar enlaces al portafolio reciente", () => {
  assert.match(read("app/soluciones/multimedia/page.tsx"), /\/portafolio\/filmaker/);
  assert.match(read("app/soluciones/multimedia/page.tsx"), /href=\{requestLink\}/);
  assert.match(read("app/servicios/ServiceDetail.tsx"), /href=\{requestHref\}/);
  assert.match(read("public/sitemap.xml"), /https:\/\/dixoy\.co\/solicitar/);
  assert.match(read("public/sitemap.xml"), /https:\/\/dixoy\.co\/portafolio\/diseno/);
  assert.match(read("public/sitemap.xml"), /https:\/\/dixoy\.co\/jonnaSanchez/);
});
