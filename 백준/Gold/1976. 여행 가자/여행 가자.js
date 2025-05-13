const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
});

let input = [];

readline.on('line', function(line) {
    input.push(line)
}).on('close', function(){
    const n = Number(input[0])
    const m = Number(input[1])

    const graph = Array.from(new Array(n+1),()=> [])
    const parents = Array.from(new Array(n+1),(_,k)=> k)
    for(let i=1; i<=n; i++) {
        graph[i] = input[i+1].split(" ").map(el => Number(el))
    }

    const union = (pa,pb) => {
        if(pa < pb) {
            parents[pa] = pb            
        } else {
            parents[pb] = pa            
        }
    }
    
    const find = (a) => {
        if(parents[a] !== a) {
            const parent = find(parents[a])
            parents[a] = parent
        }
        return parents[a]
    } 

    for(let i = 1; i<=n; i++) {
        for(let j=0; j<graph[i].length; j++) {
            // 연결
            if(graph[i][j] ===1) {
                const pa = find(i)
                const pb = find(j+1)

                union(pa,pb)
            }
        }
    }
    
    const orders = input.at(-1).split(" ").map(el => Number(el))

    let can = true
    let curCity = orders[0]
    for(let i=1; i<m; i++) {
        const pa = find(curCity) 
        const pb = find(orders[i])

        if(pa !==pb) {
            can = false
            break
        }
        curCity = orders[i]
    }

    console.log(can ? "YES" : "NO")
    process.exit()
})