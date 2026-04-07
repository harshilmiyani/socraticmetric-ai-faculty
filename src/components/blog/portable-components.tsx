import type { PortableTextComponents } from "@portabletext/react";
import Image from "next/image";
import { urlForImage } from "@/lib/sanity/image";
import type { SanityImageSource } from "@sanity/image-url";
import { PortableVideoEmbed } from "@/components/blog/PortableVideoEmbed";

type PortableImageValue = {
  _type?: string;
  alt?: string;
  caption?: string;
  asset?: {
    url?: string;
    metadata?: { dimensions?: { width?: number; height?: number } };
    _ref?: string;
  };
};

function PortableImage({ value }: { value: PortableImageValue }) {
  const asset = value?.asset;
  let src: string | null = null;
  if (asset && typeof asset === "object") {
    if (typeof asset.url === "string" && asset.url.length > 0) {
      src = asset.url;
    } else if (typeof asset._ref === "string" && asset._ref.length > 0) {
      src = urlForImage(value as SanityImageSource);
    }
  }

  if (!src) return null;

  const dim = asset?.metadata?.dimensions;
  const naturalW = dim?.width ?? 1200;
  const naturalH = dim?.height ?? Math.round(naturalW * 0.56);
  const displayW = Math.min(naturalW, 1200);
  const displayH = dim?.width && dim?.height ? Math.round((displayW / dim.width) * dim.height) : naturalH;

  return (
    <figure className="my-8 sm:my-10 not-prose">
      <div className="relative w-full overflow-hidden rounded-xl sm:rounded-2xl ring-1 ring-black/5 shadow-lg shadow-black/[0.06] bg-[#F1F5F9]">
        <Image
          src={src}
          alt={value.alt?.trim() ? value.alt : "Blog image"}
          width={displayW}
          height={displayH}
          className="w-full h-auto object-cover"
          sizes="(max-width: 768px) 100vw, 720px"
        />
      </div>
      {value.caption?.trim() ? (
        <figcaption className="mt-3 text-center text-sm text-[#85756F]">{value.caption}</figcaption>
      ) : null}
    </figure>
  );
}

export const blogPortableTextComponents: PortableTextComponents = {
  types: {
    image: ({ value }) => <PortableImage value={value as PortableImageValue} />,
    videoEmbed: ({ value }) => (
      <PortableVideoEmbed value={value as { url?: string; title?: string; caption?: string }} />
    ),
  },
  block: {
    h2: ({ children }) => (
      <h2 className="font-sans text-2xl sm:text-3xl font-bold mt-10 sm:mt-12 mb-4 text-[#1F2A44] tracking-tight">{children}</h2>
    ),
    h3: ({ children }) => (
      <h3 className="font-sans text-xl sm:text-2xl font-bold mt-8 mb-3 text-[#1F2A44] tracking-tight">{children}</h3>
    ),
    h4: ({ children }) => (
      <h4 className="font-sans text-lg sm:text-xl font-bold mt-6 mb-2 text-[#1F2A44] tracking-tight">{children}</h4>
    ),
    blockquote: ({ children }) => (
      <blockquote className="border-l-4 border-[#3370F7]/40 bg-[#EAF1FE]/40 pl-5 pr-4 py-3 my-8 rounded-r-xl text-[#1F2A44]/90 italic leading-relaxed">
        {children}
      </blockquote>
    ),
    normal: ({ children }) => <p className="mb-5 text-[#85756F] text-base sm:text-lg leading-relaxed">{children}</p>,
  },
  list: {
    bullet: ({ children }) => (
      <ul className="list-disc pl-6 mb-6 space-y-2 text-[#85756F] marker:text-[#3370F7]">{children}</ul>
    ),
    number: ({ children }) => (
      <ol className="list-decimal pl-6 mb-6 space-y-2 text-[#85756F] marker:text-[#3370F7] marker:font-semibold">{children}</ol>
    ),
  },
  listItem: {
    bullet: ({ children }) => <li className="leading-relaxed pl-1">{children}</li>,
    number: ({ children }) => <li className="leading-relaxed pl-1">{children}</li>,
  },
  marks: {
    link: ({ value, children }) => {
      const href = typeof value?.href === "string" ? value.href : "#";
      const target = href.startsWith("http") ? "_blank" : undefined;
      return (
        <a
          href={href}
          target={target}
          rel={target === "_blank" ? "noopener noreferrer" : undefined}
          className="text-[#3370F7] font-medium underline underline-offset-2 decoration-[#3370F7]/30 hover:decoration-[#3370F7] hover:text-[#2563eb] transition-colors"
        >
          {children}
        </a>
      );
    },
    strong: ({ children }) => <strong className="font-semibold text-[#1F2A44]">{children}</strong>,
    em: ({ children }) => <em className="text-[#1F2A44]/90">{children}</em>,
  },
};
