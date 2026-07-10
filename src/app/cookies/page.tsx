export const metadata = {
  title: "Política de cookies | Soberana",
};

export default function CookiesPage() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-20">
      <h1 className="font-serif text-4xl font-light tracking-tight">Política de cookies</h1>
      <p className="mt-3 text-xs uppercase tracking-widest text-muted">
        Última actualización: julio de 2026
      </p>

      <div className="mt-10 space-y-8 text-sm leading-relaxed text-foreground/90">
        <section>
          <p>
            Esta web usa muy poco almacenamiento local, y nada de ello son cookies de
            publicidad ni de rastreo entre webs. Aquí está todo lo que usamos:
          </p>
        </section>

        <section>
          <h2 className="font-serif text-xl text-foreground">
            Analítica de visitas (sin cookies)
          </h2>
          <p className="mt-2">
            Medimos visitas de forma agregada y anónima, sin usar cookies ni recoger datos
            personales. Al no identificarte ni hacer seguimiento entre sesiones, no requiere
            tu consentimiento (art. 22.2 LSSI / considerando 30 RGPD).
          </p>
        </section>

        <section>
          <h2 className="font-serif text-xl text-foreground">
            Sesiones de depuración técnica (opcional, requiere tu consentimiento)
          </h2>
          <p className="mt-2">
            Usamos Sentry Session Replay para, solo si nos das tu permiso, grabar una muestra
            de tu navegación y así detectar y arreglar errores técnicos más rápido. Se
            almacena localmente tu elección (aceptar/rechazar) para no volver a preguntarte en
            cada visita. Puedes cambiar tu elección borrando los datos de este sitio en tu
            navegador.
          </p>
          <p className="mt-2">
            Aunque hayas rechazado esta opción, seguimos usando Sentry para el registro
            técnico normal de errores (sin grabación de sesión), necesario para mantener el
            servicio funcionando de forma segura y no requiere consentimiento por ser interés
            legítimo.
          </p>
        </section>

        <section>
          <h2 className="font-serif text-xl text-foreground">Inicio de sesión (app)</h2>
          <p className="mt-2">
            El acceso al área de alumnas (app.escuelasoberana.com) usa almacenamiento local
            de tu navegador para mantener tu sesión iniciada, no cookies. Es estrictamente
            necesario para poder darte acceso a tu contenido y no requiere consentimiento.
          </p>
        </section>
      </div>
    </main>
  );
}
