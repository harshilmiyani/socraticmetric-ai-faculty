import { CheckCircle } from "lucide-react";
import { BookDemoForm } from "@/components/forms/BookDemoForm";

export function ContactSection() {
  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-[#0F2C4C]">
      <div className="absolute inset-0 overflow-hidden">
         <div className="absolute top-0 left-0 w-full h-full bg-[url('/grid.svg')] opacity-5"></div>
         <div className="absolute -top-[50%] -right-[20%] w-[80%] h-[80%] rounded-full bg-[#FF6B35]/10 blur-[120px]"></div>
         <div className="absolute bottom-0 left-0 w-[50%] h-[50%] rounded-full bg-slate-100/10 blur-[120px]"></div>
      </div>
      
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8 text-white">
            <h2 className="font-serif text-4xl md:text-5xl font-bold leading-tight">
              Ready to transform how you assess?
            </h2>
            <p className="text-slate-300 text-lg max-w-md">
              Join the universities and organizations already using SocraticMetric to bring authenticity back to assessment.
            </p>
            <div className="space-y-4 pt-4">
              {[
                "Easy LMS Integration (Canvas, Blackboard)",
                "Customizable Rubrics & Feedback",
                "Enterprise-Grade Data Privacy"
              ].map((item, i) => (
                 <div key={i} className="flex items-center gap-4">
                  <div className="h-8 w-8 rounded-full bg-[#FF6B35]/20 flex items-center justify-center border border-[#FF6B35]/30">
                    <CheckCircle className="h-4 w-4 text-[#FF6B35]" />
                  </div>
                  <span className="text-slate-100">{item}</span>
                </div>
              ))}
            </div>
          </div>
          
          <BookDemoForm />
        </div>
      </div>
    </section>
  );
}
