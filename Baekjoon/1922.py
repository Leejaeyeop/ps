# https://www.acmicpc.net/problem/1922
import sys
input = sys.stdin.readline

n = int(input())
m = int(input())
edges = []
a =[]
answer = 0
parents = [0]*(n+1)

# edge의 root를 초기화(자기자신) 
for i in range(n+1):
    parents[i] = i

for _ in range(m):
    a,b,cost = map(int, input().split())
    edges.append((cost, a,b))
# edge의 cost를 오름차순으로 정렬한다... 
edges.sort()

# edge의 root를 return 한다. root가 본인일 경우 까지...
def find(a):
    if parents[a] != a:
        return find(parents[a])
    else:
        return a

# edge의 index가 작은 놈이 부모를 먹는다.
def union(a,b):
    if(a < b):
        parents[b] = a    
    else:
        parents[a] = b  

for edge in edges:
    cost  = edge[0]
    a = edge[1]
    b = edge[2]
    if a == b: continue

    parentA = find(a)
    parentB = find(b)

    # 부모가 다르다! 부모를 연결 + 비용을 더한다.
    if parentA != parentB:
        union(parentA,parentB)
        answer += cost        

print(answer)