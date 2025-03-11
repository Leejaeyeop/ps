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
    const arr = [];

    for (let i = 1; i <= n; i++) {
      arr.push(+input[i]);
    }
    arr.sort((a, b) => a - b);

    const twoSum = new Set();
    for (let i = 0; i < n; i++) {
      for (let j = i; j < n; j++) {
        twoSum.add(arr[i] + arr[j]);
      }
    }

    for (let i = n - 1; i >= 0; i--) {
      for (let j = i; j >= 0; j--) {
        const target = arr[i] - arr[j];
        if (twoSum.has(target)) {
          console.log(arr[i]);
          return;
        }
      }
    }

    process.exit();
  });
