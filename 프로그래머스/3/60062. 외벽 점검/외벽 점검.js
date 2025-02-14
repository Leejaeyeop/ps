// 1 시간 -> 점검시간
// 시계 | 반시계 방향 으로 이동
function solution(n, weak, dist) {
    var answer = Infinity;
    
    const clock = Array.from({length:weak.length},()=>0)
    
    for(let i=0; i<weak.length-1; i++) {
        clock[i] = weak[i+1] - weak[i]
    }
    clock[clock.length-1] = n - weak[clock.length-1] + weak[0]

    const goPoint = (idx,visited,dist) => {
        // 이동 비용이 존재 할때까지
        while(dist >= 0 && !visited[idx]) {
            visited[idx] = true
        
            // 다음으로 이동
            dist -= clock[idx]
            idx+=1
            if(idx === clock.length) {
               idx=0
            }
        }
        return 
    }
    
    const checkFull = (visited) => {
        for(let i=0; i<visited.length; i++) {
            if(!visited[i]) return false
        }
        return true
    }
    
    const check = (idx,visited) => {
        if(idx===dist.length || idx +1 > answer) return
        // 고쳐지지 않은 weak 확인 
        for(let i=0; i<visited.length; i++) {
            if(visited[i]) continue
                        
            // 해당 weak 포인트 투입
            // 시계 방향
            let nVisited = [...visited]
            goPoint(i,nVisited,dist[idx])
            // 전부 점검 확인
            if(checkFull(nVisited)) {
               answer = Math.min(answer,idx+1)
               return 
            }
            check(idx+1,nVisited)
        }
    }
    
    // 이동거리가 긴 순으로 
    dist.sort((a,b) => b-a) 
    check(0,Array.from({length:weak.length},()=>false))
    
    return answer === Infinity ? -1 : answer;
}