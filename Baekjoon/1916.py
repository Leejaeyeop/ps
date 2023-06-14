# https://www.acmicpc.net/problem/1916
n = int(input())
m = int(input())
class Edge:
    def __init__(self, to, cost):
        self.to = to
        self.cost = cost
costs = [[] for _ in range(n+1)]
for i in range(m):
    info = input().split(' ')
    costs[int(info[0])].append(Edge(int(info[1]), int(info[2])))

s,d = input().split(' ')
