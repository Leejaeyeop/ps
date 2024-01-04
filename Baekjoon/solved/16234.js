const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
});

let input = [];

readline.on('line', function(line) {
    input.push(line)
}).on('close', function(){
    const [n,l,r] = input[0].split(" ").map(el => Number(el))
    const graph = Array.from(new Array(n), ()=> new Array(n).fill(0))
    const dx = [0,1,0,-1]
    const dy = [1,0,-1,0]

    for(let i=0; i<n; i++) {
        graph[i] = input[i+1].split(" ").map(el => Number(el))
    }

    let sum = 0
    const dfs = (x,y,visited,infos) => {
        visited[x][y] = true
        infos.push([x,y])
        sum += graph[x][y]
        for(let i=0; i<4; i++) {
            let nx = x + dx[i]
            let ny = y + dy[i]

            if(-1<nx && nx<n && -1<ny && ny<n && !visited[nx][ny]) {
                let diff = Math.abs(graph[x][y] - graph[nx][ny])
                if(diff>=l && diff<=r) {
                    dfs(nx,ny,visited,infos)
                }
            }
        }
    }

    let flag = true
    let answer = 0
    while(flag) {
        flag = false
        visited =  Array.from(new Array(n), ()=> new Array(n).fill(false))

        for(let i=0; i<n; i++) {
            for(let j=0; j<n; j++) {
                if(!visited[i][j]) {
                    sum = 0
                    const infos = []
                    dfs(i,j,visited,infos)

                    if(infos.length > 1) {
                        flag = true
                        const value = Math.floor(sum / infos.length)

                        for(const [x,y] of infos) {
                            graph[x][y] = value
                        }
                    }
                }
            }
        }

        if(flag) {
            answer++
        }
    }

    console.log(answer)
    process.exit()
})