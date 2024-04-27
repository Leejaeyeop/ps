// https://www.acmicpc.net/problem/11660
const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

readline
  .on("line", function (line) {
    input.push(line);
  })
  .on("close", function () {
    const [n, m] = input[0].split(" ").map((el) => Number(el));
    const sum = Array.from(new Array(n + 1), () => new Array(n + 1).fill(0));
    let ans = "";

    const graph = input
      .slice(1, n + 1)
      .map((str) => str.split(" ").map(Number));

    // 누적합 sum 그래프 계산
    for (let i = 1; i <= n; i++) {
      for (let j = 1; j <= n; j++) {
        sum[i][j] =
          graph[i - 1][j - 1] +
          sum[i - 1][j] +
          sum[i][j - 1] -
          sum[i - 1][j - 1];
      }
    }

    // 구간합 계산
    for (let i = n + 1; i <= n + m; i++) {
      const [x1, y1, x2, y2] = input[i].split(" ").map((el) => Number(el));
      const res =
        sum[x2][y2] - sum[x1 - 1][y2] - sum[x2][y1 - 1] + sum[x1 - 1][y1 - 1];
      ans += String(res) + "\n";
    }

    console.log(ans);
    process.exit();
  });
