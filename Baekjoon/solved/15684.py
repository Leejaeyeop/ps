# https://www.acmicpc.net/problem/15684
#
import sys
input = sys.stdin.readline

n,m,h = map(int, input().split())
answer = -1
graph = [[False] * (n+1) for _ in range(h+1)]

# 사다리 타기
# 1번 세로부터 시작
def go(graph):
    for i in range (1,n+1):
        # 현재 세로선
        curLine = i
        # 현재 점선 -> 초기화 1
        curDotLine = 1
        while curDotLine <= h:
            # 사다리가 오른쪽 으로
            if graph[curDotLine][curLine]:
                curLine +=1
            # 사다리가 왼쪽으로 
            elif graph[curDotLine][curLine-1]:
                curLine -=1
            curDotLine +=1
        if curLine != i: 
            return False
    return True

def dfs(x, y, cnt):
    if cnt == 0:
        return go(graph)
    for i in range(x, h+1):
        for j in range(y,n+1):
            if graph[i][j] == False and j <n and graph[i][j-1] == False and graph[i][j+1] == False:
                graph[i][j] = True
                if dfs(i,j,cnt-1):
                    return True
                graph[i][j] = False
        y = 0

for _ in range(m):
    a,b = map(int, input().split())
    graph[a][b] = True

for i in range(4):
    if(answer == -1): 
        if dfs(1, 1, i):
            answer = i
            break
print(answer)
