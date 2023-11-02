import sys

input = sys.stdin.readline

n = int(input())   

answer = [0] * 10
cnt = 0

def dfs(digit, num):
    global answer
    global cnt
    answer[10-digit] = num
    if digit == 1:
        cnt +=1
        if cnt == n:
            return True
        return False

    # 현재 num 바로 아래 까지
    for i in range(0, num):
        res = dfs(digit -1, i)
        if res:
            return True

    return False

def solution():
    global answer
    for i in range(1, 11):
        for j in range(1,10):
            res = dfs(i,j)
            if res == True:
                idx = 0
                for k in range(10):
                    if answer[k] != 0:
                        idx = k
                        print("".join(map(str,answer[idx:])))
                        return
    print(-1)                 

if n ==0:
    print(0) 
else:           
    solution()
