"use client";

import { useCallback, useEffect, useRef, useState, type CSSProperties } from "react";
import type { Film } from "./catalog";
import { layoutFilms } from "./masonry";
import styles from "./film.module.css";

function OpenVideoIcon() {
  return (
    <svg aria-hidden="true" focusable="false" viewBox="0 0 24 24" fill="none">
      <path
        d="M6.5 17.5 17.5 6.5M10 6.5h7.5V14"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="5.5" cy="19.5" r="1.4" fill="#ed6b1d" />
    </svg>
  );
}

function Preview({ film, index, total, style, playing, onOpen }: { film: Film; index: number; total: number; style?: CSSProperties; playing: boolean; onOpen: () => void }) {
  const button = useRef<HTMLButtonElement>(null);
  const video = useRef<HTMLVideoElement>(null);
  const [visible, setVisible] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const [unavailable, setUnavailable] = useState(false);

  useEffect(() => {
    const element = button.current;
    if (!element) return;
    const observer = new IntersectionObserver(([entry]) => {
      const onScreen = entry.isIntersecting && entry.intersectionRatio >= 0.1;
      setVisible(onScreen);
      if (onScreen) setLoaded(true);
    }, { threshold: [0, 0.1] });
    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const element = video.current;
    if (!element) return;
    let cancelled = false;
    if (playing && visible && loaded) {
      element.muted = true;
      void element.play().catch(() => {
        if (!cancelled) setUnavailable(true);
      });
    } else element.pause();
    return () => { cancelled = true; element.pause(); };
  }, [playing, visible, loaded]);

  return (
    <article className={styles.card} style={style}>
      <button ref={button} type="button" className={styles.cardButton} onClick={onOpen} aria-label={`Abrir video ${index + 1} de ${total} con sonido`}>
        <span className={styles.media} style={{ aspectRatio: `${film.width} / ${film.height}` }}>
          <video
            ref={video}
            src={loaded ? film.previewSrc ?? film.src : undefined}
            poster={film.poster}
            muted loop playsInline preload="none" aria-hidden="true" tabIndex={-1}
            onLoadedMetadata={event => {
              const element = event.currentTarget;
              if (Number.isFinite(element.duration) && element.duration > 1) element.currentTime = Math.random() * Math.min(12, element.duration * 0.6);
            }}
            onError={() => setUnavailable(true)}
            onPlaying={() => setUnavailable(false)}
          />
          <span className={styles.playIcon} aria-hidden="true"><OpenVideoIcon /></span>
          <span className={styles.cardHint}>{unavailable ? "Abrir video completo" : "Ver con sonido"}</span>
        </span>
      </button>
    </article>
  );
}

function FilmPlayer({ film }: { film: Film }) {
  const video = useRef<HTMLVideoElement>(null);
  const [failed, setFailed] = useState(false);
  useEffect(() => {
    const element = video.current;
    // Native controls remain available when a browser requires a second gesture.
    if (element) void element.play().catch(() => {});
    return () => { element?.pause(); };
  }, []);
  return (
    <div className={styles.player}>
      <video ref={video} src={film.src} poster={film.poster} controls playsInline preload="metadata" aria-label="Reproductor de video" onError={() => setFailed(true)} />
      {failed && <p className={styles.error} role="status">No pudimos reproducir este video. <a href={film.src} target="_blank" rel="noopener noreferrer">Abrir archivo original ↗</a></p>}
    </div>
  );
}

function Viewer({ films, index, onChange, onClose }: { films: Film[]; index: number; onChange: (index: number) => void; onClose: () => void }) {
  const dialog = useRef<HTMLDialogElement>(null);
  const film = films[index];
  useEffect(() => {
    const element = dialog.current;
    const previousFocus = document.activeElement as HTMLElement | null;
    const previousOverflow = document.body.style.overflow;
    element?.showModal();
    document.body.style.overflow = "hidden";
    return () => {
      element?.close();
      document.body.style.overflow = previousOverflow;
      previousFocus?.focus({ preventScroll: true });
    };
  }, []);
  return (
    <dialog ref={dialog} className={styles.dialog} aria-label={`Video ${index + 1} de ${films.length}`} onCancel={event => { event.preventDefault(); onClose(); }} onClick={event => { if (event.target === event.currentTarget) onClose(); }} onKeyDown={event => {
      // Preserve arrow keys for seeking and volume on the video controls.
      if (event.target instanceof HTMLVideoElement) return;
      if (event.key === "ArrowRight") { event.preventDefault(); onChange((index + 1) % films.length); }
      if (event.key === "ArrowLeft") { event.preventDefault(); onChange((index - 1 + films.length) % films.length); }
    }}>
      <div className={styles.dialogPanel}>
        <div className={styles.dialogTop}><span>DIXOY / Filmmaker</span><button type="button" autoFocus onClick={onClose} aria-label="Cerrar video">Cerrar ×</button></div>
        <FilmPlayer key={film.id} film={film} />
        {film.description && <p className={styles.description}>{film.description}</p>}
        <div className={styles.dialogBottom}>
          <button type="button" disabled={films.length < 2} onClick={() => onChange((index - 1 + films.length) % films.length)}>← Anterior</button>
          <span aria-live="polite">{index + 1} / {films.length}</span>
          <button type="button" disabled={films.length < 2} onClick={() => onChange((index + 1) % films.length)}>Siguiente →</button>
        </div>
      </div>
    </dialog>
  );
}

