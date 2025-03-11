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
    const strs = [];
    for (let i = 1; i <= n; i++) {
      strs.push(input[i]);
    }

    for (let i = 0; i < n; i++) {
      let s = "";
      for (let j = 0; j < n; j++) {
        s += strs[j][i];
      }
      if (s !== strs[i]) {
        console.log("NO");
        return;
      }
    }

    console.log("YES");

    process.exit();
  });
