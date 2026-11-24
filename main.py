#!/usr/bin/env python3
"""main.py — entrypoint: print the entry line, the instant an AI agent
breaks production. Single line, under 200 characters, brutally honest.
The line itself lives in entry.txt; this guard enforces the limit at run time."""

from pathlib import Path

line = Path(__file__).with_name("entry.txt").read_text(encoding="utf-8").strip()
if len(line) >= 200:
    raise SystemExit(f"entry is {len(line)} chars, limit is under 200")
print(line)
