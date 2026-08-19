export function GovernmentUseCases() {
  const cases = [
    {
      id: "1",
      title: "Pre-launch readiness confirmation and failure cascade articulation",
    },
    {
      id: "2",
      title: "Systems engineering comprehension and tradeoff defense",
    },
    {
      id: "3",
      title: "Simulation-based certification and re-certification assessments",
    },
    {
      id: "4",
      title: "Autonomous system oversight and anomaly response strategy verification",
    },
  ];

  return (
    <section className="relative py-20 md:py-32 bg-white overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10 max-w-7xl">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="h-px w-12 bg-[#3370F7]" />
            <span className="text-[#3370F7] font-bold text-sm tracking-widest uppercase">Use Cases</span>
            <div className="h-px w-12 bg-[#3370F7]" />
          </div>
          <h2 className="font-serif text-3xl md:text-5xl font-bold text-[#1F2A44]">
            Government and aerospace mission applications
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 relative max-w-5xl mx-auto">
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-slate-200 to-transparent -translate-x-1/2 pointer-events-none" />

          <div className="space-y-8">
            {cases.slice(0, 2).map((item, i) => (
              <div
                key={item.id}
               
               
               
               
                className="flex flex-col sm:flex-row sm:items-center gap-6 group rounded-3xl border border-slate-100 bg-[#F8FAFC] p-8 hover:bg-white hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
              >
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#3370F7] text-white flex items-center justify-center font-bold text-lg shadow-lg shadow-[#3370F7]/20 group-hover:scale-105 transition-transform duration-300">
                  {item.id}
                </div>
                <div className="text-center sm:text-left">
                  <h3 className="text-xl font-bold text-[#1F2A44] group-hover:text-[#3370F7] transition-colors duration-300 leading-snug">
                    {item.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>

          <div className="space-y-8">
            {cases.slice(2, 4).map((item, i) => (
              <div
                key={item.id}
               
               
               
               
                className="flex flex-col sm:flex-row sm:items-center gap-6 group rounded-3xl border border-slate-100 bg-[#F8FAFC] p-8 hover:bg-white hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
              >
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#F58022] text-white flex items-center justify-center font-bold text-lg shadow-lg shadow-[#F58022]/20 group-hover:scale-105 transition-transform duration-300">
                  {item.id}
                </div>
                <div className="text-center sm:text-left">
                  <h3 className="text-xl font-bold text-[#1F2A44] group-hover:text-[#F58022] transition-colors duration-300 leading-snug">
                    {item.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
