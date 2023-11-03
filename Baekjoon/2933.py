import sys

input = sys.stdin.readline

dx = [0,-1,0,1]
dy = [-1,0,1,0]

r,c = map(int, input().split())

graph = [["" for _ in range(c)] for _ in range(r)]

for i in range(r):
    graph[i] = list(input())[:-1]

n = int(input())

# 클러스터 내리기
def fallCluster(cluster, h):
    # 기존 그래프에서 삭제할 클러스터를 우선 삭제한다.
    for i in range(r):
        for j in range(c):
            if cluster[i][j]:
                graph[i][j] = "."
    # 기존 그래프에 위치가 변경된 클러스터를 추가 한다.
    for i in range(r):
        for j in range(c):
            if cluster[i][j]:
                graph[i+h][j] = "x"

# 내릴 높이 구하기
def getHeights(cluster, bottoms):
    # 다음 내릴 위치 
    nBottoms = []
    while bottoms:
        x,y = bottoms.pop()
        # 현재 위치가 밑바닥 or 다음 위치가 x + cluster가 아니다 -> 내리지 않는다. 
        if x == r-1 or (graph[x+1][y] == "x" and not(cluster[x+1][y])):
            return 0
        nBottoms.append((x+1,y))

    # 내린다.
    return 1 + getHeights(cluster, nBottoms)


# 땅붙 확인
def isConnected(x, y, cluster, bottoms, checked):
    q = [(x,y)]
    # 무한 루프 방지

    while q:
        x,y = q.pop()
        if checked[x][y]:
            return True
        if cluster[x][y]:
            continue
        # 클러스터에 포함 시킨다.
        cluster[x][y] = True
        # 밑바닥 -> true
        if x == r-1:
            return True
        # 아래가 없다 -> bottom
        if graph[x+1][y] == ".":
            bottoms.append((x,y))

        for i in range(4):
            nx = x + dx[i]
            ny = y + dy[i]

            if -1 < nx < r and -1< ny < c and graph[nx][ny] == "x":
                q.append((nx,ny))
                
    return False    

def check(x,y):
    checked =  [[False for _ in range(c)] for _ in range(r)]
    for i in range(4):
        nx = x + dx[i]
        ny = y + dy[i]

        if -1 < nx < r and -1< ny < c and graph[nx][ny] == "x":
            cluster = [[False for _ in range(c)] for _ in range(r)]

            bottoms = []
            # 연결이 안됨
            if not(isConnected(nx,ny,cluster,bottoms,checked)):
                # 높이 구한다.
                h = getHeights(cluster, bottoms)
                # 높이 만큼 한번에 다운 시킨다.
                fallCluster(cluster, h)
                break
            else:
                for j in range(r):
                    for k in range(c):
                        if cluster[j][k]:
                            checked[j][k] = True

# 막대기 날리고
# 막대기에 미네랄 맞으면 검사
# 클러스터 분리 확인 & 미네랄 내리기 (다른 클러스터 만날떄 까지 or 땅바닥)
# 클러스터 분리 및 미네랄 내리기 중요
def go(direc,h):
    if direc == 1:
        for i in range(c):
            if graph[r-h][i] == "x":
                graph[r-h][i] = "."
                check(r-h,i)
                break
    else:
        for i in range(c-1, -1, -1):
            if graph[r-h][i] == "x":
                graph[r-h][i] = "."
                check(r-h,i)
                break                

order = list(map(int,input().split(" ")))
for i in range(1, n+1):
    if i%2==0:
        go(-1,order[i-1])
    else:
        go(1,order[i-1])

for i in range(r):
    for j in range(c):
        print(graph[i][j], end='')
    print()