import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import styles from "../solutions.module.css";

export const metadata: Metadata = {
  title: "Tu marca | Diseño, impresión y comunicación visual | DIXOY",
  description:
    "Identidad, diseño, impresión, gran formato, señalización, material POP y comunicación visual para empresas en Bogotá.",
  alternates: { canonical: "/soluciones/marca" },
};

export default function BrandSolutionPage() {
  return (
    <main className={styles.page}>
      <header className={styles.header}>
        <Link className={styles.logo} href="/" aria-label="DIXOY, inicio"><Image src="/logos/logo-dixoy-horizontal.svg" alt="DIXOY" width={986} height={255} unoptimized /></Link>
        <nav className={styles.nav}><Link href="/soluciones">Soluciones</Link><Link href="/usme">Usme</Link><Link className={styles.cta} href="/#contacto">Hablemos</Link></nav>
      </header>
      <section className={styles.detailHero}>
        <p className={styles.kicker}>01 · Tu marca</p>
        <h1>Haz que tu empresa se vea tan bien como trabaja.</h1>
        <p>Conectamos identidad, diseño y producción para que la marca no se quede en un archivo: la llevamos a los espacios, materiales y puntos de contacto donde tus clientes realmente la ven.</p>
      </section>
      <section className={styles.content}>
        <div className={styles.contentGrid}>
          <aside className={styles.aside}><p>Esta área puede trabajar sola o conectarse con espacios, tecnología y productos personalizados dentro de un mismo proyecto.</p><div className={styles.actions}><Link className={styles.primary} href="/#contacto">Hablar de mi marca</Link></div></aside>
          <div className={styles.blocks}>
            <article className={styles.block}><h2>Identidad y diseño</h2><p>Creamos o fortalecemos la forma en que una empresa se presenta visualmente.</p><ul><li>Diseño de marca e identidad visual</li><li>Piezas corporativas y comerciales</li><li>Adaptación de identidad a diferentes medios</li></ul></article>
            <article className={styles.block}><h3>Impresión y producción visual</h3><p>Llevamos el diseño a materiales reales, desde piezas pequeñas hasta formatos de gran escala.</p><ul><li>Impresión comercial y gran formato</li><li>Vinilos, pendones y elementos gráficos</li><li>Material POP y promocional</li></ul></article>
            <article className={styles.block}><h3>Avisos y señalización</h3><p>Desarrollamos elementos para identificar, orientar y hacer visible una empresa o espacio.</p><ul><li>Avisos corporativos</li><li>Señalización interior y exterior</li><li>Gráfica para puntos de venta y oficinas</li></ul></article>
          </div>
        </div>
      </section>
      <section className={styles.band}><div><h2>Una marca no termina en el logo.</h2><p>La hacemos coherente desde la idea hasta su aplicación física.</p></div><Link href="/soluciones">Ver todas las soluciones</Link></section>
      <footer className={styles.footer}><span>© 2026 DIXOY</span><Link href="/">Inicio</Link></footer>
    </main>
  );
}
