import type { Metadata } from "next";
import ServiceDetail from "../ServiceDetail";

export const metadata: Metadata = {
  title: "Soluciones digitales para empresas en Bogotá | DIXOY",
  description: "Páginas web, herramientas digitales, integraciones y soluciones tecnológicas para organizar y conectar la operación de empresas en Bogotá.",
  alternates: { canonical: "/servicios/soluciones-digitales" },
};

export default function Page(){return <ServiceDetail kicker="Tecnología" title="Soluciones digitales para conectar mejor la operación de tu empresa." intro="Desarrollamos e implementamos herramientas digitales cuando la empresa necesita una web, un flujo más organizado o una solución que conecte información y operación." solutionHref="/soluciones/tecnologia" solutionLabel="Tecnología" includes={["Páginas web y presencia digital","Herramientas internas y formularios","Integraciones entre procesos y canales","Implementación de soluciones propias como DixApp"]} useCases={["Empresas que necesitan ordenar procesos manuales","Negocios que quieren mejorar su presencia web","Operaciones que dependen de información dispersa","Proyectos que necesitan una herramienta digital a medida"]} closing="La tecnología tiene valor cuando resuelve una necesidad concreta y se integra de forma natural con la operación."/>}
