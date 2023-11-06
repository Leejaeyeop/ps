import sys
from collections import deque
input = sys.stdin.readline

# 자식이 1개 -> 순서는 자식과 같다
# 자식이 2개 -> 순서는 자식 +1
# 시작 노드는 1

t = int(input())

def topologicalSort(graph, children, indgree, visited, strahler):
    # 1번째 노드에서 시작
    q = deque()

    for node in range (1, len(indgree)):
        if not(visited[node]) and indgree[node] == 0:
            q.append(node)
            strahler[node] = 1
            visited[node] = True

    while q:
        node = q.popleft()
        for edge in graph[node]:
            indgree[edge] -=1

        for nNode in range (1, len(indgree)):
            if not(visited[nNode]) and indgree[nNode] == 0:
                visited[nNode] = True 
                q.append(nNode)
                
                # 최대 값
                maxVal = 0
                # 강이 두번 이상 들어온 최댓값
                multi = 0
                # strahler 정하기
                for edge in children[nNode]:
                    # 이미 값이 있음.. 두번 이상 -> 두번 이상 들어온 최댓값을 갱신한다.
                    if maxVal == strahler[edge]:
                        multi = max(multi, maxVal + 1)
                    # 최댓값 vs 강이 두 번이상 들어온 값의 최댓값
                    maxVal = max(maxVal, strahler[edge])
                strahler[nNode] = max(maxVal, multi)

answer = []
for _ in range(t):
    k,m,p = map(int,input().split())
    graph = [[] for _ in range(m+1)]
    children = [[] for _ in range(m+1)]
    indgree = [0 for _ in range(m+1)]
    visited = [False for _ in range(m+1)]
    strahler = [0 for _ in range(m+1)]
    for _ in range(p):
        a,b = map(int, input().split())
        indgree[b] +=1
        graph[a].append(b)
        children[b].append(a)

    topologicalSort(graph, children, indgree, visited, strahler)
    answer.append([k, max(strahler)])

for _answer in answer:
    print(*_answer)
