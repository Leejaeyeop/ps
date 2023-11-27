const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
});

let input = "";

readline.on('line', function(line) {
    input = line
}).on('close', function(){
    const n = Number(input)

    let cur = 1
    // 방 갯수
    let num = 0
    while(n > cur) {
        num ++
        cur += (num-1)*6
    }

    console.log(num === 0 ? 1 : num)
})