# https://acmicpc.net/problem/4386
import sys
input = sys.stdin.readline

n = int(input())
list = [[] for _ in range(n+1)]
for i in range(1, n+1):
    # x 좌표, y 좌표
    list[i].append((map(int, input().split())))
     
print(list)
