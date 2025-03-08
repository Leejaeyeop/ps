function solution(scores) {
    var answer = -1;
    const [targetA,targetB] = scores[0]
    
    // 정렬...
    scores.sort((a,b) => a[0] - b[0] !== 0 ? a[0] - b[0] : b[1] - a[1])
    const bMax = Array.from({length: scores.length}, () => 0)

    let max = 0
    for(let i=scores.length-2; i>-1; i--) {
        max = Math.max(max,scores[i+1][1])
        bMax[i] = max
    }
    
    const ranks = []
    scores.forEach((score,idx)=> {
        if(score[1] < bMax[idx]) return 
        
        ranks.push([score[0],score[1]])
    })
    
    ranks.sort((a,b) => b[0] + b[1] - a[0] - a[1])
    
    // ranking 매기기
    let curRank = 1
    for(let i=0; i<ranks.length; i++) {
        const [scoreA,scoreB] = ranks[i]
        if(i>0) {
            const [preScoreA,preScoreB] = ranks[i-1]
            if(preScoreA+preScoreB > scoreA+scoreB) {
                curRank = i+1
            }
        }
        
        if(scoreA===targetA &&scoreB===targetB) {
            answer = curRank
            break
        }
    }
    
    return answer;
}