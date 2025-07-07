// https://www.acmicpc.net/problem/4195

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
});

let input = [];

readline.on('line', function(line) {
    input.push(line)
}).on('close', function(){
    let t = Number(input[0])
    let idx = 1
    
    const find = (a,parents) => {
        if(parents[a].parent === a) {
            return a
        } else {
            let nparent = find(parents[a].parent,parents)
            parents[a].parent = nparent
            return nparent
        }
    }

    while(t-- > 0) {
        let f = input[idx++]
        let parents = {}

        for(let i=0; i<f; i++) {
            const [a,b] = input[idx++].split(" ")
            let childNum = 0
            // 둘다 부모가 있다.
            if(parents[a] && parents[b]) {
                const pa = find(a,parents)
                const pb = find(b,parents)
                
                // 둘다 다른 부모
                if(pa !== pb) {
                    parents[pb].parent = pa
                    parents[pa].childNum += parents[pb].childNum
                } 

                childNum = parents[pa].childNum

            } else if(parents[a]) {
                const pa = find(a,parents)

                parents[b] = {
                    parent: pa,
                }

                parents[pa].childNum += 1
                childNum = parents[pa].childNum
            } else if(parents[b]) {
                const pb = find(b,parents)

                parents[a] = {
                    parent: pb,
                }

                parents[pb].childNum += 1
                childNum = parents[pb].childNum
            } else {
                parents[a] = {
                    parent: a,
                    childNum: 2
                }
                parents[b] = {
                    parent: a,
                }

                childNum = parents[a].childNum
            }
            console.log(childNum)
        }

    }
    process.exit()
})