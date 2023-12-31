const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
});

let input = [];

readline.on('line', function(line) {
    input.push(line)
}).on('close', function(){
    const n = Number(input[0])
    const graph = new Array(n+1).fill(0)
    let answer = new Set()
    for(let i=1; i<=n; i++) {
        graph[i] = Number(input[i])
    }
    
    const isCycle = (begin,idx,set) => {
        set.add(idx)
        const value = graph[idx]
        if(!set.has(value)) {
            return isCycle(begin,value,set)
            // 사이클 발생 + 자기 자신 복귀
        } else if(value === begin){ 
            return true
        } else return false
    }

    for(let i=1; i<=n; i++) {
        const set = new Set()

        if(isCycle(i,i,set)) {
            answer.add(...set)
        }
    }
    
    answer = [...answer].sort((a,b) => a-b)
    console.log(answer.length)
    for(let i=0; i<answer.length; i++) {
        console.log(answer[i])
    }

    process.exit()
})