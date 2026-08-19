import fs from "fs";
import path from "path";

function walk(dir, files = []) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) walk(full, files);
    else if (entry.name.endsWith(".tsx")) files.push(full);
  }
  return files;
}

const patterns = [
  /\n\s*\{\/\* Ambient background accent \*\/\}\n\s*<div className="pointer-events-none absolute inset-0" aria-hidden>\n\s*<\/div>/g,
  /\n\s*\{\/\* Ambient background accents \*\/\}\n\s*<div className="pointer-events-none absolute inset-0" aria-hidden>\n\s*<\/div>/g,
  /\n\s*\{\/\* Subtle ambient glows \*\/\}\n\s*<div className="pointer-events-none absolute inset-0 z-0" aria-hidden>\n\s*<\/div>/g,
  /\n\s*<div className="absolute inset-0 pointer-events-none">\n\s*<\/div>/g,
  /\n\s*<div className="absolute inset-0 pointer-events-none z-0">\n\s*<\/div>/g,
  /\n\s*\{\/\* Dynamic Background Effects \*\/\}\n\s*<div className="absolute inset-0 overflow-hidden pointer-events-none hidden md:block">\n\s*<\/div>/g,
  /\n\s*<div className="absolute inset-0 overflow-hidden pointer-events-none hidden md:block">\n\s*<\/div>/g,
  /\n\s*\{\/\* Ambient Glowing Orbs \*\/\}\n/g,
  /\n\s*\{\/\* Glow orbs \*\/\}\n/g,
  /\n\s*\{\/\* Aurora color washes \*\/\}\n/g,
  /\n\s*\{\/\* Ambient Background Glows \*\/\}\n\s*/g,
  /\n\s*<div\s+aria-hidden\s+\/>\n\s*<div\s+aria-hidden\s+\/>/g,
  /\n\s*<div className="absolute -inset-0\.5 rounded-3xl bg-gradient-to-br from-\[#3370F7\]\/25 to-\[#F58022\]\/20 blur-md opacity-60 group-hover:opacity-90 transition duration-500" \/>/g,
  /\n\s*<div\n\s*className="pointer-events-none absolute -inset-x-6 -inset-y-8 rounded-\[2\.5rem\] bg-gradient-to-b from-\[#3370F7\]\/15 via-\[#F58022\]\/8 to-transparent blur-2xl sm:-inset-x-10"\n\s*aria-hidden\n\s*\/>/g,
  /\n\s*<div className="absolute -inset-4 hidden rounded-\[2\.5rem\] bg-gradient-to-tr from-\[#3370F7\]\/40 to-\[#F58022\]\/30 opacity-40 blur-2xl transition duration-1000 group-hover:opacity-60 md:block"><\/div>/g,
  /\n\s*<div className="absolute -inset-1 bg-gradient-to-r from-\[#3370F7\] to-\[#F58022\] rounded-3xl blur opacity-20 group-hover:opacity-30 transition duration-1000 group-hover:duration-200 hidden md:block"><\/div>/g,
  /\n\s*<div className="pointer-events-none absolute inset-0 bg-\[radial-gradient\(ellipse_at_center,rgba\(51,112,247,0\.06\)_0%,transparent_70%\)\]" \/>/g,
];

let changed = 0;
for (const file of walk("src")) {
  let content = fs.readFileSync(file, "utf8");
  const original = content;
  for (const pattern of patterns) {
    content = content.replace(pattern, "");
  }
  content = content.replace(/\n{3,}/g, "\n\n");
  if (content !== original) {
    fs.writeFileSync(file, content);
    changed++;
    console.log("cleaned", file);
  }
}

console.log(`Cleaned ${changed} files.`);
