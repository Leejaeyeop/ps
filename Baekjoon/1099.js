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
  const n = +input[1];
  let answer = 0;
  const words = [];
  const oriWords = input.slice(2);

  for (const oriWord of oriWords) {
    const word = {};
    oriWord.split("").forEach((v) => {
      if (!word[v]) word[v] = 0;
      word[v]++;
    });
    words.push(word);
  }

  let left = 0;
  let right = 1;
  let curWordObj = {};
  for (let i = 0; i < sentence.length; i++) {
    const curChar = sentence.charAt(i);
    if (!curWordObj[curChar]) curWordObj[curChar] = 0;
    curWordObj[curChar]++;

    for (let j = 0; j < words.length; j++) {
      const word = words[j];
      if (Object.keys(word).length === Object.keys(curWordObj).length) {
        let matched = true;
        for (const [key, value] of Object.entries(word)) {
          if (curWordObj[key] !== value) {
            matched = false;
            break;
          }
        }
        if (matched) {
          const curWord = sentence.substring(left, right);
          let cnt = 0;
          for (let k = 0; k < curWord.length; k++) {
            if (curWord.charAt(k) !== oriWords[j].charAt(k)) {
              cnt++;
            }
          }
          answer += cnt;
          left = right;
          curWordObj = {};
          break;
        }
      }
    }
    right++;
  }

  if (left < right - 1) {
    console.log(-1);
  } else {
    console.log(answer);
  }
});
