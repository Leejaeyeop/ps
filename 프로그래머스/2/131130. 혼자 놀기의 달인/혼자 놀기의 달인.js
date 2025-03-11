function solution(cards) {
    var answer = 0;
    // 카드 번호에 적힌 상자를 오픈
    // 사이클의 갯수를 구하라
    const results = []
    const visited = new Array(cards.length+1).fill(false)
    
    cards.forEach((card) => {
        if(visited[card]) return
        
        let cnt = 0        
        let curCard = card
        while(!visited[curCard]) {
            cnt++
            visited[curCard] = true
            curCard = cards[curCard-1]
        }
        results.push(cnt)
    })
    
    results.sort((a,b) => b-a)
    
    return results.length === 1 ? 0 : results[0] * results[1]
}