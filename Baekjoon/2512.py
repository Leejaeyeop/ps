# https://www.acmicpc.net/problem/2512
import sys
input = sys.stdin.readline

n = int(input())
budgets = list(map(int, input().split()))
m = int(input())

begin = 0
end = max(budgets)
answer = 0

# 상한액이 정해진 전체 예산 계산...
def getTotalBudget(top):
    total = 0
    for budget in budgets:
        if budget <= top:
            total += budget
        else:
            total += top
    return total            

while begin <= end :
    mid = (begin + end) // 2
    t = getTotalBudget(mid)

    # 상한액이 너무 높다
    if t > m:
        end = mid - 1
    # 상한액이 맞거나 남는다. 
    else:    
        begin = mid + 1
        answer = mid

print(answer)