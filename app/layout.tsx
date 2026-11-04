import type { Metadata } from "next";
import { Archivo_Black, Inter } from "next/font/google";
import "./globals.css";
import { COMPANY } from "@/lib/data";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import TopBar from "@/components/TopBar";
import MobileCTA from "@/components/MobileCTA";

const display = Archivo_Black({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
  variable: "--font-display"
});
const sans = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sans"
});

export const metadata: Metadata = {
  title: `${COMPANY.name} · Meisterbetrieb Dillingen · Bau, Sanierung, Außenanlagen`,
  description:
    "HW Bau GmbH aus Dillingen/Saar. Meisterbetrieb für Neubau, Altbausanierung, Kellerabdichtung, Risssanierung, Natursteinarbeiten und Außenanlagen. Meisterhaft 5 Sterne. Remmers RSG Fachbetrieb.",
  keywords:
    "HW Bau, Bauunternehmen Dillingen, Kellerabdichtung Saarland, Altbausanierung, Rissverpressung, Natursteinarbeiten, Pflasterarbeiten, Meisterbetrieb",
  openGraph: {
    title: `${COMPANY.name} · Meisterbetrieb aus Dillingen`,
    description:
      "Neubau, Sanierung, Kellerabdichtung und Außenanlagen aus Meisterhand. Seit 2011 in Dillingen und im Saarland.",
    type: "website",
    locale: "de_DE"
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="de" className={`${display.variable} ${sans.variable}`}>
      <body className="bg-bone text-ink">
        <TopBar />
        <Navigation />
        <main>{children}</main>
        <Footer />
        <MobileCTA />
      </body>
    </html>
  );
}
