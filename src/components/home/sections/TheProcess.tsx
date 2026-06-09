import Image from "next/image";

const steps = [
  {
    number: "01",
    title: "Context & Material Curation",
    description:
      "Upload your documentation, curriculum, or compliance materials. Socratic Metric ingests and structures the content as the assessment foundation.",
  },
  {
    number: "02",
    title: "Oral Question Presentation",
    description:
      "Candidates receive targeted oral questions — dynamically generated from the curated material — delivered in real time.",
  },
  {
    number: "03",
    title: "Semantic Alignment & Adaptive Questioning",
    description:
      "Each response is semantically analyzed. Follow-up questions adapt in real time, probing deeper based on what the candidate says.",
  },
  {
    number: "04",
    title: "Active Oral Response Generation",
    description:
      "Candidates articulate their answers verbally, demonstrating genuine comprehension that cannot be faked with AI-generated text.",
  },
  {
    number: "05",
    title: "Iterative Refinement Loops",
    description:
      "The system cycles through rounds of questioning until understanding depth is confirmed or gaps are clearly identified.",
  },
  {
    number: "06",
    title: "Automated Evaluation & Audit-Ready Records",
    description:
      "Every session is automatically scored and logged with tamper-proof, audit-ready records for compliance and reporting.",
  },
];

export function TheProcess() {
  return (
    <section
      id="the-process"
      aria-label="How Socratic Metric Works"
      className="relative pt-8 pb-16 md:pt-10 md:pb-20 overflow-hidden"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[600px] bg-gradient-radial from-[#3370F7]/6 via-transparent to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[400px] bg-gradient-radial from-[#F58022]/5 via-transparent to-transparent rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 md:px-12 max-w-7xl relative">
        {/* ── Section Header ── */}
        <div className="text-center mb-8 md:mb-10 space-y-4 max-w-3xl mx-auto">
          <span className="inline-block py-1.5 px-4 rounded-full bg-[#EAF1FE] border border-[#3370F7]/20 text-[#3370F7] font-bold text-xs tracking-widest uppercase">
            The Process
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-[#1F2A44] leading-tight tracking-tight">
            How Socratic Metric{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#3370F7] to-[#6B9BFF]">
              Works
            </span>
          </h2>
          <p className="text-slate-500 text-base md:text-lg leading-relaxed">
            A seamless, adaptive workflow that transforms static documentation
            into dynamic, real-time verification.
          </p>
        </div>

        {/* ── Workflow Diagram ── */}
        <div className="flex items-center justify-center mb-10 md:mb-12">
          <Image
            src="/img/homepage/sm-flow.png"
            alt="Socratic Metric end-to-end workflow: from Context Curation to Audit-Ready Records"
            width={950}
            height={642}
            className="w-full max-w-[900px] h-auto object-contain"
            priority={false}
          />
        </div>

        {/* ── Step Cards ── */}
        <div className="flex overflow-x-auto snap-x snap-mandatory gap-4 md:gap-6 pb-6 lg:pb-0 lg:grid lg:grid-cols-3 -mx-6 px-6 lg:mx-0 lg:px-0 scrollbar-none">
          {steps.map((step, i) => (
            <div
              key={i}
              className="group relative bg-white rounded-2xl p-5 md:p-6 border border-slate-100/80 hover:border-[#3370F7]/30 shadow-sm hover:shadow-lg hover:shadow-[#3370F7]/8 transition-all duration-300 snap-center shrink-0 w-[85vw] sm:w-[45vw] lg:w-auto"
            >
              {/* Hover glow */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#3370F7]/0 to-[#3370F7]/0 group-hover:from-[#EAF1FE]/60 group-hover:to-transparent transition-all duration-300 pointer-events-none" />

              <div className="relative">
                {/* Step number badge */}
                <div className="flex items-center gap-3 mb-4">
                  <span className="inline-flex items-center justify-center w-9 h-9 rounded-xl bg-gradient-to-br from-[#3370F7] to-[#5B8EFF] text-white text-sm font-bold shadow-md shadow-[#3370F7]/30 flex-shrink-0">
                    {step.number}
                  </span>
                  {/* Connector line (except last in row) */}
                  <div className="flex-1 h-px bg-gradient-to-r from-[#3370F7]/20 to-transparent" />
                </div>

                <h3 className="text-base font-semibold text-[#1F2A44] mb-2 leading-snug">
                  {step.title}
                </h3>
                <p className="text-sm text-slate-500 leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Custom style for scrollbar hiding */}
        <style dangerouslySetInnerHTML={{__html: `
          .scrollbar-none::-webkit-scrollbar {
            display: none;
          }
          .scrollbar-none {
            -ms-overflow-style: none;
            scrollbar-width: none;
          }
        `}} />
      </div>
    </section>
  );
}
