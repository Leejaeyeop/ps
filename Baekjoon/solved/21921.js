// https://www.acmicpc.net/problem/21921
// slide 문제
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
});

let input = [];

readline.on('line', function(line) {
    input.push(line)
}).on('close', function(){
    const [n,x] = input[0].split(" ").map(el => Number(el))
    const visitor = input[1].split(" ").map(el => Number(el))

    let max = 0
    for(let i=0; i<x; i++) {
        max+=visitor[i]
    }

    let sum = max
    let cnt = 1 
    let left = 0
    let right = x-1
    for(let i=x; i<n; i++) {
        sum -= visitor[left++]
        sum += visitor[++right]

        if(sum>max) {
            max = sum
            cnt = 1
        } else if (sum === max) {
            cnt ++
        }
    }

    if(max === 0) {
        console.log("SAD")
    } else {
        console.log(max)
        console.log(cnt)
    }
    
    
})