/** Canonical production origin (no trailing slash). Sitemap and robots use this only. */
export const SITE_URL = "https://www.socraticmetric.ai";

export function getSiteUrl(): string {
  return SITE_URL;
}
