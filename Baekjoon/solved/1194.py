# https://www.acmicpc.net/problem/1194
import sys
import re

input = sys.stdin.readline
sys.setrecursionlimit(10000)
# 일반적인 미로 탈출과 다르게, 뒤로 돌아가는 옵션이 존재한다.
# 열쇠를 먹고 문으로 이동하면 문을 연다. 최소거리를 구해야 함.
# 완전탐색 -> 무한루프를 어떻게 막냐? 아이템 여부로 visited 판단!
n,m = map(int, input().split())

graph = [[[] for _ in range(m)] for _ in range(n)]

for i in range(n):
    graph[i] = list(input())

#  [n][m][a][b][c][d][e][f]
visited = [[[[[[[[False for _ in range(2) ] for _ in range(2)] for _ in range(2)] for _ in range(2)] for _ in range(2)] for _ in range(2)] for _ in range(m)] for _ in range(n)]

dx = [0,1,0,-1]
dy = [1,0,-1,0]
def bfs(q,cnt):
    nq = []
    
    while q:
        x,y,a,b,c,d,e,f = q.pop()

        for i in range(0,4):
            nx = x + dx[i]
            ny = y + dy[i]
            na,nb,nc,nd,ne,nf = a,b,c,d,e,f
            # 범위내 + 벽X + 방문 X
            if -1 < nx < n and -1 < ny <m and graph[nx][ny] != "#" and not(visited[nx][ny][a][b][c][d][e][f]):
                value = graph[nx][ny]
                # 도착
                if value == "1":
                    return cnt
                # 문 -> 열쇠 확인
                elif bool(re.search(r'[A-Z]',value)):
                    if (value == "A" and not(a)) or (value == "B" and not(b)) or (value == "C" and not(c)) or (value == "D" and not(d)) or (value == "E" and not(e)) or (value == "F" and not(f)):
                        continue
                # 열쇠 -> 득템
                elif bool(re.search(r'[a-z]',value)):
                    if value == "a":
                        na = 1
                    elif value == "b":
                        nb = 1
                    elif value == "c":
                        nc = 1
                    elif value == "d":
                        nd = 1                        
                    elif value == "e":
                        ne = 1
                    elif value == "f":
                        nf = 1
                visited[nx][ny][a][b][c][d][e][f] = True
                visited[nx][ny][na][nb][nc][nd][ne][nf] = True
                nq.append((nx,ny,na,nb,nc,nd,ne,nf))

    if len(nq) >0:
        return bfs(nq, cnt+1)
    return -1

answer = 0        
for i in range(n):
    for j in range(m):
        if graph[i][j] == "0":
            q = [(i,j,0,0,0,0,0,0)]
            visited[i][j][0][0][0][0][0][0] = True
            # 첫 이동, 이동거리 1
            answer = bfs(q,1)
            break

print(answer)