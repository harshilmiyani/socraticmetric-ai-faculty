import Image from "next/image";

export function TrustedBy() {
  return (
    <section className="py-10 border-y border-slate-100 bg-slate-50/50">
      <div className="container mx-auto px-6 md:px-12">
        <p className="text-center text-sm font-semibold text-slate-500 uppercase tracking-wider mb-8">
          Trusted by innovative institutions
        </p>
        <div className="flex flex-wrap justify-center items-center gap-12 md:gap-20 opacity-70 hover:grayscale-0 transition-all duration-500">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="relative h-12 w-32 md:h-16 md:w-48 transition-opacity hover:opacity-100">
              <Image 
                src="/img/showcase/WestcliffULogo.png" 
                alt="Westcliff University" 
                fill
                className="object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
