"use client";

import Image from "next/image";
import { useState } from "react";

const heroImages = [
  {
    src: "/images/hero/hero-02.jpg",
    alt: "Proyecto principal DIXOY",
    position: "object-center",
  },
  {
    src: "/images/hero/hero-12.jpg",
    alt: "Tecnología DIXOY",
    position: "object-top",
  },
  {
    src: "/images/hero/hero-15.jpg",
    alt: "Imagen corporativa DIXOY",
    position: "object-center",
  },
  {
    src: "/images/hero/hero-08.jpg",
    alt: "Personalización DIXOY",
    position: "object-top",
  },
  {
    src: "/images/hero/hero-13.jpg",
    alt: "Portafolio DIXOY",
    position: "object-center",
  },
];

export default function HeroGallery() {
  const [activeImage, setActiveImage] = useState(heroImages[0]);

  return (
    <div className="flex flex-col gap-4">
      <div className="relative h-[220px] overflow-hidden rounded-[2rem] sm:h-[300px]">
        <Image
          src={activeImage.src}
          alt={activeImage.alt}
          fill
          priority
          sizes="(max-width: 768px) 100vw, 50vw"
          className={`object-cover ${activeImage.position} transition-all duration-500`}
        />
      </div>

      <div className="grid grid-cols-4 gap-2 sm:gap-4">
        {heroImages.slice(1).map((image) => (
          <button
  key={image.src}
  type="button"
  aria-label={`Ver imagen: ${image.alt}`}
  onMouseEnter={() => setActiveImage(image)}
  onFocus={() => setActiveImage(image)}
  onClick={() => setActiveImage(image)}
  className={`relative aspect-[4/3] cursor-pointer overflow-hidden rounded-xl border transition-all duration-300 sm:rounded-[1.5rem] ${
    activeImage.src === image.src
      ? "border-[#ED6A1D] opacity-100"
      : "border-transparent opacity-80 hover:opacity-100"
  }`}
>
          
            <Image
              src={image.src}
              alt={image.alt}
              fill
              sizes="(max-width: 768px) 25vw, 150px"
              className={`object-cover ${image.position}`}
            />
          </button>
        ))}
      </div>
    </div>
  );
}