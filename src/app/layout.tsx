import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const primaryFont = Inter({
  variable: "--font-primary",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "OM - Moda Única",
  description:
    "Descubre la mejor indumentaria deportiva en OM - Moda Única. Ropa deportiva de calidad, cómoda y con estilo para todas tus actividades.",
  keywords: [
    "OM Moda Única",
    "indumentaria deportiva",
    "ropa deportiva",
    "tienda de ropa online",
    "ropa de calidad",
    "estilo deportivo",
    "comprar ropa deportiva",
  ],
  openGraph: {
    title: "OM - Moda Única",
    description:
      "Renueva tu estilo deportivo con OM - Moda Única. Encuentra indumentaria deportiva cómoda, moderna y de alta calidad.",
    url: "https://www.ommodaunica.com",
    siteName: "OM - Moda Única",
    images: [
      {
        url: "https://www.ommodaunica.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "OM - Moda Única",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "OM - Moda Única",
    description:
      "Encuentra la mejor ropa deportiva en OM - Moda Única. Estilo y comodidad en un solo lugar.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={primaryFont.variable}>{children}</body>
    </html>
  );
}
