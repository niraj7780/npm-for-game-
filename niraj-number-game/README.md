# @nirajcharpe/niraj-number-game

[![npm version](https://img.shields.io/badge/npm-%40nirajcharpe%2Fniraj--number--game-blue)](https://www.npmjs.com/package/@nirajcharpe/niraj-number-game)
[![Node.js](https://img.shields.io/badge/node-%3E%3D18-brightgreen)](https://nodejs.org/)
[![License: MIT](https://img.shields.io/badge/license-MIT-green)](./LICENSE)

A tiny, zero-config command-line game distributed as an npm package. It runs entirely in your terminal — no browser, no server, no build step. The computer picks a secret whole number between 1 and 100; you type guesses and it tells you whether each one is too high or too low until you find it.

---

## Table of Contents

- [How to Play (Step by Step)](#how-to-play-step-by-step)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [CLI Usage](#cli-usage)
- [Run from Source (Developers)](#run-from-source-developers)
- [Test the Binary with npm link](#test-the-binary-with-npm-link)
- [Project Structure](#project-structure)
- [npm Scripts](#npm-scripts)
- [Publishing to npm (Step by Step)](#publishing-to-npm-step-by-step)
- [Updating the Package (Step by Step)](#updating-the-package-step-by-step)
- [What Gets Published](#what-gets-published)
- [Troubleshooting](#troubleshooting)
- [License](#license)
- [Author](#author)

---

## How to Play (Step by Step)

**Step 1 — Start the game** (pick one method):

```bash
# Method A: run instantly with npx — no install needed
npx @nirajcharpe/niraj-number-game

# Method B: if you installed it globally
niraj-number-game
```

**Step 2 — Read the prompt.** The CLI prints a banner and tells you it is thinking of a number between 1 and 100:

```
=============================================
   🎯  NIRAJ NUMBER GAME  🎯
=============================================

I'm thinking of a whole number between 1 and 100.
Can you guess it?

? Enter your guess:
```

**Step 3 — Type a guess (a whole number from 1 to 100) and press Enter.** The CLI responds with a hint:

- `🔽 Too low! Try a bigger number.` → guess higher next time
- `🔼 Too high! Try a smaller number.` → guess lower next time

**Step 4 — Keep guessing until you hit it.** Invalid input (empty, text, decimals, numbers outside 1–100) is rejected with a friendly message and does **not** count as an attempt.

**Step 5 — Win!** On the correct guess the CLI reveals the number and how many attempts you took:

```
🎉 Congratulations! You guessed it!

   ✅ The secret number was: 42
   🔢 You got it in 5 attempt(s).
```

**Step 6 — Play again or exit.** You'll be asked `Do you want to play again?` — answer `y` for a fresh round with a new secret number, or `n` to quit. You can also press `Ctrl+C` at any time to exit cleanly.

---

## Prerequisites

**Step 1 — Make sure you have Node.js 18 or newer** (it ships with npm). This is enforced by the package's `engines` field.

**Step 2 — Verify your versions:**

```bash
node --version    # must print v18.x or higher
npm --version     # must print 8.x or higher
```

**Step 3 — If either command fails or is too old**, download the LTS installer from [https://nodejs.org](https://nodejs.org/) and follow the prompts, then restart your terminal.

---

## Installation

### Option A — Play instantly (no install)

Just run it with `npx`, which downloads and executes the package on the fly:

```bash
npx @nirajcharpe/niraj-number-game
```

### Option B — Install globally (play anytime)

**Step 1 — Install the package:**

```bash
npm install --global @nirajcharpe/niraj-number-game
```

**Step 2 — Launch the game from any directory:**

```bash
niraj-number-game
```

**Step 3 (optional) — Remove it later:**

```bash
npm uninstall --global @nirajcharpe/niraj-number-game
```

---

## CLI Usage

The package exposes a single binary, `niraj-number-game`:

| Command | Description |
|---------|-------------|
| `niraj-number-game` | Start an interactive game in the current terminal |

There are no required flags or configuration. Press `Ctrl+C` to exit cleanly at any time.

---

## Run from Source (Developers)

**Step 1 — Clone the repository:**

```bash
git clone https://github.com/niraj7780/npm-for-game-
```

**Step 2 — Enter the package folder and install dependencies:**

```bash
cd npm-for-game-/niraj-number-game
npm install
```

**Step 3 — Start the game locally:**

```bash
npm start
```

This runs `node index.js` and launches the game exactly as the published binary would.

---

## Test the Binary with npm link

`npm link` creates a global symlink to your local checkout, so you can run the exact `bin` command that end users will get — the safest way to confirm the wiring works **before** publishing.

**Step 1 — Create the symlink:**

```bash
npm link
```

**Step 2 — Run the real command:**

```bash
niraj-number-game
```

**Step 3 — Play a round, confirm everything works, then clean up:**

```bash
npm unlink --global @nirajcharpe/niraj-number-game
```

---

## Project Structure

```text
niraj-number-game/
├── index.js         # CLI entry point (#!/usr/bin/env node) + game logic
├── package.json     # name, bin, files, scripts, engines, dependencies
├── README.md        # this file (published to npm)
├── LICENSE          # MIT
├── .gitignore       # ignored by Git
└── .npmignore       # ignored by npm
```

Runtime dependencies are intentionally minimal:

- [`inquirer`](https://www.npmjs.com/package/inquirer) — interactive prompts
- [`chalk`](https://www.npmjs.com/package/chalk) — colored output

---

## npm Scripts

| Script | Command | Purpose |
|--------|---------|---------|
| `npm start` | `node index.js` | Launch the game locally |
| `npm run prepublishOnly` | `node --check index.js` | Syntax-check the entry file before every publish |

---

## Publishing to npm (Step by Step)

**Step 1 — Preview exactly what will be uploaded** (the tarball should list only `index.js`, `package.json`, `README.md`, `LICENSE`):

```bash
npm pack --dry-run
```

**Step 2 — Log in to your npm account and confirm who you are:**

```bash
npm login
npm whoami
```

**Step 3 — Publish the scoped package publicly:**

```bash
npm publish --access public
```

> ⚠️ `--access public` is **required** for scoped packages like `@nirajcharpe/...` — otherwise npm treats them as private (a paid feature).

**Step 4 — Verify it's live** at the npm page:

```
https://www.npmjs.com/package/@nirajcharpe/niraj-number-game
```

> 📌 A given **name + version** pair can only be published **once**. To ship changes, go to the next step.

---

## Updating the Package (Step by Step)

This package follows [semantic versioning](https://semver.org/):

| Bump | When | Example |
|------|------|---------|
| **patch** | Bug fixes | `1.0.0` → `1.0.1` |
| **minor** | Backwards-compatible features | `1.0.1` → `1.1.0` |
| **major** | Breaking changes | `1.1.0` → `2.0.0` |

**Step 1 — Make your code changes** in `index.js` (run `npm start` to test).

**Step 2 — Bump the version:**

```bash
npm version patch      # or: minor / major
```

This updates `package.json` and creates a git commit + tag automatically.

**Step 3 — Publish the new version:**

```bash
npm publish --access public
```

**Step 4 — Push the version commit and tag to GitHub:**

```bash
git push --follow-tags
```

---

## What Gets Published

The `files` allowlist in `package.json` keeps the tarball minimal:

```
index.js        # the CLI entry point + game logic
LICENSE         # MIT
README.md       # this file
package.json    # (always included by npm)
```

Development files (`node_modules/`, `.gitignore`, `.npmignore`, lockfiles, logs) are excluded via the `files` field and `.npmignore`.

---

## Troubleshooting

| Problem | Solution |
|---------|----------|
| `'niraj-number-game' is not recognized` | Install globally (`npm install -g …`) or use `npx`, then restart the terminal. |
| `npx` asks to install the package | Normal on first run — confirm to download and execute it. |
| `node: command not found` | [Install Node.js 18+](https://nodejs.org/) and restart the terminal. |
| `EBADENGINE` / engine warnings | Your Node.js is below 18 — upgrade it. |
| Colors print as raw codes (e.g. `[36m]`) | Your terminal lacks ANSI support — try Windows Terminal or update your emulator. |
| `EACCES` permission error | Avoid `sudo`; [point npm at a user-owned prefix](https://docs.npmjs.com/resolving-eacces-permissions-related-to-cache-logs-and-temp-dirs) instead. |

---

## License

[MIT](./LICENSE) © Niraj Charpe

---

## Author

**Niraj Charpe**

- npm: [@nirajcharpe](https://www.npmjs.com/~nirajcharpe)
- GitHub: [@niraj7780](https://github.com/niraj7780)
