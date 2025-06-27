// https://www.acmicpc.net/problem/1256
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
});

let input = [];

// 아랫 범위 탐색 -> 일단 백 트래킹 
// a,z 에서 범위 표함 -> 해당 '선택' (등수가 k보다 크거나 같다.)
// d[idx][a수][z수][a선택] + d[idx][a수][z수][b선택]
readline.on('line', function(line) {
    input = line
}).on('close', function(){ //이 안에 솔루션 코드 작성
    const [n,m,k] = input.split(" ").map(el => Number(el))

    // [n+m 인덱스][a갯수][z갯수][현재가 a or z]
    const d = Array.from(new Array(n+m), () => Array.from(new Array(n+1), () =>  Array.from(new Array(m+1), () =>  new Array(2).fill(0))))
    const answer = new Array(n+m).fill("")
    
    // 메모제이션... 
    function dp(idx,a,z) {
        if(a === 0 && z === 0) {
            return 1
        }

        if(z === 0 && d[idx][a][z][0] > 0) {
            return d[idx][a][z][0]
        } else if(z > 0 && d[idx][a][z][1] > 0) {
            return d[idx][a][z][1]
        }

        if(a > 0) {
            // a 선택
            d[idx][a][z][0] = dp(idx+1, a-1,z)
        }

        if(z > 0) {
            // z 선택
            d[idx][a][z][1] = dp(idx+1, a,z-1) + d[idx][a][z][0]
        }

        if(z>0) {
            return d[idx][a][z][1]
        } else {
            return d[idx][a][z][0]
        }
    }
    
    dp(0,n,m)

    function find(idx,a,z,target) {
        if(a === 0 && z === 0) {
            return 1
        }

        // a 선택
        if(a > 0) {
            if(d[idx][a][z][0] >=target) {
                answer[idx] = "a"
                return find(idx+1,a-1,z, target)
            }
        } 

        if(z > 0) {
            if(d[idx][a][z][1] >=target) {
                answer[idx] = "z"
                return find(idx+1,a,z-1, target - d[idx][a][z][0])
            }
        }

    }

    find(0,n,m,k)

    console.log(answer[0] === "" ? -1: answer.join("") )
    process.exit();
});