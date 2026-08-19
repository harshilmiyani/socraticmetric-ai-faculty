export function EducationSolution() {
  return (
    <section
      id="how-it-works"
      className="relative py-10 md:py-12 bg-transparent overflow-hidden"
    >

      <div className="container mx-auto px-6 md:px-12 relative z-10 max-w-7xl">
        <div className="text-center mb-10 max-w-4xl mx-auto">
          <div className="mb-4">
            <span className="inline-block py-1.5 px-4 rounded-full bg-[#EAF1FE] border border-[#3370F7]/20 text-[#3370F7] font-bold text-xs tracking-widest uppercase">
              How It Works
            </span>
          </div>
          <h2 className="font-serif text-3xl md:text-5xl font-bold text-[#1F2A44] leading-tight">
            Verifying Authentic Comprehension Through Dialogue
          </h2>
        </div>

        <div
          className="max-w-5xl mx-auto overflow-hidden bg-transparent"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img 
            src="/img/educationpage/how-it-works.png" 
            alt="How Socratic Metric Works: Verifying authentic comprehension through dialogue"
            className="w-full h-auto block"
          />
        </div>
      </div>
    </section>
  );
}
