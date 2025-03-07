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
    const str = input[0].split("");
    const answer = [];
    // 괄호의 쌍을 찾아서...
    // 쌍이 되는 괄호를 찾자
    const stackBegin = [];
    const pairs = [];
    for (let i = 0; i < str.length; i++) {
      if (str[i] === "(") {
        stackBegin.push(i);
      } else if (str[i] === ")") {
        pairs.push([stackBegin.pop(i), i]);
      }
    }

    const recur = (idx, res) => {
      if (idx === pairs.length) {
        // 출력
        for (let i = 0; i < res.length; i++) {
          const [begin, end] = pairs[i];
          if (!res[i]) {
            str[begin] = "";
            str[end] = "";
          } else {
            str[begin] = "(";
            str[end] = ")";
          }
        }
        answer.push(str.join(""));
        return;
      }

      // 괄호 넣기
      recur(idx + 1, res);

      // 괄호 빼기
      res[idx] = false;
      recur(idx + 1, res);
      res[idx] = true;
    };

    recur(0, Array(pairs.length).fill(true));
    answer.shift();
    answer.sort((a, b) => (a < b ? -1 : a > b ? 1 : 0));

    for (const str of new Set(answer)) {
      console.log(str);
    }
    process.exit();
  });
