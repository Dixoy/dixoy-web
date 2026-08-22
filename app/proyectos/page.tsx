import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import styles from "./projects.module.css";

export const metadata: Metadata = {
  title: "Proyectos realizados | DIXOY",
  description: "Casos reales de diseño, producción, espacios, tecnología y soluciones personalizadas desarrolladas por DIXOY.",
  alternates: { canonical: "/proyectos" },
};

const projects = [
  { href: "/proyectos/privacidad-visual-oficinas", category: "Espacios corporativos", title: "Privacidad visual para oficinas", description: "Suministro e instalación de vinilo esmerilado para separar ambientes sin perder luminosidad.", image: "/images/portfolio/optimized/project-02.webp" },
  { href: "/proyectos/ambientacion-punto-de-venta", category: "Imagen y comunicación", title: "Ambientación de punto de venta", description: "Diseño, producción e instalación de murales para transformar un espacio comercial.", image: "/media/projects/point-of-sale/boru-cover.webp?v=2" },
  { href: "/proyectos/textil-corporativo", category: "Productos personalizados", title: "Textil corporativo a la medida", description: "Diseño y personalización de uniformes, prendas y piezas textiles para equipos, eventos y marcas.", image: "/media/projects/corporate-textile/team-uniforms.webp" },
  { href: "/proyectos/mantenimiento-equipos", category: "Tecnología y soporte", title: "Mantenimiento de equipos", description: "Diagnóstico y servicio técnico para conservar la estabilidad y el desempeño de la operación.", image: "/images/portfolio/optimized/project-09.webp" },
  { href: "/proyectos/integracion-equipo-audiovisual", category: "Tecnología especializada", title: "Integración de equipo audiovisual", description: "Preparación y puesta a punto de tecnología especializada para registro y operación en campo.", image: "/images/portfolio/optimized/project-10.webp" },
  { href: "/proyectos/credenciales-eventos", category: "Producción corporativa", title: "Credenciales para eventos", description: "Diseño y producción de identificaciones para apoyar el acceso y la organización de eventos.", image: "/images/portfolio/optimized/project-13.webp" },
  { href: "/proyectos/aviso-comercial-gran-formato", category: "Gran formato", title: "Aviso comercial de alto impacto", description: "Producción e instalación de comunicación exterior para ganar visibilidad en el punto de venta.", image: "/images/portfolio/optimized/project-15.webp" },
];

export default function ProjectsPage() {
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
      <section className={styles.hero}>
        <p className={styles.kicker}>Proyectos DIXOY</p>
        <h1>Lo que hacemos se entiende mejor cuando se ve terminado.</h1>
        <p className={styles.lead}>Estos casos muestran cómo conectamos diseño, producción, espacios y tecnología para resolver necesidades reales de empresas y organizaciones.</p>
      </section>
      <section className={styles.grid}>
        {projects.map((project) => (
          <Link className={styles.card} href={project.href} key={project.href}>
            <div className={styles.cardMedia}><Image alt={project.title} fill sizes="(max-width: 820px) 100vw, 50vw" src={project.image} unoptimized /></div>
            <div className={styles.cardBody}><span>{project.category}</span><h2>{project.title}</h2><p>{project.description}</p></div>
          </Link>
        ))}
      </section>
      <footer className={styles.footer}><span>© 2026 DIXOY · Bogotá, Colombia</span><Link href="/">Volver al inicio</Link></footer>
    </main>
  );
}
