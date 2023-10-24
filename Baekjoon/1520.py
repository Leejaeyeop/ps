# https://www.acmicpc.net/problem/1520
import sys

input = sys.stdin.readline

dx = [0,-1,0,1]
dy = [1,0,-1,0]
m,n = map(int, input().split())
grpah = [ [0] * (n) for _ in range(m) ]
d = [ [-1] * (n) for _ in range(m) ]

end = (m-1, n-1)

def dp(x, y):
    # 목적지 도착
    if x == end[0] and y == end[1]:
        return 1
    # 방문한 길 확인
    if d[x][y] > -1:
        return d[x][y]

    curValue = grpah[x][y]
    # 방문한 길 표시 ! 중요
    d[x][y] = 0
    for i in range(4):
        nx = x + dx[i]
        ny = y + dy[i]

        # 방문 가능한지 확인
        if -1 < nx < m and -1 < ny < n and curValue > grpah[nx][ny]:
            # 길 갱신
            d[x][y] += dp(nx, ny)

    return d[x][y]

for i in range(m):
    grpah[i] = list(map(int,input().split()))

answer = dp(0,0)

print(answer)
