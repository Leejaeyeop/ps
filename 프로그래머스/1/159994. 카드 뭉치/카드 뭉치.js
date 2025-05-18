function solution(cards1, cards2, goal) {
    var answer = '';
    
    let cards1Idx = 0
    let cards2Idx = 0
    for(const curWord of goal) {
        if(curWord ===cards1[cards1Idx]) {
            cards1Idx++
        } else if(curWord ===cards2[cards2Idx]) {
            cards2Idx++
        } else {
            return "No"
        }
    }
    
    return "Yes";
}