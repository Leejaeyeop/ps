// https://leetcode.com/problems/trapping-rain-water/
/**
 * @param {number[]} height
 * @return {number}
 */
// 한 스팟에서 왼쪽 최댓값, 오른쪽 최댓값중 더 작은 높이 - 현재 높이
var trap = function(height) {
    let answer = 0
    const n = height.length
    // 왼쪽 배열의 최대 값 갱신
    const lMax = new Array(n)
    // 오른쪽 배열의 최대 값 갱신
    const rMax = new Array(n)

    let value = 0
    for(let i=0; i<n; i++) {
        lMax[i] = value
        value = Math.max(value,height[i]) 
    }
    
    value = 0
    for(let i=n-1; i>-1; i--) {
        rMax[i] = value
        value = Math.max(value,height[i])
    }
    
    for(let i=1; i<n-1; i++) {
        let res = Math.min(lMax[i],rMax[i]) - height[i]
        answer += res > 0 ? res : 0
    }

    return answer
};
