// Transcribed from the WhatsApp screenshots Marina supplied (testimonios/testimonio-14,
// 06, 13, 05, 09, 15, 12.jpg — soberana-webv3's selection for this block, in full) —
// text only, no names or photos, per Marina. Earlier drafts trimmed or skipped quotes
// mentioning "grupo"/"plazas" (ADR-0001); business has since confirmed a looser bar for
// verbatim alumna quotes specifically (they're describing their own class experience,
// not authored marketing copy), so all seven ship untrimmed.
const TESTIMONIALS = [
  {
    quote:
      "Hola, guapa. Este proceso está siendo mucho más poderoso de lo que pensaba. Sabía que lo iba a ser, pero ¿tanto? Mi comunicación está cambiando y estoy viendo los frutos. Por ejemplo: he tenido más clientes este mes que en los 2 meses anteriores juntos que no había tenido nada. De tener la batalla perdida pensando que no iba a salir ahora a pensar que no tengo plazas. Estoy súper contenta, muchas gracias!!!",
  },
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
      "En mi caso es complicado poner palabras a lo que supone esta formación, ya que todo es tan práctico que la magia sucede de repente, no sabes cómo llegan estos cambios tan transformadores a través de las prácticas del curso pero sucede. No sé, yo es que miro atrás, que no hace tanto empezamos la formación y no soy la misma, para mí es flipante y ni encuentro y tampoco busco explicación, simplemente está sucediendo. Yo estoy encantada y agradecida de formar parte de esta formación y de este grupo.",
  },
  {
    quote:
      "Wow! Marina, acabo de ver la 2ª clase y ha sido brutal... me ha ido súper bien por el momento en el que estoy de cambios, separación, inicio de mi consulta... siento una paz, una confianza en todo brutal... ahora tiene todo sentido... es como si se abriera el mundo. Ha sido espectacular! Gracias, gracias, gracias.",
  },
  {
    quote:
      "Recomiendo Soberana al 100%. Es una formación súper práctica que te ayuda a tu día a día, a entender tu entorno familiar, laboral... A darle una vuelta a la vida y verla desde otra perspectiva diferente que no habías visto hasta ahora, con una frecuencia superior. Gracias Marina por la forma tan intensa y amorosa de explicar las cosas, por estar siempre ahí resolviendo dudas en cualquier momento.",
  },
  {
    quote:
      "Sin duda recomendaría la formación, creo que los registros te aportan algo verdaderamente maravilloso: paz, amor, gratitud, sanación... Cuando te veo a ti conectando, compartiendo con el grupo, haciendo esas sanaciones... sinceramente alucino. Me parece increíble y siento una admiración enorme. Me ha encantado compartir este proceso contigo y aprender tanto de ti. Ha sido espectacular.",
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
