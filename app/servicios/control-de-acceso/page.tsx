import type { Metadata } from "next";
import ServiceDetail from "../ServiceDetail";

export const metadata: Metadata = {
  title: "Control de acceso para empresas en Bogotá | DIXOY",
  description: "Sistemas de control de acceso, lectores, botones, electroimanes e integración para oficinas, sedes y espacios empresariales en Bogotá.",
  alternates: { canonical: "/servicios/control-de-acceso" },
};

export default function Page(){return <ServiceDetail kicker="Tecnología" title="Control de acceso para proteger y organizar el ingreso a tus espacios." intro="Implementamos soluciones de acceso pensadas según el flujo, la seguridad y el tipo de espacio, desde una puerta puntual hasta configuraciones con varios puntos de ingreso." solutionHref="/soluciones/tecnologia" solutionLabel="Tecnología" includes={["Terminales y lectores de acceso","Botones, electroimanes y fuentes","Configuración e integración de equipos","Instalación y puesta en funcionamiento"]} useCases={["Oficinas y sedes administrativas","Centros de redes y áreas restringidas","Locales y puntos de atención","Espacios con varios niveles o puertas de acceso"]} closing="No instalamos equipos aislados: buscamos que la solución tenga sentido dentro de la operación y del espacio donde va a funcionar."/>}
