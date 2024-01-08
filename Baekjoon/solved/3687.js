const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
});

let input = [];

readline.on('line', function(line) {
    input.push(line)
}).on('close', function(){
    const t = Number(input[0])
    // d = [남은 성냥갯수] = 숫자.
    let dp = Array.from(new Array(101), ()=> Infinity)
	dp[2] = 1
    dp[3] = 7
    dp[4] = 4
    dp[5] = 2
    dp[6] = 6
    dp[7] = 8
    dp[8] = 10

    for(let num=9; num<101; num++) {
        
    }


    for(let i=0; i<t; i++) {
        const n = Number(input[i+1])
       
    }

    process.exit()
})