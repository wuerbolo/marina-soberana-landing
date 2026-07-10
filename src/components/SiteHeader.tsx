export default function SiteHeader() {
  return (
    <div className="border-b border-line">
      <div className="mx-auto flex max-w-3xl justify-end px-6 py-3">
        <a
          href="https://app.escuelasoberana.com/login"
          className="text-xs uppercase tracking-widest text-muted hover:text-foreground"
        >
          ¿Ya eres alumna? Accede aquí
        </a>
      </div>
    </div>
  );
}
