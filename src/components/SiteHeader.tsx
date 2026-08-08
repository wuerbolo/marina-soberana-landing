export default function SiteHeader() {
  return (
    // Page base rather than a panel tone: this is a thin utility strip sitting
    // directly above the hero's night gradient, and a third colour there read as
    // a stray band instead of part of the page.
    <div className="border-b border-line bg-background px-[clamp(20px,5vw,40px)] py-3">
      <div className="mx-auto flex max-w-[760px] justify-end">
        <a
          href="https://app.escuelasoberana.com/login"
          className="text-[11px] font-medium uppercase tracking-[0.16em] text-muted transition-colors hover:text-accent-link"
        >
          ¿Ya eres alumna? Accede aquí
        </a>
      </div>
    </div>
  );
}
