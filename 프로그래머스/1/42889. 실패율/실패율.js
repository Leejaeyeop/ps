function solution(N, stages) {
    var answer = {}
    var reached = {}
    var failed = {}
    for(let i=1; i<=N; i++) {
        answer[i] = 0
        reached[i] = 0
        failed[i] = 0
    }
    for(const stage of stages) {
        for(let i=1; i<=stage; i++) {
            reached[i]++
        }
        if(stage <= N) {
            failed[stage]++
        }
    }
    
    for(let i=1; i<=N; i++) {
        answer[i] = (failed[i] / reached[i]) 
    }
    const sort = (a,b) => {
        if(a[1] === b[1]) {
            return a[0] - b[0] 
        } else {
            return b[1]- a[1]
        }
    }

    return Object.entries(answer).sort(sort).map(el => +el[0]);
}