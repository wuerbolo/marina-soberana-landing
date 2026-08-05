import AntesDeDecidir from "@/components/AntesDeDecidir";
import Credenciales from "@/components/Credenciales";
import Detalles from "@/components/Detalles";
import Dolores from "@/components/Dolores";
import Enfoque from "@/components/Enfoque";
import FinalCTA from "@/components/FinalCTA";
import Hero from "@/components/Hero";
import Logros from "@/components/Logros";
import ParaTi from "@/components/ParaTi";
import QueIncluye from "@/components/QueIncluye";
import Recorrido from "@/components/Recorrido";
import SobreMi from "@/components/SobreMi";
import TestimoniosAlumnas from "@/components/TestimoniosAlumnas";
import TestimoniosAlumnas2 from "@/components/TestimoniosAlumnas2";

export default function Home() {
  return (
    <main>
      <Hero />
      <Dolores />
      <SobreMi />
      <Credenciales />
      <Logros />
      <Enfoque />
      <TestimoniosAlumnas />
      <Recorrido />
      <ParaTi />
      <Detalles />
      <QueIncluye />
      <TestimoniosAlumnas2 />
      <AntesDeDecidir />
      <FinalCTA />
    </main>
  );
}
