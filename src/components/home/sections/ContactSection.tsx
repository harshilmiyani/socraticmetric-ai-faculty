import { Button } from "@/components/ui/Button";
import Link from "next/link";

export function ContactSection() {
  return (
    <section id="contact" className="py-32 bg-white text-center">
      <div className="container mx-auto px-6 md:px-12">
        <div className="max-w-3xl mx-auto space-y-8">
          <h2 className="font-sans text-4xl md:text-5xl font-bold text-[#0F2C4C] leading-tight">
            Verify Understanding.<br />
            Not Documents.
          </h2>
          <p className="text-lg text-slate-600 leading-relaxed">
            See how Socratic Metric™ transforms compliance, learning, and operational readiness.
          </p>
          <div className="pt-4">
            <Link href="#">
              <Button size="lg" className="px-10 h-14 text-lg rounded-lg bg-[#FF6B35] text-white hover:bg-[#e85d2a] shadow-lg shadow-orange-200/50 transition-all font-medium">
                Request a Demo
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
