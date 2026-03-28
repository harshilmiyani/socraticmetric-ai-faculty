import { Metadata } from 'next';
import { HeroSection } from '@/components/patents/HeroSection';
import { StatsSection } from '@/components/patents/StatsSection';
import { ScienceSection } from '@/components/patents/ScienceSection';
import { PatentListSection } from '@/components/patents/PatentListSection';
import { CognitiveScienceSection } from '@/components/patents/CognitiveScienceSection';
import { CTASection } from '@/components/patents/CTASection';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';

export const metadata: Metadata = {
  title: 'Patents | SocraticMetric AI',
  description: 'The science and IP behind SocraticMetric’s oral verification platform. Backed by extensive cognitive research and issued US patents.',
};

export default function PatentsPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <div className="pt-24 lg:pt-32">
        <HeroSection />
        <StatsSection />
        <ScienceSection />
        <PatentListSection />
        <CognitiveScienceSection />
        <CTASection />
      </div>
      <Footer />
    </main>
  );
}
