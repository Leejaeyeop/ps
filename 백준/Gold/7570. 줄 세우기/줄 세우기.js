// https://www.acmicpc.net/problem/7570
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
  const children = input[1].split(" ").map((el) => +el);
  const d = Array.from(new Array(n + 1), () => 0);

  for (const child of children) {
    d[child] = d[child - 1] + 1;
  }

  console.log(n - Math.max(...d));
});