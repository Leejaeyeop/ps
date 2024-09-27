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
    let answer = -Infinity;

    const dp = (curIdx, pre) => {
      if (curIdx === n) return 0;

      const num = nums[curIdx];
      const value = num + pre;
      const next = value < num ? num : value;

      answer = Math.max(next, answer);
      return dp(curIdx + 1, next);
    };

    dp(0, -Infinity);

    console.log(answer);
    process.exit();
  });
