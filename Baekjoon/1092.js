const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];
rl.on("line", (line) => {
  input.push(line);
});

rl.on("close", () => {
  const n = +input[0];
  const cranes = input[1]
    .split(" ")
    .map((el) => +el)
    .sort((a, b) => b - a);
  const m = +input[2];
  const weight = input[3].split(" ").map((el) => +el);
  weight.sort((a, b) => a - b);

  const lowerBound = (target) => {};

  while (true) {
    for (const crane of cranes) {
      //   lowerBound();
    }
  }
});
