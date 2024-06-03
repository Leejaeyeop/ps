import sys  
sys.setrecursionlimit(1000000) 

def solution(n, tops):
    answer = 0
    d = [[-1, -1] for _ in range(n)]
    
    def dp(idx, left_empty):
        if idx == n:
            return 1
        count = 0
        top = tops[idx]
        
        if d[idx][left_empty] > -1:
            return d[idx][left_empty]
        
        # 윗 변에 삼각형이 접할때
        if top:
            if left_empty:
                count = (3 * dp(idx + 1, True)) % 10007
                count += dp(idx + 1, False) % 10007
            else:
                count = (2 * dp(idx + 1, True)) % 10007
                count += dp(idx + 1, False) % 10007
        else:  # 윗 변에 삼각형이 존재 하지 않을때
            if left_empty:
                count = (2 * dp(idx + 1, True)) % 10007
                count += dp(idx + 1, False) % 10007
            else:
                count = dp(idx + 1, True) % 10007
                count += dp(idx + 1, False) % 10007
        
        d[idx][left_empty] = count % 10007
        return d[idx][left_empty]
    
    answer = dp(0, True)
    return answer
