import type { Metadata } from "next";
import ServiceDetail from "../ServiceDetail";

export const metadata: Metadata = {
  title: "Adecuación de espacios comerciales y corporativos | DIXOY",
  description: "Adecuación de espacios, ambientación, exhibición, mobiliario y montajes para empresas, oficinas y puntos de venta en Bogotá.",
  alternates: { canonical: "/servicios/adecuacion-de-espacios" },
};

export default function Page(){return <ServiceDetail kicker="Tu espacio" title="Adecuación de espacios para que tu empresa funcione y se vea mejor." intro="Intervenimos espacios comerciales y corporativos conectando necesidades funcionales, visuales y de instalación dentro de una misma propuesta." solutionHref="/soluciones/espacios" solutionLabel="Tu espacio" includes={["Adecuaciones locativas y ajustes de espacio","Ambientación y comunicación visual","Mobiliario, exhibición y elementos especiales","Montajes para puntos de venta, oficinas y eventos"]} useCases={["Aperturas y remodelaciones","Actualización de puntos de atención","Mejoras funcionales en oficinas o locales","Proyectos que combinan imagen, mobiliario e instalación"]} closing="Podemos coordinar desde una intervención puntual hasta una solución que conecte espacio, marca y tecnología."/>}
