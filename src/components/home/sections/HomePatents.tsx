import {
  Award,
  FileText,
  Calendar,
  ShieldCheck,
  Globe2,
  CalendarRange,
  Sparkles,
} from "lucide-react";

const stats = [
  {
    value: "4",
    description: "Issued AI patents",
    icon: Award,
    accent: "from-[#6FA0FF] to-[#9CC2FF]",
    iconColor: "text-[#8FB0F5]",
  },
  {
    value: "International",
    description: "Jurisdiction coverage",
    icon: Globe2,
    accent: "from-[#9CC2FF] to-white",
    iconColor: "text-slate-300",
  },
  {
    value: "2024–2026",
    description: "Issue date range",
    icon: CalendarRange,
    accent: "from-[#F58022] to-[#FFB347]",
    iconColor: "text-[#F5A052]",
  },
  {
    value: "Proprietary",
    description: "Oral verification technology",
    icon: Sparkles,
    accent: "from-[#6FA0FF] via-[#9CC2FF] to-[#FFB347]",
    iconColor: "text-[#8FB0F5]",
  },
];

const patents = [
  {
    title:
      "Systems and methods for adaptive, AI-driven oral assessment of knowledge",
    id: "11,990,139",
    date: "May 21, 2024",
    accent: "from-[#3370F7] to-[#4C8FD6]",
  },
  {
    title:
      "Systems and methods for evaluating subject knowledge using interactive, AI-based dialogue",
    id: "12,165,655",
    date: "December 10, 2024",
    accent: "from-indigo-400 to-indigo-500",
  },
  {
    title:
      "Systems and methods for real-time assessment of knowledge through iterative, AI-mediated questioning",
    id: "12,211,511",
    date: "February 4, 2025",
    accent: "from-[#F58022] to-amber-400",
  },
  {
    title:
      "Artificial Intelligence System that generates questions and evaluates oral readings and responses",
    id: "12,586,589",
    date: "March 24, 2026",
    accent: "from-emerald-400 to-teal-400",
  },
];

