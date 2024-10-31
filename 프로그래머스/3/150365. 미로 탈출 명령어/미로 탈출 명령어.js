function solution(n, m, x, y, r, c, k) {
    const dx = [1,0,0,-1]
    const dy = [0,-1,1,0]
    const chars = ["d","l","r","u"] 
    const answer = new Array(k).fill("")
    const d = Array.from(new Array(n+1),()=> Array.from(new Array(m+1),()=> new Array(k),()=>false))
    
    function dfs(x,y,cnt) {
        if(cnt === k) {
            if(x === r && y ===c) {
                return true
            } else {
                return false
            }
        }
        
        if(d[x][y][cnt]) {
            return false
        }
        
        for(let i=0; i<4; i++) {
            const nx = x + dx[i]
            const ny = y + dy[i]
            answer[cnt] = chars[i]
            if(1<=nx && nx <=n && 1<=ny && ny<=m) {
                if(dfs(nx,ny,cnt+1)) {
                    return true
                }
            }
        }
        d[x][y][cnt]= true
        return false
    }
    
    if(dfs(x,y,0)) {
        return answer.join("")
    } else {
        return "impossible"
    }
}