import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import Link from "next/link";

export function BlogPageShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col overflow-x-hidden bg-[#F1F5F9] font-sans text-[#1F2A44] selection:bg-[#F58022]/20 selection:text-[#1F2A44]">
      <Navbar />
      <main className="relative flex-1">{children}</main>
      <Footer />
    </div>
  );
}

export function BlogHero() {
  return (
    <div className="relative overflow-hidden pt-24 pb-12 md:pt-28 md:pb-16 lg:pt-32 lg:pb-20">
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_70%_60%_at_50%_0%,#000_50%,transparent_100%)] opacity-80" />

      <div className="relative z-10 mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-10 xl:px-14">
        <div
          className="mx-auto max-w-4xl space-y-5 text-center sm:space-y-6 lg:space-y-7"
        >
          <div className="hero-enter inline-flex flex-wrap items-center justify-center gap-x-2 gap-y-1 rounded-full border border-slate-200/90 bg-white/90 px-3 py-1.5 text-[10px] font-bold uppercase tracking-widest text-[#85756F] shadow-sm backdrop-blur-md sm:text-xs">
            <Link href="/" className="text-[#3370F7] transition-colors hover:text-[#4C8FD6]">
              Home
            </Link>
            <span className="text-slate-300" aria-hidden>
              /
            </span>
            <span className="text-[#1F2A44]">Blog</span>
          </div>

          <div className="hero-enter hero-enter-delay-1 flex flex-col items-center gap-2">
            <span className="h-px w-12 rounded-full bg-gradient-to-r from-transparent via-[#3370F7]/50 to-transparent" aria-hidden />
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#3370F7] sm:text-sm">Insights</p>
          </div>

          <h1 className="hero-enter hero-enter-delay-2 font-serif text-4xl font-bold leading-[1.08] tracking-tight text-[#1F2A44] sm:text-5xl md:text-6xl lg:text-[4.5rem]">
            Ideas on assessment, <br className="hidden sm:block" />
            <span className="bg-gradient-to-r from-[#3370F7] via-[#4C8FD6] to-[#F58022] bg-clip-text text-transparent">
              AI-era learning
            </span>
          </h1>
          <p className="hero-enter hero-enter-delay-3 mx-auto max-w-2xl text-base leading-relaxed text-[#64748B] sm:text-lg md:text-xl">
            Exploring oral verification, cognitive science, and what proof of understanding means when written output is
            no longer enough.
          </p>
        </div>
      </div>

      <div
        className="pointer-events-none absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#E8EDF3]/90 via-[#F1F5F9]/40 to-transparent md:h-32"
        aria-hidden
      />
    </div>
  );
}
