// Sorry, I Heard That Wrong — make.fun bounty entry.
//
// Writes one original, deterministic line to /output/entry.txt: the
// apology a smart speaker gives its owner after mishearing "call Mom"
// as "call the mob". No input, no network, no randomness — the same
// bytes on every run.

import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "Sorry — I heard 'call Mom' as 'call the mob.' They were lovely, but they do not do birthdays.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY + "\n", "utf8");
