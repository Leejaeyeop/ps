/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let answer = 0
    let left = 0
    let right = 0
    const len = s.length
    
    const included = Array(26).fill(false)

    while(left<=right && right < len) {
         if(!included[s[right].charCodeAt(0) - 'a'.charCodeAt(0)]) {
             included[s[right].charCodeAt(0) - 'a'.charCodeAt(0)] = true
             right++
             answer = Math.max(right - left,answer)
         } else {
             included[s[left].charCodeAt(0) - 'a'.charCodeAt(0)]= false
             left++
         }     
    }
    
    return answer
};