export function HomePatents() {
  return (
    <section
      id="patents"
      aria-labelledby="home-patents-heading"
      className="relative z-10 px-4 py-12 sm:px-6 md:py-16"
    >
      <div className="container relative mx-auto max-w-6xl">
        {/* Dark glass panel */}
        <div className="relative overflow-hidden rounded-[2rem] bg-gradient-to-b from-[#1F2A44] via-[#1a2540] to-[#141d33] px-5 py-12 shadow-[0_40px_100px_-30px_rgba(31,42,68,0.6)] ring-1 ring-white/10 sm:rounded-[2.5rem] sm:px-8 md:px-12 md:py-16 lg:px-16">
          {/* Atmosphere inside the panel */}
          <div className="pointer-events-none absolute inset-0" aria-hidden>
            {/* Top edge highlight */}
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent" />            {/* Fine grid */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_70%_60%_at_50%_40%,#000_40%,transparent_100%)]" />
          </div>

          <div className="relative">
            {/* Header */}
            <div
              className="mx-auto mb-10 max-w-3xl text-center md:mb-14"
            >
              <div className="mb-6 flex items-center justify-center gap-3">
                <div className="h-px w-8 bg-gradient-to-r from-transparent to-[#8FB0F5]/60" />
                <span className="text-[11px] font-bold uppercase tracking-[0.25em] text-[#8FB0F5]">
                  Patented Technology
                </span>
                <div className="h-px w-8 bg-gradient-to-l from-transparent to-[#8FB0F5]/60" />
              </div>
              <h2
                id="home-patents-heading"
                className="font-serif text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl"
              >
                Backed by{" "}
                <span className="bg-gradient-to-r from-[#8FB0F5] to-[#C4D7FF] bg-clip-text text-transparent">
                  Four Issued US Patents
                </span>
              </h2>
              <p className="mt-5 text-base leading-relaxed text-slate-400 md:text-lg">
                Our oral verification approach is legally protected and grounded
                in peer-reviewed cognitive science.
              </p>
            </div>

            {/* Portfolio snapshot — IP at a glance */}
            <div className="mb-8 grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4 md:mb-10">
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <div
                    key={stat.description}
                   
                   
                   
                   
                    className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.06] p-4 md:backdrop-blur-md transition-all duration-300 hover:-translate-y-0.5 hover:border-white/20 hover:bg-white/[0.09] sm:p-5"
                  >
                    <div
                      className={`pointer-events-none absolute inset-x-0 bottom-0 h-0.5 bg-gradient-to-r opacity-50 transition-opacity group-hover:opacity-100 ${stat.accent}`}
                    />
                    <div className="flex items-center gap-3 sm:gap-4">
                      <div
                        className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/[0.07] shadow-inner transition-transform duration-300 group-hover:scale-105 sm:h-11 sm:w-11 ${stat.iconColor}`}
                      >
                        <Icon className="h-5 w-5" strokeWidth={1.75} />
                      </div>
                      <div className="min-w-0">
                        <div
                          className={`bg-gradient-to-br bg-clip-text font-serif text-base font-bold leading-tight text-transparent sm:text-lg ${stat.accent}`}
                        >
                          {stat.value}
                        </div>
                        <p className="truncate text-[11px] font-semibold text-slate-400 sm:text-xs">
                          {stat.description}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Patent cards */}
            <div className="grid gap-4 sm:grid-cols-2 sm:gap-5">
              {patents.map((patent, index) => (
                <div
                  key={patent.id}
                 
                 
                 
                 
                  className="group relative flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/[0.05] p-6 md:backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-white/20 hover:bg-white/[0.08] hover:shadow-xl hover:shadow-black/20 sm:p-7"
                >
                  {/* Accent top line */}
                  <div
                    className={`absolute inset-x-0 top-0 h-1 bg-gradient-to-r opacity-70 transition-opacity group-hover:opacity-100 ${patent.accent}`}
                  />

                  <div className="mb-4 flex items-start justify-between gap-3">
                    <div
                      className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br text-white shadow-lg transition-transform duration-300 group-hover:scale-105 ${patent.accent}`}
                    >
                      <Award className="h-5 w-5" strokeWidth={2} />
                    </div>
                    <span className="rounded-full border border-emerald-400/25 bg-emerald-400/10 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-emerald-300">
                      USPTO Issued
                    </span>
                  </div>

                  <h3 className="flex-1 text-[15px] font-bold leading-snug text-white sm:text-base">
                    {patent.title}
                  </h3>

                  <div className="mt-5 flex flex-wrap items-center gap-2.5 border-t border-white/10 pt-4">
                    <div className="flex items-center gap-1.5 rounded-lg border border-white/10 bg-white/[0.06] px-2.5 py-1.5 text-xs text-slate-300">
                      <FileText className="h-3.5 w-3.5 text-[#F5A052]" />
                      <span>
                        Patent No:{" "}
                        <span className="font-bold text-white">{patent.id}</span>
                      </span>
                    </div>
                    <div className="flex items-center gap-1.5 rounded-lg border border-white/10 bg-white/[0.06] px-2.5 py-1.5 text-xs text-slate-300">
                      <Calendar className="h-3.5 w-3.5 text-[#8FB0F5]" />
                      <span>
                        Issued:{" "}
                        <span className="font-semibold text-white">{patent.date}</span>
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Bottom trust badge */}
            <div
              className="mt-10 flex justify-center md:mt-12"
            >
              <div className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.06] px-5 py-2.5 md:backdrop-blur-md">
                <ShieldCheck className="h-5 w-5 text-emerald-300" strokeWidth={2.5} />
                <span className="text-sm font-semibold text-white">
                  Proprietary Oral Verification Technology
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
