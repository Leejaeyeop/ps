# https://www.acmicpc.net/problem/16927
import sys

# 몇 번 회전인지 구한다
# 회전후 나머지 갑만큼 이동.
# visited

input = sys.stdin.readline

n,m,r = map(int, input().split())
graph = [[0 for _ in range(m)] for _ in range(n)]
visited = [[False for _ in range(m)] for _ in range(n)]

for i in range(n):
    graph[i] = list(map(int,input().split()))

def rotate():
    pre = 0


rotate()