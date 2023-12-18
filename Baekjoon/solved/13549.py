import sys
from collections import deque

input = sys.stdin.readline
maxInt = sys.maxsize
n,k = map(int,input().split(" "))
maxPos = 100000
visited = [maxInt for _ in range(maxPos+1)]

def bfs(q):
    while q:
        pos,time = q.popleft()

        d = [-1,1,pos]
        t = [1,1,0]

        for i in range(3):
            npos = pos + d[i]
            ntime = time + t[i]
            if -1<npos<=maxPos and ntime < visited[npos]:
                visited[npos] = ntime
                q.append([npos,ntime])

q = deque()
q.append([n,0])
visited[n] = 0
bfs(q)

print(visited[k])
