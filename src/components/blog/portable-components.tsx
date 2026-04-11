import type { PortableTextComponents } from "@portabletext/react";
import type { PortableTextBlock } from "@portabletext/types";
import Image from "next/image";
import { urlForImage } from "@/lib/sanity/image";
import type { SanityImageSource } from "@sanity/image-url";
import { PortableVideoEmbed } from "@/components/blog/PortableVideoEmbed";
import { blockHeadingId } from "@/lib/blog/toc";

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
  const displayW = Math.min(naturalW, 1400);
  const displayH = dim?.width && dim?.height ? Math.round((displayW / dim.width) * dim.height) : naturalH;

  return (
    <figure className="my-8 sm:my-10 not-prose">
      <div className="relative w-full overflow-hidden rounded-xl bg-[#F1F5F9] shadow-lg shadow-[#1F2A44]/[0.06] ring-1 ring-black/[0.06] sm:rounded-2xl">
        <Image
          src={src}
          alt={value.alt?.trim() ? value.alt : "Blog image"}
          width={displayW}
          height={displayH}
          className="w-full h-auto object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1152px) 90vw, 1152px"
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
    h2: ({ children, value }) => (
      <h2
        id={blockHeadingId(value as PortableTextBlock)}
        className="font-serif text-2xl sm:text-3xl lg:text-[2.25rem] font-bold mt-10 sm:mt-12 mb-4 border-l-[3px] border-[#3370F7] pl-4 text-[#1F2A44] tracking-tight scroll-mt-28 sm:pl-5"
      >
        {children}
      </h2>
    ),
    h3: ({ children, value }) => (
      <h3
        id={blockHeadingId(value as PortableTextBlock)}
        className="font-serif text-xl sm:text-2xl lg:text-[1.75rem] font-bold mt-8 mb-3 border-l-2 border-[#F58022]/50 pl-3 text-[#1F2A44] tracking-tight scroll-mt-28 sm:pl-4"
      >
        {children}
      </h3>
    ),
    h4: ({ children }) => (
      <h4 className="font-serif text-lg sm:text-xl font-bold mt-6 mb-2 text-[#1F2A44] tracking-tight">{children}</h4>
    ),
    blockquote: ({ children }) => (
      <blockquote className="my-8 rounded-2xl border border-[#3370F7]/10 bg-gradient-to-br from-[#EAF1FE]/50 to-[#F1F5F9]/40 py-5 pl-5 pr-5 text-base italic leading-relaxed text-[#1F2A44]/90 shadow-sm ring-1 ring-[#3370F7]/5 sm:pl-6 sm:pr-6 lg:text-lg">
        {children}
      </blockquote>
    ),
    normal: ({ children }) => (
      <p className="mb-5 text-[#64748B] text-base sm:text-lg lg:text-[1.125rem] leading-[1.75]">{children}</p>
    ),
  },
  list: {
    bullet: ({ children }) => (
      <ul className="list-disc pl-6 sm:pl-7 mb-6 space-y-2.5 text-[#64748B] text-base lg:text-[1.125rem] leading-[1.75] marker:text-[#3370F7]">
        {children}
      </ul>
    ),
    number: ({ children }) => (
      <ol className="list-decimal pl-6 sm:pl-7 mb-6 space-y-2.5 text-[#64748B] text-base lg:text-[1.125rem] leading-[1.75] marker:text-[#3370F7] marker:font-semibold">
        {children}
      </ol>
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
          className="font-medium text-[#3370F7] underline decoration-[#3370F7]/30 underline-offset-2 transition-colors hover:text-[#4C8FD6] hover:decoration-[#4C8FD6]/50"
        >
          {children}
        </a>
      );
    },
    strong: ({ children }) => <strong className="font-semibold text-[#1F2A44]">{children}</strong>,
    em: ({ children }) => <em className="text-[#1F2A44]/90">{children}</em>,
  },
};
