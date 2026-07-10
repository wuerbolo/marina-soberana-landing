export const metadata = {
  title: "Política de privacidad | Soberana",
};

export default function PrivacidadPage() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-20">
      <h1 className="font-serif text-4xl font-light tracking-tight">Política de privacidad</h1>
      <p className="mt-3 text-xs uppercase tracking-widest text-muted">
        Última actualización: julio de 2026
      </p>

      <div className="mt-10 space-y-8 text-sm leading-relaxed text-foreground/90">
        <section>
          <h2 className="font-serif text-xl text-foreground">Responsable del tratamiento</h2>
          <p className="mt-2">
            Marina Romás, titular del proyecto Soberana (escuelasoberana.com /
            app.escuelasoberana.com). Para cualquier consulta sobre tus datos puedes
            escribir a{" "}
            <a href="mailto:info@marinaromes.com" className="underline hover:text-foreground">
              info@marinaromes.com
            </a>
            .
          </p>
        </section>

        <section>
          <h2 className="font-serif text-xl text-foreground">Qué datos recogemos y para qué</h2>
          <ul className="mt-2 list-disc space-y-2 pl-5">
            <li>
              <strong>Formulario de aplicación / contacto:</strong> nombre, email y teléfono,
              junto con tus respuestas de cualificación. Finalidad: valorar si el programa
              encaja contigo y, en su caso, contactarte para agendar una llamada.
            </li>
            <li>
              <strong>Alumnas matriculadas:</strong> nombre, email, y tu progreso dentro del
              programa (lecciones vistas, completadas). Finalidad: darte acceso al contenido
              de tu matrícula y llevar un seguimiento de tu progreso, que se conserva aunque
              tu matrícula caduque.
            </li>
            <li>
              <strong>Sesiones de depuración técnica (opcional):</strong> si aceptas el aviso
              de cookies, grabamos una muestra de tu navegación para detectar y arreglar
              errores. Ver{" "}
              <a href="/cookies" className="underline hover:text-foreground">
                política de cookies
              </a>
              .
            </li>
          </ul>
        </section>

        <section>
          <h2 className="font-serif text-xl text-foreground">Base legal</h2>
          <p className="mt-2">
            Ejecución de un contrato o medidas precontractuales (gestionar tu solicitud y tu
            matrícula), consentimiento (sesiones de depuración opcionales, comunicaciones de
            newsletter) e interés legítimo (mantener el servicio funcionando de forma segura).
          </p>
        </section>

        <section>
          <h2 className="font-serif text-xl text-foreground">Plazo de conservación</h2>
          <p className="mt-2">
            Los datos de solicitudes no convertidas en matrícula se conservan mientras sean
            útiles para el contacto comercial, y se eliminan a petición tuya en cualquier
            momento. Los datos de alumnas se conservan mientras dure la relación y,
            posteriormente, durante los plazos exigidos por la normativa aplicable.
          </p>
        </section>

        <section>
          <h2 className="font-serif text-xl text-foreground">Encargados del tratamiento</h2>
          <p className="mt-2">
            Usamos los siguientes proveedores para prestar el servicio, todos ellos actuando
            como encargados del tratamiento bajo sus propias garantías de seguridad:
          </p>
          <ul className="mt-2 list-disc space-y-1 pl-5">
            <li>Neon (base de datos, alojada en la UE).</li>
            <li>Hetzner (servidor y almacenamiento de los materiales del curso).</li>
            <li>Sentry (monitorización de errores técnicos).</li>
            <li>Vimeo (alojamiento de los vídeos de las lecciones).</li>
          </ul>
        </section>

        <section>
          <h2 className="font-serif text-xl text-foreground">Tus derechos</h2>
          <p className="mt-2">
            Puedes ejercer en cualquier momento tus derechos de acceso, rectificación,
            supresión, oposición, portabilidad y limitación del tratamiento escribiendo a{" "}
            <a href="mailto:info@marinaromes.com" className="underline hover:text-foreground">
              info@marinaromes.com
            </a>
            . También puedes presentar una reclamación ante la Agencia Española de Protección
            de Datos (aepd.es) si consideras que tus derechos no han sido atendidos.
          </p>
        </section>

        <p className="text-xs text-muted">
          Este texto es un borrador razonable, no asesoría legal. Está pendiente de revisión
          por Marina o por un profesional legal.
        </p>
      </div>
    </main>
  );
}
