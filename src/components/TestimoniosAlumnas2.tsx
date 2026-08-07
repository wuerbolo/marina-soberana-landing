// Transcribed from the WhatsApp screenshots Marina supplied (testimonios/testimonio-06,
// 13, 05, 09, 15.jpg — soberana-webv3 revision, which re-curated this block) — text
// only, no names or photos, per Marina. testimonio-12 and testimonio-14 are in v3's own
// selection for this block but are skipped here: their wording ("de este grupo",
// "a pensar que no tengo plazas") echoes cohort/scarcity language the copy avoids
// elsewhere (ADR-0001/0002). testimonio-05 is quoted with its closing clause trimmed
// for the same reason ("...y de este grupo" dropped).
const TESTIMONIALS = [
  {
    quote:
      "Hola preciosa!!!!! La verdad es que yo estoy muy alucinada, me fascina tu acompañamiento y me siento super segura, despues de la clase 3 hay un antes y un después en mí, sin darme apenas cuenta me siento mas confiada y estoy más conectada conmigo y con la fuente. Gracias de verdad.",
  },
  {
    quote:
      "Mi objetivo principal con Soberana era encontrar la conexión que sabía que tenía pero que no llegaba a desarrollar, no sabía cómo hacerlo. A día de hoy, he encontrado gran parte de esa conexión, cada vez voy a más, y me siento más segura. He sentido avances claros, cada vez voy más rápido canalizando, lo hago de forma más normal, conecto más rápido y sobre todo confío. Estoy muy contenta. Me ayuda mucho a crear mi negocio de terapias holísticas.",
  },
  {
    quote:
      "En mi caso es complicado poner palabras a lo que supone esta formación, ya que todo es tan práctico que la magia sucede de repente, no sabes cómo llegan estos cambios tan transformadores a través de las prácticas del curso pero sucede. No sé, yo es que miro atrás, que no hace tanto empezamos la formación y no soy la misma, para mí es flipante y ni encuentro y tampoco busco explicación, simplemente está sucediendo. Yo estoy encantada y agradecida de formar parte de esta formación.",
  },
  {
    quote:
      "Wow! Marina, acabo de ver la 2ª clase y ha sido brutal... me ha ido súper bien por el momento en el que estoy de cambios, separación, inicio de mi consulta... siento una paz, una confianza en todo brutal... ahora tiene todo sentido... es como si se abriera el mundo. Ha sido espectacular! Gracias, gracias, gracias.",
  },
  {
    quote:
      "Recomiendo Soberana al 100%. Es una formación súper práctica que te ayuda a tu día a día, a entender tu entorno familiar, laboral... A darle una vuelta a la vida y verla desde otra perspectiva diferente que no habías visto hasta ahora, con una frecuencia superior. Gracias Marina por la forma tan intensa y amorosa de explicar las cosas, por estar siempre ahí resolviendo dudas en cualquier momento.",
  },
];

export default function TestimoniosAlumnas2() {
  return (
    <section className="bg-surface">
      <div className="mx-auto max-w-4xl px-6 py-20 md:py-28">
        <h2 className="text-center font-serif text-3xl font-light tracking-tight md:text-4xl">
          Más historias de transformación
        </h2>
        <p className="mx-auto mt-3 max-w-xl text-center text-base text-muted">
          Alumnas que ya están aplicando lo aprendido en Soberana.
        </p>

        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {TESTIMONIALS.map((t) => (
            <figure key={t.quote} className="rounded-2xl bg-panel p-6 shadow-card">
              <blockquote className="font-serif text-lg font-light leading-relaxed text-foreground/90">
                “{t.quote}”
              </blockquote>
              <figcaption className="mt-4 text-xs uppercase tracking-widest text-muted">
                Alumna de Soberana
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
