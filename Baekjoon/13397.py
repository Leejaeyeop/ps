# https://www.acmicpc.net/problem/13397
import sys
import heapq
INF = sys.maxsize
input = sys.stdin.readline

n,m,k = map(int,(input()).split())
nodes =[[] for _ in range(n+1)]

for i in range(m):
    a,b,c = map(int,(input()).split())
    nodes[a].append((b,c))
    nodes[b].append((a,c))

# n*k -> k비용일때, 해당 노드의 최단거리 확인
d = [[INF for _ in range(k+1)] for _ in range(n+1)]
# 0 비용 1 목적지 node 2 포장 횟수(k)
pq = [[0, 1, 0]]

while pq:
    cur_cost, cur_node, cur_k  = heapq.heappop(pq)
    if d[cur_node][cur_k] < cur_cost: continue

    for next_node, next_cost in nodes[cur_node]:
            # 포장이 X + 비용이 더 저렴 한지
        if d[next_node][cur_k] >  cur_cost + next_cost:
            d[next_node][cur_k] = cur_cost + next_cost
            pq.append([ cur_cost + next_cost,next_node, cur_k])
            # 포장이 가능 할때 + 포장이 됐을때 비용이 더 저렴 한지
        if cur_k < k and d[next_node][cur_k+1] > cur_cost:
            d[next_node][cur_k+1] = cur_cost
            pq.append([cur_cost, next_node,cur_k+1])

print(min(d[n]))