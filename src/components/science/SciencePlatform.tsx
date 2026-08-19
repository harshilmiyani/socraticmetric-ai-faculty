export function SciencePlatform() {
  const steps = [
    "Oral question presentation — Engages visual-motor-auditory integration and anchors attention through embodied focus.",
    "Oral response — Activates the production effect and multimodal encoding pathways, forcing genuine semantic encoding.",
    "Iterative feedback — Provides immediate, adaptive AI-moderated guidance after each response, mirroring the brain's natural learning cycle.",
    "Authenticity verification — Even if users consult AI during preparation, articulating responses in their own voice forces true comprehension and provides identity-verified proof of learning.",
  ];

  return (
    <section className="py-10 md:py-12 bg-[#1F2A44] relative overflow-hidden text-white">

      <div className="container mx-auto px-6 md:px-12 relative z-10 max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          <div>
            <div className="mb-6">
              <span className="inline-block py-1.5 px-4 rounded-full bg-[#3370F7]/20 border border-[#4C8FD6]/30 text-[#4C8FD6] font-bold text-xs tracking-widest uppercase">
                The Platform
              </span>
            </div>
            <h2 className="font-serif text-3xl md:text-5xl font-bold leading-tight mb-6">
              Applied Neuroscience at Scale
            </h2>
            <p className="text-lg text-slate-300 leading-relaxed mb-6">
              Socratic Metric translates core neuroscientific principles into practical, scalable cognitive verification technology.
            </p>

            <div className="space-y-6">
              {steps.map((step, i) => (
                <div
                  key={i}
                 
                 
                 
                 
                  className="flex items-start gap-4"
                >
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#3370F7] flex items-center justify-center font-bold text-sm">
                    {i + 1}
                  </div>
                  <p className="text-slate-200 leading-relaxed pt-1">{step}</p>
                </div>
              ))}
            </div>

            <div
              className="mt-8 p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm"
            >
              <p className="text-slate-300 leading-relaxed">
                Deployed with over <strong className="text-white">3,000 simultaneous users</strong>,
                proving that the cognitive benefits of oral engagement can scale securely to the
                institutional level.
              </p>
            </div>
          </div>

          <div className="space-y-6">
            <div
              className="bg-white/10 backdrop-blur-md rounded-3xl p-6 md:p-8 border border-white/10"
            >
              <h3 className="font-serif text-2xl font-bold mb-4 text-[#F58022]">
                Accessibility and Implementation
              </h3>
              <p className="text-slate-300 leading-relaxed mb-4">
                The platform&apos;s advanced speech recognition accommodates diverse speech patterns and strong accents.
              </p>
              <p className="text-slate-300 leading-relaxed mb-4">
                Institutions with heavily international cohorts (over 80% non-native speakers) report marked improvements in communication skills.
              </p>
              <p className="text-slate-300 leading-relaxed">
                The untimed, conversational format eliminates traditional testing time-pressure, allowing individuals to engage fully with the material at their own pace.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}