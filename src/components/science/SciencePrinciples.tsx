"use client";

import { motion } from "framer-motion";
import { Brain, Focus, Ear } from "lucide-react";

export function SciencePrinciples() {
  const principles = [
    {
      icon: <Brain className="w-8 h-8 text-[#F58022]" />,
      bg: "bg-orange-50",
      title: "The Production Effect",
      desc: "Speaking information aloud creates significantly stronger memory traces than reading silently. When students vocalize content, the brain encodes it through multiple pathways: visual recognition, motor planning for articulation, auditory processing of self-generated speech, and semantic integration. This multimodal encoding creates redundant neural pathways that enhance both immediate comprehension and long-term retention. MacLeod and colleagues' research (2010, 2012, 2018) consistently demonstrates this advantage across diverse populations and testing conditions."
    },
    {
      icon: <Focus className="w-8 h-8 text-[#3370F7]" />,
      bg: "bg-blue-50",
      title: "Attention Anchoring Through Embodiment",
      desc: "Silent reading relies entirely on internal attention control, which the mind easily abandons. Oral reading anchors attention through the physical act of vocal production. Students must synchronize visual processing, motor execution, and auditory monitoring, creating what neuroscientists call \"temporal coupling.\" This coordination leaves minimal cognitive bandwidth for distraction, transforming divided attention into embodied focus. The motor involvement actually enhances sustained attention rather than adding cognitive burden."
    },
    {
      icon: <Ear className="w-8 h-8 text-emerald-600" />,
      bg: "bg-emerald-50",
      title: "Real-Time Self-Monitoring and Error Correction",
      desc: "Speaking activates the brain's auditory feedback loop, the same system used in natural conversation. Students hear themselves articulate concepts, detect misunderstandings as they speak, and correct errors in real time. This \"internal teacher\" effect operates continuously during oral engagement. Silent readers lack this external feedback mechanism; they cannot identify comprehension gaps until explicitly tested. Oral readers literally hear what they understand and what they don't yet grasp."
    }
  ];

  return (
    <section className="py-20 md:py-32 bg-[#F8FAFC] relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 relative z-10 max-w-7xl">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="h-px w-12 bg-[#F58022]" />
            <span className="text-[#F58022] font-bold text-sm tracking-widest uppercase">Cognitive Neuroscience</span>
            <div className="h-px w-12 bg-[#F58022]" />
          </div>
          <h2 className="font-serif text-3xl md:text-5xl font-bold text-[#1F2A44] leading-tight mb-6">
            The Science Behind Oral Learning
          </h2>
          <p className="text-lg text-[#64748B] leading-relaxed">
            Three converging principles from cognitive neuroscience support oral assessment.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {principles.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white p-8 md:p-10 rounded-3xl border border-slate-100 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1"
            >
              <div className={`w-16 h-16 flex items-center justify-center rounded-2xl ${item.bg} mb-8`}>
                {item.icon}
              </div>
              <h3 className="text-xl font-bold text-[#1F2A44] mb-4 leading-snug">{item.title}</h3>
              <p className="text-[#64748B] leading-relaxed text-base">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}