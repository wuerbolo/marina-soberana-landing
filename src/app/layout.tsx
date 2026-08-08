import type { Metadata } from "next";
import { Jost, Cormorant_Garamond } from "next/font/google";
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

/*
  Typefaces are Marina's, taken from her soberana-landing reference (2026-08-08)
  — they replace Inter/Fraunces.
  Jost is a geometric sans whose 300 is genuinely readable at body sizes; the
  reference sets nearly all running copy at 300, and that lightness is most of
  what makes the page read as calm rather than loud. Inter at 400 could not do
  the same thing (its 300 goes spindly).
  Cormorant Garamond is a high-contrast old-style serif: fine hairlines, small
  x-height, drawn for display. Fraunces' soft slab terminals were the wrong
  register next to it.
*/
const jost = Jost({
  variable: "--font-jost",
  subsets: ["latin"],
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  style: ["normal", "italic"],
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
    <html lang="es" className={`${jost.variable} ${cormorant.variable} h-full antialiased`}>
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
