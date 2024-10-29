import sys
limit_number = 1000000
sys.setrecursionlimit(limit_number)

def solution(edges):
    answer = [0, 0, 0, 0]
    graph = {}

    for edge in edges:
        from_node, to_node = edge
        if from_node not in graph:
            graph[from_node] = {'from': [], 'to': []}
        if to_node not in graph:
            graph[to_node] = {'from': [], 'to': []}
        
        graph[from_node]['to'].append(to_node)
        graph[to_node]['from'].append(from_node)
    
    start = 0
    for key, value in graph.items():
        if not value['from'] and len(value['to']) >= 2:
            start = key
            break
    
    def find(origin, cur, init):
        to = graph[cur]['to']
        # 8 자형            
        if len(to) == 2:
            return 3
        # 막대          
        elif not to:
            return 2
        # 도넛 모양             
        elif not init and cur == origin:
            return 1
        # 다음 노드로 이동         
        else:
            return find(origin, to[0], False)
    
    answer[0] = int(start)
    for target_node in graph[start]['to']:
        answer[find(target_node, target_node, True)] += 1
    
    return answer
