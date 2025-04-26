function solution(x, y, n) {
    let answer = -1;
    const visited = Array.from({length:y+1},() => false)
    
    const bfs = () => {
        let stack = [x]
        let cnt = 0
        while(stack.length > 0) {
           const nStack = []
           while(stack.length > 0) {
                const num = stack.pop()
                if(num === y) {
                    return cnt
                }
               const nNums = [num*2,num*3,num+n]
               
               for(let i=0; i<3; i++) {
                    if(!visited[nNums[i]] && nNums[i]<=y) {
                            nStack.push(nNums[i])
                            visited[nNums[i]] = true
                     }                   
               }
               
           }
           stack = nStack
           cnt++
        }
        
        return -1
        
    }
    
    return bfs();
}