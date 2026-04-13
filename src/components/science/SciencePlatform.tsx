"use client";

import { motion } from "framer-motion";

export function SciencePlatform() {
  const steps = [
    "Oral question presentation engages visual-motor-auditory integration and anchors attention through embodied focus",
    "Oral response generation activates production effects and multimodal encoding pathways",
    "Iterative feedback provides immediate, adaptive guidance after each response, mirroring the brain's natural learning cycle",
    "Authenticity verification ensures that even when students consult AI during preparation, articulating responses forces genuine semantic encoding"
  ];

  return (
    <section className="py-20 md:py-32 bg-[#1F2A44] relative overflow-hidden text-white">
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-0 right-0 w-[min(100vw,600px)] h-[min(100vw,600px)] bg-[#3370F7]/20 rounded-full blur-[120px] translate-x-1/4 -translate-y-1/4" />
        <div className="absolute bottom-0 left-0 w-[min(90vw,500px)] h-[min(90vw,500px)] bg-[#F58022]/10 rounded-full blur-[100px] -translate-x-1/3 translate-y-1/4" />
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10 max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="flex items-center gap-4 mb-4">
              <div className="h-px w-12 bg-[#4C8FD6]" />
              <span className="text-[#4C8FD6] font-bold text-sm tracking-widest uppercase">The Platform</span>
            </div>
            <h2 className="font-serif text-3xl md:text-5xl font-bold leading-tight mb-6">
              Applied Neuroscience at Scale
            </h2>
            <p className="text-lg text-slate-300 leading-relaxed mb-10">
              The Socratic Metric translates neuroscientific principles into practical educational technology.
            </p>

            <div className="space-y-6">
              {steps.map((step, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-start gap-4"
                >
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#3370F7] flex items-center justify-center font-bold text-sm">
                    {i + 1}
                  </div>
                  <p className="text-slate-200 leading-relaxed pt-1">{step}</p>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mt-12 p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm"
            >
              <p className="text-slate-300 leading-relaxed">
                The platform has been successfully deployed with over <strong className="text-white">3,000 simultaneous users</strong>, demonstrating that oral engagement's cognitive benefits can scale to institutional levels without compromising quality.
              </p>
            </motion.div>
          </div>

          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white/10 backdrop-blur-md rounded-3xl p-8 md:p-10 border border-white/10"
            >
              <h3 className="font-serif text-2xl font-bold mb-4 text-[#F58022]">
                Accessibility and Implementation
              </h3>
              <p className="text-slate-300 leading-relaxed mb-4">
                The platform's speech recognition accommodates diverse speech patterns, including strong accents and varied articulation styles.
              </p>
              <p className="text-slate-300 leading-relaxed mb-4">
                Institutions with predominantly international student populations (80%+ non-native English speakers) report marked improvements in students' communication skills through regular platform use.
              </p>
              <p className="text-slate-300 leading-relaxed">
                The untimed format eliminates time-pressure anxiety, allowing all students to engage fully with material at their own pace.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}