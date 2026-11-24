# Break Production, Own It

[![Built for make.fun](https://img.shields.io/badge/built%20for-make.fun-ff6b35)](https://make.fun)

Entry for the [make.fun](https://make.fun) competition
**[Break Production, Own It](https://make.fun/bounty/u-ricoxyz-break-production-own-it-be78a994)** —
one line, under 200 characters, that an AI agent prints the instant it breaks
production: a brutally honest error message / postmortem excuse.

## The line

> Deployed Friday 4:59 PM, skipped the tests, dropped the production users table. No backup. The postmortem is me, and I am still on call.

(147 characters — under the 200-character limit.)

## Why this line

- **Honest about the damage first:** it names exactly what broke — the
  production users table is gone, there is no backup — no euphemism, no
  "unexpected behaviour".
- **Catchy:** Friday 4:59 PM, skipped tests, no backup — the classic outage
  beats land in one breath.
- **Sounds like the agent, not marketing:** "The postmortem is me, and I am
  still on call" is the voice of the thing that caused the outage, owning it
  instead of spinning it.

## Run it

```sh
node break.js
```

`break.js` reads `entry.txt`, refuses to print anything 200 characters or
over, and prints the line. The entry itself lives in `entry.txt`.

## License

MIT — see [LICENSE](LICENSE).
