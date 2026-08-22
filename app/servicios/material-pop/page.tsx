import type { Metadata } from "next";
import ServiceDetail from "../ServiceDetail";

export const metadata: Metadata = {
  title: "Material POP para empresas en Bogotá | DIXOY",
  description: "Diseño y producción de material POP, exhibición, piezas promocionales e impresos para campañas, eventos y puntos de venta en Bogotá.",
  alternates: { canonical: "/servicios/material-pop" },
};

export default function Page(){return <ServiceDetail kicker="Tu marca" title="Material POP para campañas, eventos y puntos de venta." intro="Desarrollamos piezas promocionales y de exhibición pensadas para comunicar una oferta, apoyar una campaña y mejorar la presencia de marca en espacios físicos." solutionHref="/soluciones/marca" solutionLabel="Tu marca" includes={["Habladores, tropezones y piezas de exhibición","Impresos promocionales y corporativos","Elementos para activaciones y eventos","Producciones especiales según campaña"]} useCases={["Lanzamientos de producto","Campañas comerciales","Activaciones de marca","Puntos de venta y eventos corporativos"]} closing="El POP funciona mejor cuando la pieza, el mensaje y el espacio se piensan como parte de una misma experiencia."/>}
