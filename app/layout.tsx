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

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": "https://dixoy.co/#organization",
  name: "DIXOY",
  url: "https://dixoy.co",
  logo: "https://dixoy.co/logos/logo-dixoy-horizontal.svg",
  email: "somos@dixoy.co",
  telephone: "+573118072144",
  description:
    "DIXOY integra diseño, producción, espacios, tecnología y soluciones personalizadas para ayudar a empresas a avanzar.",
  areaServed: [
    {
      "@type": "City",
      name: "Bogotá",
    },
    {
      "@type": "Country",
      name: "Colombia",
    },
  ],
};

export const metadata: Metadata = {
  metadataBase: new URL("https://dixoy.co"),
  applicationName: "DIXOY",
  title: "DIXOY | Soluciones para empresas en Bogotá",
  description:
    "Diseño, impresión, espacios, tecnología y soluciones personalizadas para empresas. Un solo aliado para llevar tus ideas hasta la implementación.",
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    title: "DIXOY | Soluciones para empresas en Bogotá",
    description:
      "Integramos marca, espacios, tecnología y soluciones personalizadas para hacer avanzar tu empresa.",
    images: [
      {
        alt: "DIXOY, soluciones para empresas",
        height: 630,
        url: "/og-dixoy.png",
        width: 1200,
      },
    ],
    locale: "es_CO",
    siteName: "DIXOY",
    type: "website",
    url: "https://dixoy.co",
  },
  twitter: {
    card: "summary_large_image",
    title: "DIXOY | Soluciones para empresas en Bogotá",
    description:
      "Diseño, impresión, espacios, tecnología y soluciones personalizadas con un solo aliado.",
    images: ["/og-dixoy.png"],
  },
  icons: {
    icon: "/logos/logo-dixoy-icon.svg",
    shortcut: "/logos/logo-dixoy-icon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es-CO">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <script
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
          type="application/ld+json"
        />
        {children}
      </body>
    </html>
  );
}
