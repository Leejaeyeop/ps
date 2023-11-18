// https://www.acmicpc.net/problem/21608
// 비어있는 칸 중에서
// 좋아하는 학생과 가장 많이 인접
// 가장 작은 행, 가장 작은 열
// 인전한 칸  -> 상하좌우
// 1- 2- 3
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
});

let input = [];

readline.on('line', function(line) {
    input.push(line)
}).on('close', function(){
    const n = Number(input[0])
    const graph = Array.from(Array(n+1),()=> new Array(n+1).fill(0))
    const infos = Array.from(Array(n+1),()=> [])
    let orders = []
    const dx = [0,1,0,-1]
    const dy = [1,0,-1,0]

    for(let i=1; i<=(n*n); i++) {
        const info = input[i].split(" ").map((el)=> Number(el))
        orders.push(info[0])
        infos[info[0]] = info.slice(1)
    }
    
    function getConditions(student) {
        const flavors = infos[student]
        let sections = []
        for(let i=1; i<=n; i++) {
            for(let j=1; j<=n; j++) {
                if(graph[i][j] > 0) continue
                // [인접 좋아하는 학생 수, 인접 비어있는 칸 수, 행, 열]
                let section = [0,0,i,j]
                for(let k=0; k<4; k++) {
                    nx = i + dx[k]
                    ny = j + dy[k]

                    if(0<nx && nx<=n && 0<ny && ny<=n) {
                        if(graph[nx][ny] === 0) {
                            section[1] ++ 
                        } else if(flavors.find((el) => el === graph[nx][ny])) {
                            section[0] ++ 
                        } 
                    }
                }
                sections.push(section)
            }
        }
        return sections
    }

    for(let order of orders) {
        let sections = getConditions(order)

        sections.sort((a,b)=> {
            let res = b[0]-a[0]
            if(res ===0) {
                res = b[1] - a[1]
            }
            if(res ===0) {
                res = a[2] - b[2]
            }
            if(res ===0) {
                res = a[3] - b[3]
            }
            return res
        })
        graph[sections[0][2]][sections[0][3]] = order
    }
    
    let answer = 0
    for(let i=1; i<=n; i++) {
        for(let j=1; j<=n; j++) {
            let cnt = 0
            const flavors = infos[graph[i][j]]
            for(let k=0; k<4; k++) {
                nx = i + dx[k]
                ny = j + dy[k]

                if(0<nx && nx<=n && 0<ny && ny<=n) {
                    if(flavors.find((el) => el === graph[nx][ny])) {
                        cnt ++ 
                    } 
                }
            }

            if(cnt === 1) {
                answer ++
            } else if(cnt === 2) {
                answer+=10
            } else if(cnt===3) {
                answer+=100
            } else if(cnt===4) {
                answer+=1000
            }   
        }
    }
    console.log(answer)
    process.exit()
})