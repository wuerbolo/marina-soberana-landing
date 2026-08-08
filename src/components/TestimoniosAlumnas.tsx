import SectionHeading from "./SectionHeading";
import TestimoniosGrid, { type TestimonioScreenshot } from "./TestimoniosGrid";

// The WhatsApp screenshots Marina supplied, in soberana-webv3's curation for
// this block. They carry no names, no avatars and no phone numbers — the only
// shot that showed a sender line is cropped below it — so shipping the image
// itself still honours "no names, no photos". Each `quote` is the verbatim
// transcription of what is legible in that screenshot and becomes its alt text.
const TESTIMONIALS: readonly TestimonioScreenshot[] = [
  {
    src: "testimonio-01.jpg",
    width: 888,
    height: 717,
    quote:
      "Hola Marina, ayer hice mi primera sesión con el método nuevo que planteamos y uffff una pasada!!! Mi clienta se quedó alucinada. Gracias gracias gracias, no sabes lo segura y a gusto que me siento haciendo las canalizaciones y meditaciones que me enseñaste. Has sido luz en mi vida. Siento tanta paz.",
  },
  {
    src: "testimonio-02.jpg",
    width: 878,
    height: 716,
    quote:
      "Hola Marina, te cuento que ya estoy haciendo sesiones a través de boca a boca cobradas y está siendo facilísimo. Me acuerdo tanto de tus clases y de todo lo que hemos trabajado... miro cuando empecé y alucino, no hace un año que terminamos. Está siendo un regalo. Gracias por todo, has sido la mejor profe!!!!",
  },
  {
    src: "testimonio-03.jpg",
    width: 874,
    height: 815,
    quote:
      "Buenos días, acabo de hacer la clase bonus de desbloqueo de dones y ha sido brutal el último ejercicio. Ahora he salido fuera, que vivo en el campo y siento los colores mucho más intensos de la naturaleza, los sonidos de los animales más afinados y una inmensa paz. Me siento distinta. Muchas gracias Marina.",
  },
  {
    src: "testimonio-04.jpg",
    width: 824,
    height: 859,
    quote:
      "Marina me has dado tantas herramientas y tan prácticas que estoy encantada. He hecho muchas formaciones pero nada como esto. Estoy flipando con las prácticas que estoy haciendo y con los resultados de mis clientes. Cada día veo más cerca mi consulta.",
  },
  {
    src: "testimonio-08.jpg",
    width: 877,
    height: 679,
    quote:
      "Por otro lado la ayuda incondicional de Marina es una de las claves del curso, su energía, su luz, su feedback de cualquier duda, su practicidad... hace que todo sea mucho más fácil. Los Registros Akáshicos, un imprescindible en mi vida a partir de ahora!",
  },
  {
    src: "testimonio-10.jpg",
    width: 875,
    height: 699,
    quote:
      "Buenos días! Yo flipé, Marina, de pensar que no sería capaz a de repente verme apuntando cosas... Es un tema de confiar en lo que te trae el cuerpo o lo que venga y recogerlo para indagar. Me encanta el proceso de preguntas, puedes testearlo todo y esto ayuda mucho a poder afinar, descartar, potenciar o lo que requiera.",
  },
  {
    src: "testimonio-11.jpg",
    width: 864,
    height: 926,
    quote:
      "Hola Marina!!! Me cuesta poner en palabras todo lo que este curso significa para mí. Más que un curso, ha sido una experiencia transformadora. Me ha permitido confiar más en mí, desbloquear aspectos que ni siquiera sabía que estaban ahí y llevarme una herramienta para toda la vida. Saber que puedo acudir a los Registros para comprender, sanar y avanzar me aporta una gran sensación de paz y bienestar.",
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

export default function TestimoniosAlumnas() {
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
