# https://www.acmicpc.net/problem/2143
import sys
import bisect

input = sys.stdin.readline
t = int(input())

n = int(input())
a = list(map(int, input().split(" ")))

m = int(input())
b = list(map(int, input().split(" ")))

# a0, a0+a1,a0+a1+a2, a1,a1+a2 ...
aSum = []
for i in range(n):
    sum = a[i]
    aSum.append(sum)
    for j in range(i+1, n):
        sum += a[j]
        aSum.append(sum)

bSum = []
for i in range(m):
    sum = b[i]
    bSum.append(sum)
    for j in range(i+1,m):
        sum +=b[j]
        bSum.append(sum)

aSum.sort()
bSum.sort()
# t = a + b
# b = t - a
answer = 0
for i in range(len(aSum)):
    # b이상인 원소의 최소 위치
    l = bisect.bisect_left(bSum, t - aSum[i])
    # b초과 원소의 최소 위치
    r = bisect.bisect_right(bSum, t - aSum[i])

    # 값이 b인 원소의 총 갯수
    answer += r - l

print(answer)