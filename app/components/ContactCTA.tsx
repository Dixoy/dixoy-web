"use client";

import { useState } from "react";

export default function ContactCTA() {
  const [copied, setCopied] = useState(false);

  const email = "somos@dixoy.co";

  const whatsappMessage = [
    "Hola DIXOY, quiero solicitar una cotización.",
    "",
    "Nombre:",
    "Empresa:",
    "Servicio que necesito:",
    "Ciudad:",
  ].join("\n");

  const whatsappLink = `https://wa.me/573118072144?text=${encodeURIComponent(
    whatsappMessage
  )}`;

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);

      setTimeout(() => {
        setCopied(false);
      }, 2000);
    } catch {
      alert(`Puedes escribirnos a: ${email}`);
    }
  };

  return (
    <section id="contacto" className="mx-auto max-w-7xl px-6 py-20 lg:px-12">
      <div className="overflow-hidden rounded-[2rem] bg-[#0A0B0B] px-8 py-14 text-white lg:px-14">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#ED6A1D]">
            Hablemos
          </p>

          <h2 className="mt-4 text-3xl font-semibold tracking-tight lg:text-5xl">
            Construyamos una solución para tu empresa.
          </h2>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-300">
            Cuéntanos qué necesitas y te ayudamos a encontrar la mejor forma de
            desarrollarlo, integrando marca, espacio, tecnología e infraestructura.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-[#ED6A1D] px-7 py-3 text-center font-medium text-white transition hover:bg-[#d85c14]"
            >
              Solicitar cotización
            </a>

            <button
              type="button"
              onClick={copyEmail}
              className="rounded-full border border-white/20 px-7 py-3 text-center font-medium text-white transition hover:bg-white/10"
            >
              {copied ? "Correo copiado" : "Copiar somos@dixoy.co"}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}