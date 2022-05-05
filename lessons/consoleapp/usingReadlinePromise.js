const readline = require("readline-promise").default;

const rlp = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: true,
});

let bar = null;
rlp.questionAsync("are you my friend?").then((answer) => {
  bar = answer;
  console.log("welcome:" + bar);
});
console.log("\n After");
/** readline/promise*/
