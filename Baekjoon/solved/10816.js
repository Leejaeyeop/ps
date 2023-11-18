// https://www.acmicpc.net/problem/10816
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
});

let input = [];

readline.on('line', function(line) {
    input.push(line)
}).on('close', function(){
    const n = input[0]
    let cards = input[1].split(" ").map(el => Number(el))
    const finds = input[3].split(" ").map(el => Number(el))
    let answer = []
    cards = cards.sort((a,b) => a-b)

    // 자기랑 같아도 위로 올리면 됨
    function binarySearch(target,isMin) {
        let begin = 0
        let end = n-1
        let idx = -1
        while(begin<=end) {
            const mid = Math.floor((begin + end)/2)
            const value = cards[mid]
            if(value<target) {
                begin = mid +1
            } else if(value>target){
                end = mid -1
            } else {
                idx = mid
                if(isMin) {
                    end = mid -1
                } else {
                    begin = mid + 1
                }
            }
        }
        return idx
    }

    for(const find of finds) {
        let minIdx = binarySearch(find,true)
        if(minIdx === -1) {
            answer.push(0)
        } else {
            let maxIdx = binarySearch(find,false)
            answer.push(maxIdx - minIdx +1)
        }
    }
    console.log(answer.join(" "))
    process.exit()
})