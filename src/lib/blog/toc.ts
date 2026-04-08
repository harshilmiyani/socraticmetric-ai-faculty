import type { PortableTextBlock } from "@portabletext/types";

export type TocEntry = {
  id: string;
  text: string;
  level: 2 | 3;
};

function flattenSpanText(children: unknown): string {
  if (!Array.isArray(children)) return "";
  return children
    .map((node) => {
      if (!node || typeof node !== "object") return "";
      const n = node as Record<string, unknown>;
      if (n._type === "span" && typeof n.text === "string") return n.text;
      if (Array.isArray(n.children)) return flattenSpanText(n.children);
      return "";
    })
    .join("");
}

/** Stable id for a Portable Text block heading (must match render-time ids). */
export function blockHeadingId(block: { _key?: string; children?: unknown[] }): string {
  const raw = flattenSpanText(block.children).trim();
  const slug = raw
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/[^a-z0-9-]/g, "")
    .slice(0, 48);
  const key = (block._key ?? "k").replace(/[^a-zA-Z0-9]/g, "").slice(0, 8);
  return `${slug || "section"}-${key}`.toLowerCase();
}

export function extractTocFromPortableText(body: PortableTextBlock[] | null | undefined): TocEntry[] {
  if (!body?.length) return [];
  const out: TocEntry[] = [];
  for (const b of body) {
    if (b._type !== "block") continue;
    const style = (b as { style?: string }).style;
    if (style !== "h2" && style !== "h3") continue;
    const text = flattenSpanText((b as { children?: unknown[] }).children).trim();
    if (!text) continue;
    out.push({
      id: blockHeadingId(b as { _key?: string; children?: unknown[] }),
      text,
      level: style === "h2" ? 2 : 3,
    });
  }
  return out;
}

/** Strip tags for display text; inject id attributes into h2/h3 for anchor links. */
export function enrichFallbackHtmlWithToc(html: string): { html: string; toc: TocEntry[] } {
  const toc: TocEntry[] = [];
  let idx = 0;
  const processed = html.replace(
    /<h([23])(\s[^>]*)?>([\s\S]*?)<\/h\1>/gi,
    (full, level: string, attrs: string | undefined, inner: string) => {
      const a = attrs ?? "";
      const plain = inner.replace(/<[^>]+>/g, " ").replace(/&nbsp;/g, " ").replace(/\s+/g, " ").trim();
      const slug = plain
        .toLowerCase()
        .replace(/\s+/g, "-")
        .replace(/[^a-z0-9-]/g, "")
        .slice(0, 48);
      const id = `${slug || "section"}-fb${idx}`;
      idx += 1;
      const n = Number(level) as 2 | 3;
      toc.push({ id, text: plain || `Section ${idx}`, level: n });
      if (/\bid\s*=/i.test(a)) return full;
      return `<h${level}${a} id="${id}">${inner}</h${level}>`;
    },
  );
  return { html: processed, toc };
}
