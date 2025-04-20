const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
});

let input = [];

readline.on('line', function(line) {
    input.push(line)
}).on('close', function(){
    const [n,m] = input[0].split(" ").map(el => Number(el))
    // 활성화
    const am = input[1].split(" ").map(el => Number(el))
    // 비활성화
    const um = input[2].split(" ").map(el => Number(el))
    maxUm = um.reduce((a,b) => a+b)

    // [앱 갯수] [비활성화 비용]
    const dp = Array.from(new Array(n+1),()=>new Array(maxUm+1).fill(0))

    // 최소 비용으로 정렬
    let list = am.map((v,i) => [um[i],v])
    list.unshift([])

    let answer = Infinity
    // 비활성화 앱의 갯수
    for(let i=1; i<=n; i++) {
        // 비활성화 비용
        for(let j=0; j<=maxUm; j++) {
            // 비활성화, 비활성화시 메모리 절약량
            const [_um, _am] = list[i]
            if(_um <=j) {
                dp[i][j] = Math.max(dp[i-1][j], dp[i-1][j-_um] + _am)
            } else {
                dp[i][j] = dp[i-1][j]
            }

            if(dp[i][j] >= m) {
                answer = Math.min(answer,j)
            }
        }
    }

    console.log(answer)
    process.exit()

})