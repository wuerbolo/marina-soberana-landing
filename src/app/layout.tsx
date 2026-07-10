import type { Metadata } from "next";
import { Inter, Fraunces } from "next/font/google";
import Script from "next/script";
import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";
import CookieConsent from "@/components/CookieConsent";
import "./globals.css";

// Cookie-free, GDPR-exempt pageview analytics (see infra CLAUDE.md / Trello for
// why: no consent banner needed since it sets no cookies and stores no PII).
const CF_BEACON_TOKEN = process.env.NEXT_PUBLIC_CF_BEACON_TOKEN;

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Soberana | Proceso de evolución, sanación y manifestación",
  description:
    "Rompe y libera miedos, lealtades familiares y heridas del alma para avanzar con claridad, confianza y merecimiento. Un acompañamiento de 6 meses con Marina Romés.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${inter.variable} ${fraunces.variable} h-full antialiased`}>
      <body className="min-h-full">
        <SiteHeader />
        {children}
        <SiteFooter />
        <CookieConsent />
        {CF_BEACON_TOKEN && (
          <Script
            defer
            src="https://static.cloudflareinsights.com/beacon.min.js"
            data-cf-beacon={`{"token": "${CF_BEACON_TOKEN}"}`}
          />
        )}
      </body>
    </html>
  );
}
