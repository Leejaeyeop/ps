import sys

input = sys.stdin.readline

n,m,c = map(int,input().split())

fold = list(map(int, input().split()))
cut = []
for _ in range(c):
    cut.append(list(map(int, input().split())))

paper = [[1 for _ in range(m)] for _ in range(n)] 

def solution(h,w,paper):
    for idx in range(len(fold)-1, -1, -1):
        _fold = fold[idx]

        nPaper = [[1 for _ in range(m)] for _ in range(n)]

        # 가로로 편다.
        if _fold ==1:
            for i in range(h):
                for j in range(w):
                    # 대칭으로 자른다.
                    if paper[i][j] == 0:
                        nPaper[i][j] = 0
                        nPaper[i][(2*w) - j -1] = 0
            w *= 2
        # 세로로 편다.
        else:
            for i in range(h):
                for j in range(w):
                    # 대칭으로 자른다.
                    if paper[i][j] == 0:
                        nPaper[i][j] = 0
                        nPaper[(2*h) - i -1][j] = 0
            h *= 2
        paper = nPaper
    return paper        


height = n
width = m
for _fold in fold:
    # 가로로 접는다.
    if _fold ==1:
        width //=2
    else:
        height //=2

for x,y in cut:
    if x-1 < height and y-1 < width: 
        paper[x-1][y-1] = 0

paper = solution(height,width,paper)
print(paper)