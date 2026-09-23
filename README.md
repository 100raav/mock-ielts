# Mock-IELTS

A **free, offline-first IELTS practice companion** built around one belief: honest practice beats fake shortcuts. No paywall, no spam, no "get a guaranteed Band 9" nonsense — just original, official-format questions, real timers, and an honest conversion of what you got right into a real IELTS band estimate.

**Live app:** https://100raav.github.io/mock-ielts/

---

## What this site does

| Skill | What you actually get |
|---|---|
| Reading (Academic) | 3 original passages in official formats — matching headings, True/False/Not Given, summary & sentence completion — each with a real 20-minute timer per passage. Band conversion uses the official Academic Reading raw→band table. |
| Listening | Official Question formats (form completion, map labelling, multiple choice) with a real 30-minute timer. Because real IELTS audio is Copyright Cambridge, we **don't fake it** — the page points you to the official free sample audio instead. |
| Writing | Task 1 + Task 2 with official 20/40-minute timers, word counts, and an honest self-review structure checklist (examiner-style: range, coherence, accuracy). No fake writing-band formula. |
| Speaking | Part 1 · 2 · 3 question banks with real 1-min prep / 2-min talk cue-card timersленed. Self-review prompts the way examiners are trained to judge — because only a live examiner can honestly score Speaking. |
| Dashboard | Per-skill band history, honest "what to improve next" tips, and export/import of your attempts so your data is always yours. |

Every question is **original** — written in the official format, never copied from a real test paper. Practice is free and unlimited.

---

## Core principles (kept honestly)

1. **No fake scores.** Reading & Listening convert raw marks using the official published band tables. Writing & Speaking use examiner-style self-review, because a number you can't verify is worse than no number.
2. **No fake audio.** We never embed pirated IELTS audio. The Listening page links the official free clips and tells you to use them.
3. **No paid "mock score" keys.** Resources point to the genuinely free official practice from the British Council partnership sites.
4. **Your data stays yours.** Accounts, passwords (salted + SHA-256, never stored in plain text) and results live in an IndexedDB vault in your browser. "Backup" is an honest export file you control — not a lock-in.

---

## Tech

- Plain HTML + CSS + vanilla JavaScript — **no framework, no build step, no dependencies**.
- ES6 modules auto-load via tiny IIFEs; all JS is written so `node --check` passes.
- Local-first: `IndexedDB` (auth vault) + `localStorage` (results cache / session) — works offline, nothing leaves your device unless **you** export it.
- Hosted free on **GitHub Pages** from the `main` branch.

## Project layout

```
mock-ielts/
├─ index.html            # landing
├─ login.html signup.html
├─ dashboard.html        # progress
├─ reading/listening/writing/speaking.html
├─ assets/
│  ├─ css/style.css      # taste-skill-inspired design system
│  ├─ js/auth.js data.js main.js test.js dashboard.js
```
**Current on-disk truth (verified before every commit):** 8 pages with clean doctype + closing tags, 5 JS modules each passing `node --check`, zero script-payload pollution — confirmed by same-tool verification in the build log.

---

## Run locally

No server or build needed — open `index.html`, or serve the folder:

```bash
# any static server will do, e.g.
python3 -m http.server 8080
```

Then visit http://localhost:8080

---

## Deployment

The site is published automatically to **https://100raav.github.io/mock-ielts/** whenever `main` is pushed and GitHub Pages is enabled on the repo (Settings → Pages → deploy from branch `main` at `/`).

```bash
git add -A && git commit -m "update" && git push origin main
```

---

## Disclaimer

Mock-IELTS is an independent, free practice companion. It is **not affiliated with, endorsed by, or connected to** the British Council, IDP, or Cambridge Assessment English, and no official IELTS material is reproduced here. Authentic IELTS scores can only come from a live IELTS test — this site is practice, honestly labelled.

---

## License

Viewing and using this site is free. Practice content is original and provided for personal study. If you'd like to redistribute or reuse any part, open an issue — we'd rather give permission than find someone copying it later.
