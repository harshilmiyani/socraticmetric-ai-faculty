"use client";

import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { schemaTypes } from "./sanity/schemaTypes";

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID ?? "";
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET ?? "production";

export default defineConfig({
  name: "socraticmetric",
  title: "SocraticMetric blog",
  // Must match the App Router segment (e.g. src/app/studio/...); otherwise the URL "studio" is treated as a tool name.
  basePath: "/studio",
  // Set NEXT_PUBLIC_SANITY_PROJECT_ID in .env.local (8+ char id from sanity.io/manage).
  projectId: projectId.length >= 8 ? projectId : "setmein00",
  dataset,
  plugins: [structureTool()],
  schema: {
    types: schemaTypes,
  },
});
