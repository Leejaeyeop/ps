import sys
import bisect

input = sys.stdin.readline

n = int(input())

liquids = list(map(int, input().split()))
liquids.sort()

value = 3000000004
answer = [0,0,0]

for i in range(0,len(liquids)-1):
    left = i + 1
    right = len(liquids) - 1
    fixed = liquids[i]
    # 세 용액 
    while left < right:
        a = liquids[left]
        b = liquids[right]

        sum = a + b + fixed

        if abs(sum) < value:
            value = abs(sum)
            answer[0] = fixed
            answer[1] = a
            answer[2] = b

        if sum <0:
            left +=1
        elif sum>0:
            right -=1
        else:
            print(*answer)
            sys.exit()      

print(*answer)