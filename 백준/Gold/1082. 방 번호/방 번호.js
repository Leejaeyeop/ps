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
    const p = input[1].split(" ").map((el) => +el);
    const m = +input[2];

    const res = [];

    // [[가치,가격]]
    const list = [];
    p.forEach((el, i) => {
      list.push([i, el]);
    });

    // 현재 비용
    let mCurrent = m;

    // 싼 가격으로 정렬
    list.sort((a, b) => a[1] - b[1]);
    let mMin = list[0][1];

    // 구매 할 수 있을때 까지
    while (mCurrent >= mMin) {
      mCurrent -= mMin;
      res.push(list[0][0]);
    }

    list.sort((a, b) => b[0] - a[0]);
    // 최대 숫자로 변경
    const changeNum = (mCurrent, res, idx, mMin) => {
      // 변경 확인
      for ([num, cost] of list) {
        if (res[idx] < num && mCurrent - cost + mMin >= 0) {
          res[idx] = num;
          mCurrent += mMin - cost;
          break;
        }
      }

      if (idx < res.length - 1) {
        // 값이 0 이면 내려간다
        if (+res.join("") === 0) {
          mCurrent += mMin;
        }
        changeNum(mCurrent, res, idx + 1, mMin);
      }
    };

    changeNum(mCurrent, res, 0, mMin);

    let answer = "";
    for (const num of res) {
      answer += num;
      if (+answer === 0) {
        answer = "";
      }
    }
    console.log(answer === "" ? "0" : answer);
  });
