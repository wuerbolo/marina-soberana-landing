export default function SiteHeader() {
  return (
    // Page base rather than a panel tone: this is a thin utility strip sitting
    // directly above the hero's night gradient, and a third colour there read as
    // a stray band instead of part of the page.
    <div className="border-b border-line bg-background">
      <div className="mx-auto flex max-w-3xl justify-end px-6 py-3">
        <a
          href="https://app.escuelasoberana.com/login"
          className="text-xs uppercase tracking-widest text-muted transition-colors hover:text-accent-hover"
        >
          ¿Ya eres alumna? Accede aquí
        </a>
      </div>
    </div>
  );
}
