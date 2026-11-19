// gta6-meme-x-01 — entry bot.
//
// What it does: copies POST.json from the repo root (the bot directory) to
// the output directory as POST.json. Nothing else.
//
// Deterministic: the output bytes are exactly the input bytes, so two runs
// produce identical files. No network, no clock, no files outside the repo.
//
// Configuration (environment variables, with defaults):
//   MAKEFUN_BOT_DIR     directory holding POST.json (default: /bot)
//   MAKEFUN_OUTPUT_DIR  directory receiving POST.json (default: /output)

import { copyFileSync, mkdirSync } from "node:fs";
import { join } from "node:path";

const botDir = process.env.MAKEFUN_BOT_DIR ?? "/bot";
const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

mkdirSync(outputDir, { recursive: true });
copyFileSync(join(botDir, "POST.json"), join(outputDir, "POST.json"));
