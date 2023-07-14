# https://www.acmicpc.net/problem/2352

import sys
import bisect
input = sys.stdin.readline

n = int(input())

targets = list(map(int, input().split()))

d = [targets[0]]
def lowerBound(target):
    begin = 0
    end = len(d)

    while begin<end :
        mid = (begin + end) // 2
        res = d[mid]

        if res < target:
            begin = mid +1
        else:
            end = mid
    return end         

for i in range(1, n):
    target = targets[i]
    if d[-1] < target:
        d.append(target)
    else:
        idx = lowerBound(target)
        d[idx] = target

print(len(d))