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

function cleanup(content) {
  content = content.replace(
    /\n\s*const (?:fadeIn|item|container|staggerContainer) = \{[\s\S]*?\};\n/g,
    "\n"
  );

  content = content.replace(
    /(<[\w.]+)\n(?:[ \t]*\n)+([ \t]*className=)/g,
    "$1\n$2"
  );

  content = content.replace(/\n{3,}/g, "\n\n");
  return content;
}

for (const file of walk("src")) {
  const original = fs.readFileSync(file, "utf8");
  const next = cleanup(original);
  if (next !== original) fs.writeFileSync(file, next);
}

console.log("Cleanup complete.");
