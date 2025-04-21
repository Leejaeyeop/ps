// https://www.acmicpc.net/problem/1311
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
});

let input = [];

readline.on('line', function(line) {
    input.push(line)
}).on('close', function(){
    const n = Number(input[0])
    // [조합][순서]
    const d = Array.from(new Array(1 << n), () => new Array(n).fill(-1))
    const grpah = []
    
    const dp = (cnt,bit) => {

        if(cnt === n) {
            return 0
        }

        if(d[bit][cnt] > -1) {
            return d[bit][cnt]
        }

        d[bit][cnt] = Infinity
        for(let i=0; i<n; i++) {
            if((bit & (1 << i)) === 0) {
                d[bit][cnt] = Math.min(d[bit][cnt],grpah[cnt][i] + dp(cnt+1 ,bit | (1<<i)))
            }
        }   

        return d[bit][cnt]
    }

    // 완탐은 안됨
    for(let i=1; i<=n; i++) {
        grpah.push(input[i].split(" ").map(el => Number(el)))
    }

    console.log(dp(0,0))

    process.exit()
})