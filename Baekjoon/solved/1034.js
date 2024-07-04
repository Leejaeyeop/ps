// https://www.acmicpc.net/problem/1034
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
  const [n, m] = input[0].split(" ").map((el) => +el);
  const graph = new Array(n);

  for (let i = 1; i < 1 + n; i++) {
    graph[i - 1] = input[i].split("").map((el) => +el);
  }

  const k = +input[n + 1];
  let answer = 0;
  for (let i = 0; i < n; i++) {
    // 나와 같은 상태 확인
    const same = new Array(n).fill(true);
    // 스위치를 켜야 하는 횟수
    let cnt = 0;
    for (let j = 0; j < m; j++) {
      if (graph[i][j] === 0) {
        cnt++;
      }
      // 해당 열 확인
      for (let k = 0; k < n; k++) {
        if (graph[k][j] !== graph[i][j]) {
          same[k] = false;
        }
      }
    }

    // 스위치 조작횟수 k와 비교
    let rest = k - cnt;
    if (rest < 0 || rest % 2 > 0) {
      continue;
    }

    let res = 0;
    for (let j = 0; j < n; j++) {
      if (same[j]) {
        res++;
      }
    }
    answer = Math.max(answer, res);
  }

  console.log(answer);
});