export default function FilmGallery({ films }: { films: Film[] }) {
  const grid = useRef<HTMLDivElement>(null);
  const [geometry, setGeometry] = useState<{ width: number; columns: number; gap: number } | null>(null);
  const layout = geometry ? layoutFilms(films, geometry.width, geometry.columns, geometry.gap) : null;
  const [autoplay, setAutoplay] = useState(false);
  const [pageVisible, setPageVisible] = useState(true);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const close = useCallback(() => setActiveIndex(null), []);

  useEffect(() => {
    const element = grid.current;
    if (!element) return;
    const observer = new ResizeObserver(([entry]) => {
      const width = entry.contentRect.width;
      if (width <= 0) return;
      const css = getComputedStyle(element);
      const columns = Number(css.getPropertyValue("--film-columns"));
      const gap = parseFloat(css.getPropertyValue("--film-gap"));
      setGeometry(previous => previous?.width === width && previous.columns === columns && previous.gap === gap ? previous : { width, columns, gap });
    });
    observer.observe(element);
    return () => observer.disconnect();
  }, [films.length]);

  useEffect(() => {
    const motion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const connection = (navigator as Navigator & { connection?: { saveData?: boolean; addEventListener?: (name: string, listener: () => void) => void; removeEventListener?: (name: string, listener: () => void) => void } }).connection;
    const preferenceChanged = () => setAutoplay(!motion.matches && !connection?.saveData);
    const visibilityChanged = () => setPageVisible(!document.hidden);
    const frame = requestAnimationFrame(() => {
      preferenceChanged();
      visibilityChanged();
    });
    motion.addEventListener("change", preferenceChanged);
    connection?.addEventListener?.("change", preferenceChanged);
    document.addEventListener("visibilitychange", visibilityChanged);
    return () => {
      cancelAnimationFrame(frame);
      motion.removeEventListener("change", preferenceChanged);
      connection?.removeEventListener?.("change", preferenceChanged);
      document.removeEventListener("visibilitychange", visibilityChanged);
    };
  }, []);

  if (!films.length) return (
    <section className={styles.empty} aria-labelledby="coming-title">
      <div className={styles.emptyArt} aria-hidden="true"><span /><span /><span /><i>▶</i></div>
      <div className={styles.emptyCopy}>
        <span className={styles.kicker}>Próximamente / En pantalla</span>
        <h2 id="coming-title">Cada historia<br />merece su <em>momento.</em></h2>
        <p>Estamos preparando una selección de nuestras producciones. Muy pronto podrás explorarlas aquí, una por una o todas en movimiento.</p>
        <a href="/soluciones/multimedia">Conoce lo que podemos producir ↗</a>
      </div>
    </section>
  );

  return (
    <section className={styles.gallery} aria-labelledby="films-heading">
      <div className={styles.toolbar}>
        <div><h2 id="films-heading">En movimiento <span>({films.length.toString().padStart(2, "0")})</span></h2><p>Explora sin sonido. Abre una historia para escucharla.</p></div>
        <button type="button" aria-pressed={autoplay} onClick={() => setAutoplay(value => !value)}>{autoplay ? "Pausar vistas previas Ⅱ" : "Reproducir vistas previas ▷"}</button>
      </div>
      <div ref={grid} className={styles.masonry} data-positioned={Boolean(layout)} style={layout ? { height: layout.height } : undefined}>
        {films.map((film, index) => <Preview key={film.id} film={film} index={index} total={films.length} style={layout?.cards[index]} playing={autoplay && pageVisible && activeIndex === null} onOpen={() => setActiveIndex(index)} />)}
      </div>
      <noscript>Activa JavaScript para explorar la galería y abrir los videos.</noscript>
      {activeIndex !== null && <Viewer films={films} index={activeIndex} onChange={setActiveIndex} onClose={close} />}
    </section>
  );
}
