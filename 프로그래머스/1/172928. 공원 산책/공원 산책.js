function solution(park, routes) {
    let answer = [0,0];
    const dx = [-1,1,0,0]
    const dy = [0,0,-1,1]
    const opIdx = {
        'N': 0,
        'S': 1,
        'W': 2,
        'E': 3
    }
    
    park = park.map(el => el.split(""))
    
    for(let i=0; i<park.length; i++) {
        for(let j=0; j<park[0].length; j++) {
            if(park[i][j] === "S") {
                answer[0] = i
                answer[1] = j
                park[i][j] = "O"
            }
        }
    }
    
    for(const route of routes) {
        const [op,n] = route.split(" ")
        let isPossible = true
        let x = answer[0]
        let y = answer[1]
        for(let i=0; i<n; i++) {
            const nx = x + dx[opIdx[op]]
            const ny = y + dy[opIdx[op]]
            
            if(park[nx]?.[ny] !== "O") {
                isPossible = false
                break
            } 
            x = nx
            y = ny
        }
        if(isPossible) {
            answer = [x,y]
        }
    }
    
    return answer;
}