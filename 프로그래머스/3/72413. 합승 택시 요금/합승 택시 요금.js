// a와 b둘다 도착해야 한다.
function solution(n, s, a, b, fares) {
    var answer = Infinity;
    
    // 최단거리
    const dist = Array.from(Array(n+1), (_,i) => Array.from(Array(n+1), (_,j) => i === j ? 0 : Infinity))
    const graph = Array.from(Array(n+1), () => [])
    for(let fare of fares) {
        const [c,d,f] = fare
        dist[c][d] = f
        dist[d][c] = f
        
        graph[c].push([d,f])
        graph[d].push([c,f])
        
    }
    
    function floydWarshall() {
        for(let k=1; k<=n; k++) {
            for(let i=1; i<=n; i++) {
                for(let j=1; j<=n; j++) {
                    if(dist[i][k] + dist[k][j] < dist[i][j]) {
                        dist[i][j] = dist[i][k] + dist[k][j]
                    }
                }
            }
        }
    }
    floydWarshall()
    
    for(let i=1; i<=n; i++) {
        answer = Math.min(answer, dist[s][i] + dist[i][a] + dist[i][b])
    }

    return answer;
}