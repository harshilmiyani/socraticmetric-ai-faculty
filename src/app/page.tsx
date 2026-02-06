import dynamic from "next/dynamic";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/home/sections/HeroSection";

// Lazy load components that are not in the initial viewport
const TrustedBy = dynamic(() => import("@/components/home/sections/TrustedBy").then(mod => mod.TrustedBy));
const ProblemSolution = dynamic(() => import("@/components/home/sections/ProblemSolution").then(mod => mod.ProblemSolution));
const HowItWorks = dynamic(() => import("@/components/home/sections/HowItWorks").then(mod => mod.HowItWorks));
const UseCases = dynamic(() => import("@/components/home/sections/UseCases").then(mod => mod.UseCases));
const ContactSection = dynamic(() => import("@/components/home/sections/ContactSection").then(mod => mod.ContactSection));

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-slate-50 text-slate-900 overflow-x-hidden">
      <Navbar />

      <main className="flex-1">
        {/* Load Hero immediately for LCP (Largest Contentful Paint) */}
        <HeroSection />

        {/* Lazy load the rest */}
        <TrustedBy />
        <ProblemSolution />
        <HowItWorks />
        <UseCases />
        <ContactSection />
      </main>

      <Footer />
    </div>
  );
}
