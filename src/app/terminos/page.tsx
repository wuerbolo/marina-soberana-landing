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
            Romés. La contratación del programa no se realiza en esta web: se gestiona de
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
          <h2 className="font-serif text-xl text-foreground">Derecho de desistimiento</h2>
          <p className="mt-2">
            Como consumidora, tienes derecho a desistir de tu matrícula en un plazo de 14
            días naturales desde su contratación, sin necesidad de justificar tu decisión,
            escribiendo a{" "}
            <a href="mailto:info@marinaromes.com" className="underline hover:text-foreground">
              info@marinaromes.com
            </a>
            .
          </p>
          <p className="mt-2">
            Si nos pides expresamente acceder al contenido antes de que termine ese plazo de
            14 días, y aceptas que eso implica perder tu derecho de desistimiento una vez
            hayas empezado a consultar el contenido (art. 103.m Real Decreto Legislativo
            1/2007), dejará de ser posible el desistimiento sobre la parte ya disfrutada. Te
            lo confirmaremos expresamente antes de darte acceso, para que sepas exactamente
            a qué renuncias.
          </p>
        </section>

        <section>
          <h2 className="font-serif text-xl text-foreground">Política de reembolsos</h2>
          <p className="mt-2">
            Fuera del derecho de desistimiento legal descrito arriba, no se realizan
            reembolsos una vez iniciado el acceso al programa, salvo que se acuerde algo
            distinto de forma expresa y por escrito con Marina.
          </p>
        </section>

        <section>
          <h2 className="font-serif text-xl text-foreground">Propiedad intelectual</h2>
          <p className="mt-2">
            Todo el contenido del programa (vídeos, audios, materiales descargables,
            metodología) es propiedad de Marina Romés. Está permitido su uso personal por la
            alumna durante la vigencia de su matrícula; no está permitida su reproducción,
            distribución o cesión a terceros sin autorización expresa.
          </p>
        </section>

        <section>
          <h2 className="font-serif text-xl text-foreground">Naturaleza del programa y responsabilidad</h2>
          <p className="mt-2">
            El programa Soberana es un acompañamiento de evolución personal y no sustituye
            asesoramiento médico, psicológico o financiero profesional. Si estás atravesando
            una situación que requiera ese tipo de apoyo especializado, te recomendamos
            acudir a un profesional cualificado.
          </p>
          <p className="mt-2">
            Los resultados dependen de tu implicación personal y no se garantizan. Marina
            Romés no asume responsabilidad por decisiones que tomes a partir del contenido
            del programa, ni por interrupciones del servicio ajenas a su control (por
            ejemplo, caídas de proveedores externos de alojamiento o conectividad).
          </p>
        </section>

        <section>
          <h2 className="font-serif text-xl text-foreground">Modificación de estas condiciones</h2>
          <p className="mt-2">
            Podemos actualizar estos términos para reflejar cambios legales o del servicio.
            Si hay cambios relevantes, te avisaremos por email a las alumnas con matrícula
            activa en ese momento.
          </p>
        </section>

        <section>
          <h2 className="font-serif text-xl text-foreground">Ley aplicable y jurisdicción</h2>
          <p className="mt-2">
            Estas condiciones se rigen por la legislación española. Cualquier controversia se
            someterá a los juzgados y tribunales que correspondan según la normativa de
            protección de consumidores, que en general te permite acudir a los de tu propio
            domicilio.
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
      </div>
    </main>
  );
}
