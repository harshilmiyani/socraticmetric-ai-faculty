export function EducationOutcomes() {
  const outcomes = [
    { value: "72%", label: "Reduction in suspected academic integrity violations" },
    { value: "41%", label: "Increase in faculty confidence in assessment outcomes" },
    { value: "58%", label: "Reduction in faculty time spent on integrity investigations" },
  ];

  return (
    <section className="relative py-10 md:py-12 bg-transparent overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:24px_24px] opacity-[0.15] [mask-image:radial-gradient(ellipse_80%_70%_at_50%_50%,#000_40%,transparent_100%)]" />
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10 max-w-7xl">
        <div className="text-center mb-10 space-y-4">
          <div className="mb-4">
            <span className="inline-block py-1.5 px-4 rounded-full bg-orange-50 border border-orange-200 text-[#F58022] font-bold text-xs tracking-widest uppercase">
              Outcomes
            </span>
          </div>
          <h2 className="font-serif text-3xl md:text-5xl font-bold text-[#1F2A44] leading-tight">
            Restoring Confidence in Educational Standards
          </h2>
          <p className="text-lg md:text-xl text-[#64748B] max-w-3xl mx-auto leading-relaxed">
            Our platform transforms assignments into interactive learning conversations, ensuring
            students are truly educated, not just credentialed.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {outcomes.map((item, i) => (
            <div
              key={i}
             
             
             
             
              className="bg-white p-8 rounded-3xl border border-slate-200/60 shadow-md shadow-blue-900/5 hover:shadow-lg hover:border-slate-200 transition-all duration-300 text-center flex flex-col items-center justify-center space-y-4 min-h-[220px]"
            >
              <div className="text-5xl lg:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-[#F58022] to-[#D16D1A] tracking-tight">
                {item.value}
              </div>
              <p className="text-base text-[#64748B] font-medium leading-relaxed max-w-[220px] mx-auto">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
