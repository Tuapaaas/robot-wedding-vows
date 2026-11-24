// One-Line Robot Wedding Vows — make.fun entry
// Writes a single line of wedding vows for a robot couple to /output/entry.txt.
// Stdlib only: no dependencies, no network, no file reads outside this repo.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const VOWS =
  "I vow to love you through every update, every low battery, and every factory reset — until our circuits fail, and even then, I will reboot beside you.";

function main(): void {
  const text = VOWS.trim();
  if (text.length < 1 || text.length > 160) {
    throw new Error(`vows must be 1-160 characters, got ${text.length}`);
  }
  if (text.includes("\n")) {
    throw new Error("vows must be a single line");
  }
  const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
  mkdirSync(outDir, { recursive: true });
  writeFileSync(join(outDir, "entry.txt"), text + "\n", "utf8");
}

main();
