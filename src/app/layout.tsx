import type { Metadata, Viewport } from "next";
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

// Belt to the env var's braces: the tracker refuses to send anything when
// location.hostname is not on this list, so localhost:3400 and any preview
// build stay out of production's numbers whatever the .env happens to hold.
// Deliberately NOT setting data-exclude-search — it would strip the query
// string and take UTM attribution with it.
const UMAMI_DOMAINS = "escuelasoberana.com,www.escuelasoberana.com";

/*
  Internal opt-out, half of a contract with the admin panel in
  marina-soberana-frontend (docs/analytics-events.md).

  Marina's team needs to keep their own visits out of the stats, and the panel
  at app.escuelasoberana.com needs to be able to *tell them* whether this
  browser is being counted. localStorage cannot cross that origin boundary and
  a hidden iframe reads a partitioned store on Safari, so the signal travels as
  a cookie on the parent domain — but the cookie is only the transport. What
  actually silences the tracker is Umami's own localStorage gate, which fails
  closed and costs nothing; a data-before-send handler would sit outside the
  tracker's try/catch, where one thrown error kills every event in silence.

  The absent-cookie branch is the point of the whole thing: Safari caps any
  JS-written cookie at 7 days, so it will vanish on its own. Leaving the
  localStorage flag untouched means the opt-out outlives it, and rewriting the
  cookie from the flag means the panel's diagnosis becomes true again on the
  next visit here. Worst case the panel cries "you are being counted" when you
  are not — a false alarm, never a false all-clear.
*/
const UMAMI_OPT_OUT_BRIDGE = `
try {
  var m = document.cookie.match(/(?:^|;\\s*)soberana_notrack=([01])/);
  var c = 'soberana_notrack=1; domain=.escuelasoberana.com; path=/; max-age=31536000; samesite=lax; secure';
  if (m && m[1] === '1') {
    localStorage.setItem('umami.disabled', '1');
    document.cookie = c;
  } else if (m && m[1] === '0') {
    localStorage.removeItem('umami.disabled');
  } else if (localStorage.getItem('umami.disabled')) {
    document.cookie = c;
  }
} catch (e) {}
`;

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

// viewport-fit=cover lets the page draw into the iPhone's safe-area insets, so
// StickyCtaBar's `env(safe-area-inset-bottom)` padding actually resolves to the
// home-indicator height instead of 0 — without it the fixed bottom bar sits
// behind the home indicator / Safari chrome and reads as missing on iPhone.
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

// Sells the máster, not the legacy "proceso" positioning — this is what Google
// results, WhatsApp link previews and the browser tab show before the hero can.
export const metadata: Metadata = {
  title: "Soberana | Máster de Registros Akáshicos con Marina Romés",
  description:
    "Fórmate como terapeuta de Registros Akáshicos en 6 meses: clases en directo, seguimiento individual semanal y un método ya recorrido por más de 60 alumnas.",
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
          <>
            {/*
              beforeInteractive, because the tracker fires its first pageview the
              moment it loads: the flag has to be in place before that, not after.
            */}
            <Script id="umami-opt-out-bridge" strategy="beforeInteractive">
              {UMAMI_OPT_OUT_BRIDGE}
            </Script>
            <Script
              defer
              src="https://umami.marinaromes.com/script.js"
              data-website-id={UMAMI_WEBSITE_ID}
              data-domains={UMAMI_DOMAINS}
            />
          </>
        )}
      </body>
    </html>
  );
}
