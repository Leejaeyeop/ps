/**
 * @param {string} s
 * @return {string[]}
 */
var removeInvalidParentheses = function(s) {
     let level = new Set([s]);  // use a set to avoid duplicate strings
    while (true) {
        let valid = Array.from(level).filter(isValid);
        if (valid.length > 0) return valid;
        let nextLevel = new Set();
        for (let str of level) {
            for (let i = 0; i < str.length; i++) {
                if (str[i] === '(' || str[i] === ')') {
                    nextLevel.add(str.substring(0, i) + str.substring(i + 1));
                }
            }
        }
        level = nextLevel;
    }
}

function isValid(s) {
    let count = 0;
    for (let c of s) {
        if (c === '(') count++;
        if (c === ')') count--;
        if (count < 0) return false;
    }
    return count === 0;
}
