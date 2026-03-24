import dynamic from "next/dynamic";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/home/sections/HeroSection";

// Lazy load components that are not in the initial viewport
const TheNewRisk = dynamic(() => import("@/components/home/sections/TheNewRisk").then(mod => mod.TheNewRisk));
const ThePlatform = dynamic(() => import("@/components/home/sections/ThePlatform").then(mod => mod.ThePlatform));
const DemoVideo = dynamic(() => import("@/components/home/sections/DemoVideo").then(mod => mod.DemoVideo));
const HowItWorks = dynamic(() => import("@/components/home/sections/HowItWorks").then(mod => mod.HowItWorks));
const HighStakes = dynamic(() => import("@/components/home/sections/HighStakes").then(mod => mod.HighStakes));
const ContactSection = dynamic(() => import("@/components/home/sections/ContactSection").then(mod => mod.ContactSection));

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-[#F5F5F5] text-[#1F2A44] overflow-x-hidden font-sans">
      <Navbar />

      <main className="flex-1">
        {/* Load Hero immediately for LCP (Largest Contentful Paint) */}
        <HeroSection />

        {/* Lazy load the rest in order */}
        <TheNewRisk />
        <ThePlatform />
        <DemoVideo />
        <HowItWorks />
        <HighStakes />
        <ContactSection />
      </main>

      <Footer />
    </div>
  );
}
