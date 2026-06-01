import type { Metadata } from "next";
import { Playfair_Display, DM_Sans } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dmsans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Dmarlen — Klinik Kecantikan Terpercaya di Bandar Lampung",
  description:
    "Dmarlen klinik kecantikan Bandar Lampung. Layanan facial, perawatan kulit, dan laser oleh dokter berpengalaman. Konsultasi gratis, booking mudah via WhatsApp.",
  keywords:
    "klinik kecantikan Bandar Lampung, facial Lampung, perawatan kulit Lampung, laser kecantikan Lampung, dokter kecantikan Lampung",
  openGraph: {
    title: "Dmarlen — Klinik Kecantikan Terpercaya di Bandar Lampung",
    description:
      "Layanan facial, perawatan kulit, dan laser oleh dokter berpengalaman. Konsultasi gratis.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className={`${playfair.variable} ${dmSans.variable}`}>
      <body className="font-dmsans text-text-main antialiased">{children}</body>
    </html>
  );
}
