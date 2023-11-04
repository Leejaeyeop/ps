import sys
# 모든 다리는 반드시 연겵
input = sys.stdin.readline

t = int(input())

# loc 보다 같거나 큰곳 가능
def dp(cnt,loc,d):
    if d[cnt][loc] > -1:
        return d[cnt][loc]
    
    if cnt == 0:
        return 1
    
    d[cnt][loc] = 0
    # 자기 보다 위 검사
    for i in range(loc+1, len(d[cnt])):
       d[cnt][loc] += dp(cnt-1,i,d)
    
    return d[cnt][loc]

answer = []
for _ in range(t):
    n,m = map(int, input().split())
    # d = [남은 다리 갯수][연결 할 다리 번호] 
    d = [[-1 for _ in range(max(n,m))] for _ in range(min(n,m)+1)]
    # 초기 -> cnt 하나도 안씀, 다리 번호 -1
    answer.append(dp(min(n,m),-1,d))

for num in answer:
    print(num)
