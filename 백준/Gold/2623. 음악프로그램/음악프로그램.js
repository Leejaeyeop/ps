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
    const answer = [];
    const [n, m] = input[0].split(" ").map((el) => +el);
    const indegree = Array.from({ length: n + 1 }, () => 0);
    const grpah = Array.from({ length: n + 1 }, () => []);

    for (let i = 1; i < 1 + m; i++) {
      input[i]
        .split(" ")
        .slice(1)
        .reduce((pre, cur) => {
          grpah[+pre].push(+cur);
          indegree[+cur]++;
          return +cur;
        });
    }

    const typologicalSort = (stack) => {
      while (stack.length > 0) {
        const nodeVal = stack.pop();
        answer.push(nodeVal);
        indegree[nodeVal]--;
        for (const targetNode of grpah[nodeVal]) {
          indegree[targetNode]--;
        }
      }

      for (let i = 1; i <= n; i++) {
        if (indegree[i] === 0) {
          stack.push(i);
        }
      }

      if (stack.length > 0) {
        typologicalSort(stack);
      }
    };

    const stack = [];
    for (let i = 1; i <= n; i++) {
      if (indegree[i] === 0) {
        stack.push(i);
      }
    }
    typologicalSort(stack);
    if (answer.length < n) {
      console.log(0);
    } else {
      answer.forEach((el) => console.log(el));
    }

    process.exit();
  });
