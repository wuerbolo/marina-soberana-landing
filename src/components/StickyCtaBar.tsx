"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

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
 *
 * Slides itself away once the closing card (#final-cta, the Inversion section)
 * is on screen — at that
 * point this bar is a second copy of the same ask sitting right on top of the
 * first one. Re-appears only if the visitor scrolls back up above that card,
 * not while they're still below it reading the footer.
 */
export default function StickyCtaBar() {
  const pathname = usePathname();
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const target = document.getElementById("final-cta");
    if (!target) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHidden(true);
        } else if (entry.boundingClientRect.top > 0) {
          // Off-screen because it's BELOW the viewport, i.e. the visitor
          // scrolled back up above it — bring the bar back.
          setHidden(false);
        }
      },
      { threshold: 0 },
    );
    observer.observe(target);
    return () => observer.disconnect();
  }, []);

  if (pathname !== "/") return null;

  return (
    <>
      {/*
        Taller than the bar on a wide screen on purpose: on a narrow phone the
        CTA label wraps to two lines and the bar grows to ~95px. Over-allocating
        leaves a little blank page under the footer instead of letting the bar
        sit on top of the footer links.

        Carries the footer's own background, so it reads as the footer's bottom
        padding rather than as a stray band in a fourth colour.
      */}
      <div aria-hidden className="h-24 bg-dark" />
      <div
        className={`fixed inset-x-0 bottom-0 z-40 border-t border-accent-soft/25 bg-night px-[clamp(12px,4vw,20px)] pb-[calc(10px+env(safe-area-inset-bottom))] pt-2.5 transition-transform duration-300 ease-in-out ${
          hidden ? "translate-y-full" : "translate-y-0"
        }`}
      >
        <div className="mx-auto flex max-w-[760px] items-center gap-3">
          <span className="min-w-0 shrink truncate text-[11.5px] font-medium uppercase tracking-[0.1em] text-accent-dim">
            Plazas limitadas
          </span>
          <Link
            href="/aplicar"
            data-umami-event="cta-sticky-click"
            className="btn-cta min-h-[50px] flex-1 px-[18px] py-3 text-[14.5px]"
          >
            Quiero saber si Soberana es para mí →
          </Link>
        </div>
      </div>
    </>
  );
}
