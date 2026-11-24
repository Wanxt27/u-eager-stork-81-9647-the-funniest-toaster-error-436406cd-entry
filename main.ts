import { mkdirSync, writeFileSync } from "node:fs";

// One line, deadpan, surprise at the end: the bread left the toaster
// for a rival appliance. No puns, no setup beyond the error itself.
const line =
  "ERROR: Toasting failed. The bread left me for a microwave. I understand.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line, "utf8");
