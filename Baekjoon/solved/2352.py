# https://www.acmicpc.net/problem/2352

import sys
import bisect
input = sys.stdin.readline

n = int(input())

targets = list(map(int, input().split()))

lis = [targets[0]]        
 
# 직접 함수 만들어 호출
def doDirect(): 
    def lowerBound(target):
        begin = 0
        end = len(lis)

        while begin<end :
            mid = (begin + end) // 2
            res = lis[mid]

            if res < target:
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

# 라이브러리 호출
def doLibrary():
    for i in range(1, n):
        target = targets[i]
        if lis[-1] < target:
            lis.append(target)
        else:
            idx = bisect.bisect_left(lis, target)
            lis[idx] = target

doLibrary()

print(len(lis))