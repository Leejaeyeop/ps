// 그리디 + 구간합
function solution(players, m, k) {
    var answer = 0;
    const sum = Array.from({length:24},()=> 0) 
    let capacity = m
   
    for(let i=0; i<24; i++) {
        const player = players[i]
        capacity += sum[i]
        while(player >= capacity) {
            if(i+k<24) {
                sum[i+k] -= m
            }
            capacity += m
            answer +=1
        }    
    }
    
    return answer;
}