#!/usr/bin/env node
import { readFileSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const root = dirname(dirname(fileURLToPath(import.meta.url)));
const entryPath = join(root, "output", "entry.txt");

let raw;
try {
  raw = readFileSync(entryPath, "utf8");
} catch {
  console.error("FAIL: output/entry.txt missing");
  process.exit(1);
}

const errors = [];

if (raw.charCodeAt(0) === 0xfeff) errors.push("UTF-8 BOM present");
if (raw.length < 1) errors.push("empty file");
if (raw.length > 200) errors.push(`${raw.length} chars (limit 200)`);
if (raw.trim().length === 0) errors.push("whitespace-only");
if (/\r/.test(raw)) errors.push("carriage return present");
if (/\n/.test(raw.trim())) errors.push("more than one line");

const text = raw.trim();
if (!/[.!?]$/.test(text)) errors.push("does not end with sentence punctuation");
if (/[.!?][.!?]/.test(text)) errors.push("multiple sentence terminators");

if (errors.length) {
  console.error("FAIL:", errors.join("; "));
  process.exit(1);
}

console.log(`OK: ${text.length} chars: ${text}`);