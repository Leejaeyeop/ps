// https://www.acmicpc.net/problem/12969
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
});

let input = [];

// 인덱스가 더 뒤에 있으면서 b < a 식으로 문자열이 뒤인 쌍이 k개 이다.
// a->1 b->2 c->3
// 단순 dp는 아님
// 뒤에서 부터
readline.on('line', function(line) {
    input = line.split(" ").map(el => Number(el))
}).on('close', function(){
    const [n,k] = input

    // [a의 개수][b의 개수][c의 개수][계산 결과 값]
    const d = Array.from({length: n+1}, ()=> Array.from({length: n+1}, ()=> Array.from({length: n+1}, () => Array(k+1).fill(false))))
    
    // answer = new Array(n).fill("")

    // 인덱스, 선택된 a,b,c의 개수, 남은 value, 배열
    function dp(idx,a,b,c,value,bits) {
        if(value <0 || d[a][b][c][value]) {
            return [0,0,0]
        }
        // 마지막배열 -> 결과값 저장
        if(idx === n) {
            if(value === 0) {
                return bits       
            } else return [0,0,0]
        }
        
        let res = 0
        let nval = 0
        // a 포함
        let nbits = [bits[0] | (1<<(n-1-idx)),bits[1],bits[2]]
        nval = value 
        res = dp(idx+1,a+1,b,c,nval,nbits)
        // 정답
        if(res[0]>0 || res[1] >0 || res[2] >0) {
            return res
        }

        // b 포함
        nbits = [bits[0],bits[1] | (1<<(n-1-idx)),bits[2]]
        nval = value - a
        res = dp(idx+1,a,b+1,c,nval,nbits)
        // 정답
        if(res[0]>0 || res[1] >0 || res[2] >0) {
            return res
        }

        // c 포함
        nbits = [bits[0],bits[1],bits[2] | (1<<(n-1-idx))]
        nval = value - a -b
        res = dp(idx+1,a,b,c+1,nval,nbits)
        
        d[a][b][c][value] = true
        return res
    }
    
    const res = dp(0,0,0,0,k,[0,0,0])
    if(res[0] === 0 && res[1] === 0&& res[2] === 0) {
        console.log(-1)
    } else {
        let answer = ""
        for(let i=n-1; i>-1; i--) {
            if((res[0] & (1<<i)) >0) {
                answer += 'A'
            } else if((res[1] & (1<<i)) >0) {
                answer += 'B'
            } else {
                answer += 'C'
            }
        }
        console.log(answer)
    }
})