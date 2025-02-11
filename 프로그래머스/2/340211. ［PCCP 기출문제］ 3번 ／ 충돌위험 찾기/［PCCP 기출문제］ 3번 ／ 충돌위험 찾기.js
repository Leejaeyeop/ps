// x / y
// 최단경로
// 로봇이 만나는 횟수
// bfs
function solution(points, routes) {
    var answer = 0;
    const m = routes[0].length
    let stack = []
    
    const bfs = () => {
        // [101][101]
        const visited = {}
        const nstack = []
        
        while(stack.length>0) {
            let [x,y,rIdx,tIdx] = stack.pop()
            // traget Point Index
            const tPoint = routes[rIdx][tIdx] - 1
            const [tx,ty] = points[tPoint]
            const curPos = x + "," + y
            
            if(x === tx && y === ty){ // 도착한 상태
                tIdx+=1
                // 갈곳이 없다.
                if(tIdx === m) {
                    // 충돌 체크
                    if(visited[curPos] === 1) {
                        answer +=1
                    }
                    if(!visited[curPos]) visited[curPos] = 0
                    visited[curPos] +=1
                    
                    continue
                }
                // 이번 초에 재이동
                stack.push([x,y,rIdx,tIdx])
                continue
            }
            
            // 충돌 체크
            if(visited[curPos] === 1) {
                answer +=1
            }
            if(!visited[curPos]) visited[curPos] = 0
            visited[curPos] +=1
            
            if(x !== tx) { // x로 이동(다음)
                if(x < tx) {
                    x +=1
                } else {
                    x -=1
                }
            } else if(y !== ty) { // y로 이동(다음)
                if(y < ty) {
                    y +=1
                } else {
                    y -=1
                }
            } 
            
            nstack.push([x,y,rIdx,tIdx])
        }
        
        if(nstack.length>0) {
            stack = [...nstack]
        }
    }
    
    for(let i=0; i<routes.length; i++) {
        const route = routes[i]
        const startPoint = route[0]-1
        const [x,y] = points[startPoint]
        stack.push([x,y,i,1])
    }
    while(stack.length>0) {
        bfs(stack)
    }
    
    return answer;
}