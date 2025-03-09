import sys

sys.setrecursionlimit(10**6)

def solution(numbers):
    # 10x10 거리 비용 테이블
    d1 = [[0] * 10 for _ in range(10)]
    
    # 키패드 좌표 설정
    pos = {
        '1': (0,0), '2': (0,1), '3': (0,2),
        '4': (1,0), '5': (1,1), '6': (1,2),
        '7': (2,0), '8': (2,1), '9': (2,2),
        '0': (3,1)
    }
    
    def get_cost(cur, target):
        x, y = pos[str(cur)]
        target_x, target_y = pos[str(target)]
        if (x, y) == (target_x, target_y):
            return 1
        
        def get_offset(gap):
            return -1 if gap < 0 else (1 if gap > 0 else 0)
        
        cost = 0
        while x != target_x or y != target_y:
            gap_x, gap_y = target_x - x, target_y - y
            cost += 3 if gap_x != 0 and gap_y != 0 else 2
            x += get_offset(gap_x)
            y += get_offset(gap_y)
        
        return cost
    
    # 거리 비용 계산
    for i in range(10):
        for j in range(10):
            d1[i][j] = get_cost(i, j)
    
    # 3차원 DP 테이블 (-1로 초기화)
    d2 = [[[-1] * len(numbers) for _ in range(10)] for _ in range(10)]
    
    def dp(left, right, num_idx):
        if left == right:
            return 100000000
        if num_idx == len(numbers):
            return 0
        if d2[left][right][num_idx] > -1:
            return d2[left][right][num_idx]
        
        number = int(numbers[num_idx])  # 문자열을 숫자로 변환
        left_cost = d1[left][number]
        right_cost = d1[right][number]
        
        d2[left][right][num_idx] = min(
            left_cost + dp(number, right, num_idx + 1),
            right_cost + dp(left, number, num_idx + 1)
        )
        
        return d2[left][right][num_idx]
    
    return dp(4, 6, 0)
