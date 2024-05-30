// https://www.acmicpc.net/status?user_id=dlwoduq78&problem_id=1103&from_mine=1
// 백트래킹 + dp

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
    const graph = Array.from({ length: n }, () => null);
    const visited = Array.from({ length: n }, () =>
      Array.from({ length: m }, () => false)
    );

    const dx = [0, -1, 0, 1];
    const dy = [-1, 0, 1, 0];

    // [n][m]
    const d = Array.from({ length: n }, () =>
      Array.from({ length: m }, () => -1)
    );

    for (let i = 0; i < n; i++) {
      graph[i] = input[i + 1].split("");
    }

    const dp = (x, y, visited) => {
      if (d[x][y] > -1) {
        return d[x][y];
      }

      // 현재 위치 추가
      visited[x][y] = true;
      let cnt = 0;
      for (let i = 0; i < 4; i++) {
        const nx = x + dx[i] * +graph[x][y];
        const ny = y + dy[i] * +graph[x][y];

        // 해당위치 이동 가능
        if (nx >= 0 && nx < n && ny >= 0 && ny < m && graph[nx][ny] !== "H") {
          // loop 발생 -> fix
          if (visited[nx][ny]) {
            return Infinity;
          }
          cnt = Math.max(cnt, dp(nx, ny, visited));
        }
      }

      d[x][y] = 1 + cnt;
      visited[x][y] = false;
      // 나는 현재턴에서 무조건 이동
      return d[x][y];
    };

    const res = dp(0, 0, visited);
    console.log(res === Infinity ? -1 : res);

    process.exit();
  });
