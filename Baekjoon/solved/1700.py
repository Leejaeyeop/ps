import sys

input = sys.stdin.readline

n,k = map(int, input().split())

order = list(map(int, input().split()))
connected = [False for _ in range(k+1)]
answer  = 0

cnt = n
for i in range(k):
    device = order[i]
    if not(connected[device]):
        # 교체 찾기 
        if cnt == 0:
            answer +=1
            lastIdx = k
            lastOrder = 0
            # connected 확인 -> 자연수 1 이상 k 이하
            for j in range(1, k+1):
                # j 번 용품 사용중
                if connected[j]:
                    # 순서 , 아예 안 쓸수도 있음.
                    findOrder = 100002
                    # 현재 순서 이후 부터 계산
                    for l in range(i+1, k):
                        # l 번째 사용 용품이 j이다
                        if j == order[l]:
                            findOrder = l
                            break
                    # find가 더 뒤에 있다. 
                    if findOrder > lastOrder:
                        lastOrder = findOrder
                        # j번 용품
                        lastIdx = j
            connected[lastIdx] = False
        elif cnt > 0:
            cnt -=1

        connected[device] = True

print(answer)