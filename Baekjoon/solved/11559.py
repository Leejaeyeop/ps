import sys
import copy
# 새 맵을 담는 배열

# for 문으로 터뜨리릴 녀석 탐지 (go) & 새 맵 생성

# 터뜨리기 함수 
# visited 함수 생성
# bfs, 자기랑 같은 애들 예비 queue에 담기, 방문 표시 visited
# 3이하 return, 4이상 전부 터트리기
# 터뜨리기 -> 기존 배열 복사한 배열에서, 자기자신은 죽이고, 위 배열 아래로... 원시적으로

# 터질시 -> 자기 자신 없애기, 위 배열 - 칸씩
dx = [0,-1,0,1]
dy = [1,0,-1,0]

input = sys.stdin.readline
answer = 0
graph = [["" for _ in range(6)] for _ in range(12)]

def bfs(x,y,graph):
    visited = [[False] * 6 for _ in range(12)]
    visited[x][y] = True

    q = []
    # 탐색용 큐
    searchQ = [(x,y)]
    color = graph[x][y]
    while searchQ:
        x,y = searchQ.pop()
        q.append((x,y))
        for i in range(4):
            nx = x+dx[i]
            ny = y+dy[i]
            if -1 < nx < 12 and -1 < ny < 6 and visited[nx][ny] == False and graph[nx][ny] == color:
                visited[nx][ny] = True
                searchQ.append((nx,ny))

    # 터뜨리기
    if len(q) >=4:
        while q:
            x,y = q.pop()
            # 터뜨린걸 _로 표시
            graph[x][y] = "_"
        return True
    return False

# 중력 적용
def applyGravity(graph):
    for i in range(12):
        for j in range(6):
            # 터뜨린곳 위에서부터 swap
            if graph[i][j] == "_":
                preValue = "."
                for k in range(i+1):
                    temp = preValue
                    preValue = graph[k][j]
                    graph[k][j] = temp

def startPhase(graph):
    global answer
    goNext = False
    for i in range(12):
        for j in range(6):
            if graph[i][j] != ".":
                bombed = bfs(i,j, graph)
                if bombed:
                    goNext = True

    if goNext:
        answer +=1                
        # 증력 작용
        applyGravity(graph)
        startPhase(graph)

for i in range(12):
    graph[i] = list(input())

startPhase(graph)
print(answer)
