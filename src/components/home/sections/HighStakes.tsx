"use client";

import { useState } from "react";
import { GraduationCap, Building, Shield } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

export function HighStakes() {
  const [activeTab, setActiveTab] = useState("higher-ed");

  const tabs = [
    {
      id: "higher-ed",
      label: "Higher Education",
      icon: GraduationCap,
      content: {
        title: "Higher Education",
        description: "Verify authentic comprehension beyond AI-written submissions. Restore academic integrity through oral verification.",
        points: [
          "Academic integrity verification",
          "Oral exam administration",
          "Learning outcome assessment",
          "Accreditation compliance"
        ]
      }
    },
    {
      id: "enterprise",
      label: "Enterprise",
      icon: Building,
      content: {
        title: "Enterprise",
        description: "Ensure your workforce can articulate and apply critical policies and procedures beyond documentation.",
        points: [
          "Compliance verification",
          "Training effectiveness",
          "Knowledge retention",
          "Operational readiness"
        ]
      }
    },
    {
      id: "government",
      label: "Government & Defense",
      icon: Shield,
      content: {
        title: "Government & Defense",
        description: "Verify operator competency under high-stakes conditions with audit-ready verification records.",
        points: [
          "Mission-critical verification",
          "Security clearance validation",
          "Doctrine comprehension",
          "Audit trail compliance"
        ]
      }
    }
  ];

  return (
    <section className="py-24 bg-[#F5F5F5]/50 relative overflow-hidden">
      {/* Glass Background Blobs */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
        <div className="absolute top-[10%] right-[10%] w-[500px] h-[500px] bg-[#EAF1FE]/40 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-[10%] left-[10%] w-[500px] h-[500px] bg-[#F58022]/20 rounded-full blur-[100px]"></div>
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="text-center mb-12">
          <span className="text-[#3370F7] font-bold text-xs tracking-widest uppercase mb-4 block">
            BUILT FOR HIGH-STAKES ENVIRONMENTS
          </span>
        </div>

        {/* Tabbed Interface Container with Glassmorphism */}
        <div className="max-w-5xl mx-auto rounded-2xl overflow-hidden shadow-2xl bg-white/40 backdrop-blur-xl border border-white/60 ring-1 ring-white/50 w-full">
          
          {/* Tabs Header */}
          <div className="grid grid-cols-1 md:grid-cols-3 border-b border-white/20 bg-white/50">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={cn(
                  "py-5 px-6 text-sm md:text-base font-bold transition-all duration-300 flex items-center justify-center gap-2 relative overflow-hidden",
                  activeTab === tab.id
                    ? "text-white bg-[#1F2A44] shadow-inner"
                    : "text-[#1F2A44] hover:bg-white/60 hover:text-[#F58022]"
                )}
              >
                {/* Active Tab Indicator/Glow (Subtle) */}
                {activeTab === tab.id && (
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-20" />
                )}
                {tab.label}
              </button>
            ))}
          </div>

          {/* Tab Content Area */}
          <div className="p-8 md:p-12 min-h-[500px] md:min-h-[400px] bg-white/60 backdrop-blur-md">
            <AnimatePresence mode="wait">
              {tabs.map((tab) => (
                tab.id === activeTab && (
                  <motion.div
                    key={tab.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                    className="grid md:grid-cols-2 gap-12 items-center h-full"
                  >
                    {/* Left Column: Text Content */}
                    <div className="flex flex-col h-full justify-center space-y-8">
                      <div>
                         <h3 className="text-2xl md:text-3xl font-bold text-[#1F2A44] mb-4 drop-shadow-sm">
                          {tab.content.title}
                        </h3>
                        <p className="text-base md:text-lg text-[#85756F] leading-relaxed font-medium">
                          {tab.content.description}
                        </p>
                      </div>
                      
                      <ul className="space-y-4">
                        {tab.content.points.map((point, idx) => (
                          <li key={idx} className="flex items-start gap-3 text-[#85756F] font-medium text-sm md:text-base group">
                            <span className="mt-1.5 h-2 w-2 rounded-full bg-[#F58022] flex-shrink-0 shadow-sm group-hover:scale-125 transition-transform" />
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Right Column: Visualization Placeholder (Glass Card) */}
                    <div className="relative h-[250px] md:h-[350px] w-full rounded-xl border border-white/60 bg-white/40 backdrop-blur-md shadow-inner flex items-center justify-center overflow-hidden group">
                      <div className="absolute inset-0 bg-gradient-to-br from-white/40 to-transparent opacity-50" />
                      
                      <div className="text-center p-6 relative z-10">
                         <div className="w-16 h-16 rounded-full bg-white/80 shadow-md flex items-center justify-center mx-auto mb-4 text-[#1F2A44] group-hover:scale-110 transition-transform duration-500">
                            <tab.icon className="h-8 w-8" />
                         </div>
                         <p className="text-[#85756F] font-medium text-xs uppercase tracking-wide">
                           [Visualization / Data Chart]
                         </p>
                      </div>

                       {/* Decorative Elements */}
                       <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-[#F58022]/10 rounded-full blur-2xl group-hover:bg-[#F58022]/20 transition-colors duration-500" />
                       <div className="absolute -top-10 -left-10 w-32 h-32 bg-[#1F2A44]/5 rounded-full blur-2xl" />
                    </div>
                  </motion.div>
                )
              ))}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
