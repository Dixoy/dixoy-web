import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import styles from "../solutions.module.css";

export const metadata: Metadata = {
  title: "Soluciones personalizadas para empresas | DIXOY",
  description:
    "Productos corporativos, textiles, promocionales, fabricación especial y proyectos personalizados para empresas y organizaciones.",
  alternates: { canonical: "/soluciones/personalizado" },
};

export default function CustomSolutionPage() {
  return (
    <main className={styles.page}>
      <header className={styles.header}>
        <Link className={styles.logo} href="/" aria-label="DIXOY, inicio"><Image src="/logos/logo-dixoy-horizontal.svg" alt="DIXOY" width={986} height={255} unoptimized /></Link>
        <nav className={styles.nav}><Link href="/soluciones">Soluciones</Link><Link href="/usme">Usme</Link><Link className={styles.cta} href="/#contacto">Hablemos</Link></nav>
      </header>
      <section className={styles.detailHero}>
        <p className={styles.kicker}>04 · Personalizado</p>
        <h1>Cuando lo estándar no alcanza, desarrollamos algo a tu medida.</h1>
        <p>Producimos artículos corporativos, textiles y soluciones especiales según el uso, la cantidad, la identidad y el objetivo de cada proyecto.</p>
      </section>
      <section className={styles.content}>
        <div className={styles.contentGrid}>
          <aside className={styles.aside}><p>Esta área reúne desde productos repetibles hasta desarrollos especiales que necesitan diseño, producción y coordinación.</p><div className={styles.actions}><Link className={styles.primary} href="/#contacto">Contar mi idea</Link></div></aside>
          <div className={styles.blocks}>
            <article className={styles.block}><h2>Productos corporativos</h2><p>Desarrollamos piezas que ayudan a presentar, identificar o acompañar a equipos, clientes y eventos.</p><ul><li>Textiles y dotaciones personalizadas</li><li>Promocionales y artículos de marca</li><li>Materiales para campañas y eventos</li></ul></article>
            <article className={styles.block}><h3>Producción especial</h3><p>Cuando el producto necesita medidas, materiales o acabados particulares, estructuramos la fabricación según el caso.</p><ul><li>Fabricación por requerimiento</li><li>Combinación de técnicas y proveedores</li><li>Prototipos y soluciones no estándar</li></ul></article>
            <article className={styles.block}><h3>Proyectos a medida</h3><p>También conectamos varias capacidades de DIXOY cuando un producto termina siendo parte de una solución mayor.</p><ul><li>Diseño + producción</li><li>Producto + instalación</li><li>Marca + espacio + tecnología</li></ul></article>
          </div>
        </div>
      </section>
      <section className={styles.band}><div><h2>Si puedes explicarnos la necesidad, podemos empezar a construir la solución.</h2><p>No todo tiene que existir previamente en un catálogo.</p></div><Link href="/soluciones">Ver todas las soluciones</Link></section>
      <footer className={styles.footer}><span>© 2026 DIXOY</span><Link href="/">Inicio</Link></footer>
    </main>
  );
}
