# https://www.acmicpc.net/problem/1253

import sys
input = sys.stdin.readline

n = int(input())
a = [0 for _ in range(n)]

a = [int(value) for value in input().split()]
a.sort()

answer = 0
for i in range(0, len(a)):
    # 항상 끝과 끝
    leftIndex = 0
    rightIndex = len(a) -1
    # left는 항상 right 보다 작아야 한다.
    while leftIndex < rightIndex:
        # 검사 하고자 하는 수와 left, right이 일치함 -> 변경
        if leftIndex == i:
            leftIndex +=1
            continue
        elif rightIndex == i:
            rightIndex -=1
            continue   
            
        result = a[leftIndex] + a[rightIndex] 
        if result == a[i]:
            answer +=1
            break
        # up 
        elif result < a[i]:
            leftIndex +=1
        # down
        elif result > a[i]:
            rightIndex -=1
               
    
print(answer)
