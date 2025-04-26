function solution(maps) {
    let answer = 0;
    const n = maps.length
    const m = maps[0].length
    const dx = [0,-1,1,0]
    const dy = [1,0,0,-1]
    
    let start = []
    for(let i=0; i<n; i++) {
        for(let j=0; j<m; j++) {
            if(maps[i][j] === "S") {
                start = [i,j]
            }
        }
    }
    
    const bfs = (visited,stack,target) => {
        const nStack = []
        let cnt = 0
        while(stack.length >0) {
            while(stack.length >0) {
                const [x,y] = stack.pop()
            
                if(maps[x][y] === target) {
                    start = [x,y]
                    return cnt
                }
                
                for(let i=0; i<4; i++) {
                    const nx = x + dx[i]
                    const ny = y + dy[i]
                    
                    if(maps[nx]?.[ny] && !visited[nx][ny] && maps[nx][ny] !== "X") {
                        visited[nx][ny] = true
                        nStack.push([nx,ny])
                    }
                }
            }
            stack = [...nStack]
            nStack.length = 0
            cnt++
        }
        return -Infinity
    }
    
    answer+= bfs(Array.from({length:n}, ()=> Array.from({length:m},()=> false)),[[...start]],"L")
    answer+= bfs(Array.from({length:n}, ()=> Array.from({length:m},()=> false)),[[...start]],"E")
    
    return answer < 0 ? -1 : answer;
}