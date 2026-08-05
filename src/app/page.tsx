import Dolores from "@/components/Dolores";
import Enfoque from "@/components/Enfoque";
import FinalCTA from "@/components/FinalCTA";
import Hero from "@/components/Hero";
import Logros from "@/components/Logros";
import ProgramStructure from "@/components/ProgramStructure";
import QualifierList from "@/components/QualifierList";
import Recorrido from "@/components/Recorrido";
import SobreMi from "@/components/SobreMi";
import TestimonialStat from "@/components/TestimonialStat";
import TestimoniosAlumnas from "@/components/TestimoniosAlumnas";

export default function Home() {
  return (
    <main>
      <Hero />
      <Dolores />
      <SobreMi />
      <Logros />
      <Enfoque />
      <TestimoniosAlumnas />
      <Recorrido />
      <ProgramStructure />
      <QualifierList />
      <TestimonialStat />
      <FinalCTA />
    </main>
  );
}
