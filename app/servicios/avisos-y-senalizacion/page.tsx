import type { Metadata } from "next";
import ServiceDetail from "../ServiceDetail";

export const metadata: Metadata = {
  title: "Avisos y señalización para empresas en Bogotá | DIXOY",
  description: "Avisos, señalización corporativa, identificación de espacios y producción visual para empresas y puntos de venta en Bogotá.",
  alternates: { canonical: "/servicios/avisos-y-senalizacion" },
};

export default function Page(){return <ServiceDetail kicker="Tu marca + Tu espacio" title="Avisos y señalización para identificar, orientar y hacer visible tu empresa." intro="Diseñamos y producimos elementos visuales que ayudan a ubicar, comunicar y reforzar la presencia de una marca en sus espacios." solutionHref="/soluciones/espacios" solutionLabel="Tu espacio" includes={["Avisos interiores y exteriores","Señalización corporativa y direccional","Placas, identificadores y elementos de orientación","Producción e instalación según el proyecto"]} useCases={["Locales comerciales y oficinas","Sedes empresariales y puntos de atención","Remodelaciones y aperturas","Actualización de imagen en espacios existentes"]} closing="Un aviso puede ser una pieza puntual o parte de una transformación completa del espacio y la marca."/>}
