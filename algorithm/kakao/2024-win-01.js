function solution(friends, gifts) {
    var answer = 0;
    // 보낸 목록
    const sentList = {}
    // 선물지수
    const giftScore = {}
    
    for(let friend of friends) {
        sentList[friend] = {}
        giftScore[friend] = 0

    }
    
    for(const gift of gifts) {
        const [a,b] = gift.split(" ")
        sentList[a][b]++
   
        giftScore[a]++
        giftScore[b]--
    }
    for(let from in sentList) {
        let score = 0
        
        for(let to in sentList[from]) {
            
            let cur = sentList[from][to]
            let other = sentList[to][from]
            
            if(cur > other || (cur === other && giftScore[from] > giftScore[to])) {
                score++
            } 
        }
        answer = Math.max(answer,score)
    }
    

    
    return answer;
}
