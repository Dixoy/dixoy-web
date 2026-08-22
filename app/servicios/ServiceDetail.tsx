import Link from "next/link";
import styles from "./services.module.css";

type ServiceDetailProps = {
  kicker: string;
  title: string;
  intro: string;
  solutionHref: string;
  solutionLabel: string;
  includes: string[];
  useCases: string[];
  closing: string;
};

export default function ServiceDetail({
  kicker,
  title,
  intro,
  solutionHref,
  solutionLabel,
  includes,
  useCases,
  closing,
}: ServiceDetailProps) {
  return (
    <main className={styles.page}>
      <header className={styles.header}>
        <Link className={styles.brand} href="/">DIXOY</Link>
        <nav className={styles.nav} aria-label="Navegación de servicios">
          <Link href="/servicios">Servicios</Link>
          <Link href="/soluciones">Soluciones</Link>
          <Link href="/usme">Usme</Link>
          <Link className={styles.cta} href="/#contacto">Hablemos</Link>
        </nav>
      </header>

      <section className={styles.detailHero}>
        <p className={styles.kicker}>{kicker}</p>
        <h1>{title}</h1>
        <p className={styles.lead}>{intro}</p>
        <div className={styles.actions}>
          <Link className={styles.primary} href="/#contacto">Solicitar una propuesta</Link>
          <Link className={styles.secondary} href={solutionHref}>Ver {solutionLabel}</Link>
        </div>
      </section>

      <section className={styles.detailGrid}>
        <article>
          <p className={styles.sectionLabel}>Qué podemos resolver</p>
          <h2>Un servicio que se adapta al proyecto.</h2>
          <ul className={styles.featureList}>
            {includes.map((item) => <li key={item}>{item}</li>)}
          </ul>
        </article>
        <article>
          <p className={styles.sectionLabel}>Cuándo puede servirte</p>
          <h2>Partimos de la necesidad, no de un paquete fijo.</h2>
          <ul className={styles.featureList}>
            {useCases.map((item) => <li key={item}>{item}</li>)}
          </ul>
        </article>
      </section>

      <section className={styles.contextBand}>
        <div>
          <p className={styles.sectionLabel}>La diferencia DIXOY</p>
          <h2>{closing}</h2>
          <p>
            Si el proyecto necesita combinar diseño, producción, instalación, tecnología u otra capacidad, podemos coordinarlo dentro de una misma solución.
          </p>
        </div>
        <Link href="/soluciones">Conocer todas las soluciones</Link>
      </section>

      <footer className={styles.footer}>
        <span>© 2026 DIXOY · Bogotá, Colombia</span>
        <Link href="/servicios">Todos los servicios</Link>
      </footer>
    </main>
  );
}
