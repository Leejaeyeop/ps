# https://www.acmicpc.net/problem/14238
import sys
input = sys.stdin.readline

s = input().strip()
n = len(s)

# p1 -> 전날 기록 b -> 1, c->2
# p2 -> 전전날 기록 b->1, c->2
def dp(a, b, c, p1, p2):
    if a < 0 or b < 0 or c<0:
        return False

    if a == 0 and b==0 and c==0:
        return True

    if d[a][b][c][p1][p2]:
        return False
    d[a][b][c][p1][p2] = True

    ans[n - a - b - c] = 'A'
    if dp(a-1,b,c,0,p1):
        return True
    
    if p1 != 1:
        ans[n - a - b - c] = 'B' 
        if dp(a,b-1,c,1,p1):
            return True  
    if p1 != 2 and p2 != 2:
        ans[n - a - b - c] = 'C' 
        if dp(a,b,c-1,2,p1):
            return True  
    return False

infos = {"A": 0, "B":0, "C": 0}
for i in range(n):
    infos[s[i]] +=1

d = [[[[[0 for _ in range(3)] for _ in range(3)] for _ in range(51)] for _ in range(51)] for _ in range(51)]
ans = [0] * 50

answer = dp(infos['A'], infos['B'], infos['C'], 0, 0)

print(''.join(ans[:n]) if answer else -1)