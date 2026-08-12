import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { HeroSection } from '@/components/patents/HeroSection';
import { ScienceSection } from '@/components/patents/ScienceSection';
import { CognitiveScienceSection } from '@/components/patents/CognitiveScienceSection';
import { CTASection } from '@/components/patents/CTASection';
import { createPageMetadata } from '@/lib/site-metadata';

export const metadata = createPageMetadata({
  title: "Patents",
  description:
    "The science and IP behind Socratic Metric. Backed by extensive cognitive research and issued US patents in oral verification.",
  path: "/patents",
});

export default function PatentsPage() {
  return (
    <main className="min-h-screen bg-[#F0F6FF]">
      <Navbar />
      <div className="flex-1">
        <HeroSection />
        <ScienceSection />
        <CognitiveScienceSection />
        <CTASection />
      </div>
      <Footer />
    </main>
  );
}
