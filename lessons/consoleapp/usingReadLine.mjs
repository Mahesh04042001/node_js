import * as readline from "node:readline";

import { stdin as input, stdout as output } from "node:process";
const rl = readline.createInterface({ input, output, terminal: true });

rl.question("What do you think of Node.js?", (answer) => {
  console.log(`Thankyou for your valuable feedback:${answer}`);
});
