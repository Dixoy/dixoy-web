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

export const metadata: Metadata = {
  metadataBase: new URL("https://dixoy.co"),
  title: "DIXOY | Soluciones empresariales integrales",
  description:
    "Diseño, adecuación de espacios, tecnología y soluciones empresariales con un solo aliado.",
  openGraph: {
    title: "DIXOY | Soluciones empresariales",
    description:
      "Integramos marca, espacios, tecnología e infraestructura para fortalecer tu empresa.",
    images: [
      {
        alt: "DIXOY, soluciones empresariales",
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
    <html lang="es">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
