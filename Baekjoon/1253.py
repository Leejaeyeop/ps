# https://www.acmicpc.net/problem/1253

import sys
input = sys.stdin.readline

n = int(input())
a = [0 for _ in range(n)]

a = [int(value) for value in input().split()]
a.sort()

answer = 0
for i in range(0, len(a)):
    leftIndex = 0
    rightIndex = len(a) -1
    while leftIndex < rightIndex:  
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
        elif result < a[i]:
            leftIndex +=1
        elif result > a[i]:
            rightIndex -=1
               
    
print(answer)
