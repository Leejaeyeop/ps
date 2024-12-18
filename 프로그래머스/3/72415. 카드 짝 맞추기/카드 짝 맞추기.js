// ctrl 가장 가까운 카드 텔레포트, 없으면 마지막 칸
// 방향키 이동 -> 빈공간 없으면 이동 x
// visited + bfs (먼저 도착)
function solution(board, r, c) {
    let goal = 0;
    const dx = [0,1,0,-1]
    const dy = [1,0,-1,0]
    
    // command -> 방향키 4개 + cntl 4개 + enter: 9
    // visited[r][c][사라진 카드들][현재 enter로 선택된 카드]
    const visited = Array.from({length: 4},()=>Array.from({length: 4},()=> Array.from({length: (1<<7)},()=>Array.from({length: 13},()=> false))))
    
    let cards = Array.from({length:4},()=>Array(4).fill(0))
    let cardNum = 1
    for(let i=0; i<4; i++) {
        for(let j=0; j<4; j++) {
            if(board[i][j] >0) {
                goal +=1
                cards[i][j] = cardNum++
            }
        }
    }

    goal = Math.floor(goal/2)
    function bfs(stack,cnt) {
        let nstack = []
        while(stack.length>0) {
            let [x,y,deleted,selected,pare] = stack.pop() 
            // 상하좌우
            for(let i=0; i<4; i++) {
                const nx = x +dx[i]
                const ny = y +dy[i]
                
                if(nx < 4 && nx >=0 && ny <4 && ny>=0 && !visited[nx][ny][deleted][selected]) {
                    visited[nx][ny][deleted][selected] = true
                    nstack.push([nx,ny,deleted,selected,pare])
                }
            }
            
            // ctrl
            for(let i=0; i<4; i++) {
                let nx = x
                let ny = y
                while(true) {
                    nx += dx[i]
                    ny += dy[i]
                    
                    if(nx<0) {
                        nx = 0
                        break
                    } else if(nx === 4) {
                        nx = 3
                        break
                    } else if(ny<0) {
                        ny = 0
                        break  
                    } else if(ny === 4) {
                        ny = 3
                        break  
                    } else if(board[nx][ny] > 0 && (deleted & (1<<board[nx][ny])) === 0) {
                        break
                    }
                }
            
                if(!visited[nx][ny][deleted][selected]) {
                    visited[nx][ny][deleted][selected] = true
                    nstack.push([nx,ny,deleted,selected,pare])
                }
            }
        
            // enter
            // 지금 위치에 카드가 있다.
            if(board[x][y] > 0 && (deleted & (1<<board[x][y])) === 0) {
                // 이미 enter를 했었음
                if(selected>0) {
                    // enter 위치가 이전과 다름 -> 뒤집기
                    if(selected !== cards[x][y]) {
                        // 제거
                        if(pare === board[x][y]) {
                           deleted |= (1<<pare)
                        }
                        
                        let delCnt = 0
                        for(let i=1; i<7; i++) {
                            if((deleted & (1<<i))>0) {
                               delCnt ++ 
                            }
                        }
                        if(delCnt === goal) {
                            return cnt
                        }
                        
                        nstack.push([x,y,deleted,0,0])
                    }
                }
                else {
                    nstack.push([x,y,deleted,cards[x][y],board[x][y]])
                }
            } 
        }

        return bfs(nstack,cnt+1)
    }

    // x,y,사라진카드,enter로 선택된 카드,해당 카드의 짝
    let stack = [[r,c,0,0,0]]
    return bfs(stack,1);
}