
function solution(sequence) {
    var answer = 0;
    const seq1 = []
    const seq2 = []
    
    // 1 -1 1 -1 ...
    let pulse = 1
    for(const num of sequence) {
        seq1.push(num*pulse)
        pulse *= -1 
    }
    
    pulse = -1
    // -1 1 -1 1 ...
    for(const num of sequence) {
        seq2.push(num*pulse)
        pulse *= -1 
    }
    const getMaxSum = (seq) => {
        let res = seq[0]
        let sum = seq[0]
        let min = Math.min(0,seq[0])
        
        for(let i=1; i<seq.length; i++) {
            sum += seq[i]

            res = Math.max(res, sum - min)
            min = Math.min(sum,min)
        }
        
        return res
    }
    
    return Math.max(getMaxSum(seq1),getMaxSum(seq2));
}