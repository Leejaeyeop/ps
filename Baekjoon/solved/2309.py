import sys

def combination(start, cnt, selected):
    if cnt == 7:
        h = 0
        for i in range(9):
            if selected[i]:
                h += hobbits[i]
        if h == 100:
            return True 
        else:
            return False          

    for i in range(start, 9):
        selected[i] = True
        if combination(i+1,cnt+1,selected):
            return True
        selected[i] = False

    return False    

input = sys.stdin.readline
hobbits = [0]*9

for i in range(9):
    hobbits[i] = int(input())

selected = [False]*(9)
answer = []
combination(0, 0, selected)  
for i in range(9):
    if selected[i]:
        answer.append(hobbits[i])

answer.sort()
for i in range(7):
    print(answer[i])