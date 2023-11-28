const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
});

let input = [];

// 금, 은, 동
readline.on('line', function(line) {
    input.push(line)
}).on('close', function(){
    const [n,k] = input[0].split(" ").map(el => Number(el))
    const infos = []
    for(let i=0; i<n; i++) {
        infos.push(input[i+1].split(" ").map(el => Number(el)))
    }

    const compare = (a,b) => {
        let res = b[1] - a[1]
        if(res ===0 ) {
            res = b[2] - a[2]
        }
        if(res ===0 ) {
            res = b[3] - a[3]
        }
        return res
    }
    infos.sort(compare)

    let ranks = {}
    let rank = 1
    let curCnt = 1

    ranks[infos[0][0]] = 1
    for(let i=1; i<n; i++) {
        const info = infos[i]
        const preInfo = infos[i-1]

        if(compare(info,preInfo) === 0) {
            curCnt ++
        } else {
            rank += curCnt
            curCnt = 1
        }

        ranks[info[0]] = rank
    }

    console.log(ranks[k])

    process.exit()
})