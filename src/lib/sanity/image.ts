import { createImageUrlBuilder, type SanityImageSource } from "@sanity/image-url";

function canBuildImageUrl(source: unknown): boolean {
  if (source == null || typeof source !== "object") return false;
  const s = source as Record<string, unknown>;
  if (typeof s._ref === "string" && s._ref.length > 0) return true;
  if ("asset" in s) {
    const a = s.asset;
    if (a == null) return false;
    if (typeof a === "object" && a !== null) {
      const ar = a as Record<string, unknown>;
      if (typeof ar._ref === "string" && ar._ref.length > 0) return true;
      if (typeof ar.url === "string" && ar.url.length > 0) return true;
    }
  }
  return false;
}

export function urlForImage(source: SanityImageSource | null | undefined): string | null {
  const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID ?? "";
  const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET ?? "production";
  if (!source || projectId.length < 8) return null;
  if (!canBuildImageUrl(source)) return null;

  try {
    return createImageUrlBuilder({ projectId, dataset })
      .image(source)
      .width(1200)
      .height(630)
      .fit("crop")
      .auto("format")
      .url();
  } catch {
    return null;
  }
}
