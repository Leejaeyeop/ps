// https://leetcode.com/problems/valid-parentheses/description/
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  // stack
  const open = [];
  const close = {
    ")": "(",
    "}": "{",
    "]": "[",
  };

  for (const bracket of s) {
    if (bracket === "(" || bracket === "{" || bracket === "[") {
      open.push(bracket);
    } else if (open.pop() !== close[bracket]) {
      return false;
    }
  }
  return open.length === 0;
};
