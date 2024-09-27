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
    const nums = input[1].split(" ").map((el) => +el);
    const d = Array.from({ length: n }, () => 0);
    d[0] = nums[0];

    for (let i = 1; i < n; i++) {
      const num = nums[i];
      d[i] = Math.max(d[i - 1] + num, num);
    }

    console.log(Math.max(...d));
    process.exit();
});
