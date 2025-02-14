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
    const str = input[1].split("");
    let answer = 0;

    let left = 0;
    let right = 0;

    const map = new Map();
    map.set(str[0], 1);

    while (left <= right && right < str.length) {
      // 검사
      if (map.size > n) {
        map.set(str[left], map.get(str[left]) - 1);
        if (map.get(str[left]) === 0) {
          map.delete(str[left]);
        }
        left += 1;
      } else {
        answer = Math.max(answer, right - left + 1);

        right += 1;
        if (!map.has(str[right])) {
          map.set(str[right], 0);
        }
        map.set(str[right], map.get(str[right]) + 1);
      }
    }

    console.log(answer);
    process.exit();
  });
