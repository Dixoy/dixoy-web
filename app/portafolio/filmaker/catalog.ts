export type Film = {
  id: string;
  title: string;
  category: string;
  src: string;
  previewSrc?: string;
  poster?: string;
  width: number;
  height: number;
  description?: string;
};

// Fail the build for a malformed catalog instead of publishing broken cards.
export function parseFilms(input: unknown): Film[] {
  if (!Array.isArray(input)) throw new Error("Filmmaker: videos.json debe contener una lista.");
  const ids = new Set<string>();
  return input.map((value, index) => {
    const fail = (message: string): never => { throw new Error(`Filmmaker, video ${index + 1}: ${message}`); };
    if (!value || typeof value !== "object" || Array.isArray(value)) fail("entrada inválida.");
    const item = value as Record<string, unknown>;
    const required = (key: string): string => {
      const text = item[key];
      if (typeof text !== "string" || !text.trim()) return fail(`falta ${key}.`);
      return text.trim();
    };
    const asset = (key: string, optional = false): string | undefined => {
      if (optional && item[key] === undefined) return undefined;
      const path = required(key);
      if (!/^\/media\/portfolio\/filmaker\/[a-zA-Z0-9/_-]+\.(mp4|webm|webp|jpg|jpeg|png)$/i.test(path)) {
        return fail(`${key} debe apuntar a un archivo en /media/portfolio/filmaker/, sin espacios ni tildes.`);
      }
      if (key !== "poster" && !/\.(mp4|webm)$/i.test(path)) return fail(`${key} debe ser MP4 o WebM.`);
      if (key === "poster" && !/\.(webp|jpe?g|png)$/i.test(path)) return fail("poster debe ser una imagen.");
      return path;
    };
    const id = required("id");
    if (!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(id) || ids.has(id)) fail("id inválido o repetido.");
    ids.add(id);
    for (const key of ["width", "height"]) {
      if (typeof item[key] !== "number" || !Number.isInteger(item[key]) || (item[key] as number) <= 0) fail(`${key} debe ser un entero positivo.`);
    }
    if (item.description !== undefined && typeof item.description !== "string") fail("description debe ser texto.");
    return {
      id,
      title: required("title"),
      category: required("category"),
      src: asset("src")!,
      previewSrc: asset("previewSrc", true),
      poster: asset("poster", true),
      width: item.width as number,
      height: item.height as number,
      description: item.description as string | undefined,
    };
  });
}

export function shuffledFilms(films: readonly Film[]): Film[] {
  const shuffled = [...films];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

// A public R2 custom domain can serve the same catalog paths without putting
// the MP4 binaries in Git or the Cloudflare Pages deployment.
export function resolveFilmAssets(films: readonly Film[], mediaOrigin?: string): Film[] {
  if (!mediaOrigin) return [...films];
  let origin: URL;
  try { origin = new URL(mediaOrigin); }
  catch { throw new Error("FILM_MEDIA_ORIGIN debe ser un dominio público HTTPS válido."); }
  if (origin.protocol !== "https:" || origin.username || origin.password || origin.search || origin.hash || origin.pathname !== "/") {
    throw new Error("FILM_MEDIA_ORIGIN debe contener solo el dominio HTTPS, sin rutas, credenciales ni parámetros.");
  }
  const resolve = (path?: string) => path ? `${origin.origin}${path}` : undefined;
  return films.map(film => ({ ...film, src: resolve(film.src)!, previewSrc: resolve(film.previewSrc), poster: resolve(film.poster) }));
}
