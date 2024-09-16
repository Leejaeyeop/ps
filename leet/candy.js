/**
 * https://leetcode.com/problems/candy/submissions/1099255585/
 * @param {number[]} ractings
 * @return {number}
 */
// rating h more cnady
// min 1
var candy = function (ratings) {
    let n = ratings.length
    let answer = 0
    function recur(idx, value, bigPre) {
        if (idx < n - 1) {
            // 다음 rating이 나보다 작다.
            if (ratings[idx] > ratings[idx + 1]) {
                value = Math.max(value,recur(idx + 1, 1, true))
            }
            // 다음 rating이 나보다 크다.
            else if (ratings[idx] < ratings[idx + 1]) {
                recur(idx + 1, value + 1, false)
            }
            // 나랑 같다
            else {
                recur(idx + 1, 1, false)
            }
        }
        answer += value
        // 내가 이전 rating 보다 작다
        if (bigPre) {
            return value + 1
        }
    }
    // right로 이동 
    recur(0, 1, false)
    return answer
};
