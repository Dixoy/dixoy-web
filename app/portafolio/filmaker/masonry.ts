import type { Film } from "./catalog";

// Place each successive film at the earliest available visual position.
// Known aspect ratios reserve the complete gallery height before media loads.
export function layoutFilms(films: readonly Film[], width: number, columns: number, gap: number) {
  const cardWidth = (width - gap * (columns - 1)) / columns;
  const bottoms = Array<number>(columns).fill(0);
  const cards = films.map(film => {
    const column = bottoms.indexOf(Math.min(...bottoms));
    const top = bottoms[column];
    const height = cardWidth * film.height / film.width;
    bottoms[column] = top + height + gap;
    return { left: column * (cardWidth + gap), top, width: cardWidth, height };
  });
  return { cards, height: films.length ? Math.ceil(Math.max(...bottoms) - gap) : 0 };
}
