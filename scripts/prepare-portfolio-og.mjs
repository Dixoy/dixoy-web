import { copyFileSync, existsSync, readFileSync } from "node:fs";
import { join } from "node:path";

const pngSignature = "89504e470d0a1a0a";

for (const route of [["portafolio", "diseno"], ["portafolio", "filmaker"], ["jonnaSanchez"]]) {
  const outputDir = join(process.cwd(), "out", ...route);
  for (const name of ["opengraph-image", "twitter-image"]) {
    const source = join(outputDir, name);
    const destination = join(outputDir, `${name}.png`);

    if (!existsSync(source)) {
      throw new Error(`Missing generated social preview image: ${source}`);
    }

    const bytes = readFileSync(source);
    if (bytes.subarray(0, 8).toString("hex") !== pngSignature) {
      throw new Error(`Generated social preview is not a PNG: ${source}`);
    }

    copyFileSync(source, destination);
    console.log(`Prepared ${destination} (${bytes.length} bytes)`);
  }
}
