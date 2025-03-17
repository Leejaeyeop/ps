import sys

input = sys.stdin.readline
h,w = map(int, input().split())
blocks = list(map(int, input().split()))

answer = 0

for i in range(1, h+1):
    curH = i
    preY = -1
    for j in range(w):
        if blocks[j] >= curH:
            if preY > -1:
                answer += j - preY -1
            preY = j    
print(answer)