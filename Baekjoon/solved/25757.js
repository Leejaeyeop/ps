const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
});

let input = [];

readline.on('line', function(line) {
    input.push(line)
}).on('close', function(){
    const set = new Set()
    const [n,game] = input[0].split(" ")

    for(let i=0; i<n; i++) {
        set.add(input[i+1])
    }
    if(game === "Y") {
        console.log(set.size)
    } else if(game === "F") {
        console.log(Math.floor(set.size/2))
    } else {
        console.log(Math.floor(set.size/3))
    }

})