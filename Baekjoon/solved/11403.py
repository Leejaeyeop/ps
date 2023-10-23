# https://www.acmicpc.net/problem/11403
import sys

input = sys.stdin.readline

n = int(input())

answer = [[]]*n
graph = [[]]*n

for i in range(n):
    graph[i] = list(map(int, input().split(" ")))
    answer[i] = [0]*n

def dfs(target, edges):
    for node, edge in enumerate(edges):
        if edge == 1 and answer[target][node] == 0:
            answer[target][node] = 1
            dfs(target, graph[node])

for i in range(n):
    dfs(i, graph[i])


for row in answer:
    print(" ".join(map(str, row)))

