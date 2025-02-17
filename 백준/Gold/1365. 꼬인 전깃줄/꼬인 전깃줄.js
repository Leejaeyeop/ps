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

    const arr = input[1].split(" ").map((el) => +el);

    // 이분 탐색
    const lowerbound = (dp, num) => {
      // 나를 초과 하는 것을 찾는다 -> upper bound 알고리즘
      let left = 0;
      let right = dp.length - 1;
      while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        if (dp[mid] >= num) {
          right = mid - 1;
        } else {
          left = mid + 1;
        }
      }
      return left;
    };

    // 수열을 저장할 배열
    const dp = [];
    arr.forEach((num) => {
      // 자기 자리를 찾는다...
      let pos = lowerbound(dp, num);
      // 자기가 가장 크면 배열에 추가한다.
      if (pos === dp.length) {
        dp.push(num);
      } else {
        dp[pos] = num;
      }
    });

    console.log(n - dp.length);
    process.exit();
  });
