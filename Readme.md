You are a senior Node.js developer. Build a complete, production-ready npm package named "Number Guessing Game".

The game must run entirely inside the terminal. After publication, anyone should be able to play it using:

npx @NPM_USERNAME/niraj-number-game

Do not only explain the solution. Create all required files and implement the complete working application.

==================================================
1. PROJECT OBJECTIVE
==================================================

Create an interactive command-line number guessing game using Node.js.

The computer must generate a random whole number between 1 and 100. The player enters guesses through the terminal. The game tells the player whether each guess is too high or too low until the correct number is entered.

The project must be suitable for publication as a public npm package.

==================================================
2. TECHNICAL REQUIREMENTS
==================================================

Use:

- Node.js 18 or newer
- Modern JavaScript
- ES modules
- inquirer for terminal input
- chalk for terminal colors
- No TypeScript
- No web browser
- No React
- No database
- No backend server
- No API keys
- No environment variables

The game must work on:

- Windows Terminal
- PowerShell
- Command Prompt
- macOS Terminal
- Linux Terminal

==================================================
3. REQUIRED PROJECT STRUCTURE
==================================================

Create this structure:

niraj-number-game/
├── index.js
├── package.json
├── README.md
├── LICENSE
├── .gitignore
└── .npmignore

==================================================
4. GAME REQUIREMENTS
==================================================

When the game starts:

1. Display a colorful welcome heading.
2. Explain that the secret number is between 1 and 100.
3. Generate one random whole number between 1 and 100.
4. Ask the player to enter a guess.
5. Validate the input.
6. Reject empty input.
7. Reject decimal numbers.
8. Reject text and other non-numeric input.
9. Reject numbers below 1.
10. Reject numbers above 100.
11. Invalid input must not increase the attempt count.
12. If the guess is lower than the secret number, display:
    "Too low! Try a bigger number."
13. If the guess is higher than the secret number, display:
    "Too high! Try a smaller number."
14. If the guess is correct, display:
    - A congratulations message
    - The secret number
    - Total number of valid attempts
15. Ask whether the player wants to play again.
16. If the player chooses yes, generate a new secret number and reset attempts.
17. If the player chooses no, display a friendly goodbye message and exit normally.
18. The player must be able to stop the game with Ctrl+C without showing a confusing error stack.

Use clear colors:

- Cyan for the title
- Yellow for instructions
- Blue for "too low"
- Magenta or red for "too high"
- Green for winning
- Red for validation errors

Do not reveal the secret number before the player wins.

==================================================
5. PACKAGE.JSON REQUIREMENTS
==================================================

Create a valid package.json with:

- A scoped and unique package name:
  @NPM_USERNAME/niraj-number-game
- Version:
  1.0.0
- Description:
  A fun terminal-based number guessing game
- type:
  module
- main:
  index.js
- A bin command:
  niraj-number-game
- A start script:
  node index.js
- Appropriate keywords
- Author:
  Niraj Charpe
- License:
  MIT
- Minimum supported Node.js version:
  18
- Only required runtime dependencies
- A files property that includes only the files needed by npm users
- A prepublishOnly script that can perform basic validation

The command below must work after installation:

niraj-number-game

The command below must also work after publication:

npx @NPM_USERNAME/niraj-number-game

Add this as the first line of index.js:

#!/usr/bin/env node

Replace NPM_USERNAME only when the actual npm username is known. If it is not known, leave a clear placeholder and explain where it must be replaced.

==================================================
6. README REQUIREMENTS
==================================================

Create a professional README.md containing:

- Project title
- Short description
- Features
- Requirements
- Local installation steps
- How to start with npm start
- How to test with npm link
- How to remove the global npm link
- How to play using npx
- How to install globally
- How to publish to npm
- Example gameplay
- Project structure
- Version update instructions
- Troubleshooting section
- License section
- Author section for Niraj Charpe

Do not claim that the package is already published.

Use placeholder @NPM_USERNAME anywhere the real username is required.

==================================================
7. IGNORE FILES
==================================================

Create .gitignore and exclude at least:

node_modules/
npm-debug.log*
.DS_Store
.env

Create a safe .npmignore so unnecessary development files are not published.

Do not accidentally exclude:

- index.js
- README.md
- LICENSE
- package.json

==================================================
8. LICENSE
==================================================

Create an MIT license file.

Use:

Copyright (c) 2026 Niraj Charpe

==================================================
9. ERROR HANDLING
==================================================

Implement safe error handling.

Requirements:

