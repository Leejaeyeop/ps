/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    const obj = {} 
    nums.forEach((num,idx)=> {
        obj[num] = idx
    })
    for(let i =0; i<nums.length; i++) {
        const num = nums[i]
        const targetIdx = target - num
        if(obj[String(targetIdx)] && obj[String(targetIdx)] !== i) {
            return [i,obj[target - num]]
        }
    }
};
