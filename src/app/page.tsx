import dynamic from "next/dynamic";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/home/sections/HeroSection";
import { createPageMetadata } from "@/lib/site-metadata";

export const metadata = createPageMetadata({
  title: "SocraticMetric AI | Verify Authentic Understanding in the AI Era",
  description:
    "Written output is no longer proof of understanding. Socratic Metric™ verifies live cognition through oral assessment for education, enterprise, and government.",
  path: "/",
  absoluteTitle: true,
});

// Lazy load components that are not in the initial viewport
const ThePlatform = dynamic(() => import("@/components/home/sections/ThePlatform").then(mod => mod.ThePlatform));
const DemoVideo = dynamic(() => import("@/components/home/sections/DemoVideo").then(mod => mod.DemoVideo));
const HowItWorks = dynamic(() => import("@/components/home/sections/HowItWorks").then(mod => mod.HowItWorks));
const HighStakes = dynamic(() => import("@/components/home/sections/HighStakes").then(mod => mod.HighStakes));
const FaqSection = dynamic(() => import("@/components/home/sections/FaqSection").then(mod => mod.FaqSection));
const ContactSection = dynamic(() => import("@/components/home/sections/ContactSection").then(mod => mod.ContactSection));

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-[#F1F5F9] text-[#1F2A44] overflow-x-hidden font-sans">
      <Navbar />

      <main className="flex-1">
        {/* Load Hero immediately for LCP (Largest Contentful Paint) */}
        <HeroSection />

        {/* Lazy load the rest in order */}
        <HighStakes />
        <ThePlatform />
        <DemoVideo />
        <HowItWorks />
        <FaqSection />
        <ContactSection />
      </main>

      <Footer />
    </div>
  );
}
