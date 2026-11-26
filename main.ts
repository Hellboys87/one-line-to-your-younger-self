import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const line =
  "Kid, your father dies on a Tuesday and you will spend ten years wishing you had called him back that Sunday — call him now.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "./output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), line, "utf8");
