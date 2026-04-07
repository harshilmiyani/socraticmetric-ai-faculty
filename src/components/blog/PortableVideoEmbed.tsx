import { ExternalLink, Play } from "lucide-react";
import { resolveVideoEmbed } from "@/lib/video-embed";

type PortableVideoValue = {
  url?: string;
  title?: string;
  caption?: string;
};

const iframeAllow =
  "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share";

export function PortableVideoEmbed({ value }: { value: PortableVideoValue }) {
  const raw = typeof value?.url === "string" ? value.url : "";
  const resolved = resolveVideoEmbed(raw);

  if (!resolved) return null;

  const iframeTitle = value.title?.trim() || `${resolved.kind === "iframe" ? resolved.provider : "Video"} player`;

  if (resolved.kind === "iframe") {
    return (
      <figure className="my-8 sm:my-10 not-prose">
        <div className="relative w-full overflow-hidden rounded-xl sm:rounded-2xl ring-1 ring-black/5 shadow-lg shadow-black/[0.06] bg-[#1F2A44] aspect-video">
          <iframe
            src={resolved.src}
            title={iframeTitle}
            allow={iframeAllow}
            allowFullScreen
            loading="lazy"
            className="absolute inset-0 h-full w-full border-0"
            referrerPolicy="strict-origin-when-cross-origin"
          />
        </div>
        {value.caption?.trim() ? (
          <figcaption className="mt-3 text-center text-sm text-[#85756F]">{value.caption}</figcaption>
        ) : null}
      </figure>
    );
  }

  return (
    <figure className="my-8 sm:my-10 not-prose">
      <a
        href={resolved.href}
        target="_blank"
        rel="noopener noreferrer"
        className="group flex flex-col sm:flex-row sm:items-stretch gap-0 overflow-hidden rounded-xl sm:rounded-2xl ring-1 ring-black/5 shadow-lg shadow-black/[0.06] bg-white transition-all hover:ring-[#3370F7]/25 hover:shadow-xl"
      >
        <div className="flex shrink-0 items-center justify-center bg-gradient-to-br from-[#EAF1FE] to-[#F1F5F9] px-6 py-10 sm:w-40 sm:py-0">
          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#3370F7]/15 text-[#3370F7] ring-2 ring-[#3370F7]/20 transition-transform group-hover:scale-105">
            <Play className="h-8 w-8 fill-[#3370F7] text-[#3370F7]" strokeWidth={1.5} />
          </div>
        </div>
        <div className="flex flex-1 flex-col justify-center gap-2 border-t border-slate-100 p-5 sm:border-t-0 sm:border-l sm:py-6">
          <p className="text-xs font-bold uppercase tracking-wider text-[#3370F7]">External video</p>
          <p className="font-semibold text-[#1F2A44] group-hover:text-[#3370F7] transition-colors">
            {value.title?.trim() || `Open video on ${resolved.host}`}
          </p>
          <p className="text-sm text-[#85756F] break-all line-clamp-2">{resolved.href}</p>
          <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#3370F7] mt-1">
            Watch in new tab
            <ExternalLink className="h-4 w-4" />
          </span>
        </div>
      </a>
      {value.caption?.trim() ? (
        <figcaption className="mt-3 text-center text-sm text-[#85756F]">{value.caption}</figcaption>
      ) : null}
    </figure>
  );
}
