// https://softeer.ai/practice/7727

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
    const [n, m] = input[0].split(" ").map((el) => +el);
    const graph = [];
    let friends = [];
    let answer = 0;
    const checked = Array.from({ length: n }, () =>
      Array.from({ length: n }, () => 0)
    );

    const dx = [0, 1, -1, 0];
    const dy = [1, 0, 0, -1];
    for (let i = 1; i <= n; i++) {
      graph.push(input[i].split(" ").map((el) => +el));
    }

    for (let i = n + 1; i < n + 1 + m; i++) {
      friends.push(input[i].split(" ").map((el) => +el - 1));
    }

    const go = (sec, cost, checked, friends, friendIdx) => {
      const [x, y] = friends[friendIdx];
      if (checked[x][y] === 0) {
        cost += graph[x][y];
      }
      checked[x][y]++;

      if (sec === 3 && friendIdx === m - 1) {
        answer = Math.max(answer, cost);
      } else {
        for (let i = 0; i < 4; i++) {
          const nx = x + dx[i];
          const ny = y + dy[i];

          if (nx >= 0 && nx < n && ny >= 0 && ny < n) {
            friends[friendIdx] = [nx, ny];
            if (friendIdx === m - 1) {
              go(sec + 1, cost, checked, friends, 0);
            } else {
              go(sec, cost, checked, friends, friendIdx + 1);
            }
            friends[friendIdx] = [x, y];
          }
        }
      }
      checked[x][y]--;
    };

    go(0, 0, checked, friends, 0);

    console.log(answer);
    return answer;
  });
