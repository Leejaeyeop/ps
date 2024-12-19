import heapq
import math

def dijkstra(n, gates, costs, summits_set):
    d = [math.inf] * (n + 1)
    q = []
    
    # 모든 출발지를 우선순위 큐에 삽입 -> 동시에 출발 + 산봉우리를 만나면 종료 한다.
    for gate in gates:
        heapq.heappush(q, [gate, 0])
        d[gate] = 0
    
    while q:
        curNode, curCost = heapq.heappop(q)
        
        if d[curNode] < curCost:
            continue
        
        for otherNode,otherCost in costs[curNode]:
            cost = max(curCost,otherCost)
                
            if d[otherNode] > cost:
                d[otherNode] = cost
                # 현재 노드가 산봉우리 임           
                if curNode not in summits_set:
                    heapq.heappush(q, [otherNode, d[otherNode]])       

    return d            
    
def solution(n, paths, gates, summits):
    answer = [0 ,math.inf]
    costs = [[] for _ in range(n+1)]
    
    for path in paths:
        n1, n2, cost = path
        costs[n1].append((n2,cost))
        costs[n2].append((n1,cost)) 
    
    summits.sort()
    summits_set = set(summits)
    d = dijkstra(n, gates, costs, summits_set)
    for summit in summits:
        if(d[summit] < answer[1]):
            answer = [summit, d[summit]]
    
    return answer