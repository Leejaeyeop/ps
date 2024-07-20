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
    let left = 0;
    let right = weight.length - 1;
    while (left < right) {
      let mid = Math.floor((left + right) / 2);
      if (weight[mid] >= target) {
        right = mid;
      } else {
        left = mid + 1;
      }
    }
    return right;
  };

  let answer = 0;
  let pre = weight.length;
  while (weight.length > 0) {
    answer++;
    for (const crane of cranes) {
      let idx = lowerBound(crane);

      if (weight[idx] > crane) {
        idx--;
      }

      if (idx >= 0) {
        weight.splice(idx, 1);
      }
    }

    if (pre === weight.length) {
      console.log(-1);
      return;
    } else {
      pre === weight.length;
    }
  }

  console.log(answer);
  return;
});
