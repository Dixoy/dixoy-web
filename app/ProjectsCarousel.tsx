"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";

type GalleryMedia = {
  alt: string;
  fit?: "contain" | "cover";
  kind?: "image" | "video";
  position?: string;
  poster?: string;
  src: string;
};

type Project = {
  category: string;
  description: string;
  gallery: GalleryMedia[];
  title: string;
};

const projects: Project[] = [
  {
    category: "Espacios corporativos",
    title: "Privacidad visual para oficinas",
    description:
      "Suministro e instalación de vinilo esmerilado para separar ambientes sin perder luminosidad.",
    gallery: [
      {
        alt: "Vista general de la división de vidrio con vinilo esmerilado",
        src: "/images/portfolio/optimized/project-02.webp",
      },
      {
        alt: "Perspectiva frontal de las divisiones de vidrio con privacidad visual",
        src: "/media/projects/corporate-spaces/office-overview.webp",
      },
      {
        alt: "Vista de la instalación desde el acceso al espacio corporativo",
        src: "/media/projects/corporate-spaces/office-corner.webp",
      },
      {
        alt: "Recorrido en video por el proyecto de privacidad visual",
        fit: "contain",
        kind: "video",
        poster:
          "/media/projects/corporate-spaces/office-video-poster.webp",
        src: "/media/projects/corporate-spaces/office-walkthrough.mp4",
      },
    ],
  },
  {
    category: "Imagen y comunicación",
    title: "Ambientación de punto de venta",
    description:
      "Diseño, producción e instalación de murales para transformar el espacio en una experiencia coherente y reconocible.",
    gallery: [
      {
        alt: "Vista terminada del muro naranja y el mobiliario del punto de venta",
        src: "/media/projects/point-of-sale/boru-cover.webp?v=2",
      },
      {
        alt: "Vista general de la ambientación gráfica terminada en el restaurante",
        src: "/media/projects/point-of-sale/boru-wide.webp?v=2",
      },
      {
        alt: "Detalle del mural ilustrado instalado en el área de atención",
        src: "/media/projects/point-of-sale/boru-mural.webp?v=2",
      },
      {
        alt: "Proceso de instalación de los murales y la identidad gráfica",
        src: "/media/projects/point-of-sale/boru-process.webp?v=2",
      },
      {
        alt: "Recorrido en video por la ambientación terminada del muro naranja",
        kind: "video",
        poster: "/media/projects/point-of-sale/boru-finished-poster.webp?v=2",
        src: "/media/projects/point-of-sale/boru-finished.mp4?v=2",
      },
      {
        alt: "Recorrido en video durante el proceso de instalación gráfica",
        kind: "video",
        poster: "/media/projects/point-of-sale/boru-process-poster.webp?v=2",
        src: "/media/projects/point-of-sale/boru-process.mp4?v=2",
      },
    ],
  },
  {
    category: "Productos personalizados",
    title: "Textil corporativo a la medida",
    description:
      "Diseño y personalización de uniformes, prendas y piezas textiles para equipos, eventos y marcas, con acabados consistentes desde la producción hasta la entrega.",
    gallery: [
      {
        alt: "Equipo de trabajo usando camisetas corporativas personalizadas",
        src: "/media/projects/corporate-textile/team-uniforms.webp",
      },
      {
        alt: "Equipo de trabajo usando chaquetas corporativas personalizadas",
        src: "/media/projects/corporate-textile/jacket-team.webp",
      },
      {
        alt: "Detalle de personalización aplicada en la manga de una camiseta",
        src: "/media/projects/corporate-textile/sleeve-detail.webp",
      },
      {
        alt: "Detalle frontal del estampado sobre una camiseta corporativa",
        src: "/media/projects/corporate-textile/chest-detail.webp",
      },
      {
        alt: "Personalización aplicada en la espalda de una chaqueta corporativa",
        src: "/media/projects/corporate-textile/windbreaker-back.webp",
      },
      {
        alt: "Detalle frontal de una chaqueta corporativa personalizada",
        src: "/media/projects/corporate-textile/windbreaker-front.webp",
      },
      {
        alt: "Camisetas corporativas terminadas y organizadas para su entrega",
        src: "/media/projects/corporate-textile/finished-polos.webp",
      },
      {
        alt: "Camiseta negra personalizada con estampado de gran formato",
        src: "/media/projects/corporate-textile/yeshua-shirt.webp",
      },
      {
        alt: "Camiseta clara personalizada con composición gráfica de gran formato",
        src: "/media/projects/corporate-textile/ronaldo-shirt.webp",
      },
      {
        alt: "Camiseta negra personalizada con estampado de alta cobertura",
        src: "/media/projects/corporate-textile/creative-shirt.webp",
      },
      {
        alt: "Lote de camisetas estampadas y preparado para entrega",
        src: "/media/projects/corporate-textile/creative-stack.webp",
      },
      {
        alt: "Lote de camisetas negras con aplicación gráfica roja",
        src: "/media/projects/corporate-textile/star-shirts-batch.webp",
      },
      {
        alt: "Sudadera personalizada con estampado de gran formato",
        src: "/media/projects/corporate-textile/sweatshirt-finished.webp",
      },
      {
        alt: "Aplicación de estampado durante el proceso de producción textil",
        src: "/media/projects/corporate-textile/printing-process.webp",
      },
      {
        alt: "Bolsas textiles personalizadas para un evento",
        src: "/media/projects/corporate-textile/printed-totes.webp",
      },
      {
        alt: "Cordones corporativos personalizados para identificación",
        src: "/media/projects/corporate-textile/lanyards.webp",
      },
      {
        alt: "Aplicaciones impresas sobre piezas textiles negras",
        src: "/media/projects/corporate-textile/printed-accessories.webp",
      },
      {
        alt: "Pantalla preparada durante el proceso de estampación textil",
        src: "/media/projects/corporate-textile/screen-printing.webp",
      },
      {
        alt: "Recorrido en video por un lote de prendas blancas personalizadas",
        kind: "video",
        poster: "/media/projects/corporate-textile/white-shirts-poster.webp",
        src: "/media/projects/corporate-textile/white-shirts.mp4",
      },
    ],
  },
  {
    category: "Tecnología y soporte",
    title: "Mantenimiento de equipos",
    description:
      "Diagnóstico y servicio técnico para conservar la estabilidad y el desempeño de la operación.",
    gallery: [
      {
        alt: "Equipos de cómputo durante el servicio técnico",
        src: "/images/portfolio/optimized/project-09.webp",
      },
      {
        alt: "Detalle de los componentes internos revisados",
        position: "center 36%",
        src: "/images/portfolio/optimized/project-09.webp",
      },
    ],
  },
  {
    category: "Tecnología especializada",
    title: "Integración de equipo audiovisual",
    description:
      "Preparación y puesta a punto de tecnología especializada para registro y operación en campo.",
    gallery: [
      {
        alt: "Equipo audiovisual especializado preparado por DIXOY",
        src: "/images/portfolio/optimized/project-10.webp",
      },
      {
        alt: "Detalle del sistema y los componentes del equipo",
        position: "center 62%",
        src: "/images/portfolio/optimized/project-10.webp",
      },
    ],
  },
  {
    category: "Producción corporativa",
    title: "Credenciales para eventos",
    description:
      "Diseño y producción de identificaciones listas para apoyar el acceso y la organización del evento.",
    gallery: [
      {
        alt: "Credenciales empresariales producidas por DIXOY",
        src: "/images/portfolio/optimized/project-13.webp",
      },
      {
        alt: "Detalle de impresión y acabado de las credenciales",
        position: "center 56%",
        src: "/images/portfolio/optimized/project-13.webp",
      },
    ],
  },
  {
    category: "Gran formato",
    title: "Aviso comercial de alto impacto",
    description:
      "Producción e instalación de comunicación exterior pensada para ganar visibilidad en el punto de venta.",
    gallery: [
      {
        alt: "Aviso comercial de gran formato instalado por DIXOY",
        src: "/images/portfolio/optimized/project-15.webp",
      },
      {
        alt: "Detalle de color, tipografía y montaje del aviso comercial",
        position: "center 58%",
        src: "/images/portfolio/optimized/project-15.webp",
      },
    ],
  },
];

