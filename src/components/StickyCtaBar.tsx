"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

/**
 * Fixed bottom CTA bar from Marina's soberana-webv3 mockup.
 *
 * Home page only: on /aplicar it would sit on top of the qualifier it points
 * at, and on the legal pages there is nothing to sell. It renders a spacer of
 * its own height after the footer so the bar never covers the footer links when
 * a visitor scrolls to the very bottom — which is why it lives in the layout,
 * below <SiteFooter />, rather than inside the page.
 *
 * On a first visit the cookie banner (also bottom-fixed, z-50, opaque) covers
 * this bar until it is answered. That ordering is deliberate — the legal notice
 * comes first, and the hero and final CTAs still reach /aplicar meanwhile.
 *
 * The capacity label says "Plazas limitadas" and never a number: allowed by
 * ADR-0001 (update 2026-08-07) exactly because it names no count. The mockup's
 * "Últimas 2 plazas" is what that ADR still rules out.
 */
export default function StickyCtaBar() {
  const pathname = usePathname();
  if (pathname !== "/") return null;

  return (
    <>
      {/*
        Taller than the bar on a wide screen on purpose: on a narrow phone the
        CTA label wraps to two lines and the bar grows to ~95px. Over-allocating
        leaves a little blank page under the footer instead of letting the bar
        sit on top of the footer links.
      */}
      <div aria-hidden className="h-24" />
      <div className="fixed inset-x-0 bottom-0 z-40 border-t border-accent/30 bg-night/95 px-3 py-2.5 backdrop-blur-md sm:px-5">
        <div className="mx-auto flex max-w-3xl items-center gap-3">
          <span className="min-w-0 shrink truncate text-[11px] font-medium uppercase tracking-widest text-accent-soft">
            Plazas limitadas
          </span>
          <Link
            href="/aplicar"
            data-umami-event="cta-sticky-click"
            className="btn-cta min-h-[50px] flex-1 px-5 py-3 text-sm"
          >
            Quiero saber si Soberana es para mí →
          </Link>
        </div>
      </div>
    </>
  );
}
