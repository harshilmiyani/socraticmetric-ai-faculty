import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { GovernmentHero } from "@/components/government/GovernmentHero";
import { GovernmentRisk } from "@/components/government/GovernmentRisk";
import { GovernmentSolution } from "@/components/government/GovernmentSolution";
import { GovernmentCompliance } from "@/components/government/GovernmentCompliance";
import { GovernmentUseCases } from "@/components/government/GovernmentUseCases";
import { GovernmentTestimonial } from "@/components/government/GovernmentTestimonial";
import { ContactSection } from "@/components/home/sections/ContactSection";

export default function GovernmentPage() {
  return (
    <div className="flex min-h-screen flex-col bg-[#F8FAFC] font-sans text-[#1F2A44] selection:bg-[#F58022]/20 selection:text-[#1F2A44] overflow-x-hidden">
      <Navbar />
      <main className="flex-1">
        <GovernmentHero />
        <GovernmentRisk />
        <GovernmentSolution />
        <GovernmentCompliance />
        <GovernmentUseCases />
        <GovernmentTestimonial />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
