# https://www.acmicpc.net/problem/10800
n = int(input())

answers = [0]*(n) 
balls = [()]*(n)

for i in range(n):
    color, size = (map(int,input().split()))
    balls[i] = (i, color, size)
balls.sort(key = lambda x:(x[2],x[1]))

# 같은 색의 총 무게
d = [0] * (n+1)
# 전체합
totalSize = 0
# 같은 크기 전체 합
curSizeTotalSize = 0
# 현재 사이즈 
curSize = 0
# 현재 색
curColor = 0
# 같은 사이즈 내 중복된 색의 개수
dupColorCount = 0

for ball in balls:
    num, color, size = ball
    
    # 색상 변화 
    if curColor != color:
        dupColorCount = 0
    else:
        dupColorCount +=1   

    # 사이즈 변화
    if curSize != size:
        curSizeTotalSize = 0
        dupColorCount = 0
 
    # 전체 무게 - 현재 같은 무게들 총합
    answers[num] = totalSize - curSizeTotalSize -d[color] + (size*dupColorCount)
    
    curSizeTotalSize += size
    totalSize += size
    d[color] += size

    curSize = size
    curColor = color     

for answer in answers:
    print(answer)
