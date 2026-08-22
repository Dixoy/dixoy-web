import type { Metadata } from "next";
import ServiceDetail from "../ServiceDetail";

export const metadata: Metadata = {
  title: "Diseño de marca para empresas en Bogotá | DIXOY",
  description: "Diseño de identidad visual, logotipo, tipografía, paleta y aplicaciones de marca para empresas y emprendimientos en Bogotá.",
  alternates: { canonical: "/servicios/diseno-de-marca" },
};

export default function Page(){return <ServiceDetail kicker="Tu marca" title="Diseño de marca para empresas que necesitan verse claras y coherentes." intro="Construimos identidades visuales que puedan usarse de verdad: desde el logotipo hasta las piezas que acompañan la operación cotidiana de una marca." solutionHref="/soluciones/marca" solutionLabel="Tu marca" includes={["Diseño o evolución de logotipo","Paleta de color y tipografías","Lineamientos visuales y aplicaciones","Piezas corporativas según la necesidad"]} useCases={["Lanzamiento de una empresa o producto","Actualización de una identidad existente","Unificación de una marca que hoy se ve diferente en cada pieza","Preparación de la marca para impresión, web y punto de venta"]} closing="La identidad no termina en el logo: podemos llevarla hasta las piezas, espacios y aplicaciones que la empresa realmente necesita."/>}
