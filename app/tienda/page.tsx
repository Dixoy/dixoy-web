import type { Metadata } from "next";
import Storefront from "./Storefront";

export const metadata: Metadata = {
  title: "Tienda DIXOY | Productos corporativos personalizados",
  description:
    "Explora productos corporativos, textiles, material promocional y soluciones personalizadas para tu empresa.",
  alternates: {
    canonical: "/tienda",
  },
  robots: {
    index: false,
    follow: true,
  },
  openGraph: {
    title: "Tienda DIXOY | Productos corporativos personalizados",
    description:
      "Textiles, promocionales y soluciones corporativas personalizadas para hacer visible tu marca.",
    images: [
      {
        alt: "Productos corporativos personalizados por DIXOY",
        height: 630,
        url: "/og-dixoy.png",
        width: 1200,
      },
    ],
    locale: "es_CO",
    siteName: "DIXOY",
    type: "website",
    url: "/tienda",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tienda DIXOY | Productos corporativos personalizados",
    description:
      "Textiles, promocionales y soluciones corporativas personalizadas para hacer visible tu marca.",
    images: ["/og-dixoy.png"],
  },
};

export default function StorePage() {
  return <Storefront />;
}
