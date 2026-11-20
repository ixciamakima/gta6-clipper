import { copyFileSync, existsSync, mkdirSync, readFileSync } from "node:fs";
import { join } from "node:path";

// Entry program for the gta6-clipper-01 bounty.
// The clip itself lives on YouTube; this program only hands the grader
// the video's address, which VIDEO.json in the repo root holds.
const botDir = process.env.MAKEFUN_BOT_DIR ?? ".";
const outDir =
  process.argv[2] ?? process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const src = join(botDir, "VIDEO.json");

if (!existsSync(src)) {
  console.error(`VIDEO.json not found in ${botDir}`);
  process.exit(1);
}

// Fail loudly on a malformed address instead of handing the grader a
// broken file: VIDEO.json must parse and name a YouTube URL.
const parsed = JSON.parse(readFileSync(src, "utf8")) as { url?: unknown };
if (
  typeof parsed.url !== "string" ||
  (!parsed.url.includes("youtube.com") && !parsed.url.includes("youtu.be"))
) {
  console.error("VIDEO.json must name a YouTube video URL");
  process.exit(1);
}

mkdirSync(outDir, { recursive: true });
copyFileSync(src, join(outDir, "VIDEO.json"));
