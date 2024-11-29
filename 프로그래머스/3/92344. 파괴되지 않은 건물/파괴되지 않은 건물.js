var maxX, maxY = 0

function setCumulativeSum(type, start, end, degree, sum) {
    sum[start[0]][start[1]] += type*degree
    sum[end[0]+1][start[1]] += -1 * (type*degree)
    sum[start[0]][end[1] +1] += -1 * (type*degree)
    sum[end[0]+1][end[1] +1] += type*degree  
}

function solution(board, skill) {
    var answer = 0;
    maxX = board.length - 1
    maxY = board[0].length - 1
    const sum = Array.from(Array(board.length +1), () => Array(board[0].length +1).fill(0))
    
    for(let _skill of skill) {
        const [type, r1, c1, r2, c2, degree] = _skill
        const start = [r1, c1]
        const end = [r2, c2]
        
        setCumulativeSum(type === 1 ? -1:1, start, end, degree, sum)
    }
    
    // 누적 합 계산
    for(let i=0; i<=maxY; i++) {
        for(let j=1; j<=maxX; j++) {
            sum[j][i] += sum[j-1][i]
        }
    }
    for(let i=0; i<=maxX; i++) {
        for(let j=1; j<=maxY; j++) {
            sum[i][j] += sum[i][j-1]
        }
    }
    
    for(let i=0; i<=maxX; i++) {
        for(let j=0; j<=maxY; j++) {
            answer += board[i][j] + sum[i][j] > 0 ? 1 : 0
        }
    }
    return answer;
}