- Do not show a full stack trace to normal players.
- Handle Ctrl+C gracefully.
- Display a clear message if an unexpected error occurs.
- Exit with an appropriate process exit code after an unexpected error.
- Avoid infinite loops other than the intentional game loop.
- Keep functions small and readable.

==================================================
10. CODE QUALITY
==================================================

Organize index.js using clear functions such as:

- generateSecretNumber
- askForGuess
- validateGuess
- evaluateGuess
- askToPlayAgain
- playGame
- main

Function names may differ, but responsibilities must remain separated.

Additional expectations:

- Use const and let correctly.
- Avoid unnecessary global variables.
- Add comments only where they provide value.
- Do not overcomplicate the architecture.
- Do not use eval.
- Do not use hardcoded absolute file paths.
- Do not include secrets or credentials.
- Do not add unrelated dependencies.

==================================================
11. IMPLEMENTATION PROCESS
==================================================

Follow these steps automatically:

1. Check whether Node.js and npm are available.
2. Create the project directory if it does not exist.
3. Create every required project file.
4. Install dependencies with npm.
5. Validate package.json.
6. Run the game locally.
7. Test invalid inputs.
8. Test correct guesses.
9. Test the replay option.
10. Test graceful exit.
11. Run npm pack --dry-run.
12. Show the final project structure.
13. Show all commands needed to test the package.
14. Do not run npm publish automatically.

If you cannot interactively test all input paths, explain exactly which paths were tested automatically and which should be tested manually.

==================================================
12. REQUIRED TEST CASES
==================================================

Verify these cases:

Test 1:
Input: empty
Expected: validation error and no attempt added

Test 2:
Input: abc
Expected: validation error and no attempt added

Test 3:
Input: 4.5
Expected: validation error and no attempt added

Test 4:
Input: 0
Expected: validation error and no attempt added

Test 5:
Input: 101
Expected: validation error and no attempt added

Test 6:
Input: a valid number lower than the secret number
Expected: too-low message and attempt added

Test 7:
Input: a valid number higher than the secret number
Expected: too-high message and attempt added

Test 8:
Input: the correct number
Expected: winning message and accurate attempt count

Test 9:
Choose to play again
Expected: new secret number and attempts reset to zero

Test 10:
Choose not to play again
Expected: friendly goodbye and normal exit

==================================================
13. FINAL VALIDATION COMMANDS
==================================================

Run or provide these commands:

node --version
npm --version
npm install
npm start
npm link
niraj-number-game
npm unlink -g @NPM_USERNAME/niraj-number-game
npm pack --dry-run

Also provide publishing commands, but do not execute them:

npm login
npm whoami
npm publish --access public

==================================================
14. FINAL RESPONSE FORMAT
==================================================

After implementation, provide:

1. A short completion summary
2. The final file structure
3. Dependencies installed
4. Tests performed
5. Any unresolved issue
6. Commands for local testing
7. Commands for npm publication
8. A reminder to replace NPM_USERNAME
9. A reminder that npm package names must be available
10. A reminder not to publish secrets or unnecessary files

Important:

- Create actual files instead of only showing sample code.
- Do not automatically publish the package.
- Do not ask for confirmation between implementation steps.
- If a command fails, diagnose it and attempt a reasonable correction.
- Do not remove or overwrite unrelated files outside the project folder.
Yes, Niraj. After you publish the package, people will be able to find and view it on the npm website, but they will play the game in their terminal, not directly on the npm webpage.

Where it will appear

If your npm username is nirajcharpe and your package name is:

"name": "@nirajcharpe/niraj-number-game"


its npm page will be similar to:

https://www.npmjs.com/package/@nirajcharpe/niraj-number-game


The npm page will display information from your package.json and README.md, such as:

Package name
Description
Current version
Installation command
README instructions
Dependencies
License
Weekly downloads
Published versions
Publisher information
How people will play it

Users will open a terminal and run:

npx @nirajcharpe/niraj-number-game


They can also install it globally:

npm install -g @nirajcharpe/niraj-number-game
niraj-number-game


The npm website is the package listing and download location. The number guessing game itself will work inside the terminal.

Publishing steps
npm login
npm whoami
npm publish --access public


The --access public option is important for publishing a public scoped package. A particular package name and version combination can only be published once.

Before publishing, check exactly what will be uploaded:

npm pack --dry-run

Important distinction
npm website = People can see and download your package
Terminal    = People can play your game


If you want people to play the game directly in a browser through a link, then you need to deploy a web version using a hosting service. That would be separate from the terminal npm package.

Clearer version of your question

Will our number guessing game be visible on the npm website after we publish it?

Main improvement: clarified the difference between seeing the package on npm and playing the game in the terminal.
