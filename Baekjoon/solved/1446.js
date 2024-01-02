// https://www.acmicpc.net/problem/1446
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
});

let input = [];

readline.on('line', function(line) {
    input.push(line)
}).on('close', function(){
    const [n,d] = input[0].split(" ").map(el => Number(el))
    const cost = new Array(d+1).fill(Infinity)
    const shortcut = {} 

    for (let i=1; i<=n; i++) {
        const [s,e,c] = input[i].split(" ").map(el => Number(el))

        if(shortcut[s]) {
            shortcut[s].push([e,c])
        } else {
            shortcut[s] = [[e,c]]
        }
    }

    const dfs = (dist,curCost) => {
        if(dist > d || cost[dist] <= curCost) {
            return 
        }

        // 새로운 비용 갱신
        cost[dist] = curCost
        if(shortcut[dist]) {
            for(const [e,c] of shortcut[dist]) {
                dfs(e,curCost + c) 
            }
        }

        dfs(dist+1,curCost+1)
    }

    if(d > 0) {
        dfs(0,0)
    } else {
        cost[0] = 0
    }
    console.log(cost[d])
    process.exit()
})