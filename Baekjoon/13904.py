#  https://www.acmicpc.net/problem/13904
import sys
import heapq

input = sys.stdin.readline

answer = 0
n = int(input())
finalDay = 0
list = [[] for _ in range(1001)]

for _ in range(n):
    d,w = map(int,input().split())
    list[d].append(w)
    finalDay = max(finalDay, d)

pq = []
for day in range(finalDay, 0, -1):
    for score in list[day]:
        heapq.heappush(pq, -score)

    if len(pq)>0:
        score = -heapq.heappop(pq)
        answer += score

print(answer)    