const Chevron = ({ direction }: { direction: "left" | "right" }) => (
  <svg aria-hidden="true" fill="none" viewBox="0 0 24 24">
    <path
      d={direction === "left" ? "m15 18-6-6 6-6" : "m9 18 6-6-6-6"}
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.8"
    />
  </svg>
);

export default function ProjectsCarousel() {
  const trackRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const [activeProject, setActiveProject] = useState<number | null>(null);
  const [activeImage, setActiveImage] = useState(0);

  const selectedProject =
    activeProject === null ? null : projects[activeProject];
  const activeMedia = selectedProject?.gallery[activeImage];

  const slide = (direction: "left" | "right") => {
    const track = trackRef.current;
    if (!track) return;

    const card = track.querySelector<HTMLElement>(".project-card");
    const distance = (card?.offsetWidth ?? 380) + 20;
    track.scrollBy({
      behavior: "smooth",
      left: direction === "left" ? -distance : distance,
    });
  };

  const openProject = (index: number) => {
    setActiveProject(index);
    setActiveImage(0);
  };

  const closeProject = () => {
    setActiveProject(null);
    setActiveImage(0);
  };

  const changeImage = useCallback(
    (direction: "previous" | "next") => {
      if (!selectedProject) return;

      setActiveImage((current) => {
        const total = selectedProject.gallery.length;
        return direction === "next"
          ? (current + 1) % total
          : (current - 1 + total) % total;
      });
    },
    [selectedProject],
  );

  useEffect(() => {
    if (activeProject === null) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeButtonRef.current?.focus();

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") closeProject();
      if (event.key === "ArrowLeft") changeImage("previous");
      if (event.key === "ArrowRight") changeImage("next");
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [activeProject, changeImage]);

  return (
    <>
      <div className="projects-toolbar">
        <p>Desliza para explorar más proyectos</p>
        <div className="project-controls">
          <button
            aria-label="Ver proyectos anteriores"
            onClick={() => slide("left")}
            type="button"
          >
            <Chevron direction="left" />
          </button>
          <button
            aria-label="Ver más proyectos"
            onClick={() => slide("right")}
            type="button"
          >
            <Chevron direction="right" />
          </button>
        </div>
      </div>

      <div
        aria-label="Proyectos realizados por DIXOY"
        className="project-track"
        ref={trackRef}
      >
        {projects.map((project, index) => (
          <article className="project-card" key={project.title}>
            <button
              aria-label={`Abrir galería: ${project.title}`}
              className="project-card-button"
              onClick={() => openProject(index)}
              type="button"
            >
              <div className="project-art">
                <Image
                  alt={project.gallery[0].alt}
                  className="project-photo"
                  fill
                  sizes="(max-width: 560px) 86vw, 390px"
                  src={project.gallery[0].src}
                  unoptimized
                />
                <span className="project-gallery-hint">
                  Ver galería
                  <span aria-hidden="true">↗</span>
                </span>
              </div>
              <div className="project-info">
                <span>{project.category}</span>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
              </div>
            </button>
          </article>
        ))}
      </div>

      {selectedProject ? (
        <div
          aria-label={`Galería de ${selectedProject.title}`}
          aria-modal="true"
          className="project-modal"
          onMouseDown={(event) => {
            if (event.currentTarget === event.target) closeProject();
          }}
          role="dialog"
        >
          <div className="project-modal-panel">
            <button
              aria-label="Cerrar galería"
              className="project-modal-close"
              onClick={closeProject}
              ref={closeButtonRef}
              type="button"
            >
              <span />
              <span />
            </button>

            <div className="project-modal-copy">
              <span>{selectedProject.category}</span>
              <h3>{selectedProject.title}</h3>
              <p>{selectedProject.description}</p>
            </div>

            <div
              className={`project-modal-media ${
                activeMedia?.fit === "contain" ? "is-contained" : ""
              }`}
            >
              {activeMedia?.kind === "video" ? (
                <video
                  aria-label={activeMedia.alt}
                  controls
                  key={`${activeProject}-${activeImage}`}
                  playsInline
                  poster={activeMedia.poster}
                  preload="metadata"
                >
                  <source src={activeMedia.src} type="video/mp4" />
                  Tu navegador no puede reproducir este video.
                </video>
              ) : activeMedia ? (
                <Image
                  alt={activeMedia.alt}
                  fill
                  key={`${activeProject}-${activeImage}`}
                  sizes="(max-width: 900px) 94vw, 70vw"
                  src={activeMedia.src}
                  style={{
                    objectPosition: activeMedia.position ?? "center",
                  }}
                  unoptimized
                />
              ) : null}

              <button
                aria-label="Imagen anterior"
                className="project-modal-arrow project-modal-arrow-left"
                onClick={() => changeImage("previous")}
                type="button"
              >
                <Chevron direction="left" />
              </button>
              <button
                aria-label="Imagen siguiente"
                className="project-modal-arrow project-modal-arrow-right"
                onClick={() => changeImage("next")}
                type="button"
              >
                <Chevron direction="right" />
              </button>

              <span aria-live="polite" className="project-modal-count">
                {String(activeImage + 1).padStart(2, "0")} /{" "}
                {String(selectedProject.gallery.length).padStart(2, "0")}
              </span>
            </div>

            <div
              aria-label="Seleccionar contenido de la galería"
              className="project-modal-thumbs"
            >
              {selectedProject.gallery.map((media, index) => (
                <button
                  aria-label={
                    media.kind === "video"
                      ? "Reproducir video del proyecto"
                      : `Ver imagen ${index + 1}`
                  }
                  aria-pressed={index === activeImage}
                  className={index === activeImage ? "is-active" : ""}
                  key={`${media.alt}-${index}`}
                  onClick={() => setActiveImage(index)}
                  type="button"
                >
                  <Image
                    alt=""
                    fill
                    sizes="88px"
                    src={media.poster ?? media.src}
                    style={{
                      objectFit: media.fit ?? "cover",
                      objectPosition: media.position ?? "center",
                    }}
                    unoptimized
                  />
                  {media.kind === "video" ? (
                    <span aria-hidden="true" className="project-video-indicator">
                      ▶
                    </span>
                  ) : null}
                </button>
              ))}
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
