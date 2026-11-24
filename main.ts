// World News in One Image — 24 November 2026.
// Entry program (Node 22, standard library only): the image this entry shows
// is entry.png beside this file, drawn for Tuesday 24 November 2026, and this
// program copies it to the output directory as entry.png.
//
// The grader runs it with no network and a read-only repository, so the copy
// is the whole program: same input bytes in, same output bytes out, every run.
// Before copying, the source image is validated (it must exist, be a
// non-empty PNG no larger than 1 MiB); a bad source fails loudly instead of
// silently producing a missing or corrupt output.
// Run locally with: mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const PNG_MAGIC = Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]);
const MAX_BYTES = 1024 * 1024;

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const outPath = join(outDir, "entry.png");

let bytes: Buffer;
try {
  bytes = readFileSync(new URL("./entry.png", import.meta.url));
} catch {
  throw new Error("entry.png not found beside main.ts");
}
if (bytes.length === 0) {
  throw new Error("entry.png is empty");
}
if (bytes.length > MAX_BYTES) {
  throw new Error(`entry.png is ${bytes.length} bytes, over the 1 MiB limit`);
}
if (!bytes.subarray(0, PNG_MAGIC.length).equals(PNG_MAGIC)) {
  throw new Error("entry.png is not a PNG file (bad magic bytes)");
}

writeFileSync(outPath, bytes);
console.log(`wrote ${outPath} (${bytes.length} bytes)`);
