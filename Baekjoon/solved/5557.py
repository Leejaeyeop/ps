# https://www.acmicpc.net/problem/5557
import sys

input = sys.stdin.readline

n = int(input())
nums = list(map(int,input().split(" ")))

# [n][21] -> n 번째일때, 앞에 값이 무엇인가..?
d = [[[-1 for _ in range(2)] for _ in range(21)] for _ in range(n)]
# 몇번째, 바로 앞에 값, 연산자
def dp(idx,prevalue,op):
    if idx == n-1:
        if nums[idx] == prevalue:
            return 1
        else: 
            return 0
    curValue = 0        
    if op == 0:
        curValue = nums[idx] + prevalue
    else:
        curValue = (-1 * nums[idx]) + prevalue

    if curValue > 20 or curValue < 0:
        d[idx][prevalue][op] = 0
    else:
        if d[idx][prevalue][op] > -1:
            return d[idx][prevalue][op]
        
        d[idx][prevalue][op] = 0

        if idx == n-2:
            d[idx][prevalue][op] += dp(idx +1, curValue, 0)
        else:
            d[idx][prevalue][op] += dp(idx +1, curValue, 0)
            d[idx][prevalue][op] += dp(idx +1, curValue, 1)

    return d[idx][prevalue][op]    

print(dp(0,0,0))