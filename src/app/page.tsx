import AntesDeDecidir from "@/components/AntesDeDecidir";
import Credenciales from "@/components/Credenciales";
import Detalles from "@/components/Detalles";
import Enfoque from "@/components/Enfoque";
import Hero from "@/components/Hero";
import Inversion from "@/components/Inversion";
import Logros from "@/components/Logros";
import ParaTi from "@/components/ParaTi";
import SobreMi from "@/components/SobreMi";
import TestimoniosAlumnas from "@/components/TestimoniosAlumnas";
import TestimoniosAlumnas2 from "@/components/TestimoniosAlumnas2";

export default function Home() {
  return (
    <main>
      <Hero />
      <ParaTi />
      <SobreMi />
      <Credenciales />
      <Logros />
      <Enfoque />
      <TestimoniosAlumnas />
      <Detalles />
      <TestimoniosAlumnas2 />
      <AntesDeDecidir />
      <Inversion />
    </main>
  );
}
