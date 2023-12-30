const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
});

let input = [];

readline.on('line', function(line) {
    input.push(line)
}).on('close', function(){
    const [a,b] = input[0].split(" ")
    const reverse = (str) => {
        return Number(str.split("").reverse().join(""))
    }
    const answer = reverse((reverse(a) + reverse(b)).toString())

    console.log(answer)
    process.exit()
})