"use client";

import { useEffect, useRef, useState } from "react";

/**
 * A stat number that counts up from 0 the first time it scrolls into view.
 *
 * The server renders (and hydration keeps) the FINAL value, so crawlers,
 * no-JS visitors and reduced-motion visitors all see the finished figure —
 * the animation is a layer on top, started by an IntersectionObserver and
 * driven by rAF with a cubic ease-out, once per page view.
 */
export default function CountUp({
  value,
  prefix = "",
  className,
}: {
  value: number;
  /** Rendered as plain text before the number (the stats use "+"). */
  prefix?: string;
  className?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const [display, setDisplay] = useState(value);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let raf = 0;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        observer.disconnect();

        const started = performance.now();
        const duration = 1300;
        const tick = (now: number) => {
          const progress = Math.min(1, (now - started) / duration);
          const eased = 1 - Math.pow(1 - progress, 3);
          setDisplay(Math.round(value * eased));
          if (progress < 1) raf = requestAnimationFrame(tick);
        };
        raf = requestAnimationFrame(tick);
      },
      { threshold: 0.5 },
    );
    observer.observe(el);
    return () => {
      observer.disconnect();
      cancelAnimationFrame(raf);
    };
  }, [value]);

  return (
    <span ref={ref} className={className}>
      {prefix}
      {display}
    </span>
  );
}
