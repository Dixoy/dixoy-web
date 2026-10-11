/* eslint-disable @typescript-eslint/no-require-imports */
const fs = require("node:fs");

const galleryPath = "app/portafolio/diseno/PortfolioGallery.tsx";
const cssPath = "app/portafolio/diseno/portfolio-flow.module.css";
const pagePath = "app/portafolio/diseno/page.tsx";

const gallery = fs.readFileSync(galleryPath, "utf8");
const css = fs.readFileSync(cssPath, "utf8");
const page = fs.readFileSync(pagePath, "utf8");

if (!gallery.includes("MCI Tampa Bay")) {
  throw new Error("MCI Tampa Bay project is missing");
}

const requiredOrder = [
  '{ name: "Corason"',
  '{ name: "Nitro"',
  '{ name: "Saeyut"',
  '{ name: "Terrado"',
];

let lastIndex = -1;
for (const marker of requiredOrder) {
  const index = gallery.indexOf(marker);
  if (index === -1 || index <= lastIndex) {
    throw new Error(`Portfolio order contract failed at: ${marker}`);
  }
  lastIndex = index;
}

for (const marker of [
  "styles.header",
  "styles.nav",
  "styles.hero",
  "<h1>Diseño<span>.</span></h1>",
  "styles.closing",
  "styles.footer",
]) {
  if (!page.includes(marker)) {
    throw new Error(`Preserved page region missing: ${marker}`);
  }
}

for (const removed of ["styles.statement", "styles.next"]) {
  if (page.includes(removed)) {
    throw new Error(`Removed section is still rendered: ${removed}`);
  }
}

const referencedClasses = new Set(
  [...gallery.matchAll(/styles\.([A-Za-z0-9_]+)/g)].map((match) => match[1]),
);
const declaredClasses = new Set(
  [...css.matchAll(/\.([A-Za-z_][A-Za-z0-9_-]*)/g)].map((match) => match[1]),
);
const missingClasses = [...referencedClasses].filter(
  (className) => !declaredClasses.has(className),
);
if (missingClasses.length) {
  throw new Error(`CSS module classes missing: ${missingClasses.join(", ")}`);
}

for (const asset of [
  "tampa-bienvenido.webp",
  "tampa-dia-padre.webp",
  "tampa-nueva-casa-en.webp",
  "tampa-nueva-casa-es.webp",
  "tampa-nueva-ubicacion.webp",
  "tampa-portada-facebook.webp",
]) {
  const assetPath = `public/media/portfolio/design/${asset}`;
  if (!fs.existsSync(assetPath)) {
    throw new Error(`Portfolio asset missing: ${assetPath}`);
  }
}

console.log(
  `Validated ${referencedClasses.size} CSS module references, page regions, project order, and portfolio assets.`,
);
