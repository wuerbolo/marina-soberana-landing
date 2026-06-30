import FinalCTA from "@/components/FinalCTA";
import Hero from "@/components/Hero";
import OutcomesList from "@/components/OutcomesList";
import ProblemSection from "@/components/ProblemSection";
import ProgramPhases from "@/components/ProgramPhases";
import ProgramStructure from "@/components/ProgramStructure";
import QualifierList from "@/components/QualifierList";
import ReadySection from "@/components/ReadySection";
import TestimonialStat from "@/components/TestimonialStat";

export default function Home() {
  return (
    <main>
      <Hero />
      <ProblemSection />
      <ReadySection />
      <ProgramStructure />
      <ProgramPhases />
      <QualifierList />
      <OutcomesList />
      <TestimonialStat />
      <FinalCTA />
    </main>
  );
}
