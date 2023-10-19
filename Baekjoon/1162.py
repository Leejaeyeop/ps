# https://www.acmicpc.net/problem/1162
import sys
import heapq
input = sys.stdin.readline
INF = sys.maxsize

def dijsktra(k, roads):
    # 1 번 도시에서 도착 시간
    d = [ [INF for _ in range(k+1)] for _ in range(n+1)] 
    # for _d in d:
    #     _d[1] = 0

    q = []
    heapq.heappush(q, [0, 1, 0])

    while q:
        curTime, curCityNum, remainP = heapq.heappop(q)

        if d[curCityNum][remainP] < curTime: continue

        for nextCity, toTime in roads[curCityNum]:
            nextTime = curTime + toTime
            
            # 도로를 포장하지 않는다.
            if nextTime < d[nextCity][remainP]:
                d[nextCity][remainP] = nextTime
                q.append([nextTime, nextCity, remainP])
            # 도로를 포장한다. 
            if remainP < k and curTime < d[nextCity][remainP+1]:
                d[nextCity][remainP+1] = curTime
                q.append([curTime, nextCity, remainP+1])
    return d

n,m,k = map(int, (input()).split())
roads = [ [] for _ in range(n+1) ]

for _ in range(m):
    a,b,time = map(int, (input()).split())
    roads[a].append((b,time))
    roads[b].append((a,time))

d = dijsktra(k, roads)
print(min(d[n]))