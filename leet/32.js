// https://leetcode.com/problems/longest-valid-parentheses/
/**
 * @param {string} s
 * @return {number}
 */
var longestValidParentheses = function (s) {
  let open = [];
  const isValid = new Array(s.length).fill(false);

  for (let i = 0; i < s.length; i++) {
    const parenthes = s[i];
    if (parenthes === "(") {
      open.push(i);
    } else {
      const openIdx = open.pop();

      if (openIdx >= 0) {
        isValid[openIdx] = true;
        isValid[i] = true;
      }
    }
  }

  let validLength = 0;
  let answer = 0;

  for (let i = 0; i < s.length; i++) {
    if (isValid[i]) {
      validLength++;
      answer = Math.max(answer, validLength);
    } else {
      validLength = 0;
    }
  }

  return answer;
};
