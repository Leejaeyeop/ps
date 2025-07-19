const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
});

let input = [];

readline.on('line', function(line) {
    input.push(line)
}).on('close', function(){
    const n = Number(input[0]), m =  Number(input[1]), x = input[2].split(" ").map(el => Number(el))

    // 불빛 체크
    const check = (h) => {
        let lightIdx = 0
        let curLight = x[lightIdx]

        // 현 위치에서 다음 위치로 이동
        for(let i=0; i<n; i++) {
            while(!(curLight - h <= i && i < curLight + h)) {
                lightIdx ++

                if(lightIdx === m) {
                    return false
                } else {
                    curLight = x[lightIdx]
                }
            } 
        }
        return true
    }

    // parameter search
    let begin = 0
    let end = n
    let answer = 0
    while(begin <= end) {
        let mid = Math.floor((begin + end) / 2)

        if(!check(mid)) {
            begin = mid + 1
        } else {
            end = mid - 1
            answer = mid
        }
    }
    
    console.log(answer)
    
    process.exit()
})