import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  metadataBase: new URL("https://dixoy.co"),

  title: "DIXOY | Soluciones empresariales",
  description:
    "Integramos diseño, adecuación de espacios, tecnología e infraestructura para fortalecer tu empresa.",

  openGraph: {
    title: "DIXOY | Soluciones empresariales",
    description:
      "Diseño, imagen corporativa, tecnología, adecuación de espacios e infraestructura para empresas.",
    url: "https://dixoy.co",
    siteName: "DIXOY",
    images: [
      {
        url: "/og-dixoy.png",
        width: 1200,
        height: 630,
        alt: "DIXOY Soluciones Empresariales",
      },
    ],
    locale: "es_CO",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "DIXOY | Soluciones empresariales",
    description:
      "Soluciones empresariales que integran marca, espacio, tecnología e infraestructura.",
    images: ["/og-dixoy.png"],
  },

  icons: {
    icon: "/icon.png",
    apple: "/apple-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
  lang="es"
  suppressHydrationWarning
  className={`${geistSans.variable} ${geistMono.variable}`}
>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
