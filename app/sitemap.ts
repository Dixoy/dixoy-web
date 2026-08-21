import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://dixoy.co/",
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: "https://dixoy.co/tienda",
      changeFrequency: "weekly",
      priority: 0.8,
    },
  ];
}
