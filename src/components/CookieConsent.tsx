"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import * as Sentry from "@sentry/nextjs";

const STORAGE_KEY = "soberana-cookie-consent";

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored === "accepted") {
      Sentry.getReplay()?.start();
    } else if (stored !== "rejected") {
      setVisible(true);
    }
  }, []);

  function accept() {
    localStorage.setItem(STORAGE_KEY, "accepted");
    Sentry.getReplay()?.start();
    setVisible(false);
  }

  function reject() {
    localStorage.setItem(STORAGE_KEY, "rejected");
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-line bg-surface px-6 py-5">
      <div className="mx-auto flex max-w-3xl flex-col items-center gap-4 md:flex-row md:justify-between">
        <p className="text-sm text-foreground/90">
          Usamos una herramienta opcional de sesiones de depuración (Sentry Replay) para
          entender y arreglar errores técnicos. Puedes rechazarla sin que afecte a tu
          navegación.{" "}
          <Link href="/cookies" className="underline hover:text-foreground">
            Más información
          </Link>
          .
        </p>
        <div className="flex shrink-0 gap-3">
          <button
            onClick={reject}
            className="rounded-full border border-line px-5 py-2 text-xs uppercase tracking-widest text-muted hover:text-foreground"
          >
            Rechazar
          </button>
          <button
            onClick={accept}
            className="rounded-full bg-accent px-5 py-2 text-xs uppercase tracking-widest text-foreground hover:bg-accent-hover"
          >
            Aceptar
          </button>
        </div>
      </div>
    </div>
  );
}
