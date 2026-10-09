#!/usr/bin/env node

import inquirer from 'inquirer';
import chalk from 'chalk';
import { pathToFileURL } from 'node:url';
import { realpathSync } from 'node:fs';

const MIN_NUMBER = 1;
const MAX_NUMBER = 100;

// Handle Ctrl+C gracefully — no scary stack trace for the player.
process.on('SIGINT', () => {
  console.log(chalk.cyan('\n\nThanks for playing! 👋 Goodbye.\n'));
  process.exit(0);
});

// Last line of defense: never dump a raw stack trace on a player.
process.on('uncaughtException', () => {
  console.error(chalk.red('\n⚠️  Something went wrong. Please run the game again.\n'));
  process.exit(1);
});

// Return a random whole number between MIN_NUMBER and MAX_NUMBER (inclusive).
export function generateSecretNumber() {
  return Math.floor(Math.random() * (MAX_NUMBER - MIN_NUMBER + 1)) + MIN_NUMBER;
}

// Check a raw guess string. Returns { valid, value?, reason? }.
export function validateGuess(raw) {
  const input = String(raw).trim();

  if (input === '') {
    return { valid: false, reason: 'Input cannot be empty. Please enter a number.' };
  }

  // Reject text and symbols. Give decimals their own clearer message.
  if (!/^-?\d+$/.test(input)) {
    if (/^-?\d*\.\d+$/.test(input)) {
      return { valid: false, reason: 'Decimals are not allowed. Please enter a whole number.' };
    }
    return { valid: false, reason: 'That is not a valid number. Please enter a whole number.' };
  }

  const value = Number(input);

  if (value < MIN_NUMBER) {
    return { valid: false, reason: `Too small! The number is between ${MIN_NUMBER} and ${MAX_NUMBER}.` };
  }
  if (value > MAX_NUMBER) {
    return { valid: false, reason: `Too big! The number is between ${MIN_NUMBER} and ${MAX_NUMBER}.` };
  }

  return { valid: true, value };
}

// Compare a valid guess to the secret and return a verdict.
export function evaluateGuess(guess, secret) {
  if (guess < secret) return 'low';
  if (guess > secret) return 'high';
  return 'correct';
}

// Keep prompting until the player enters a valid guess.
async function askForGuess() {
  while (true) {
    const { answer } = await inquirer.prompt([
      {
        type: 'input',
        name: 'answer',
        message: 'Enter your guess:',
      },
    ]);

    const result = validateGuess(answer);
    if (result.valid) return result.value;

    console.log(chalk.red(`✖ ${result.reason}\n`));
  }
}

// Run a single round and return the number of valid attempts.
async function playGame() {
  const secret = generateSecretNumber();
  let attempts = 0;

  console.log(chalk.cyan('\n============================================='));
  console.log(chalk.cyan('   🎯  NIRAJ NUMBER GAME  🎯'));
  console.log(chalk.cyan('=============================================\n'));
  console.log(chalk.yellow(`I'm thinking of a whole number between ${MIN_NUMBER} and ${MAX_NUMBER}.`));
  console.log(chalk.yellow('Can you guess it?\n'));

  while (true) {
    const guess = await askForGuess();
    attempts += 1;
    const verdict = evaluateGuess(guess, secret);

    if (verdict === 'low') {
      console.log(chalk.blue('🔽 Too low! Try a bigger number.\n'));
    } else if (verdict === 'high') {
      console.log(chalk.magenta('🔼 Too high! Try a smaller number.\n'));
    } else {
      console.log(chalk.green('\n🎉 Congratulations! You guessed it!\n'));
      console.log(chalk.green(`   ✅ The secret number was: ${secret}`));
      console.log(chalk.green(`   🔢 You got it in ${attempts} attempt(s).\n`));
      break;
    }
  }
}

// Ask whether to play again.
async function askToPlayAgain() {
  const { playAgain } = await inquirer.prompt([
    {
      type: 'confirm',
      name: 'playAgain',
      message: 'Do you want to play again?',
      default: false,
    },
  ]);
  console.log('');
  return playAgain;
}

// Main game loop.
async function main() {
  let playing = true;

  while (playing) {
    await playGame();
    playing = await askToPlayAgain();
  }

  console.log(chalk.cyan('Thanks for playing! 👋 See you next time.\n'));
}

// Start the game only when run directly (not when imported for testing).
// Resolve symlinks so the `bin` command (npm link / npx / global install) works too.
function isExecutedDirectly() {
  try {
    return import.meta.url === pathToFileURL(realpathSync(process.argv[1])).href;
  } catch {
    return false;
  }
}

if (isExecutedDirectly()) {
  main().catch(() => {
    // Keep it friendly — show a clear message, not a wall of stack trace.
    console.error(chalk.red('\n⚠️  Something went wrong. Please run the game again.\n'));
    process.exit(1);
  });
}
