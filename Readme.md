# Niraj Number Game

[![npm version](https://img.shields.io/badge/npm-%40nirajcharpe%2Fniraj--number--game-blue)](https://www.npmjs.com/package/@nirajcharpe/niraj-number-game)
[![Node.js](https://img.shields.io/badge/node-%3E%3D18-brightgreen)](https://nodejs.org/)
[![License: MIT](https://img.shields.io/badge/license-MIT-green)](./niraj-number-game/LICENSE)

A terminal number‑guessing game, packaged and distributed as an npm CLI package: **[`@nirajcharpe/niraj-number-game`](https://www.npmjs.com/package/@nirajcharpe/niraj-number-game)**.

The computer secretly picks a whole number between 1 and 100. You type guesses in your terminal, and it tells you whether each one is too high or too low until you find it. It ships as a single executable binary with two tiny runtime dependencies — no build step, no server, no configuration.

---

## Quick Start

Play instantly with `npx` — no install required:

```bash
npx @nirajcharpe/niraj-number-game
```

Or install it globally:

```bash
npm install --global @nirajcharpe/niraj-number-game
niraj-number-game
```

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

The package itself lives in [`niraj-number-game/`](./niraj-number-game) — see its [README](./niraj-number-game/README.md) for full CLI, publishing, and troubleshooting details.

---

## Development

Clone the repo and install the package's dependencies:

```bash
git clone https://github.com/niraj7780/npm-for-game-
cd npm-for-game-/niraj-number-game
npm install
npm start          # run the game locally
```

To exercise the real `bin` command exactly as an end user would:

```bash
npm link
niraj-number-game
npm unlink --global @nirajcharpe/niraj-number-game   # clean up
```

---

## Publishing

The package is published to npm from `niraj-number-game/`:

```bash
cd niraj-number-game
npm pack --dry-run      # preview the exact tarball
npm login
npm publish --access public
```

`--access public` is required for scoped packages. Each name + version pair publishes only once, so bump the version to ship updates (`npm version patch|minor|major`).

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
