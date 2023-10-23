# https://www.acmicpc.net/problem/14501
import sys
input = sys.stdin.readline

n = int(input())
list = [()]*(n+1)
# 마지막 날 +1 -> 상담이 끝난 날 다음날 비용 게산
d = [0]*(n+2)
list[0] = ()

for i in range(1, n+1):
    a,b = map(int,input().split())
    list[i] = (a,b)

for i in range(1, n+1):
    t, p = list[i]
    # 전날 비용 vs 현재 비용
    d[i] = max(d[i], d[i-1])
    # 상담이 가능 + 상담하는게 이득    
    if (i + t -1 <= n) and (d[i+t] < p + d[i]):
        # 상담이 끝난 날 다음날-> 비용
        d[i+t] = p + d[i] 

# 마지막 날 +1 -> 상담이 끝난 날 다음날 비용 게산        
print(max(d[n+1],d[n]))        
