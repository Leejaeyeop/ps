// https://leetcode.com/problems/gas-station/description/?envType=study-plan-v2&envId=top-interview-150
/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
var canCompleteCircuit = function (gas, cost) {
  const n = gas.length;
  let answer = -1;
  let sum = [];
  for (let i = 0; i < n; i++) {
    sum.push(gas[i] - cost[i]);
  }

  let left = 0;
  let curValue = sum[left];

  while (left < n) {
    let i = left + 1;
    while (curValue >= 0 && i < n) {
      curValue += sum[i];
      i++;
    }

    if (curValue >= 0) {
      break;
    } else {
      left = i;
      curValue = sum[left];
    }
  }

  // 오른쪽 출발 가능
  if (left < n && left > -1) {
    let isPossilble = true;
    for (let i = 0; i < left; i++) {
      curValue += sum[i];
      if (curValue < 0) {
        isPossilble = false;
        break;
      }
    }

    if (isPossilble) {
      answer = left;
    }
  }

  return answer;
};
