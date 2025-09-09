/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    // const map = new Map()

    // for(const num of nums) {
    //     if(!map.has(num)) map.set(num,0)
    //     map.set(num,map.get(num)+1)
    // }

    // let answer = 0
    // let maxValue = 0
    // for(const [key,value] of map) {
    //     if(maxValue < value) {
    //         maxValue = value
    //         answer = key
    //     }
    // }

    // return answer
    const maxAppearCount = Math.floor(nums.length / 2) + 1
    
    nums.sort((a,b) => a-b)

    let appearCount = 0
    let preNum = nums.at(-1)

    while(nums.length >0) {
        if(preNum === nums.at(-1)) {
            appearCount++
        } else {
            appearCount = 1
        }

        if(appearCount === maxAppearCount) {
            return preNum
        }

        preNum = nums.at(-1)
        nums.pop()
    }
 
};
