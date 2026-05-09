import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Sonrisa Integral Monterrey – Excelencia Dental",
  description:
    "Clínica dental premium en Monterrey. Estética dental, ortodoncia avanzada y cuidado integral con tecnología de vanguardia y un toque humano.",
  keywords: [
    "dentista Monterrey",
    "clínica dental",
    "ortodoncia",
    "estética dental",
    "blanqueamiento dental",
    "Sonrisa Integral",
  ],
  openGraph: {
    title: "Sonrisa Integral Monterrey – Excelencia Dental",
    description:
      "Cuidado dental premium con tecnología de vanguardia y un toque humano.",
    locale: "es_MX",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className={`${inter.variable} ${playfair.variable}`}>
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0&display=swap"
        />
      </head>
      <body className="bg-[#f9f9f9] text-[#1a1c1c] font-[family-name:var(--font-inter)] antialiased selection:bg-[#0d3b40] selection:text-[#7ba5ab]">
        {children}
      </body>
    </html>
  );
}
