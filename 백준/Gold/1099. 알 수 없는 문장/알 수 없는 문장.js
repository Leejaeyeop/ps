// https://www.acmicpc.net/problem/1099
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];
rl.on("line", (line) => {
  input.push(line);
});

rl.on("close", () => {
  const sentence = input[0];
  const words = input.slice(2);

  // [문장]
  const d = new Array(sentence.length).fill(Infinity);

  const haveSameCharacters = (str1, str2) => {
    if (str1.length !== str2.length) {
      return false;
    }

    const sortedStr1 = str1.split("").sort().join("");
    const sortedStr2 = str2.split("").sort().join("");

    return sortedStr1 === sortedStr2;
  };

  const getDiffCnt = (str1, str2) => {
    let cnt = 0;
    for (let i = 0; i < str1.length; i++) {
      if (str1.charAt(i) !== str2.charAt(i)) {
        cnt++;
      }
    }
    return cnt;
  };

  const dp = (curIdx) => {
    if (curIdx >= sentence.length) {
      return 0;
    }
    if (d[curIdx] !== Infinity) {
      return d[curIdx];
    }

    d[curIdx] = 1000001;
    // 단어 매칭 가능한지 확인
    for (const word of words) {
      const toComapre = sentence.substring(curIdx, curIdx + word.length);
      if (haveSameCharacters(word, toComapre)) {
        d[curIdx] = Math.min(
          d[curIdx],
          getDiffCnt(word, toComapre) + dp(curIdx + word.length)
        );
      }
    }

    return d[curIdx];
  };

  console.log(dp(0) <= 50 ? dp(0) : -1);
});
