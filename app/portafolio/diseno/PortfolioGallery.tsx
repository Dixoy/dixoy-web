"use client";

import Image from "next/image";
import { useState } from "react";
import styles from "./portfolio-flow.module.css";

const root = "/media/portfolio/design/";
const instagram = "https://www.instagram.com/p/C5ZnCk4J4sa/";

const socialVersions = [
  { src: `${root}tampa-nueva-casa-es.webp`, alt: "MCI tiene nueva casa en Tampa, pieza gráfica en español", language: "Español" },
  { src: `${root}tampa-nueva-casa-en.webp`, alt: "MCI has a new house in Tampa, social media design in English", language: "English" },
];

const identities = [
  { name: "Corason", image: `${root}corason-mostrario.jpg`, width: 1600, height: 3552 },
  { name: "Nitro", image: `${root}nitro-mostrario.jpg`, width: 1600, height: 3280 },
  { name: "Saeyut", image: `${root}saeyut-mostrario.jpg`, width: 1600, height: 6394 },
  { name: "Terrado", image: `${root}terrado-mostrario.jpg`, width: 1600, height: 4261 },
];

export default function PortfolioGallery() {
  const [version, setVersion] = useState(0);
  const current = socialVersions[version];

  return (
    <div className={styles.flow}>
      <section className={styles.social} aria-labelledby="social-heading" id="diseno-redes">
        <div className={styles.intro}>
          <p className={styles.eyebrow}>Diseño para redes sociales</p>
          <h2 id="social-heading">Ideas que <em>conectan.</em></h2>
          <p>Mensajes que se convierten en experiencias visuales.</p>
        </div>

        <div className={styles.projectMeta}>
          <span>MCI Tampa Bay</span>
          <span>Comunicación digital · Español / Inglés</span>
          <a href={instagram} target="_blank" rel="noopener noreferrer">Ver publicación real ↗</a>
        </div>

        <div className={styles.socialGrid}>
          <figure className={styles.mainPoster}>
            <Image src={`${root}tampa-nueva-ubicacion.webp`} alt="Diseño original de MCI Tampa Bay para anunciar su nueva ubicación" width={1080} height={1350} sizes="(max-width: 760px) 100vw, 50vw" />
            <figcaption>Una nueva ubicación. Una nueva etapa.</figcaption>
          </figure>
          <div className={styles.socialAside}>
            <div className={styles.languageHead}>
              <span>Una idea, dos idiomas.</span>
              <div role="group" aria-label="Idioma de la publicación" className={styles.languageToggle}>
                {socialVersions.map((item, index) => (
                  <button key={item.language} type="button" aria-pressed={version === index} onClick={() => setVersion(index)}>{item.language}</button>
                ))}
              </div>
            </div>
            <figure className={styles.languagePoster}>
              <Image key={current.src} src={current.src} alt={current.alt} width={1080} height={1080} sizes="(max-width: 760px) 100vw, 48vw" />
              <figcaption>Adaptación de mensaje / {current.language}</figcaption>
            </figure>
          </div>
        </div>

        <div className={styles.wideStory}>
          <p>El mismo mensaje.<br /><strong>Distintas formas de llegar.</strong></p>
          <Image src={`${root}tampa-portada-facebook.webp`} alt="Portada horizontal para Facebook de MCI Tampa Bay" width={851} height={315} sizes="(max-width: 760px) 100vw, 80vw" />
        </div>

        <div className={styles.moreSocial}>
          <div className={styles.moreText}>
            <span className={styles.eyebrow}>Más allá de una campaña</span>
            <h3>Comunicar también es acompañar.</h3>
            <p>Diseños para momentos, encuentros y comunidad.</p>
          </div>
          <div className={styles.supportingPair}>
            <figure>
              <Image src={`${root}tampa-dia-padre.webp`} alt="Publicación de MCI Tampa Bay por el Día del Padre" width={1152} height={2048} sizes="(max-width: 760px) 45vw, 22vw" />
              <figcaption>Fechas especiales</figcaption>
            </figure>
            <figure>
              <Image src={`${root}tampa-bienvenido.webp`} alt="Composición tipográfica Bienvenido, esta es tu casa, para MCI Tampa Bay" width={1132} height={1778} sizes="(max-width: 760px) 45vw, 22vw" />
              <figcaption>Comunidad</figcaption>
            </figure>
          </div>
        </div>
      </section>

      <section className={styles.identity} aria-labelledby="identity-heading" id="identidad-visual">
        <div className={styles.identityIntro}>
          <p className={styles.eyebrow}>Identidad visual</p>
          <h2 id="identity-heading">Marcas con <em>carácter.</em></h2>
          <p>Cada identidad tiene una forma propia de expresarse.</p>
        </div>
        <article className={styles.zooriFeature} aria-labelledby="zoori-title" id="zoori">
          <div className={styles.zooriHero}>
            <div className={styles.zooriMark}>
              <Image
                src={`${root}zoori-logo.webp`}
                alt="Logotipo original de ZOORI, clínica veterinaria, en dorado sobre azul"
                width={1100}
                height={1100}
                sizes="(max-width: 760px) 100vw, 48vw"
              />
            </div>
            <div className={styles.zooriCopy}>
              <span className={styles.zooriLabel}>Identidad creada desde cero por DIXOY</span>
              <h3 id="zoori-title">ZOORI<span>.</span></h3>
              <p>Una identidad creada desde su esencia.</p>
              <span className={styles.zooriServices}>Naming · Logotipo · Sistema visual · Aplicaciones</span>
              <div className={styles.zooriPalette} aria-label="Colores de la identidad ZOORI">
                <span title="Azul clínico profundo" style={{ background: "#0E2A47" }} />
                <span title="Dorado mate" style={{ background: "#C9A24D" }} />
                <span title="Blanco clínico" style={{ background: "#F4F6F8" }} />
                <span title="Gris técnico" style={{ background: "#6B7280" }} />
              </div>
            </div>
          </div>
          <div className={styles.zooriDetails}>
            <figure>
              <Image src={`${root}zoori-aplicaciones.webp`} alt="Aplicaciones de la identidad ZOORI en tarjetas, uniforme, material corporativo y elementos de marca" width={1574} height={886} sizes="(max-width: 760px) 100vw, 65vw" />
              <figcaption>La marca en su entorno.</figcaption>
            </figure>
            <figure>
              <Image src={`${root}zoori-variaciones.webp`} alt="Versiones corporativas y negativas del logotipo ZOORI" width={1574} height={886} sizes="(max-width: 760px) 100vw, 35vw" />
              <figcaption>Un sistema visual consistente.</figcaption>
            </figure>
          </div>
        </article>
        <div className={styles.identityGrid}>
          {identities.map((item, index) => (
            <figure className={styles.identityCard} key={item.name}>
              <div className={styles.identityArt}>
                <Image src={item.image} alt={`Diseño de identidad visual y aplicaciones de ${item.name}`} width={item.width} height={item.height} sizes="(max-width: 760px) 100vw, 45vw" />
              </div>
              <figcaption><span>{String(index + 1).padStart(2, "0")}</span><strong>{item.name}</strong><a href={item.image} target="_blank" rel="noopener noreferrer" aria-label={`Ver composición completa de ${item.name}`}>Ver composición ↗</a></figcaption>
            </figure>
          ))}
        </div>
      </section>
    </div>
  );
}
