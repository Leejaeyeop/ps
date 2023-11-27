const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
});

let input = [];

readline.on('line', function(line) {
    input.push(line)
}).on('close', function(){
    const p = Number(input[0])

    let idx = 1
    for(let i=0; i<p; i++) {
        let answer = 0
        let arr = input[idx++].split(" ").map(el => Number(el))
        const t = arr[0]
        const heights = arr.slice(1)

        for(let i =0; i<20; i++) {
            const curH = heights[i]
            let cnt = 0
            for(let j=i+1; j<20; j++) {
                if(curH > heights[j]) {
                    cnt++
                } 
            }
            answer += cnt
        }

        console.log(t, answer)
    }

})