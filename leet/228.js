// https://leetcode.com/problems/summary-ranges/description/?envType=study-plan-v2&envId=top-interview-150
/**
 * @param {number[]} nums
 * @return {string[]}
 */
var summaryRanges = function (nums) {
  // 1 만큼 차이가 나는 연속된 정수 집합들의 갯수

  const answer = [];

  let beginIdx = 0;
  while (beginIdx < nums.length) {
    let endIdx = beginIdx + 1;
    for (endIdx = beginIdx + 1; endIdx < nums.length; endIdx++) {
      if (nums[endIdx] - nums[endIdx - 1] > 1) break;
    }

    if (endIdx - beginIdx === 1) {
      answer.push(nums[beginIdx].toString());
    } else {
      answer.push(
        `${nums[beginIdx].toString()}->${nums[endIdx - 1].toString()}`
      );
    }

    beginIdx = endIdx;
  }

  return answer;
};
