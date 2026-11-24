// Weirdest Job Title: Blind Judge Showdown — entry program.
// Writes one job title to /output/entry.txt. Deterministic: the same
// bytes on every run. Node 22, standard library only, no network.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const TITLE = "Senior Vice President of Waiting Room Magazines";

// Self-check the gate before writing: the file must hold UTF-8 text of
// 1 to 60 characters, not only white space. Fail loudly instead of
// handing the grader a bad file. The 47-character title clears it.
if (TITLE.length < 1 || TITLE.length > 60 || TITLE.trim().length === 0) {
  throw new Error(`title fails the 1-60 character gate: ${TITLE.length} chars`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), TITLE, "utf8");
