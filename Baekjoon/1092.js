// https://www.acmicpc.net/problem/1092
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
  let cranes = input[1]
    .split(" ")
    .map((el) => +el)
    .sort((a, b) => b - a);
  const m = +input[2];
  const weight = input[3].split(" ").map((el) => +el);
  weight.sort((a, b) => a - b);

  const lowerBound = (target) => {
    while (left <= right) {}
  };

  while (weight.length > 0) {
    for (const crane of cranes) {
      let idx = lowerBound(crane);

      if (idx === weight.length || weight[idx] > crane) {
        idx--;
      }

      if (idx >= 0) {
        weight.splice(idx, 1);
      }
    }
  }
});
