import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ScienceHero } from "@/components/science/ScienceHero";
import { ScienceChallengeSolution } from "@/components/science/ScienceChallengeSolution";
import { SciencePrinciples } from "@/components/science/SciencePrinciples";
import { ScienceEvidence } from "@/components/science/ScienceEvidence";
import { SciencePlatform } from "@/components/science/SciencePlatform";
import { ScienceAIReplication } from "@/components/science/ScienceAIReplication";
import { ContactSection } from "@/components/home/sections/ContactSection";

export const metadata = {
  title: 'Science | SocraticMetric AI',
  description: 'The cognitive neuroscience behind SocraticMetric’s oral verification platform.',
};

export default function SciencePage() {
  return (
    <main className="min-h-screen bg-[#F8FAFC]">
      <Navbar />
      <div className="flex-1">
        <ScienceHero />
        <ScienceChallengeSolution />
        <SciencePrinciples />
        <ScienceEvidence />
        <SciencePlatform />
        <ScienceAIReplication />
        <ContactSection />
      </div>
      <Footer />
    </main>
  );
}