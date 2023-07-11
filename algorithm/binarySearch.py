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
  # 시작 인덱스 0 
  begin = 0
  # 끝 인덱스
  end = len(nums)-1
  # 시작 <= 마지막
  while begin <= end:
    # 몫을 계산
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
