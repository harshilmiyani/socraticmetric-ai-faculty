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
      className={cn("py-8 md:py-10 relative overflow-hidden", className)}
    >

      <div className="container mx-auto px-6 md:px-12 max-w-7xl">
        {/* Header */}
        <div className="text-center mb-6 space-y-3">
          <span className="inline-block py-1.5 px-4 rounded-full bg-[#EAF1FE] border border-[#3370F7]/20 text-[#3370F7] font-bold text-xs tracking-widest uppercase">
            Trusted By
          </span>
          <p className="text-slate-500 text-base md:text-lg font-medium max-w-lg mx-auto">
            Partnering with institutions that demand verified understanding.
          </p>
        </div>

        {/* Center Logo Presentation */}
        <div className="flex justify-center items-center">
          <div className="rounded-2xl border border-slate-100/80 bg-slate-50/50 px-12 py-6">
            <Image
              src={logos[0].src}
              alt={logos[0].name}
              width={logos[0].width}
              height={logos[0].height}
              className="h-12 w-auto object-contain md:h-16"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
