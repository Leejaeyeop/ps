import sys

input = sys.stdin.readline

def permutaion(end, visited, cnt):
    global answer
    if cnt == end:
        print(*answer)
        return

    for i in range(1,end+1):
        if visited[i] == False:
            visited[i] = True
            answer[cnt] = i
            permutaion(end,visited, cnt+1)
            visited[i] = False


n = int(input())
answer = [0] * (n)
permutaion(n, [False]*(n+1), 0)