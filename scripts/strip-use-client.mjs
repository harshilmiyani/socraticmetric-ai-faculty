import fs from "fs";
import path from "path";

const KEEP = new Set([
  "Navbar.tsx",
  "HeroSection.tsx",
  "Testimonials.tsx",
  "FaqSection.tsx",
  "CookieConsent.tsx",
  "ScrollToTop.tsx",
  "EducationWalkthroughVideos.tsx",
  "RequestDemoForm.tsx",
  "sparkles.tsx",
  "LoadingScreen.tsx",
  "IndustrySelectDialog.tsx",
  "BlogPostToc.tsx",
  "background-beams.tsx",
  "ChatbaseWidget.tsx",
  "LazyHeroPreview.tsx",
]);

function walk(dir, files = []) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) walk(full, files);
    else if (entry.name.endsWith(".tsx") || entry.name.endsWith(".ts")) files.push(full);
  }
  return files;
}

const stripped = [];
for (const file of walk("src")) {
  if (file.includes(`${path.sep}studio${path.sep}`)) continue;
  if (KEEP.has(path.basename(file))) continue;

  const original = fs.readFileSync(file, "utf8");
  if (!original.startsWith('"use client";') && !original.startsWith("'use client';")) continue;

  let next = original.replace(/^["']use client["'];\r?\n\r?\n?/, "");
  next = next.replace(/\n{3,}/g, "\n\n");
  fs.writeFileSync(file, next);
  stripped.push(file);
}

console.log(`Removed "use client" from ${stripped.length} files:`);
for (const f of stripped) console.log(" -", f);
