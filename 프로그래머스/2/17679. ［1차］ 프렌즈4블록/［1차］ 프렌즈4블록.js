function solution(m, n, board) {
    var answer = 0;
    // 오,아래,아래 대각선 확인
    const dx = [0,1,1]
    const dy = [1,0,1]
    
    board = board.map(el => el.split(""))
    
    // 삭제
    const deleteBlock = (blocksList) => {
        for(const blocks of blocksList) {
            for(const [x,y] of blocks) {
                if(board[x][y]) {
                    board[x][y] = null 
                    answer++
                }
            }
        }
    }
        
    // 삭제 후 블록 당기기 -> 아래에서 부터 위로
    const pullBlock = () => {
        for(let i=0; i<n; i++) {
            for(let j=m-1; j>-1; j--) {
                let k = j
                while(k<m-1 && board[k][i] && !board[k+1][i]) {
                    [board[k][i],board[k+1][i]] = [board[k+1][i],board[k][i]]
                    k++
                }
            }
        }
    }
    
    // 삭제할 목록 확인
    const check = () => {
        const blocks = []
        
        for(let i=0; i<m; i++) {
            for(let j=0; j<n; j++) {
                if(!board[i][j]) continue
                
                const curBlock = board[i][j]
                const curBlocks = [[i,j]]
                
                for(let k=0; k<3; k++) {
                    const nx = i + dx[k]
                    const ny = j + dy[k]
                    
                    if(nx >= 0 && nx <m && ny>=0 && ny<n && board[nx][ny] === curBlock) {
                       curBlocks.push([nx,ny])
                    }
                }
                
                if(curBlocks.length === 4) {
                    blocks.push(curBlocks)                
                }
            }
        }
        if(blocks.length >0) {
            deleteBlock(blocks)
            pullBlock()
            check()
        }
    }
    
    check()

    
    return answer;
}