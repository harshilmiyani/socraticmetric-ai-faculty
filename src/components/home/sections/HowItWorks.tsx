"use client";

export function HowItWorks() {
  return (
    <section id="how-it-works" className="pt-8 pb-8 md:pt-16 md:pb-12 bg-[#F1F5F9] relative flex flex-col items-center">
      <div className="container mx-auto px-0 md:px-12 relative z-10 w-full max-w-7xl flex flex-col items-center">
        <div className="text-center max-w-3xl mx-auto mb-8 md:mb-12">
          <h2 className="font-sans text-3xl md:text-4xl font-bold text-[#1F2A44]">How It Works</h2>
        </div>
        
        <div className="w-full flex justify-center items-center">
          <iframe 
            src="/animation/visual-4-how-it-works.html" 
            className="w-full max-w-[880px] h-[1000px] sm:h-[560px] md:h-[580px] lg:h-[600px] border-none block"
            title="How SocraticMetric Works"
            scrolling="no" 
          />
        </div>
      </div>
    </section>
  );
}
