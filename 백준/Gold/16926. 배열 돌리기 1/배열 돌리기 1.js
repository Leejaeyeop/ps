const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

readline
  .on("line", (line) => {
    input.push(line);
  })
  .on("close", () => {
    const [n, m, r] = input[0].split(" ").map(Number);
    let graph = input.slice(1).map((row) => row.split(" ").map(Number));

    const minLayer = Math.min(n, m) / 2;

    // 각 레이어별 회전 처리
    for (let layer = 0; layer < minLayer; layer++) {
      let values = [];

      // 상단 가로
      for (let i = layer; i < m - layer; i++) values.push(graph[layer][i]);
      // 오른쪽 세로
      for (let i = layer + 1; i < n - layer; i++) values.push(graph[i][m - layer - 1]);
      // 하단 가로
      for (let i = m - layer - 2; i >= layer; i--) values.push(graph[n - layer - 1][i]);
      // 왼쪽 세로
      for (let i = n - layer - 2; i > layer; i--) values.push(graph[i][layer]);

      // 회전 적용
      const rotateCount = r % values.length;
      if (rotateCount > 0) {
        values = values.slice(rotateCount).concat(values.slice(0, rotateCount));
      }

      let idx = 0;
      // 상단 가로
      for (let i = layer; i < m - layer; i++) graph[layer][i] = values[idx++];
      // 오른쪽 세로
      for (let i = layer + 1; i < n - layer; i++) graph[i][m - layer - 1] = values[idx++];
      // 하단 가로
      for (let i = m - layer - 2; i >= layer; i--) graph[n - layer - 1][i] = values[idx++];
      // 왼쪽 세로
      for (let i = n - layer - 2; i > layer; i--) graph[i][layer] = values[idx++];
    }

    // 결과 출력
    graph.forEach((row) => console.log(row.join(" ")));
    process.exit();
  });
