import { Button } from "@/components/ui/Button";
import Link from "next/link";
import { BackgroundBeams } from "@/components/ui/background-beams";

export function ContactSection() {
  return (
    <section id="contact" className="relative py-24 md:py-32 bg-white text-center overflow-hidden">
      <BackgroundBeams />
      <div className="container mx-auto px-4 sm:px-6 md:px-12 relative z-10">
        <div className="max-w-3xl mx-auto space-y-6 md:space-y-8 p-8 md:p-12 rounded-3xl bg-white/60 backdrop-blur-lg border border-white/50 shadow-2xl ring-1 ring-[#EAF1FE]">
          <h2 className="font-sans text-3xl sm:text-4xl md:text-5xl font-bold text-[#1F2A44] leading-tight">
            Verify Understanding.<br className="hidden sm:block" />
            Not Documents.
          </h2>
          <p className="text-base md:text-lg text-[#85756F] leading-relaxed">
            See how Socratic Metric™ transforms compliance, learning, and operational readiness.
          </p>
          <div className="pt-2 md:pt-4">
            <Link href="/request-demo" className="inline-block w-full sm:w-auto">
              <Button size="lg" className="w-full sm:w-auto px-10 h-14 text-lg rounded-lg bg-[#F58022] text-white hover:bg-[#D16D1A] shadow-lg shadow-orange-200/50 transition-all font-medium">
                Request a Demo
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
