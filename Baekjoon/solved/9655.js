const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
});

let input = "";

readline.on('line', function(line) {
    input = line
}).on('close', function(){
    const n = Number(input)

    let answer = n % 2 === 1? "SK" : "CY"

    console.log(answer)
})