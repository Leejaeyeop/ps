function solution(nums) {
    const types = new Set([...nums]).size
    return types > nums.length / 2 ? nums.length / 2 : types
}