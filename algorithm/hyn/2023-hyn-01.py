import heapq
import sys
def solution(k, n, reqs):
    answer = float("inf")
    max_cnt = n - k + 1
    d = [[-1 for _ in range(max_cnt + 1)] for _ in range(k)]
    req_obj = {}

    for i in range(k):
        req_obj[i] = []
    for a, b, c in reqs:
        req_obj[c - 1].append((a, b))

    def get_result(idx, cnt):
        res = 0
        on_going = 0
        q = []
        if req_obj[idx]:
            for a, b in req_obj[idx]:
                if on_going == cnt:
                    endtime = heapq.heappop(q)
                    if endtime > a:
                        res += endtime - a
                        heapq.heappush(q,endtime+b)
                    else:
                        heapq.heappush(q,a+b)
                        
                else:
                    on_going += 1
                    heapq.heappush(q,a+b)

        d[idx][cnt] = res
        return res

    def dp(lst):
        total_sum = 0
        for i in range(k):
            if d[i][lst[i]] == -1:
                get_result(i, lst[i])
            total_sum += d[i][lst[i]]
        nonlocal answer
        answer = min(answer, total_sum)

    def combi(lst, left, idx):
        for i in range(1, max_cnt + 1):
            lst[idx] = i
            if idx < k - 1:
                combi(lst, left - i, idx + 1)
            elif idx == k - 1 and left - i == 0:
                dp(lst)

    combi([0] * k, n, 0)

    return answer
