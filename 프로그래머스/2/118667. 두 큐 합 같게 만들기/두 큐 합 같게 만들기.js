function solution(queue1, queue2) {
    const n = queue1.length
    let answer = 0
    let aSum = 0
    let bSum = 0
    for(let i=0; i<queue1.length; i++) {
        aSum += queue1[i]
        bSum += queue2[i]
    }
    
    let q1Idx = 0
    let _q1Idx = 0
    let q2Idx = 0
    let _q2Idx =0
    while(aSum!=bSum) {
        if(answer === 4*n || queue1.length === 0 || queue2.length === 0) {
            return -1
        }
        answer ++
        if(aSum<bSum) {
            let num = 0
            if(q2Idx < n) {
                num = queue2[q2Idx++]
            } else if(_q2Idx < q1Idx) {
                num = queue1[_q2Idx++]
            } else {
                return -1
            }
            aSum += num
            bSum -= num 
        } else {
            if(q1Idx < n) {
                num = queue1[q1Idx++]
            } else if(_q1Idx < q2Idx) {
                num = queue2[_q1Idx++]
            } else {
                return -1
            } 
            bSum += num
            aSum -= num 
        }
    }
    return answer
}