import fs from "fs";
import path from "path";

const ROOT = "src";
const KEEP = new Set([
  "Navbar.tsx",
  "FaqSection.tsx",
  "CookieConsent.tsx",
  "ScrollToTop.tsx",
  "BlogPostToc.tsx",
  "MotionProvider.tsx",
  "IndustrySelectDialog.tsx",
  "LoadingScreen.tsx",
]);

const STRIP_PROPS = [
  "initial",
  "whileInView",
  "viewport",
  "variants",
  "animate",
  "transition",
  "exit",
  "whileHover",
  "whileTap",
  "layoutId",
];

function walk(dir, files = []) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) walk(full, files);
    else if (entry.name.endsWith(".tsx")) files.push(full);
  }
  return files;
}

function removeBalancedProp(content, propName) {
  const needle = new RegExp(`\\s${propName}=`, "g");
  let result = "";
  let cursor = 0;
  let match;

  while ((match = needle.exec(content)) !== null) {
    result += content.slice(cursor, match.index);

    const valueStart = match.index + match[0].length;
    const firstChar = content[valueStart];

    if (firstChar === '"') {
      const end = content.indexOf('"', valueStart + 1) + 1;
      cursor = end;
      needle.lastIndex = end;
      continue;
    }

    if (firstChar !== "{") {
      cursor = valueStart;
      continue;
    }

    let depth = 0;
    let end = valueStart;
    for (let i = valueStart; i < content.length; i++) {
      const ch = content[i];
      if (ch === "{") depth++;
      else if (ch === "}") {
        depth--;
        if (depth === 0) {
          end = i + 1;
          break;
        }
      }
    }
    cursor = end;
    needle.lastIndex = end;
  }

  result += content.slice(cursor);
  return result;
}

function stripFile(filePath) {
  const base = path.basename(filePath);
  if (KEEP.has(base)) return false;

  let content = fs.readFileSync(filePath, "utf8");
  if (!content.includes("framer-motion") && !content.includes("motion.")) {
    return false;
  }

  content = content.replace(/<motion\.(\w+)/g, "<$1");
  content = content.replace(/<\/motion\.(\w+)>/g, "</$1>");
  content = content.replace(/motion\.(\w+)/g, "$1");

  for (const prop of STRIP_PROPS) {
    content = removeBalancedProp(content, prop);
  }

  content = content.replace(/\s+initial="hidden"/g, "");
  content = content.replace(/\s+animate="visible"/g, "");

  if (!content.match(/\b(AnimatePresence|motion\.|from "framer-motion"|from 'framer-motion')\b/)) {
    content = content.replace(
      /import\s+\{[^}]*\}\s+from\s+["']framer-motion["'];\n?/g,
      ""
    );
  } else {
    content = content.replace(
      /import\s+\{\s*motion\s*,?\s*AnimatePresence\s*\}\s+from\s+["']framer-motion["'];\n?/g,
      (m) => {
        if (content.includes("AnimatePresence")) {
          return 'import { AnimatePresence } from "framer-motion";\n';
        }
        return "";
      }
    );
    content = content.replace(
      /import\s+\{\s*AnimatePresence\s*,?\s*motion\s*\}\s+from\s+["']framer-motion["'];\n?/g,
      (m) => {
        if (content.includes("AnimatePresence")) {
          return 'import { AnimatePresence } from "framer-motion";\n';
        }
        return "";
      }
    );
    content = content.replace(
      /import\s+\{\s*motion\s*\}\s+from\s+["']framer-motion["'];\n?/g,
      ""
    );
  }

  content = content.replace(/\n{3,}/g, "\n\n");
  fs.writeFileSync(filePath, content);
  return true;
}

const files = walk(ROOT);
const changed = files.filter(stripFile);
console.log(`Stripped motion from ${changed.length} files.`);
