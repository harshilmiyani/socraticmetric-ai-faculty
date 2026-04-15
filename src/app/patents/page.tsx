import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { HeroSection } from '@/components/patents/HeroSection';
import { StatsSection } from '@/components/patents/StatsSection';
import { ScienceSection } from '@/components/patents/ScienceSection';
import { PatentListSection } from '@/components/patents/PatentListSection';
import { CognitiveScienceSection } from '@/components/patents/CognitiveScienceSection';
import { CTASection } from '@/components/patents/CTASection';

export const metadata = {
  title: 'Patents | SocraticMetric AI',
  description: 'The science and IP behind SocraticMetric’s oral verification platform. Backed by extensive cognitive research and issued US patents.',
};

export default function PatentsPage() {
  return (
    <main className="min-h-screen bg-[#F8FAFC]">
      <Navbar />
      <div className="flex-1">
        <HeroSection />
        <StatsSection />
        <PatentListSection />
        <ScienceSection />
        <CognitiveScienceSection />
        <CTASection />
      </div>
      <Footer />
    </main>
  );
}
