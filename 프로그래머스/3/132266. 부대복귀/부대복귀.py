from collections import deque

def solution(n, roads, sources, destination):
    # 각 지점까지의 거리 저장 (-1로 초기화)
    distances = [-1] * (n + 1)
    # 인접 리스트 생성
    graph = [[] for _ in range(n + 1)]
    
    for a, b in roads:
        graph[a].append(b)
        graph[b].append(a)
    
    def bfs(start):
        queue = deque([start])
        distances[start] = 0  # 목적지에서의 거리는 0
        
        while queue:
            road = queue.popleft()
            for next_road in graph[road]:
                if distances[next_road] == -1:  # 방문하지 않은 경우만
                    distances[next_road] = distances[road] + 1
                    queue.append(next_road)
    
    # 목적지에서 출발하는 BFS 수행
    bfs(destination)
    
    # 각 source까지의 거리 반환
    return [distances[source] for source in sources]
