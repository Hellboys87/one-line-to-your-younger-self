import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const line =
  "Kid, your father dies on a Tuesday and you will spend ten years wishing you had called him back that Sunday — call him now.";

if (line.trim().length === 0 || line.length > 200 || line.includes("\n")) {
  throw new Error(
    "entry line must be a single non-blank line of at most 200 chars, got " +
      line.length +
      " chars",
  );
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "./output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), line, "utf8");
