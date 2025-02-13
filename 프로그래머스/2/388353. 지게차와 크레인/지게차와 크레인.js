function solution(storage, requests) {
    var answer = 0;
    
    const dx = [0,1,-1,0]
    const dy = [1,0,0,-1]
    
    const n = storage.length
    const m = storage[0].length
    
    const arr = []
    const isBorder = Array.from({length:n},()=> Array.from({length:m},()=>false))
    for(const store of storage) {
        arr.push(store.split(""))
    }
    for(let i=0; i<n; i++) {
        isBorder[i][0] = true
        isBorder[i][m-1] = true
    }
    for(let i=0; i<m; i++) {
        isBorder[0][i] = true
        isBorder[n-1][i] = true
    }
    
    for(const req of requests) {
        const [container,isDouble] = req.split("")
        const deleteList = []
        
        for(let i=0; i<n; i++) {
            for(let j=0; j<m; j++) {
                if(arr[i][j] === container && (isDouble || isBorder[i][j])) {
                    deleteList.push([i,j])
                }
            }
        }
        
        for(const [x,y] of deleteList) {
            arr[x][y] = null
        }
        
        const bfs = (stack) => {
            while(stack.length>0) {
                const [x,y] = stack.pop()
                if(arr[x][y]) continue
                
                for(let i=0; i<4; i++) {
                    const nx = x+dx[i]
                    const ny = y+dy[i]
                    
                    if(nx>-1 && nx<n && ny>-1 && ny<m && !isBorder[nx][ny]) {
                        stack.push([nx,ny])
                        isBorder[nx][ny] = true
                    }
                }
            }
             
        }
        
        const stack = []
        for(let i=0; i<n; i++) {
            for(let j=0; j<m; j++) {
                if(isBorder[i][j]) {
                    stack.push([i,j])
                }
            }
        }
        bfs(stack)

        
    }
    
    for(let i=0; i<n; i++) {
        for(let j=0; j<m; j++) {
            if(arr[i][j]) {
                answer+=1
            }
        }
    }
    
    return answer;
}