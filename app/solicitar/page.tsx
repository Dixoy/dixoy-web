import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import RequestFlow from "./RequestFlow";
import styles from "./request.module.css";

export const metadata: Metadata = {
  title: "Solicitar servicio | DIXOY",
  description:
    "Cuéntanos qué necesita tu empresa y prepara una solicitud de servicio para diseño, impresión, multimedia, espacios, tecnología y proyectos especiales.",
  alternates: { canonical: "/solicitar" },
};

export default function RequestPage() {
  return (
    <main className={styles.page}>
      <header className={styles.header}>
        <Link aria-label="DIXOY, inicio" className={styles.logo} href="/">
          <Image
            alt="DIXOY"
            height={255}
            priority
            src="/logos/logo-dixoy-horizontal.svg"
            unoptimized
            width={986}
          />
        </Link>
        <nav aria-label="Navegación principal" className={styles.nav}>
          <Link href="/soluciones">Soluciones</Link>
          <Link href="/servicios">Servicios</Link>
          <Link href="/proyectos">Proyectos</Link>
        </nav>
        <Link className={styles.headerAction} href="/servicios">
          Ver servicios
        </Link>
      </header>

      <section className={styles.intro}>
        <p className={styles.eyebrow}>Solicitud DIXOY</p>
        <h1>
          Cuéntanos qué necesitas.
          <span> Nosotros organizamos el punto de partida.</span>
        </h1>
        <p>
          No necesitas saber exactamente qué servicio contratar. Danos la información esencial del proyecto y la organizamos para continuar la conversación con contexto desde el primer contacto.
        </p>
      </section>

      <RequestFlow />

      <footer className={styles.footer}>
        <span>© 2026 DIXOY · Bogotá, Colombia</span>
        <nav>
          <Link href="/">Inicio</Link>
          <Link href="/servicios">Servicios</Link>
          <Link href="/proyectos">Proyectos</Link>
        </nav>
      </footer>
    </main>
  );
}
