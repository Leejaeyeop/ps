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
    const n = +input[0];
    const target = +input[1];

    const graph = Array.from({ length: n }, () =>
      Array.from({ length: n }, () => 0)
    );
    let idx = 1;
    // 오,아,왼,위 순으로
    let order = 0;
    // 현재 이동 방향
    let direcCur = 3;
    // 남은 이동 횟수수
    let direcCnt = [0, 0, 0, 1];
    const dx = [0, 1, 0, -1];
    const dy = [1, 0, -1, 0];
    let x = Math.floor(n / 2);
    let y = Math.floor(n / 2);

    while (true) {
      graph[x][y] = idx;
      idx++;
      if (x === 0 && y === 0) break;

      if (direcCnt[direcCur] === 0) {
        direcCur++;

        if (direcCur === 4) {
          order++;
          direcCnt = [2 * order - 1, 2 * order, 2 * order, 2 * order + 1];
          direcCur = 0;
        }
      }

      direcCnt[direcCur]--;
      x += dx[direcCur];
      y += dy[direcCur];
    }

    for (const value of graph) {
      console.log(value.join(" "));
    }

    for (let i = 0; i < n; i++) {
      for (let j = 0; j < n; j++) {
        if (graph[i][j] === target) {
          console.log(`${i + 1} ${j + 1}`);
          return;
        }
      }
    }

    process.exit();
  });