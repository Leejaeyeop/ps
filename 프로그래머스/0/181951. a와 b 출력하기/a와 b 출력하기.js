const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input = line.split(' ');
}).on('close', function () {
    console.log(["a","=",input[0]].join(" ") + '\n' + ["b","=",input[1]].join(" "))
});