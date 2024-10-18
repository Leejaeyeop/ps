// 발판은 이동시 사라진다.
// 이동 상하좌우
// 상하좌우 발판 없음 or 보드 밖 ->패배
// 두 캐릭터 겹쳐 있고 이동시 
// a 먼저 시작
// 이동 가능시 이동 한다 -> 자살 x

let h = 0
let w = 0
const dx = [0,-1,0,1]
const dy = [1,0,-1,0]
// 백트래킹 
function dfs (turn, board, aloc, bloc, cnt) {  
    const [ax,ay] = aloc
    const [bx,by] = bloc
    
    let x = 0, y = 0
    // a 턴     
    if(turn === 1) {
        x = ax
        y = ay
    } else { // b 턴
        x = bx
        y = by
    }
    
    // 다음 턴 출발시 내 발판이 비어 있다!!
    if (board[x][y] === 0) {
        return [1,cnt]
    }
    
    
    let winner = []
    let looser = []
    let canMove = false
    for(let i=0; i<4; i++) {
        let nx = x + dx[i]
        let ny = y + dy[i]

        if(nx > -1 && nx< h && ny > -1 && ny < w && board[nx][ny] === 1) {
            canMove = true
            let res = null
            // 현재 발판은 없앤다.
            board[x][y] = 0
            if (turn === 1) {
               res = dfs((-1) * turn, board, [nx,ny], bloc, cnt+ 1)
            } else {
               res = dfs((-1) * turn, board, aloc, [nx,ny], cnt+ 1)    
            }
            // 현재 발판 복귀          
            board[x][y] = 1
            
            let [isWinner] = res
            
            if(isWinner > 0) {
                winner.push(res[1])
            } else {
                looser.push(res[1])
            }
        }
    }
    if(canMove) {
        if(winner.length > 0) {
            return [0, Math.min(...winner)]
        } else {
            return [1, Math.max(...looser)]
        }
    } 
    
    // 이동 불가 -> 상대방 승리
    return [1, cnt]
}

function solution(board, aloc, bloc) {
    h = board.length
    w = board[0].length
    // 첫번째 이동     
    return dfs(1, board, aloc, bloc, 0)[1]
}