import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import styles from "../solutions.module.css";

export const metadata: Metadata = {
  title: "Tecnología para empresas | Soporte, seguridad y soluciones digitales | DIXOY",
  description:
    "Soporte, infraestructura, redes, seguridad, control de acceso, soluciones digitales y herramientas empresariales como DixApp.",
  alternates: { canonical: "/soluciones/tecnologia" },
};

export default function TechnologySolutionPage() {
  return (
    <main className={styles.page}>
      <header className={styles.header}>
        <Link className={styles.logo} href="/" aria-label="DIXOY, inicio"><Image src="/logos/logo-dixoy-horizontal.svg" alt="DIXOY" width={986} height={255} unoptimized /></Link>
        <nav className={styles.nav}><Link href="/soluciones">Soluciones</Link><Link href="/servicios">Servicios</Link><Link href="/usme">Usme</Link><Link className={styles.cta} href="/#contacto">Hablemos</Link></nav>
      </header>
      <section className={styles.detailHero}>
        <p className={styles.kicker}>03 · Tecnología</p>
        <h1>Tecnología que ayuda a que la operación funcione mejor.</h1>
        <p>Implementamos herramientas e infraestructura pensadas para resolver necesidades reales de la empresa: conectividad, soporte, seguridad, control y organización.</p>
      </section>
      <section className={styles.content}>
        <div className={styles.contentGrid}>
          <aside className={styles.aside}><p>No buscamos llenar la empresa de tecnología. Elegimos e implementamos lo que realmente aporta a su operación.</p><div className={styles.actions}><Link className={styles.primary} href="/#contacto">Hablar de tecnología</Link></div></aside>
          <div className={styles.blocks}>
            <article className={styles.block}><h2>Soporte e infraestructura</h2><p>Ayudamos a mantener equipos y conectividad funcionando de forma más estable.</p><ul><li>Soporte y mantenimiento de equipos</li><li>Redes e infraestructura básica</li><li>Configuración e implementación tecnológica</li></ul></article>
            <article className={styles.block}><h3>Seguridad y control</h3><p>Implementamos soluciones para proteger espacios y administrar accesos.</p><ul><li><Link href="/servicios/control-de-acceso">Control de acceso</Link></li><li>Cámaras y seguridad</li><li>Integración de dispositivos y sistemas</li></ul></article>
            <article className={styles.block}><h3>Soluciones digitales</h3><p>Conectamos herramientas que ayudan a organizar procesos, información y atención al cliente.</p><ul><li><Link href="/servicios/soluciones-digitales">Desarrollo y presencia web</Link></li><li>Automatización y herramientas digitales</li><li>DixApp y soluciones empresariales propias</li></ul></article>
          </div>
        </div>
      </section>
      <section className={styles.band}><div><h2>La tecnología debe resolver, no complicar.</h2><p>Partimos del proceso y luego elegimos la herramienta.</p></div><Link href="/servicios">Explorar servicios de tecnología</Link></section>
      <footer className={styles.footer}><span>© 2026 DIXOY</span><Link href="/">Inicio</Link></footer>
    </main>
  );
}
