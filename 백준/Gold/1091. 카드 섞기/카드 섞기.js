// https://www.acmicpc.net/problem/1091
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
});

let input = [];

// 플레이어 3명
readline.on('line', function(line) {
    input.push(line)
}).on('close', function(){
    const n = Number(input[0])
    // 현재 카드에 매칭이 되어야할 플레이어
    const p = input[1].split(" ").map(el => Number(el))
    const s = input[2].split(" ").map(el => Number(el))

    // 인덱스 갱신
    let cards = Array.from(Array(n), (_,i) => i)
    let cnt = 0
    while(true) {
        let end = true
        for(let i=0; i<n; i++) {
            if(p[cards[i]] !== (i % 3)) {
                end = false
                break
            }
        }
        if(end) {
            break
        }

        cnt ++
        let nCards = Array(n).fill(0)
        for(let i=0; i<n; i++) {
            nCards[s[i]] = cards[i]
        } 
        
        
        let impossible = true
        // 검사
        for(let i=0; i<n; i++) {
            if(i !== nCards[i]) {
                impossible = false
            }
        }
        if(impossible) {
            cnt = -1
            break
        }
        cards = nCards
    }
    console.log(cnt)
    process.exit()
})