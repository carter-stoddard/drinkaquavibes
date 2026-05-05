import { readdir, stat, readFile, writeFile } from "node:fs/promises";
import { join, extname } from "node:path";
import sharp from "sharp";

const DIR = "public";
const MAX_WIDTH = 2000;
const PNG_QUALITY = 78;
const JPEG_QUALITY = 82;

const files = (await readdir(DIR)).filter((f) =>
  /\.(png|jpe?g)$/i.test(f)
);

const fmt = (n) => (n < 1024 ? `${n}B` : n < 1024 ** 2 ? `${(n / 1024).toFixed(0)}KB` : `${(n / 1024 / 1024).toFixed(2)}MB`);

let totalBefore = 0;
let totalAfter = 0;
const rows = [];

for (const file of files) {
  const path = join(DIR, file);
  const ext = extname(file).toLowerCase();
  const before = (await stat(path)).size;
  totalBefore += before;

  const input = await readFile(path);
  let pipeline = sharp(input, { failOn: "none" });
  const meta = await pipeline.metadata();
  if (meta.width && meta.width > MAX_WIDTH) {
    pipeline = pipeline.resize({ width: MAX_WIDTH, withoutEnlargement: true });
  }

  let out;
  if (ext === ".png") {
    out = await pipeline
      .png({ palette: true, quality: PNG_QUALITY, compressionLevel: 9, effort: 10 })
      .toBuffer();
  } else {
    out = await pipeline
      .jpeg({ quality: JPEG_QUALITY, mozjpeg: true })
      .toBuffer();
  }

  if (out.length < before) {
    await writeFile(path, out);
    totalAfter += out.length;
    rows.push({ file, before, after: out.length, savedPct: ((1 - out.length / before) * 100).toFixed(1), w: meta.width });
  } else {
    totalAfter += before;
    rows.push({ file, before, after: before, savedPct: "0.0", w: meta.width, skipped: true });
  }
}

rows.sort((a, b) => b.before - a.before);
for (const r of rows) {
  const tag = r.skipped ? " (skipped — already small)" : "";
  console.log(`${r.file.padEnd(38)} ${fmt(r.before).padStart(8)} → ${fmt(r.after).padStart(8)}  -${r.savedPct}%${tag}`);
}
console.log("─".repeat(78));
console.log(`TOTAL${" ".repeat(33)} ${fmt(totalBefore).padStart(8)} → ${fmt(totalAfter).padStart(8)}  -${((1 - totalAfter / totalBefore) * 100).toFixed(1)}%`);
