# https://www.acmicpc.net/problem/1920
import sys
input = sys.stdin.readline

n = int(input())
nums = [0 for _ in range(n)]
nums = [int(value) for value in input().split()]
nums.sort()

m = int(input())
finds = [0 for _ in range(m)]
finds = [int(value) for value in input().split()]

def binarySearch(target):
    begin = 0
    end = len(nums)-1
    while begin <= end:
        mid = (begin + end)//2
        result = nums[mid]
        if result == target:
            return True
        elif result < target:
            begin = mid +1
        elif result > target:
            end = mid-1
    return False

for find in finds:
    print(1) if binarySearch(find) else print(0)
