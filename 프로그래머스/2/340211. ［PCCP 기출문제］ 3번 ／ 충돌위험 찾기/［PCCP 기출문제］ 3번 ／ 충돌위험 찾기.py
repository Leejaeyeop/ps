import sys
limit_number = 100000
sys.setrecursionlimit(limit_number)

def solution(points, routes):
    answer = 0
    m = len(routes[0])
    
    def bfs(stack):
        nonlocal answer
        visited = [[0] * 101 for _ in range(101)]
        nstack = []
        
        while stack:
            x, y, r_idx, t_idx = stack.pop()
            t_point = routes[r_idx][t_idx] - 1
            tx, ty = points[t_point]
            
            if x == tx and y == ty:  # 도착한 상태
                t_idx += 1
                if t_idx == m:  # 갈 곳이 없다면
                    if visited[x][y] == 1:
                        answer += 1
                    visited[x][y] += 1
                    continue
                
                stack.append((x, y, r_idx, t_idx))  # 이번 초에 재이동
                continue
            
            if visited[x][y] == 1:
                answer += 1
            visited[x][y] += 1
            
            if x != tx:  # x 방향 이동
                x += 1 if x < tx else -1
            elif y != ty:  # y 방향 이동
                y += 1 if y < ty else -1
            
            nstack.append((x, y, r_idx, t_idx))
        
        if nstack:
            bfs(nstack)
    
    stack = []
    for i, route in enumerate(routes):
        start_point = route[0] - 1
        x, y = points[start_point]
        stack.append((x, y, i, 1))
    
    bfs(stack)
    return answer
