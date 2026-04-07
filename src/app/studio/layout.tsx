import type { Metadata, Viewport } from "next";
import { metadata as studioMetadata, viewport as studioViewport } from "next-sanity/studio";

export const metadata: Metadata = {
  ...studioMetadata,
  title: "Blog content | SocraticMetric",
};

export const viewport: Viewport = {
  ...studioViewport,
  viewportFit: studioViewport.viewportFit as Viewport["viewportFit"],
};

export default function StudioLayout({ children }: { children: React.ReactNode }) {
  return children;
}
