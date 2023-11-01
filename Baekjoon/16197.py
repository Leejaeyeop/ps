import sys

input = sys.stdin.readline

dx = [0,1,0,-1]
dy = [1,0,-1,0]

def bfs(n,m,q,board,visited,cnt):
    if cnt > 10:
        return -1

    nq = []
    while q:
        coin = q.pop()

        for i in range(4):
            droped = [False, False]
            nCoin = []
            for j in range(0,2):
                x,y = coin[j]
                nx = x + dx[i]
                ny = y + dy[i]

                if nx < 0 or nx == n or ny <0 or ny ==m:
                    droped[j] = True
                elif board[nx][ny] == "#":
                    nCoin.append([x,y])
                else:
                    nCoin.append([nx,ny])

            # 둘 다 drop
            if droped[0] == True and droped[1] == True:
                continue
            # 둘 다 drop x
            elif droped[0] == False and droped[1] == False:
                if visited[nCoin[0][0]][nCoin[0][1]][nCoin[1][0]][nCoin[1][1]]:
                    continue
                visited[nCoin[0][0]][nCoin[0][1]][nCoin[1][0]][nCoin[1][1]] = True
                nq.append(nCoin)
            # 둘 중 하나만 drop -> 정답
            else:
                return cnt

    if len(nq) > 0:
        return bfs(n,m,nq,board,visited,cnt+1)
    return -1


n,m = map(int, input().split())
board = [["" for _ in range (m)] for _ in range(n)]

for i in range(n):
    board[i] = list(input())

# 방문 확인
visited = [[[[False for _ in range (m)] for _ in range(n)] for _ in range (m)] for _ in range(n)]

coin = []
q = []
# 시작점 구하기
for i in range(n):
    for j in range(m):
        if board[i][j] == "o":
            coin.append([i,j])

q.append(coin)

answer = bfs(n,m,q,board,visited,1)
print(answer)