import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import styles from "../solutions.module.css";

export const metadata: Metadata = {
  title: "Tu espacio | Adecuación, exhibición y montajes | DIXOY",
  description:
    "Adecuación de espacios, ambientación, exhibición, mobiliario, avisos, stands y montajes para empresas en Bogotá.",
  alternates: { canonical: "/soluciones/espacios" },
};

export default function SpacesSolutionPage() {
  return (
    <main className={styles.page}>
      <header className={styles.header}>
        <Link className={styles.logo} href="/" aria-label="DIXOY, inicio"><Image src="/logos/logo-dixoy-horizontal.svg" alt="DIXOY" width={986} height={255} unoptimized /></Link>
        <nav className={styles.nav}><Link href="/soluciones">Soluciones</Link><Link href="/usme">Usme</Link><Link className={styles.cta} href="/#contacto">Hablemos</Link></nav>
      </header>
      <section className={styles.detailHero}>
        <p className={styles.kicker}>02 · Tu espacio</p>
        <h1>Espacios que funcionan mejor y representan mejor tu empresa.</h1>
        <p>Integramos adecuación, exhibición, comunicación visual y montaje para transformar oficinas, locales, puntos de venta y espacios temporales según una necesidad real.</p>
      </section>
      <section className={styles.content}>
        <div className={styles.contentGrid}>
          <aside className={styles.aside}><p>Podemos intervenir una necesidad puntual o coordinar un proyecto completo junto con marca, tecnología e infraestructura.</p><div className={styles.actions}><Link className={styles.primary} href="/#contacto">Hablar de mi espacio</Link></div></aside>
          <div className={styles.blocks}>
            <article className={styles.block}><h2>Adecuaciones</h2><p>Mejoramos espacios comerciales y corporativos para responder mejor al uso diario.</p><ul><li>Ajustes y adecuaciones locativas</li><li>Divisiones y elementos funcionales</li><li>Integración de acabados e instalaciones</li></ul></article>
            <article className={styles.block}><h3>Exhibición y ambientación</h3><p>Diseñamos y producimos elementos que ayudan a presentar productos, orientar personas y reforzar la identidad del lugar.</p><ul><li>Mobiliario y exhibidores</li><li>Ambientación de puntos de venta</li><li>Gráfica aplicada y señalización</li></ul></article>
            <article className={styles.block}><h3>Montajes y espacios temporales</h3><p>Coordinamos estructuras y elementos para eventos, activaciones y necesidades de corta duración.</p><ul><li>Stands y backing</li><li>Estructuras y montajes</li><li>Producción e instalación en sitio</li></ul></article>
          </div>
        </div>
      </section>
      <section className={styles.band}><div><h2>El espacio también comunica cómo trabaja tu empresa.</h2><p>Diseñamos la solución pensando en uso, imagen y ejecución.</p></div><Link href="/soluciones">Ver todas las soluciones</Link></section>
      <footer className={styles.footer}><span>© 2026 DIXOY</span><Link href="/">Inicio</Link></footer>
    </main>
  );
}
