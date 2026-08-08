import SectionHeading from "./SectionHeading";
import TestimoniosGrid, { type TestimonioScreenshot } from "./TestimoniosGrid";

// Second testimonial block: the confidence-and-experience quotes, supporting
// the income-led first block (see TestimoniosAlumnas for the curation logic and
// the "no names, no photos" reasoning). Quotes mentioning "grupo"/"plazas" ship
// untrimmed: verbatim alumna quotes are exempt from that word ban — ADR-0001,
// update 2026-08-07.
const TESTIMONIALS: readonly TestimonioScreenshot[] = [
  {
    src: "testimonio-06.jpg",
    width: 869,
    height: 717,
    quote:
      "Hola preciosa!!!!! La verdad es que yo estoy muy alucinada, me fascina tu acompañamiento y me siento super segura, despues de la clase 3 hay un antes y un después en mí, sin darme apenas cuenta me siento mas confiada y estoy más conectada conmigo y con la fuente. Gracias de verdad.",
  },
  {
    src: "testimonio-08.jpg",
    width: 877,
    height: 679,
    quote:
      "Por otro lado la ayuda incondicional de Marina es una de las claves del curso, su energía, su luz, su feedback de cualquier duda, su practicidad... hace que todo sea mucho más fácil. Los Registros Akáshicos, un imprescindible en mi vida a partir de ahora!",
  },
  {
    src: "testimonio-03.jpg",
    width: 874,
    height: 815,
    quote:
      "Buenos días, acabo de hacer la clase bonus de desbloqueo de dones y ha sido brutal el último ejercicio. Ahora he salido fuera, que vivo en el campo y siento los colores mucho más intensos de la naturaleza, los sonidos de los animales más afinados y una inmensa paz. Me siento distinta. Muchas gracias Marina.",
  },
  {
    src: "testimonio-11.jpg",
    width: 864,
    height: 926,
    quote:
      "Hola Marina!!! Me cuesta poner en palabras todo lo que este curso significa para mí. Más que un curso, ha sido una experiencia transformadora. Me ha permitido confiar más en mí, desbloquear aspectos que ni siquiera sabía que estaban ahí y llevarme una herramienta para toda la vida. Saber que puedo acudir a los Registros para comprender, sanar y avanzar me aporta una gran sensación de paz y bienestar.",
  },
  {
    src: "testimonio-05.jpg",
    width: 895,
    height: 1210,
    quote:
      "En mi caso es complicado poner palabras a lo que supone esta formación, ya que todo es tan práctico que la magia sucede de repente, no sabes cómo llegan estos cambios tan transformadores a través de las prácticas del curso pero sucede. No sé, yo es que miro atrás, que no hace tanto empezamos la formación y no soy la misma, para mí es flipante y ni encuentro y tampoco busco explicación, simplemente está sucediendo. Yo estoy encantada y agradecida de formar parte de esta formación y de este grupo.",
  },
  {
    src: "testimonio-15.jpg",
    width: 872,
    height: 1359,
    quote:
      "Recomiendo Soberana al 100%. Es una formación súper práctica que te ayuda a tu día a día, a entender tu entorno familiar, laboral... A darle una vuelta a la vida y verla desde otra perspectiva diferente que no habías visto hasta ahora, con una frecuencia superior. Gracias Marina por la forma tan intensa y amorosa de explicar las cosas, por estar siempre ahí resolviendo dudas en cualquier momento. Al final que tú vivas los registros así hace que nosotras también los vivamos de la misma forma. Enamoradas de los registros :). Para mí es una nueva forma de vida que ya se queda. Gracias gracias gracias!!!",
  },
  {
    src: "testimonio-12.jpg",
    width: 866,
    height: 904,
    quote:
      "Sin duda recomendaría la formación, creo que los registros te aportan algo verdaderamente maravilloso: paz, amor, gratitud, sanación... Cuando te veo a ti conectando, compartiendo con el grupo, haciendo esas sanaciones... sinceramente alucino. Me parece increíble y siento una admiración enorme. Me ha encantado compartir este proceso contigo y aprender tanto de ti. Ha sido espectacular.",
  },
  {
    // Cropped to this one message. The original shot stacked two messages and
    // showed both senders' names under a translucent highlighter stroke, which
    // left their first letters readable — the crop removes the names outright.
    src: "testimonio-07.jpg",
    width: 882,
    height: 346,
    quote:
      "A mí me ha gustado mucho, porque todo esto de limpieza me encanta y hay cosas que no sabía que hemos aprendido. Gracias, Marina, muy productiva.",
  },
];

export default function TestimoniosAlumnas2() {
  return (
    <section className="px-[clamp(20px,5vw,40px)] py-[clamp(56px,10vw,96px)]">
      <div className="mx-auto max-w-[1000px]">
        <SectionHeading
          title="Lo que dicen las alumnas de Soberana"
          subtitle="Mensajes reales de alumnas durante y después de la formación."
        />

        <TestimoniosGrid items={TESTIMONIALS} />
      </div>
    </section>
  );
}
