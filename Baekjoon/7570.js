// https://www.acmicpc.net/problem/7570
const readline = require("require");

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
  const children = input[1].split(" ").map((el = +el));
});
