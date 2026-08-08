import type { Metadata } from "next";
import { Inter, Fraunces } from "next/font/google";
import Script from "next/script";
import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";
import StickyCtaBar from "@/components/StickyCtaBar";
import CookieConsent from "@/components/CookieConsent";
import "./globals.css";

// Cookie-free, GDPR-exempt pageview analytics (see infra CLAUDE.md / Trello for
// why: no consent banner needed since it sets no cookies and stores no PII).
const CF_BEACON_TOKEN = process.env.NEXT_PUBLIC_CF_BEACON_TOKEN;

// Self-hosted Umami (umami.marinaromes.com): CTA click events, comparable
// across future sales landing pages. Cookieless by default (no persistent
// client-side id), same no-consent-needed reasoning as the Cloudflare beacon.
const UMAMI_WEBSITE_ID = process.env.NEXT_PUBLIC_UMAMI_WEBSITE_ID;

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

// Fraunces is variable on more than weight. `opsz` (optical size) is what lets a
// display line be drawn for display rather than scaled up from text sizes, and
// `SOFT` rounds the terminals a touch — both are set in globals.css `.font-serif`
// and have to be requested here or the served file will not carry the axes.
const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  axes: ["SOFT", "opsz"],
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
        <StickyCtaBar />
        <CookieConsent />
        {CF_BEACON_TOKEN && (
          <Script
            defer
            src="https://static.cloudflareinsights.com/beacon.min.js"
            data-cf-beacon={`{"token": "${CF_BEACON_TOKEN}"}`}
          />
        )}
        {UMAMI_WEBSITE_ID && (
          <Script
            defer
            src="https://umami.marinaromes.com/script.js"
            data-website-id={UMAMI_WEBSITE_ID}
          />
        )}
      </body>
    </html>
  );
}
