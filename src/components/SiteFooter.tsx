import Link from "next/link";

/**
 * Dark, matching Marina's reference — the page ends on its deepest tone rather
 * than fading back to cream under the closing CTA card.
 *
 * The room the fixed CTA bar needs is reserved by StickyCtaBar's own spacer,
 * which carries this same background so the two read as one block.
 */
export default function SiteFooter() {
  return (
    <footer className="bg-dark px-[clamp(20px,5vw,40px)] py-[clamp(34px,6vw,48px)] text-on-dark-quiet">
      <div className="mx-auto flex max-w-[960px] flex-col items-center gap-4 text-[12.5px] font-light uppercase tracking-[0.02em] md:flex-row md:justify-between">
        <p className="text-center md:text-left">
          © {new Date().getFullYear()} Soberana · Máster de Registros Akáshicos · Marina Romés
        </p>
        <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2">
          <Link href="/aviso-legal" className="transition-colors hover:text-accent-soft">
            Aviso legal
          </Link>
          <Link href="/privacidad" className="transition-colors hover:text-accent-soft">
            Privacidad
          </Link>
          <Link href="/cookies" className="transition-colors hover:text-accent-soft">
            Cookies
          </Link>
          <Link href="/terminos" className="transition-colors hover:text-accent-soft">
            Términos
          </Link>
          <a
            href="https://app.escuelasoberana.com/login"
            className="transition-colors hover:text-accent-soft"
          >
            Acceder
          </a>
        </nav>
      </div>
    </footer>
  );
}
