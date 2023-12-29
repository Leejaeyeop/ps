const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
});

let input = [];

readline.on('line', function(line) {
    input.push(line)
}).on('close', function(){
    const [n,m] = input[0].split(" ").map(el => Number(el))
    const balls = new Array(n).fill(0)
    for(let i=0; i<m; i++) {
        const [a,b,k] = input[i+1].split(" ").map(el => Number(el))

        for(let j=a-1; j<b; j++) {
            balls[j] = k
        }
    }
    console.log(balls.join(" "))
    process.exit()
})