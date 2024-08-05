/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
      const answer = new Array(nums.length).fill(0);
      const product = (pre, curidx) => {
        if(curidx === nums.length) return 1
        
        const next = product(pre * nums[curidx], curidx + 1);
        answer[curidx] = pre * next
        return next * nums[curidx]
      };

      product(1, 0);
      return answer
};
