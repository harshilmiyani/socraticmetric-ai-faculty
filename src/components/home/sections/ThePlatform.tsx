import { Mic, RefreshCw, Repeat, ShieldCheck } from "lucide-react";

export function ThePlatform() {
  const features = [
    {
      icon: Mic,
      title: "Oral question presentation"
    },
    {
      icon: RefreshCw,
      title: "Adaptive real-time questioning"
    },
    {
      icon: Repeat,
      title: "Iterative feedback loop"
    },
    {
      icon: ShieldCheck,
      title: "Identity-verified audit records"
    }
  ];

  return (
    <section className="py-24 bg-slate-50/30 relative overflow-hidden">
      {/* Glass Background Blobs */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
         <div className="absolute top-[30%] left-[20%] w-[600px] h-[600px] bg-blue-100/30 rounded-full blur-[120px]"></div>
         <div className="absolute bottom-[10%] right-[10%] w-[500px] h-[500px] bg-orange-50/40 rounded-full blur-[120px]"></div>
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="text-center mb-16 max-w-4xl mx-auto space-y-6">
          <span className="text-blue-500 font-bold text-xs tracking-widest uppercase">THE PLATFORM</span>
          <h2 className="font-sans text-3xl md:text-4xl font-bold text-blue-600">
            Cognition in Motion.
          </h2>
          <p className="text-lg text-slate-600 leading-relaxed">
            Socratic Metric uses AI-moderated adaptive dialogue to verify that people can articulate, refine, and defend understanding aloud — in real time. It does not grade documents. It evaluates live cognition.
          </p>
        </div>
        
        <div className="grid md:grid-cols-4 gap-6">
          {features.map((feature, i) => (
            <div key={i} className="p-6 rounded-xl border border-white/60 bg-white/60 backdrop-blur-lg shadow-lg hover:shadow-xl hover:bg-white/80 transition-all duration-300 flex flex-col items-start h-full ring-1 ring-white/50">
              <div className="h-10 w-10 rounded-lg bg-blue-50/80 flex items-center justify-center mb-4 text-blue-600">
                <feature.icon className="h-5 w-5" />
              </div>
              <h3 className="text-sm font-semibold text-[#0F2C4C] leading-snug">{feature.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
