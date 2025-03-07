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
    const grpah = Array.from({ length: n }, () => []);
    const visited = Array.from({ length: n }, () => false);

    for (let i = 1; i <= m; i++) {
      const [a, b] = input[i].split(" ").map((el) => +el);
      grpah[a].push(b);
      grpah[b].push(a);
    }

    const dfs = (num, friends) => {
      visited[num] = true;

      if (friends === 5) return true;

      for (const friend of grpah[num]) {
        if (visited[friend]) continue;

        if (dfs(friend, friends + 1)) {
          return true;
        }
      }

      visited[num] = false;
      return false;
    };

    for (let i = 0; i < n; i++) {
      if (dfs(i, 1)) return console.log(1);
    }

    console.log(0);
    process.exit();
  });
