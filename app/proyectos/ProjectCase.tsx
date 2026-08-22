import Image from "next/image";
import Link from "next/link";
import styles from "./projects.module.css";

type ProjectImage = { src: string; alt: string; position?: string };

type ProjectCaseProps = {
  category: string;
  title: string;
  intro: string;
  cover: ProjectImage;
  images: ProjectImage[];
  services: { label: string; href: string }[];
  challenge: string;
  solution: string;
  result: string;
};

export default function ProjectCase({ category, title, intro, cover, images, services, challenge, solution, result }: ProjectCaseProps) {
  return (
    <main className={styles.page}>
      <header className={styles.header}>
        <Link className={styles.brand} href="/">DIXOY</Link>
        <nav className={styles.nav} aria-label="Navegación de proyectos">
          <Link href="/proyectos">Proyectos</Link>
          <Link href="/servicios">Servicios</Link>
          <Link href="/soluciones">Soluciones</Link>
          <Link className={styles.cta} href="/#contacto">Hablemos</Link>
        </nav>
      </header>

      <section className={styles.caseHero}>
        <div>
          <p className={styles.kicker}>{category}</p>
          <h1>{title}</h1>
          <p>{intro}</p>
        </div>
        <div className={styles.cover}>
          <Image alt={cover.alt} fill priority sizes="(max-width: 820px) 100vw, 50vw" src={cover.src} style={{ objectPosition: cover.position }} unoptimized />
        </div>
      </section>

      <section className={styles.caseContent}>
        <aside className={styles.summary}>
          <p className={styles.kicker}>Capacidades conectadas</p>
          <h2>Un proyecto, varias piezas trabajando juntas.</h2>
          <p>Este caso muestra cómo DIXOY puede combinar producción, implementación y acompañamiento según lo que necesita cada proyecto.</p>
          <div className={styles.chips}>
            {services.map((service) => <Link href={service.href} key={service.href}>{service.label}</Link>)}
          </div>
          <div className={styles.actions}>
            <Link className={styles.primary} href="/#contacto">Tengo un proyecto similar</Link>
            <Link className={styles.secondary} href="/proyectos">Ver más proyectos</Link>
          </div>
        </aside>

        <div className={styles.story}>
          <article><p className={styles.kicker}>La necesidad</p><h2>Qué había que resolver</h2><p>{challenge}</p></article>
          <article><p className={styles.kicker}>La solución</p><h2>Cómo lo abordamos</h2><p>{solution}</p></article>
          <article><p className={styles.kicker}>El resultado</p><h2>Una solución lista para usarse</h2><p>{result}</p></article>
        </div>
      </section>

      <section className={styles.gallery} aria-label={`Galería de ${title}`}>
        {images.map((image) => (
          <figure key={image.src}>
            <Image alt={image.alt} fill sizes="(max-width: 820px) 100vw, 50vw" src={image.src} style={{ objectPosition: image.position }} unoptimized />
          </figure>
        ))}
      </section>

      <section className={styles.band}>
        <div><h2>¿Necesitas resolver algo parecido?</h2><p>Cuéntanos el objetivo y te ayudamos a aterrizar la solución.</p></div>
        <Link href="/#contacto">Hablar con DIXOY</Link>
      </section>

      <footer className={styles.footer}><span>© 2026 DIXOY · Bogotá, Colombia</span><Link href="/proyectos">Todos los proyectos</Link></footer>
    </main>
  );
}
