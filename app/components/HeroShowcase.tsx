"use client";

import Image from "next/image";
import { useState } from "react";

const slides = [
  {
    label: "DIXOY",
    image: "/images/hero/hero-02.jpg",
    title: "Construyamos una solución para tu empresa.",
    description:
      "Creemos en el potencial de cada negocio. Por eso integramos marca, espacios, tecnología e infraestructura para transformar necesidades en soluciones reales.",
    position: "object-center",
  },
  {
    label: "Marca",
    image: "/images/hero/hero-15.jpg",
    title: "Construyamos una solución para tu empresa.",
    description:
      "Diseñamos e instalamos elementos visuales que fortalecen la presencia de tu marca y hacen que tu negocio se vea más profesional.",
    position: "object-center",
  },
  {
    label: "Espacio",
    image: "/images/hero/hero-07.jpg",
    title: "Construyamos una solución para tu empresa.",
    description:
      "Adecuamos espacios para que sean más funcionales, organizados y coherentes con la imagen que quieres proyectar.",
    position: "object-center",
  },
  {
    label: "Tecnología",
    image: "/images/hero/hero-10.jpg",
    title: "Construyamos una solución para tu empresa.",
    description:
      "Implementamos soluciones tecnológicas que ayudan a que tu operación sea más eficiente, segura y conectada.",
    position: "object-center",
  },
  {
    label: "Personalización",
    image: "/images/hero/hero-04.jpg",
    title: "Construyamos una solución para tu empresa.",
    description:
      "Creamos productos y materiales personalizados que fortalecen la relación con tus clientes, colaboradores y aliados.",
    position: "object-center",
  },
];

export default function HeroShowcase({
  whatsappLink,
}: {
  whatsappLink: string;
}) {
  const [activeSlide, setActiveSlide] = useState(slides[0]);

  return (
    <section className="relative bg-[#F5F5F7] px-0 text-white">
  <div className="relative min-h-[620px] overflow-hidden bg-[#0A0B0B] lg:min-h-[680px]">
        <Image
          src={activeSlide.image}
          alt={activeSlide.label}
          fill
          priority
          sizes="100vw"
          className={`object-cover ${activeSlide.position} opacity-90 transition-all duration-700`}
        />

        <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/35 to-transparent" />
<div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent" />

        <div className="relative z-10 mx-auto flex min-h-[620px] max-w-7xl flex-col justify-center px-6 pb-32 pt-16 lg:min-h-[680px] lg:px-12">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#ED6A1D]">
              {activeSlide.label}
            </p>

            <h1 className="mt-5 max-w-3xl text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
              {activeSlide.title}
            </h1>

            <p className="mt-6 max-w-xl text-base leading-8 text-zinc-200 sm:text-lg">
              {activeSlide.description}
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
               className="rounded-full bg-white px-6 py-3 text-center text-sm font-medium text-[#0A0B0B] transition hover:bg-zinc-200"
              >
                Impulsar mi empresa
              </a>

              <a
                href="#proyectos"
                className="rounded-full border border-white/25 px-6 py-3 text-center text-sm font-medium text-white transition hover:bg-white/10"
              >
                Ver proyectos
              </a>
            </div>
          </div>
        </div>

        <div className="absolute bottom-7 left-0 right-0 z-20 px-6">
  <div className="mx-auto flex w-fit max-w-full justify-center gap-2 overflow-x-auto rounded-full border border-white/10 bg-black/25 p-2 backdrop-blur-md">
            {slides.map((slide) => (
              <button
                key={slide.label}
                type="button"
                aria-label={`Ver ${slide.label}`}
                onMouseEnter={() => setActiveSlide(slide)}
                onFocus={() => setActiveSlide(slide)}
                onClick={() => setActiveSlide(slide)}
                className={`relative h-11 w-20 shrink-0 overflow-hidden rounded-xl border transition sm:h-12 sm:w-24 ${
                  activeSlide.label === slide.label
                    ? "border-[#ED6A1D] opacity-100"
                    : "border-white/15 opacity-70 hover:opacity-100"
                }`}
              >
                <Image
                  src={slide.image}
                  alt={slide.label}
                  fill
                  sizes="120px"
                  className={`object-cover ${slide.position}`}
                />

                <div className="absolute inset-0 bg-black/20" />

                <span className="absolute bottom-1.5 left-1 right-1 text-center text-[8px] font-semibold uppercase tracking-wide text-white">
                  {slide.label}
                </span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}