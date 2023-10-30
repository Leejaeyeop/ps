import sys
import heapq
import math

input = sys.stdin.readline

def dijkstra(start):
    pq = []
    heapq.heappush(pq,[0, start])

    d = [math.inf] * (n+1)
    d[start] = 0

    while pq:
        cost, curNode = heapq.heappop(pq)

        if d[curNode] < cost:
            continue

        for otherCost, otherNode in graph[curNode]:
            newCost = otherCost + cost
            if newCost < d[otherNode]:
                d[otherNode] = newCost
                pq.append((newCost, otherNode))
    
    return d

n, m = map(int, input().split(" "))
graph = [[] for _ in range(n+1)]

for _ in range(m):
    a,b,c = map(int, input().split(" "))
    graph[a].append((c,b))
    graph[b].append((c,a))

dist = dijkstra(2)
def go(curNode):
    if dp[curNode] > 0:
        return dp[curNode]
    
    for otherCost,otherNode in graph[curNode]:
        if dist[curNode] > dist[otherNode]:
            # cur_node보다 other_node 사용이 T에 도달하는 더 합리적인 이동 경로.
            dp[curNode] += go(otherNode)
    return dp[curNode]


dp = [0] * (n+1)
dp[2] = 1

go(1)

print(dp[1])

