import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: "https://dixoy.co/", changeFrequency: "weekly", priority: 1 },
    { url: "https://dixoy.co/soluciones", changeFrequency: "monthly", priority: 0.9 },
    { url: "https://dixoy.co/soluciones/marca", changeFrequency: "monthly", priority: 0.85 },
    { url: "https://dixoy.co/soluciones/espacios", changeFrequency: "monthly", priority: 0.85 },
    { url: "https://dixoy.co/soluciones/tecnologia", changeFrequency: "monthly", priority: 0.85 },
    { url: "https://dixoy.co/soluciones/personalizado", changeFrequency: "monthly", priority: 0.85 },
    { url: "https://dixoy.co/servicios", changeFrequency: "monthly", priority: 0.9 },
    { url: "https://dixoy.co/servicios/diseno-de-marca", changeFrequency: "monthly", priority: 0.85 },
    { url: "https://dixoy.co/servicios/impresion-gran-formato", changeFrequency: "monthly", priority: 0.85 },
    { url: "https://dixoy.co/servicios/avisos-y-senalizacion", changeFrequency: "monthly", priority: 0.85 },
    { url: "https://dixoy.co/servicios/material-pop", changeFrequency: "monthly", priority: 0.85 },
    { url: "https://dixoy.co/servicios/adecuacion-de-espacios", changeFrequency: "monthly", priority: 0.85 },
    { url: "https://dixoy.co/servicios/control-de-acceso", changeFrequency: "monthly", priority: 0.85 },
    { url: "https://dixoy.co/servicios/soluciones-digitales", changeFrequency: "monthly", priority: 0.85 },
    { url: "https://dixoy.co/usme", changeFrequency: "weekly", priority: 0.9 },
    { url: "https://dixoy.co/tienda", changeFrequency: "weekly", priority: 0.8 },
  ];
}
