import sys
import heapq
input = sys.stdin.readline

n = int(input())

# 가장 큰놈이 위에 -> 내림차순
smallq = []
# 가장 작은놈 위에 -> 오름차순
bigq = []

midNum = 0
nums = [0 for _ in range(n)]
for i in range(n):
    nums[i] = int(input()) 
for i in range(n):
    num = nums[i]   
    if i == 0:
        midNum = num
        print(midNum)                    
        continue
    
    if num < midNum:
        heapq.heappush(smallq, -num)
    else:
        heapq.heappush(bigq, num)

    if len(smallq) > len(bigq):
        comNum = -heapq.heappop(smallq)
        # 둘 중 큰놈이 큰곳으로...
        if comNum > midNum:
            heapq.heappush(bigq, comNum) 
        else:
            heapq.heappush(bigq, midNum)
            midNum = comNum
    elif len(smallq) + 1 < len(bigq):      
        comNum = heapq.heappop(bigq)
        # 둘 중 작은놈이 작은곳으로...
        if comNum > midNum:
            heapq.heappush(smallq, -midNum) 
            midNum = comNum
        else:
            heapq.heappush(smallq, -comNum)
    print(midNum)                    
