// https://leetcode.com/explore/interview/card/top-interview-questions-hard/116/array-and-strings/830/
/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let left = 0
    let right = height.length -1

    let max = 0
    while(left<right) {
        if(height[left] < height[right]) {
            max = Math.max(max, (right - left)*height[left++])
        } else {
            max = Math.max(max, (right - left)*height[right--])
        }
    }
    return max
};
