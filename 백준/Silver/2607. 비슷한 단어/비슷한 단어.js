const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
});

let input = [];

readline.on('line', function(line) {
    input.push(line)
}).on('close', function(){ //이 안에 솔루션 코드 작성
    const n = Number(input[0])
    const str = input[1]
    let word = {}

    str.split("").forEach(v => {
        if(word[v]) {
            word[v] ++
        } else {
            word[v] = 1
        }
    })
    
    const strs = input.slice(2)
    let answer = 0
    strs.forEach(v => {
        let _word = {...word}
        v.split("").forEach(_v => {
            if(_word[_v]) {
                _word[_v] --
            } else {
                _word[_v] = -1
            }
        })

        let sum = 0
        for(let key in _word) {
            sum += Math.abs(_word[key])
        }

        // 같은 긓자수
        if(v.length === str.length) {
            if(sum <= 2 ) {
                answer ++
            }
        } else if(sum <= 1) {
            answer ++
        }

    })

    console.log(answer)
    process.exit();
});