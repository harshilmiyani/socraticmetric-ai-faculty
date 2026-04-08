import { createClient, type SanityClient } from "next-sanity";

const apiVersion = "2025-04-01";

export function isSanityConfigured(): boolean {
  const id = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID ?? "";
  return id.length >= 8;
}

export function getSanityClient(): SanityClient | null {
  const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID ?? "";
  if (projectId.length < 8) return null;

  const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET ?? "production";

  return createClient({
    projectId,
    dataset,
    apiVersion,
    // Read from the API (not Sanity’s CDN) so each site refresh matches what you just published.
    useCdn: false,
    token: process.env.SANITY_API_READ_TOKEN || undefined,
  });
}
