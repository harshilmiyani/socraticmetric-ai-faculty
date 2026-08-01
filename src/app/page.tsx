import dynamic from "next/dynamic";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/home/sections/HeroSection";
import { IndustrySelectDialog } from "@/components/home/IndustrySelectDialog";
import { createPageMetadata } from "@/lib/site-metadata";
import { HomeJsonLd } from "@/components/seo/HomeJsonLd";

export const metadata = createPageMetadata({
  title: "SocraticMetric AI | Verify Authentic Understanding in the AI Era",
  description:
    "Written output is no longer proof of understanding. Socratic Metric™ verifies live cognition through oral assessment for education, enterprise, and government.",
  path: "/",
  absoluteTitle: true,
});

// Lazy load components that are not in the initial viewport
const ThePlatform = dynamic(() => import("@/components/home/sections/ThePlatform").then(mod => mod.ThePlatform));
const TheProcess = dynamic(() => import("@/components/home/sections/TheProcess").then(mod => mod.TheProcess));
const Testimonials = dynamic(() => import("@/components/home/sections/Testimonials").then(mod => mod.Testimonials));
const LogoClouds = dynamic(() => import("@/components/home/sections/LogoClouds").then(mod => mod.LogoClouds));

const FaqSection = dynamic(() => import("@/components/home/sections/FaqSection").then(mod => mod.FaqSection));
const ContactSection = dynamic(() => import("@/components/home/sections/ContactSection").then(mod => mod.ContactSection));
const ValueComparison = dynamic(() => import("@/components/home/sections/ValueComparison").then(mod => mod.ValueComparison));
// const IndustryShortcuts = dynamic(() => import("@/components/home/sections/IndustryShortcuts").then(mod => mod.IndustryShortcuts));
export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-[#F0F6FF] text-[#1F2A44] overflow-x-hidden font-sans">
      <Navbar />

      <main className="flex-1">
        {/* Structured data schemas for rich snippets (FAQ, Video, Software) */}
        <HomeJsonLd />

        {/* Industry selector dialog — first homepage visit only */}
        <IndustrySelectDialog />

        {/* Load Hero immediately for LCP (Largest Contentful Paint) */}
        <HeroSection />

        {/* Lazy load the rest in order */}
        {/* Built for Every Sector — temporarily hidden */}
        {/* <IndustryShortcuts /> */}

        {/* Logo Cloud — social proof */}
        <LogoClouds />

        <ValueComparison />
        <ThePlatform />
        <TheProcess />
        <Testimonials />
        <FaqSection />
        <ContactSection />
      </main>

      <Footer />
    </div>
  );
}
