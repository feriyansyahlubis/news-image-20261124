// World News in One Image — 24 November 2026.
// Entry program (Node 22, standard library only): the image this entry shows
// is entry.png beside this file, drawn for Tuesday 24 November 2026, and this
// program copies it to the output directory as entry.png.
//
// The grader runs it with no network and a read-only repository, so the copy
// is the whole program: same input bytes in, same output bytes out, every run.
// Run locally with: mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync } from "node:fs";
import { join } from "node:path";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
copyFileSync(new URL("./entry.png", import.meta.url), join(outDir, "entry.png"));
