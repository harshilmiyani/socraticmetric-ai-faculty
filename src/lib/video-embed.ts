export type VideoEmbedResult =
  | { kind: "iframe"; src: string; provider: string }
  | { kind: "link"; href: string; host: string };

function normalizeUrl(raw: string): URL | null {
  try {
    const trimmed = raw.trim();
    if (!trimmed) return null;
    return new URL(trimmed.startsWith("http") ? trimmed : `https://${trimmed}`);
  } catch {
    return null;
  }
}

/** YouTube watch, short, embed, youtu.be */
function youtubeId(url: URL): string | null {
  const host = url.hostname.replace(/^www\./, "");
  if (host === "youtu.be") {
    const id = url.pathname.replace(/^\//, "").split("/")[0];
    return id && /^[\w-]{11}$/.test(id) ? id : null;
  }
  if (host === "youtube.com" || host === "m.youtube.com" || host === "music.youtube.com") {
    if (url.pathname.startsWith("/embed/")) {
      const id = url.pathname.slice("/embed/".length).split("/")[0];
      return id && /^[\w-]{11}/.test(id) ? id.slice(0, 11) : null;
    }
    if (url.pathname.startsWith("/shorts/")) {
      const id = url.pathname.slice("/shorts/".length).split("/")[0];
      return id && /^[\w-]{11}/.test(id) ? id.slice(0, 11) : null;
    }
    const v = url.searchParams.get("v");
    if (v && /^[\w-]{11}$/.test(v)) return v;
  }
  return null;
}

function vimeoId(url: URL): string | null {
  const host = url.hostname.replace(/^www\./, "");
  if (host !== "vimeo.com" && host !== "player.vimeo.com") return null;
  const parts = url.pathname.split("/").filter(Boolean);
  if (host === "player.vimeo.com" && parts[0] === "video" && /^\d+$/.test(parts[1] ?? "")) {
    return parts[1]!;
  }
  const videoIdx = parts.indexOf("video");
  if (videoIdx >= 0 && /^\d+$/.test(parts[videoIdx + 1] ?? "")) {
    return parts[videoIdx + 1]!;
  }
  const first = parts[0];
  if (first && /^\d+$/.test(first)) return first;
  return null;
}

function loomId(url: URL): string | null {
  const host = url.hostname.replace(/^www\./, "");
  if (host !== "loom.com") return null;
  const m = url.pathname.match(/\/share\/([a-zA-Z0-9-]+)/);
  return m?.[1] ?? null;
}

function dailymotionId(url: URL): string | null {
  const host = url.hostname.replace(/^www\./, "");
  if (!host.includes("dailymotion.com")) return null;
  const m = url.pathname.match(/\/video\/([a-zA-Z0-9]+)/);
  return m?.[1] ?? null;
}

/**
 * Resolve a pasted video URL to an iframe src or fall back to external link preview.
 */
export function resolveVideoEmbed(rawUrl: string): VideoEmbedResult | null {
  const url = normalizeUrl(rawUrl);
  if (!url) return null;

  const yt = youtubeId(url);
  if (yt) {
    const src = `https://www.youtube-nocookie.com/embed/${yt}?rel=0&modestbranding=1`;
    return { kind: "iframe", src, provider: "YouTube" };
  }

  const vm = vimeoId(url);
  if (vm) {
    return {
      kind: "iframe",
      src: `https://player.vimeo.com/video/${vm}?dnt=1`,
      provider: "Vimeo",
    };
  }

  const loom = loomId(url);
  if (loom) {
    return {
      kind: "iframe",
      src: `https://www.loom.com/embed/${loom}?hide_owner=true&hide_share=true`,
      provider: "Loom",
    };
  }

  const dm = dailymotionId(url);
  if (dm) {
    return {
      kind: "iframe",
      src: `https://www.dailymotion.com/embed/video/${dm}`,
      provider: "Dailymotion",
    };
  }

  const host = url.hostname.replace(/^www\./, "") || "Video";
  return { kind: "link", href: url.toString(), host };
}
