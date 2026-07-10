import Link from "next/link";

export default function SiteFooter() {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto flex max-w-3xl flex-col items-center gap-4 px-6 py-10 text-xs uppercase tracking-widest text-muted md:flex-row md:justify-between">
        <p>© {new Date().getFullYear()} Soberana · Marina Romés</p>
        <nav className="flex gap-6">
          <Link href="/aviso-legal" className="hover:text-foreground">
            Aviso legal
          </Link>
          <Link href="/privacidad" className="hover:text-foreground">
            Privacidad
          </Link>
          <Link href="/cookies" className="hover:text-foreground">
            Cookies
          </Link>
          <Link href="/terminos" className="hover:text-foreground">
            Términos
          </Link>
          <a
            href="https://app.escuelasoberana.com/login"
            className="hover:text-foreground"
          >
            Acceder
          </a>
        </nav>
      </div>
    </footer>
  );
}
