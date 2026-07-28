"use client";

import Image from "next/image";
import { useState } from "react";

const projects = [
  {
    alt: "Instalación de divisiones y vinilos para oficina",
    label: "Espacios corporativos",
    src: "/images/portfolio/optimized/project-02.webp",
  },
  {
    alt: "Proyecto de aviso e imagen comercial",
    label: "Marca",
    src: "/images/portfolio/optimized/project-15.webp",
  },
  {
    alt: "Servicio técnico especializado",
    label: "Tecnología",
    src: "/images/portfolio/optimized/project-10.webp",
  },
  {
    alt: "Producto textil personalizado",
    label: "Personalizado",
    src: "/images/portfolio/optimized/project-08.webp",
  },
  {
    alt: "Producción de material corporativo",
    label: "Producción",
    src: "/images/portfolio/optimized/project-13.webp",
  },
];

export default function PortfolioGallery() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeProject = projects[activeIndex];

  return (
    <div
      aria-label="Proyectos reales de DIXOY"
      className="portfolio-visual"
    >
      <div className="portfolio-main" key={activeProject.src}>
        <Image
          alt={activeProject.alt}
          className="portfolio-image"
          fill
          priority={activeIndex === 0}
          sizes="(max-width: 900px) 100vw, 45vw"
          src={activeProject.src}
          unoptimized
        />
        <div className="portfolio-overlay" />
        <div aria-live="polite" className="portfolio-label">
          <span>Proyecto real</span>
          <strong>{activeProject.label}</strong>
        </div>
      </div>

      <div aria-label="Seleccionar proyecto" className="portfolio-thumbs">
        {projects.map((project, index) =>
          index === activeIndex ? null : (
            <button
              aria-label={`Mostrar ${project.label} en la imagen principal`}
              className="portfolio-thumb"
              key={project.src}
              onClick={() => setActiveIndex(index)}
              type="button"
            >
              <Image
                alt=""
                fill
                sizes="150px"
                src={project.src}
                unoptimized
              />
              <span>{project.label}</span>
            </button>
          ),
        )}
      </div>
    </div>
  );
}
