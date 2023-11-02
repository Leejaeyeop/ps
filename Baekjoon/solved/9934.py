# https://www.acmicpc.net/problem/9934
import sys

input = sys.stdin.readline

k = int(input())
answer = [[] for _ in range(k)]
buildings = list(map(int,input().split(" ")))

def setLavels(curLevel,begin, end):
    mid = (begin + end) //2
    answer[curLevel].append(buildings[mid])

    if curLevel < k -1:
        setLavels(curLevel +1, begin ,mid-1)
        setLavels(curLevel +1, mid+1, end)


setLavels(0,0,len(buildings)-1)

for num in answer:
    print(*num)