# https://www.acmicpc.net/problem/2352

import sys
import bisect
input = sys.stdin.readline

# bisect.bisect_left -> 본인 이상의 가장 왼쪽의 수 구함 (lower bound)
# bisect.bisect_right -> 본인 초과의 가장 왼쪽의 수 구함 (upper bound)

#### 일반적인 이분 탐색 문제(logn) ####
arr = []
begin = 0
# 마지막 인덱스
end = len(arr) -1
#  임의 타겟 설정
target = 1000 
def bisect(target):
    # begin이 end와 만날때 까지!
    while begin <=end:
        #  몫
        mid = (begin + end)//2
        res = arr[mid]
        if res == target:
            return mid | True
        elif res < target:
            begin = mid +1
        elif res > target:
            end = mid -1 
    return etc | False

###################### lower_boud 문제 -> 본인 이상인 수 중 첫번째(최소) 값의 인덱스를 구한다. #####################
# 직접 함수 만들어 호출 (lower bound)
n = int(input())
targets = list(map(int, input().split()))
lis = [targets[0]]        
def doDirect(): 
    def lowerBound(target):
        begin = 0
        # 마지막 인덱스는 초과된 새로운 인덱스
        end = len(lis)

        while begin<end :
            mid = (begin + end) // 2
            res = lis[mid]

            if res < target:
                begin = mid +1
            # end를 mid로 내려준다! 
            else:
                end = mid
        return end
    for i in range(1, n):
        target = targets[i]
        if lis[-1] < target:
            lis.append(target)
        else:
            idx = lowerBound(target)
            lis[idx] = target

# 라이브러리 호출 (lower bound)
def doLibrary():
    for i in range(1, n):
        target = targets[i]
        if lis[-1] < target:
            lis.append(target)
        else:
            idx = bisect.bisect_left(lis, target)
            lis[idx] = target

##################### upper bound -> 본인 초과하는 첫 인덱스#####################
n = int(input())
targets = list(map(int, input().split()))
lis = [targets[0]]        
def doDirect(): 
    def lowerBound(target):
        begin = 0
        end = len(lis)

        while begin<end :
            mid = (begin + end) // 2
            res = lis[mid]

            if res <= target:
                begin = mid +1
            else:
                end = mid
        return end
    for i in range(1, n):
        target = targets[i]
        if lis[-1] < target:
            lis.append(target)
        else:
            idx = lowerBound(target)
            lis[idx] = target

# 라이브러리 호출 (lower bound)
def doLibrary():
    for i in range(1, n):
        target = targets[i]
        if lis[-1] < target:
            lis.append(target)
        else:
            idx = bisect.bisect_right(lis, target)
            lis[idx] = target