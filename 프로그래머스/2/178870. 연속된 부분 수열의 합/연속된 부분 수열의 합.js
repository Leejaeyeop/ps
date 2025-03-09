function solution(sequence, k) {
    // 증가시 right ++ 감소시 left ++
    let left = 0
    let right = 0
    let sum = sequence[left]
    let answer = []
    while(left <=right && right < sequence.length) {
        if(sum === k) {
            if(answer.length === 0 || right - left < answer[1] - answer[0]) {
                answer = [left,right]
            }
            sum-=sequence[left]

            left++
            right++
            sum+=sequence[right]
        } else if(sum <k) {
            right++
            sum+=sequence[right]
        } else {
            sum-=sequence[left]
            left++
        }
    }
    
    return answer;
}