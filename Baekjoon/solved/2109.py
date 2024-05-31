import sys
import heapq

input = sys.stdin.readline

n = int(input())
points = {}
pq = []
answer = 0
maxD = 0

for _ in range(n):
  p,d = map(int, input().split())
  maxD = max(maxD,d)

  if not  d in points:
    points[d] = []
  points[d].append(p)

for i in range(maxD, 0, -1):
  if i in points:
    for point in points[i]:
      heapq.heappush(pq, -point)
  
  # 요금 지불
  if len(pq) > 0:
    point = -heapq.heappop(pq)
    answer += point

print(answer)
