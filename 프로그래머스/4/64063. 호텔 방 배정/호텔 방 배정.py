import sys

sys.setrecursionlimit(2000001)
def find(a, parents):
    if a in parents:
        parent = find(parents[a], parents)
        parents[a] = parent
        return parent
    else:
        parents[a] = a +1
        return a

def solution(k, room_number):
    answer = []
    parents = {}
        
    for number in room_number:
        parent = find(number, parents)
        
        # parents[parent] = find(parent +1,parents)
        
        answer.append(parent)
    
    return answer