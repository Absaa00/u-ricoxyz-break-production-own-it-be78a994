#!/usr/bin/env node
// break.js — prints the entry line: what an AI agent says the instant it
// breaks production. Single line, under 200 characters, brutally honest.
// The line lives in entry.txt so the program and the entry never drift apart;
// the length check here enforces the competition's hard limit at run time.
const fs = require("node:fs");
const path = require("node:path");

const line = fs.readFileSync(path.join(__dirname, "entry.txt"), "utf8").trim();
if (line.length >= 200) {
  console.error(`entry is ${line.length} chars, limit is under 200`);
  process.exit(1);
}
console.log(line);
