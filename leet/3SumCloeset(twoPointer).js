/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
// two pointer
var threeSumClosest = function(nums, target) {
    nums = nums.sort((a,b) => a-b)
    let answer = 0
    let minGap = Infinity

    const twoPointer = (begin,end,num) => {
        while(begin<end) {
            const left = nums[begin]
            const right = nums[end]
            const curValue = left + right + num
            // 차이 계산
            const res = target - (curValue)

            if (Math.abs(res) < minGap) {
                minGap = Math.abs(res)
                answer = left + right + num
            }

            // 차이가 크니 값을 begin 값을 더 줘서 curValue 을 더 키워 차이를 줄인다!
            if(res >= 0) {
                begin++
            } else {
                // 차이가 - 이니 curValue value를 줄인다 -> end 를 줄인다. 
                end--
            } 
        }
    }

    nums.forEach((num,idx) => {
        twoPointer(idx+1,nums.length-1,num)
    })
    
    return answer
};
