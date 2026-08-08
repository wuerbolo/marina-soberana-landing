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
 * The capacity label says "Plazas limitadas" and never a number: allowed by
 * ADR-0001 (update 2026-08-07) exactly because it names no count. The mockup's
 * "Últimas 2 plazas" is what that ADR still rules out.
 */
export default function StickyCtaBar() {
  const pathname = usePathname();
  if (pathname !== "/") return null;

  return (
    <>
      <div aria-hidden className="h-[74px]" />
      <div className="fixed inset-x-0 bottom-0 z-40 border-t border-accent/25 bg-dark/95 px-3 py-2.5 backdrop-blur-md pb-[calc(0.625rem+env(safe-area-inset-bottom))] sm:px-5">
        <div className="mx-auto flex max-w-3xl items-center gap-3">
          <span className="min-w-0 shrink truncate text-[11px] font-medium uppercase tracking-widest text-accent">
            Plazas limitadas
          </span>
          <Link
            href="/aplicar"
            data-umami-event="cta-sticky-click"
            className="flex min-h-[50px] flex-1 items-center justify-center rounded-full bg-accent px-5 py-3 text-center text-sm font-medium text-foreground transition-colors hover:bg-accent-hover"
          >
            Quiero saber si Soberana es para mí →
          </Link>
        </div>
      </div>
    </>
  );
}
