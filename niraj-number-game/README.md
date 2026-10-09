# @nirajcharpe/niraj-number-game

[![npm version](https://img.shields.io/badge/npm-%40nirajcharpe%2Fniraj--number--game-blue)](https://www.npmjs.com/package/@nirajcharpe/niraj-number-game)
[![Node.js](https://img.shields.io/badge/node-%3E%3D18-brightgreen)](https://nodejs.org/)
[![License: MIT](https://img.shields.io/badge/license-MIT-green)](./LICENSE)

A tiny, zero‑config command‑line game distributed as an npm package. It runs entirely in your terminal — no browser, no server, no build step. Guess the secret number between 1 and 100, with the CLI handling input, validation, and colored output for you.

Install it once and play instantly, or run it ad‑hoc with `npx`.

---

## Quick Start

Run it instantly with `npx` (no install required):

```bash
npx @nirajcharpe/niraj-number-game
```

Or install it globally and launch it from anywhere:

```bash
npm install --global @nirajcharpe/niraj-number-game
niraj-number-game
```

---

## CLI Usage

The package exposes a single binary, `niraj-number-game`:

| Command | Description |
|---------|-------------|
| `niraj-number-game` | Start an interactive game in the current terminal |

There are no required flags or configuration. On launch the CLI prints a short prompt, accepts integer guesses, and tells you whether each guess is too high or too low until you find the number. Press `Ctrl+C` to exit cleanly at any time.

---

## Requirements

- **Node.js 18 or newer** (enforced via the `engines` field)
- **npm** 8+ (ships with Node.js)

Verify your environment:

```bash
node --version
npm --version
```

---

## Installation

### As a player

```bash
# One-off run (recommended for trying it out)
npx @nirajcharpe/niraj-number-game

# Or install globally
npm install --global @nirajcharpe/niraj-number-game
```

To remove a global install:

```bash
npm uninstall --global @nirajcharpe/niraj-number-game
```

### As a developer (local source)

```bash
git clone https://github.com/niraj7780/npm-for-game-
cd npm-for-game-/niraj-number-game
npm install
```

---

## npm Scripts

| Script | Command | Purpose |
|--------|---------|---------|
| `npm start` | `node index.js` | Launch the game locally |
| `npm run prepublishOnly` | `node --check index.js` | Syntax‑check the entry file before every publish |

### Test the binary like a real user

`npm link` creates a global symlink to your local checkout so you can run the exact `bin` command end users will get:

```bash
npm link
niraj-number-game        # runs your local build
npm unlink --global @nirajcharpe/niraj-number-game   # clean up when done
```

> 💡 `npm link` is the safest way to confirm the `bin` wiring works **before** you publish.

---

## Publishing to npm

> ⚠️ Not published yet. These are the steps to ship it.

1. **Preview exactly what will be uploaded** (should list only `index.js`, `package.json`, `README.md`, `LICENSE`):

   ```bash
   npm pack --dry-run
   ```

2. **Authenticate** and confirm your account:

   ```bash
   npm login
   npm whoami
   ```

3. **Publish** the scoped package publicly:

   ```bash
   npm publish --access public
   ```

   The `--access public` flag is **required** for scoped packages — otherwise npm treats them as private (a paid feature).

After publishing, the package page lives at:

```
https://www.npmjs.com/package/@nirajcharpe/niraj-number-game
```

> 📌 A given **name + version** pair can only be published **once**. To ship changes, bump the version first.

---

## Versioning

This package follows [semantic versioning](https://semver.org/):

| Bump | When | Example |
|------|------|---------|
| **patch** | Bug fixes | `1.0.0` → `1.0.1` |
| **minor** | Backwards‑compatible features | `1.0.1` → `1.1.0` |
| **major** | Breaking changes | `1.1.0` → `2.0.0` |

```bash
npm version patch      # or: minor / major
npm publish --access public
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

## Troubleshooting

| Problem | Solution |
|---------|----------|
| `'niraj-number-game' is not recognized` | Install globally (`npm install -g …`) or use `npx`, then restart the terminal. |
| `npx` asks to install the package | Normal on first run — confirm to download and execute it. |
| `node: command not found` | [Install Node.js 18+](https://nodejs.org/) and restart the terminal. |
| Colors print as raw codes (e.g. `[36m]`) | Your terminal lacks ANSI support — try Windows Terminal or update your emulator. |
| `EACCES` permission error | Avoid `sudo`; [point npm at a user‑owned prefix](https://docs.npmjs.com/resolving-eacces-permissions-related-to-cache-logs-and-temp-dirs) instead. |
| Package name already taken | Scoped names are unique per account — confirm your npm username. |

---

## How It Plays

The CLI picks a random whole number from 1–100 and prompts for guesses. Empty input, text, decimals, and out‑of‑range values are rejected without counting as attempts. Each valid guess is answered with "too low" or "too high" until you hit it, then you can opt to play another round with a fresh number.

---

## License

[MIT](./LICENSE) © Niraj Charpe

---

## Author

**Niraj Charpe**

- npm: [@nirajcharpe](https://www.npmjs.com/~nirajcharpe)
- GitHub: [@niraj7780](https://github.com/niraj7780)
