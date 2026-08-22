import type { Metadata } from "next";
import ServiceDetail from "../ServiceDetail";

export const metadata: Metadata = {
  title: "Impresión y gran formato en Bogotá | DIXOY",
  description: "Impresión de gran formato, vinilos, pendones, piezas gráficas y producción visual para empresas, eventos y puntos de venta en Bogotá.",
  alternates: { canonical: "/servicios/impresion-gran-formato" },
};

export default function Page(){return <ServiceDetail kicker="Tu marca" title="Impresión y gran formato para hacer visible tu empresa." intro="Producimos piezas gráficas para campañas, espacios, eventos y puntos de venta, cuidando materiales, escala y terminaciones según el uso real." solutionHref="/soluciones/marca" solutionLabel="Tu marca" includes={["Vinilos adhesivos y de corte","Pendones, banners y piezas de gran formato","Impresos corporativos y promocionales","Producción gráfica para espacios y montajes"]} useCases={["Campañas y temporadas comerciales","Puntos de venta y activaciones","Señalización temporal o permanente","Eventos, stands y exhibiciones"]} closing="No nos quedamos en imprimir: cuando hace falta, conectamos diseño, producción e instalación dentro del mismo proyecto."/>}
