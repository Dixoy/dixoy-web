import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://dixoy.co/",
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: "https://dixoy.co/soluciones",
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: "https://dixoy.co/soluciones/marca",
      changeFrequency: "monthly",
      priority: 0.85,
    },
    {
      url: "https://dixoy.co/soluciones/espacios",
      changeFrequency: "monthly",
      priority: 0.85,
    },
    {
      url: "https://dixoy.co/soluciones/tecnologia",
      changeFrequency: "monthly",
      priority: 0.85,
    },
    {
      url: "https://dixoy.co/soluciones/personalizado",
      changeFrequency: "monthly",
      priority: 0.85,
    },
    {
      url: "https://dixoy.co/usme",
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: "https://dixoy.co/tienda",
      changeFrequency: "weekly",
      priority: 0.8,
    },
  ];
}
