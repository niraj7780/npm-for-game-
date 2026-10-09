# Niraj Number Game

[![npm version](https://img.shields.io/badge/npm-%40nirajcharpe%2Fniraj--number--game-blue)](https://www.npmjs.com/package/@nirajcharpe/niraj-number-game)
[![Node.js](https://img.shields.io/badge/node-%3E%3D18-brightgreen)](https://nodejs.org/)
[![License: MIT](https://img.shields.io/badge/license-MIT-green)](./niraj-number-game/LICENSE)

A terminal number-guessing game, packaged and distributed as an npm CLI package: **[`@nirajcharpe/niraj-number-game`](https://www.npmjs.com/package/@nirajcharpe/niraj-number-game)**.

The computer secretly picks a whole number between 1 and 100. You type guesses in your terminal, and it tells you whether each one is too high or too low until you find it. It ships as a single executable with two tiny runtime dependencies — no build step, no server, no configuration.

---

## Table of Contents

- [Play the Game (Step by Step)](#play-the-game-step-by-step)
- [Repository Layout](#repository-layout)
- [Develop Locally (Step by Step)](#develop-locally-step-by-step)
- [Test the Binary (Step by Step)](#test-the-binary-step-by-step)
- [Publish to npm (Step by Step)](#publish-to-npm-step-by-step)
- [Tech Stack](#tech-stack)
- [License](#license)
- [Author](#author)

---

## Play the Game (Step by Step)

**Step 1 — Start a game instantly** with `npx` (no install required):

```bash
npx @nirajcharpe/niraj-number-game
```

**Step 2 — Type a guess** (a whole number from 1 to 100) when prompted, and press Enter.

**Step 3 — Follow the hints** — `Too low!` means guess higher, `Too high!` means guess lower.

**Step 4 — Keep guessing** until you hit the secret number. Your attempt count is revealed at the end.

**Step 5 — Play again or exit** — answer the `Do you want to play again?` prompt, or press `Ctrl+C` to quit.

> 💡 Prefer a permanent install? Run `npm install --global @nirajcharpe/niraj-number-game`, then launch it from anywhere with `niraj-number-game`.

---

## Repository Layout

This repo contains the publishable package in a subfolder:

```text
npm-for-game-/
├── Readme.md              # this file (repo overview)
└── niraj-number-game/     # the npm package
    ├── index.js           # CLI entry point + game logic
    ├── package.json       # name, bin, files, scripts, engines
    ├── README.md          # published to the npm page
    ├── LICENSE            # MIT
    ├── .gitignore
    └── .npmignore
```

The package itself lives in [`niraj-number-game/`](./niraj-number-game) — see its [README](./niraj-number-game/README.md) for the full step-by-step guide (CLI usage, publishing, troubleshooting).

---

## Develop Locally (Step by Step)

**Step 1 — Clone the repo:**

```bash
git clone https://github.com/niraj7780/npm-for-game-
```

**Step 2 — Enter the package folder and install dependencies:**

```bash
cd npm-for-game-/niraj-number-game
npm install
```

**Step 3 — Run the game locally:**

```bash
npm start
```

**Step 4 — Make your changes** in `index.js`, then run `npm start` again to test them.

---

## Test the Binary (Step by Step)

`npm link` creates a global symlink to your local checkout so you can run the exact `bin` command end users will get.

**Step 1 — From `niraj-number-game/`, create the symlink:**

```bash
npm link
```

**Step 2 — Run the real command:**

```bash
niraj-number-game
```

**Step 3 — Play a round, confirm it works, then clean up:**

```bash
npm unlink --global @nirajcharpe/niraj-number-game
```

---

## Publish to npm (Step by Step)

The package is published to npm from `niraj-number-game/`:

**Step 1 — Enter the package folder:**

```bash
cd niraj-number-game
```

**Step 2 — Preview the exact tarball** (should list only `index.js`, `package.json`, `README.md`, `LICENSE`):

```bash
npm pack --dry-run
```

**Step 3 — Log in to npm:**

```bash
npm login
npm whoami
```

**Step 4 — Publish publicly** (`--access public` is required for scoped packages):

```bash
npm publish --access public
```

**Step 5 — Ship updates later** by bumping the version first (each name + version pair publishes only once), then repeating Steps 2–4:

```bash
npm version patch      # or: minor / major
npm publish --access public
git push --follow-tags
```

---

## Tech Stack

- **Node.js 18+**, ES modules
- [`inquirer`](https://www.npmjs.com/package/inquirer) — interactive prompts
- [`chalk`](https://www.npmjs.com/package/chalk) — colored output

---

## License

[MIT](./niraj-number-game/LICENSE) © Niraj Charpe

---

## Author

**Niraj Charpe**

- npm: [@nirajcharpe](https://www.npmjs.com/~nirajcharpe)
- GitHub: [@niraj7780](https://github.com/niraj7780)
