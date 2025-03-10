// 오직 110만 이동 -> 앞 자리의 111 과 최대한 변경
// stack
function solution(s) {
    var answer = [];
    
    for(const curS of s) {
        // 숫자 1만을 담는 stack
        // const stack = []
        let count1 = 0
        let count110 = 0
        let res = ""
        for(let i=0; i<curS.length; i++) {
            // 0을 만나는 순간을 포착
            if(curS[i] === '0') {
                if(count1 >=2) {
                    count1-=2
                    count110+=1
                } else {
                    res += '1'.repeat(count1) + '0'    
                    count1 = 0
                }
            } else {
                count1++
            }
        }
        res += '110'.repeat(count110)
        res += '1'.repeat(count1)
        
        answer.push(res)
    }
    
    return answer;
}