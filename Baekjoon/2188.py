# https://www.acmicpc.net/problem/2188
import sys
input = sys.stdin.readline

n,m = map(int,input().split())
cows = [[]]*n
houses = [-1]*(m+1)

for i in range(n):
    cows[i] = list(map(int,input().split()))
    cows[i] = cows[i][1:]

def dfs(curCow, visited):
    for house in cows[curCow]:

        cow = houses[house] 
        if visited[house]: 
            continue
        # 이미 소가 존재
        if cow > -1:
           visited[house] = True
           # 다른 소를 옮길수 있다.    
           if dfs(cow, visited) == True:
                houses[house] = curCow
                return True
        # 들어 갈 수 있음    
        else:
            houses[house] = curCow
            return True
    return False

for i in range(n):
    dfs(i, [False]*(m+1))

answer = 0
for house in houses:
    if house > -1:
        answer+=1
print(answer)
