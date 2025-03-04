# https://www.acmicpc.net/problem/1937
import sys
input = sys.stdin.readline
sys.setrecursionlimit(10**6)

dx = [0,-1,0,1]
dy = [1,0,-1,0]

def dp(x, y):
    if d[x][y] > -1:
        return d[x][y]
    
    curCost = forest[x][y]    
    d[x][y] = 1
    for i in range(4):
        nx= x + dx[i]
        ny= y + dy[i]
        if n >nx >=0 and n>ny>=0 and forest[nx][ny] > curCost:
            d[x][y] = max(dp(nx,ny) +1, d[x][y]) 

    return d[x][y]

n = int(input())
d = [[-1]*n for _ in range(n)]
forest = [[] for _ in range(n)]

for i in range(n):
    forest[i] = list(map(int,input().split(" ")))
answer = 0 

for i in range(n):
    for j in range(n):
        answer = max(dp(i ,j), answer)

print(answer)
