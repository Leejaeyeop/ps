// https://www.acmicpc.net/problem/1918
// 연산자의 우선순위에 따 묶는다
// 연산자를 괄호 맨 오른쪽 부분으로 옮겨준다. 
// stack을 사용해 보자.
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
});

let input = "";

readline.on('line', function(line) {
    input = line
}).on('close', function(){
    const infix = input.split("")

    // 연산 우선순위, 이전 연산자가 현재 연산자 보다,
    // 같다 -> stack에 넣는다.
    // 우선이다. -> stack 에서 방출한다.
    // 늦는다. -> stack에 넣는다.

    // 마지막이다 -> stack 에서 방출한다.
    // 괄호 재귀 시작

    function compare(a,b) {
        const getValue = (v) => {
            if(v==="+" || v==="-") {
                return 1
            } else {
                return 2
            }
        }
        return getValue(a) - getValue(b)
    }
    
    let answer = []
    let gidx = 0
    const re = /[A-Z]/
    function makePrefix() {
        let operator = []

        while(gidx<infix.length) {
            const value = infix[gidx++]

            if(value.match(re)) {
                answer.push(value)
            } else {
                if(value === "(") {
                    makePrefix()
                } else if(value ===")") {
                    answer.push(...operator.reverse())
                    return
                } else if(operator.length > 0) {
                    while(operator.length > 0) {
                        const preOpe = operator.at(-1)
                        const res = compare(preOpe,value)
                        // 이전이 우선
                        if(res >= 0) {
                            answer.push(operator.pop())
                        } else {
                            break
                        }
                    }
                        operator.push(value)
    
                } else {
                    operator.push(value)
                }
            }
        }
        answer.push(...operator.reverse())
    }

    makePrefix()
    console.log(answer.join(""))
    process.exit()
})