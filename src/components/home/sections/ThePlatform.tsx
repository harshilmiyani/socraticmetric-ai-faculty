import { Mic, RefreshCw, Repeat, ShieldCheck } from "lucide-react";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";

export function ThePlatform() {
  const features = [
    {
      title: "Oral question presentation",
      description: "Socratic Metric uses advanced text-to-speech to present scenarios organically, simulating a real conversation.",
      icon: <Mic className="h-6 w-6" />,
      className: "md:col-span-2",
      header: (
        <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-[#EAF1FE] to-[#F5F5F5] border border-[#EAF1FE] relative overflow-hidden flex items-center justify-center">
          <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(to_bottom,white,transparent)]" />
          <Mic className="h-10 w-10 text-[#3370F7]/20 relative z-10" />
        </div>
      ),
    },
    {
      title: "Adaptive real-time questioning",
      description: "The AI listens to the response and asks targeted follow-ups to probe the depth of understanding.",
      icon: <RefreshCw className="h-6 w-6" />,
      className: "md:col-span-1",
      header: (
        <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-[#F58022]/10 to-[#F5F5F5] border border-[#F58022]/10 relative overflow-hidden flex items-center justify-center">
          <div className="absolute inset-0 bg-dot-thick-orange-500/[0.1] [mask-image:radial-gradient(ellipse_at_center,white,transparent)]" />
          <RefreshCw className="h-10 w-10 text-[#F58022]/20 relative z-10" />
        </div>
      ),
    },
    {
      title: "Iterative feedback loop",
      description: "Immediate feedback allows users to correct misconceptions and refine their reasoning on the spot.",
      icon: <Repeat className="h-6 w-6" />,
      className: "md:col-span-1",
      header: (
        <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-[#4C8FD6]/10 to-[#F5F5F5] border border-[#4C8FD6]/10 relative overflow-hidden flex items-center justify-center">
          <div className="absolute inset-0 bg-dot-black/[0.05] [mask-image:radial-gradient(ellipse_at_center,white,transparent)]" />
          <Repeat className="h-10 w-10 text-[#4C8FD6]/20 relative z-10" />
        </div>
      ),
    },
    {
      title: "Identity-verified audit records",
      description: "Every session generates an immutable, transcript-backed record of verified competency.",
      icon: <ShieldCheck className="h-6 w-6" />,
      className: "md:col-span-2",
      header: (
        <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-[#EAF1FE] to-[#F58022]/10 border border-[#EAF1FE] relative overflow-hidden flex items-center justify-center">
           <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
           <ShieldCheck className="h-10 w-10 text-[#3370F7]/20 relative z-10" />
        </div>
      ),
    }
  ];

  return (
    <section className="py-24 bg-[#F5F5F5]/30 relative overflow-hidden">
      {/* Glass Background Blobs */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
         <div className="absolute top-[30%] left-[20%] w-[600px] h-[600px] bg-[#EAF1FE]/30 rounded-full blur-[120px]"></div>
         <div className="absolute bottom-[10%] right-[10%] w-[500px] h-[500px] bg-[#F58022]/10 rounded-full blur-[120px]"></div>
      </div>

      <div className="container mx-auto px-4 md:px-12 relative z-10 w-full max-w-7xl">
        <div className="text-center mb-16 max-w-4xl mx-auto space-y-6">
          <span className="text-[#3370F7] font-bold text-xs tracking-widest uppercase">THE PLATFORM</span>
          <h2 className="font-sans text-3xl md:text-4xl font-bold text-[#3370F7]">
            Cognition in Motion.
          </h2>
          <p className="text-lg text-[#85756F] leading-relaxed">
            Socratic Metric uses AI-moderated adaptive dialogue to verify that people can articulate, refine, and defend understanding aloud — in real time. It does not grade documents. It evaluates live cognition.
          </p>
        </div>
        
        <BentoGrid className="max-w-6xl mx-auto w-full">
          {features.map((item, i) => (
            <BentoGridItem
              key={i}
              title={item.title}
              description={item.description}
              header={item.header}
              icon={item.icon}
              className={item.className}
            />
          ))}
        </BentoGrid>
      </div>
    </section>
  );
}
