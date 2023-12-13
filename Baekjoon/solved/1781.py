import sys
import heapq

input = sys.stdin.readline

n = int(input())
info = {}
q = []
answer = 0
for _ in range(n):
    day,cnt = map(int, input().split(" "))
    if not day in info:
        info[day] = []
    info[day].append(cnt)

for i in range(n,0,-1):
    if i in info:
        for day in info[i]:
            heapq.heappush(q,-day)
    if q:
        cnt = -heapq.heappop(q)
        answer +=cnt

print(answer)
