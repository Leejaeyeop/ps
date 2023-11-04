import sys
import math
# 모든 다리는 반드시 연겵
input = sys.stdin.readline

t = int(input())

answer = []
for _ in range(t):
    n,m = map(int, input().split())
    answer.append(math.comb(m,n))

for num in answer:
    print(num)
