/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function(board, word) {
    const m = board.length
    const n = board[0].length

    const dx = [1,-1,0,0]
    const dy = [0,0,1,-1]
    // [m][n]
    const visited = Array.from({length:m}, ()=> new Array(n).fill(false))

    const dfs = (x,y,idx,visited) => {
        if(idx === word.length-1) {
            return true
        }

        visited[x][y] = true
        for(let i=0; i<4; i++) { 
            const nx = x + dx[i]
            const ny = y + dy[i]
            if(nx >=0 && nx< m && ny >=0 && ny <n && !visited[nx][ny] && board[nx][ny] === word.charAt(idx+1)) {
                if(dfs(nx,ny,idx+1,visited)) {
                    return true
                }
            }
        }
        visited[x][y] = false
        return false
    }

    for(let i=0; i<m; i++) {
        for(let j=0; j<n; j++) {
            // 시작
            if(board[i][j] === word.charAt(0) && dfs(i,j,0,visited)) {
                return true
            }
        }
    }

    return false
};