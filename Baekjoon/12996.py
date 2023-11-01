# cttps://www.acmicpc.net/problem/12996
import sys

input = sys.stdin.readline

s,dot,k,h = map(int, input().split())
d = [[[[-1 for _ in range(51)] for _ in range(51)] for _ in range(51)] for _ in range(51)]

def dp(s,a,b,c):
    if s==0:
        if a ==0 and b ==0 and c == 0:
            return 1
        else:
            return 0    

    if a < 0 or b <0 or c<0:
        return 0

    if d[s][a][b][c] > -1:
        return d[s][a][b][c]
    
    d[s][a][b][c] = 0
    d[s][a][b][c] += dp(s-1, a-1, b,c)
    d[s][a][b][c] += dp(s-1, a, b-1,c)
    d[s][a][b][c] += dp(s-1, a, b,c-1)
    d[s][a][b][c] += dp(s-1, a, b-1,c-1)
    d[s][a][b][c] += dp(s-1, a-1, b-1,c)
    d[s][a][b][c] += dp(s-1, a-1, b,c-1)
    d[s][a][b][c] += dp(s-1, a-1, b-1,c-1)
    d[s][a][b][c] %= 1000000007

    return d[s][a][b][c]

print(dp(s,dot,k,h))
