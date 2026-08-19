import Image from "next/image";
import { cn } from "@/lib/utils";

const logos = [
  {
    name: "Westcliff University",
    src: "/img/showcase/WestcliffULogo.png",
    width: 220,
    height: 60,
  },
];

export function LogoClouds({
  className,
}: {
  className?: string;
}) {
  return (
    <section
      id="trusted-by"
      aria-label="Trusted by leading organizations"
      className={cn("pt-4 pb-8 md:pt-6 md:pb-10 relative overflow-hidden", className)}
    >

      <div className="container mx-auto px-6 md:px-12 max-w-7xl">
        {/* Header */}
        <div className="text-center mb-8 space-y-4">
          <div className="flex items-center justify-center gap-3">
            <div className="h-px w-8 bg-gradient-to-r from-transparent to-[#3370F7]/40" />
            <span className="text-[11px] font-bold uppercase tracking-[0.25em] text-[#1D4ED8]">
              Trusted By
            </span>
            <div className="h-px w-8 bg-gradient-to-l from-transparent to-[#3370F7]/40" />
          </div>
          <p className="text-slate-600 text-base md:text-lg font-medium max-w-lg mx-auto">
            Partnering with institutions that demand verified understanding.
          </p>
        </div>

        {/* Center Logo Presentation */}
        <div className="flex justify-center items-center">
          <div className="group rounded-2xl border border-slate-200/70 bg-white px-12 py-6 shadow-[0_4px_20px_rgb(0,0,0,0.04)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_10px_32px_rgb(0,0,0,0.08)]">
            <Image
              src={logos[0].src}
              alt={logos[0].name}
              width={logos[0].width}
              height={logos[0].height}
              sizes="(max-width: 768px) 180px, 220px"
              className="h-12 w-auto object-contain md:h-16"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
