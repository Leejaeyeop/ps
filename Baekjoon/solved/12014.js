// 가장 긴 증가하는 부분 수열 알고리즘
// https://www.acmicpc.net/problem/12014
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
  const t = +input[0];

  const upper_bound = ({ begin, end, target, list }) => {
    while (begin < end) {
      let mid = Math.floor((begin + end) / 2);
      // 최대한 오른쪽으로 이동!
      if (list[mid] < target) begin = mid + 1;
      else end = mid; // 값을 찾음 -> 더 내리자!
    }
    return end;
  };

  let j = 1;
  for (let i = 1; i <= t; i++) {
    const [n, k] = input[j++].split(" ").map((el) => +el);
    const nums = input[j++].split(" ").map((el) => +el);
    const list = [];
    nums.forEach((num) => {
      if (list.length === 0 || list[list.length - 1] < num) list.push(num);
      else {
        const idx = upper_bound({
          begin: 0,
          end: list.length - 1,
          target: num,
          list,
        });
        list[idx] = num;
      }
    });

    console.log(`Case #${i}`);
    console.log(list.length >= k ? 1 : 0);
  }
});
