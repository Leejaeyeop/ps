# https://www.acmicpc.net/problem/1916
# class 만들기
# 첫번째 도시 pq에 삽입
# 거리 초기화 
import heapq  
import sys
input = sys.stdin.readline

n = int(input())
m = int(input())
costs = [[] for _ in range(n+1)]
for _ in range(m):
    info = input().split(' ')
    costs[int(info[0])].append((int(info[1]), int(info[2])))
s,d = map(int,input().split(' '))

def dijkstra(start):
    distance = [int(1e8) for _ in range(n+1)]
    distance[start] = 0
    q = []
    # 저장된 해당 노드 까지의 비용, 노드 이름
    heapq.heappush(q, (0, start))
    while q:
        dist, node = heapq.heappop(q)
        if distance[node] < dist:
            continue
        cost = costs[node]
        for edge in cost:
            # 저장된 해당 노드 까지의 비용 + 현재에서 다른 node로 가는 비용 < 최종적으로 해당 noed로 가는 비용
            if dist + edge[1] < distance[edge[0]]:
                distance[edge[0]] = dist + edge[1]
                heapq.heappush(q, (distance[edge[0]] , edge[0]))
    print(distance[d])

# cost 0, 1 -> 1 로 가는
dijkstra(s)