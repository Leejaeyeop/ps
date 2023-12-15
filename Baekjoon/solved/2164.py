import sys
from collections import deque

deq = deque()

input = sys.stdin.readline

n = int(input())

for i in range(1,n+1):
    deq.append(i)

while len(deq)>1:
    deq.popleft()
    num = deq.popleft()
    deq.append(num)

print(deq.pop())