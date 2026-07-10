export const metadata = {
  title: "Términos de uso | Soberana",
};

export default function TerminosPage() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-20">
      <h1 className="font-serif text-4xl font-light tracking-tight">Términos de uso</h1>
      <p className="mt-3 text-xs uppercase tracking-widest text-muted">
        Última actualización: julio de 2026
      </p>

      <div className="mt-10 space-y-8 text-sm leading-relaxed text-foreground/90">
        <section>
          <h2 className="font-serif text-xl text-foreground">Sobre este sitio</h2>
          <p className="mt-2">
            escuelasoberana.com es el sitio informativo del programa Soberana, de Marina
            Romás. La contratación del programa no se realiza en esta web: se gestiona de
            forma personal, tras una llamada de valoración, con Marina o su equipo.
          </p>
        </section>

        <section>
          <h2 className="font-serif text-xl text-foreground">Acceso al programa</h2>
          <p className="mt-2">
            El acceso al contenido del programa (app.escuelasoberana.com) está reservado a
            alumnas con una matrícula activa. Cada matrícula tiene una vigencia de 6 meses
            desde su fecha de inicio. Tu progreso dentro del programa se conserva de forma
            permanente, aunque tu matrícula caduque.
          </p>
        </section>

        <section>
          <h2 className="font-serif text-xl text-foreground">Propiedad intelectual</h2>
          <p className="mt-2">
            Todo el contenido del programa (vídeos, audios, materiales descargables,
            metodología) es propiedad de Marina Romás. Está permitido su uso personal por la
            alumna durante la vigencia de su matrícula; no está permitida su reproducción,
            distribución o cesión a terceros sin autorización expresa.
          </p>
        </section>

        <section>
          <h2 className="font-serif text-xl text-foreground">Naturaleza del programa</h2>
          <p className="mt-2">
            El programa Soberana es un acompañamiento de evolución personal y no sustituye
            asesoramiento médico, psicológico o financiero profesional. Si estás atravesando
            una situación que requiera ese tipo de apoyo especializado, te recomendamos
            acudir a un profesional cualificado.
          </p>
        </section>

        <section>
          <h2 className="font-serif text-xl text-foreground">Contacto</h2>
          <p className="mt-2">
            Para cualquier duda sobre estas condiciones, escríbenos a{" "}
            <a href="mailto:info@marinaromes.com" className="underline hover:text-foreground">
              info@marinaromes.com
            </a>
            .
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
