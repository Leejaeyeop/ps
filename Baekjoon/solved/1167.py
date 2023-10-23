# https://www.acmicpc.net/problem/1167
import sys
input = sys.stdin.readline

answer = 0

def dfs(curNode, parent, tree):
    global answer
    maxVal = 0
    for node, value in tree[curNode]:
        # 부모가 아니다.
        if node != parent:
            val = dfs(node, curNode, tree) + value
            answer = max(answer, maxVal + val)
            maxVal = max(maxVal, val)

    return maxVal

n = int(input())
tree = [[] for _ in range(n+1)]
for _ in range(n):
    info = input().split()
    v = int(info[0])
    nodeInfos = info[1:-1]

    for i in range (0, len(nodeInfos), 2):
        node = int(nodeInfos[i])
        cost = int(nodeInfos[i+1])
        if v < node:
            tree[v].append([node, cost])
            tree[node].append([v, cost])

answer = max(dfs(1, 1, tree), answer)

print(answer)
