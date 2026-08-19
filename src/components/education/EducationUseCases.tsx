export function EducationUseCases() {
  const cases = [
    {
      id: "1",
      title: "Capstone & Thesis Defenses",
      desc: "Ensure deep understanding and original work through identity-verified oral reasoning.",
    },
    {
      id: "2",
      title: "Professional Readiness Orals",
      desc: "Prepare students for high-stakes scenarios by testing their ability to reason under pressure without a script.",
    },
    {
      id: "3",
      title: "High-Risk Assignment Spot-Checks",
      desc: "Deter AI-driven shortcuts by requiring a live verbal defense of critical written submissions.",
    },
    {
      id: "4",
      title: "Verified Collaborative Debriefs",
      desc: "Confirm individual contribution and conceptual alignment in group projects through structured AI dialogues.",
    },
  ];

  return (
    <section className="relative py-10 md:py-12 bg-transparent overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10 max-w-7xl">
        <div className="text-center mb-10">
          <div className="mb-4">
            <span className="inline-block py-1.5 px-4 rounded-full bg-[#EAF1FE] border border-[#3370F7]/20 text-[#3370F7] font-bold text-xs tracking-widest uppercase">
              Use Cases
            </span>
          </div>
          <h2 className="font-serif text-3xl md:text-5xl font-bold text-[#1F2A44]">
            Strategic Cognitive Verification
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 relative">
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-slate-300/60 to-transparent -translate-x-1/2 pointer-events-none" />

          <div className="space-y-6">
            {cases.slice(0, 2).map((item, i) => (
              <div
                key={item.id}
               
               
               
               
                className="flex flex-col sm:flex-row sm:items-start gap-6 group rounded-3xl border border-slate-200/60 bg-white p-8 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 shadow-md shadow-blue-900/5"
              >
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#3370F7] text-white flex items-center justify-center font-bold text-lg shadow-lg shadow-[#3370F7]/20 group-hover:scale-105 transition-transform duration-300">
                  {item.id}
                </div>
                <div className="text-center sm:text-left">
                  <h3 className="text-xl font-bold text-[#1F2A44] mb-3 group-hover:text-[#3370F7] transition-colors duration-300 leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-[#64748B] text-base leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="space-y-6">
            {cases.slice(2, 4).map((item, i) => (
              <div
                key={item.id}
               
               
               
               
                className="flex flex-col sm:flex-row sm:items-start gap-6 group rounded-3xl border border-slate-200/60 bg-white p-8 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 shadow-md shadow-blue-900/5"
              >
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#F58022] text-white flex items-center justify-center font-bold text-lg shadow-lg shadow-[#F58022]/20 group-hover:scale-105 transition-transform duration-300">
                  {item.id}
                </div>
                <div className="text-center sm:text-left">
                  <h3 className="text-xl font-bold text-[#1F2A44] mb-3 group-hover:text-[#F58022] transition-colors duration-300 leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-[#64748B] text-base leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
