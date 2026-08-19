import { Brain, Focus, Ear } from "lucide-react";

export function SciencePrinciples() {

  return (
    <section className="py-10 md:py-12 relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 relative z-10 max-w-7xl">
        <div className="text-center mb-10 max-w-3xl mx-auto">
          <div className="mb-6">
            <span className="inline-block py-1.5 px-4 rounded-full bg-orange-50 border border-orange-200 text-[#F58022] font-bold text-xs tracking-widest uppercase">
              Cognitive Neuroscience
            </span>
          </div>
          <h2 className="font-serif text-3xl md:text-5xl font-bold text-[#1F2A44] leading-tight mb-6">
            The Science Behind Oral Learning
          </h2>
        </div>

        <div
          className="max-w-5xl mx-auto rounded-3xl overflow-hidden shadow-2xl shadow-orange-900/5 border border-slate-100 bg-white"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img 
            src="/img/sciencepage/oral-learning.png" 
            alt="The Science Behind Oral Learning"
            className="w-full h-auto block"
          />
        </div>
      </div>
    </section>
  );
}