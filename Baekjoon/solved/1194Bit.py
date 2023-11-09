# https://www.acmicpc.net/problem/1194
import sys
import re
sys.setrecursionlimit(10000)

input = sys.stdin.readline
# 일반적인 미로 탈출과 다르게, 뒤로 돌아가는 옵션이 존재한다.
# 열쇠를 먹고 문으로 이동하면 문을 연다. 최소거리를 구해야 함.
# 완전탐색 -> 무한루프를 어떻게 막냐? 아이템 여부로 visited 판단!
n,m = map(int, input().split())

graph = [[[] for _ in range(m)] for _ in range(n)]

for i in range(n):
    graph[i] = list(input())

visited = [[[False] * (1 << 6) for _ in range(m)] for _ in range(n)]

dx = [0,1,0,-1]
dy = [1,0,-1,0]
def bfs(q,cnt):
    nq = []
    
    while q:
        x,y,bit = q.pop()

        for i in range(0,4):
            nx = x + dx[i]
            ny = y + dy[i]
            nBit = bit
            # 범위내 + 벽X + 방문 X
            if -1 < nx < n and -1 < ny <m and graph[nx][ny] != "#" and not(visited[nx][ny][bit]) :
                value = graph[nx][ny]
                # 도착
                if value == "1":
                    return cnt
                # 문 -> 열쇠 확인
                elif ('A' <= value <= 'F'):
                    if bit & (1 << ord(value) - ord('A')) == 0:
                        continue
                # 열쇠 -> 득템
                elif ('a' <= value <= 'f'):
                    nBit |= (1<<ord(value) - ord('a'))
                    
                visited[nx][ny][bit] = True
                visited[nx][ny][nBit] = True
                nq.append((nx,ny,nBit))

    if len(nq) >0:
        return bfs(nq, cnt+1)
    return -1

answer = 0        
for i in range(n):
    for j in range(m):
        if graph[i][j] == "0":
            q = [(i,j,0)]
            visited[i][j][0] = True
            # 첫 이동, 이동거리 1
            answer = bfs(q,1)
            break

print(answer)