import sys

# 재귀 제한 증가
sys.setrecursionlimit(10**6)

def solution(n):
    # 2차원 배열 초기화
    arr = [[0] * (i + 1) for i in range(n)]
    
    # 방향: 아래(0), 오른쪽(1), 왼쪽 위(2)
    directions = [(1, 0), (0, 1), (-1, -1)]
    
    i, j, num = 0, 0, 1
    direction = 0  # 초기 방향: 아래
    
    while num <= (n * (n + 1)) // 2:  # 삼각형의 총 원소 개수
        arr[i][j] = num
        num += 1
        
        ni, nj = i + directions[direction][0], j + directions[direction][1]
        
        # 범위를 벗어나거나 이미 채워진 경우 방향 전환
        if not (0 <= ni < n and 0 <= nj < len(arr[ni]) and arr[ni][nj] == 0):
            direction = (direction + 1) % 3
            ni, nj = i + directions[direction][0], j + directions[direction][1]
        
        i, j = ni, nj
    
    return sum(arr, [])  # 2차원 배열을 1차원 리스트로 변환
