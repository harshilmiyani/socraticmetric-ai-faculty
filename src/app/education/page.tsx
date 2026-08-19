import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { EducationHero } from "@/components/education/EducationHero";
import { EducationRisk } from "@/components/education/EducationRisk";
import { EducationSolution } from "@/components/education/EducationSolution";
import { EducationCompliance } from "@/components/education/EducationCompliance";
import { EducationOutcomes } from "@/components/education/EducationOutcomes";
import { EducationUseCases } from "@/components/education/EducationUseCases";
import { EducationWalkthroughVideos } from "@/components/education/EducationWalkthroughVideos";
import { EducationTestimonial } from "@/components/education/EducationTestimonial";
import { ContactSection } from "@/components/home/sections/ContactSection";

export default function EducationPage() {
  return (
    <div className="flex min-h-screen flex-col bg-[#F0F6FF] font-sans text-[#1F2A44] selection:bg-[#F58022]/20 selection:text-[#1F2A44] overflow-x-hidden">
      <Navbar />
      <main className="flex-1">
        <EducationHero />
        <EducationWalkthroughVideos />
        <EducationRisk />
        <EducationSolution />
        <EducationCompliance />
        <EducationOutcomes />
        <EducationUseCases />
        <EducationTestimonial />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
