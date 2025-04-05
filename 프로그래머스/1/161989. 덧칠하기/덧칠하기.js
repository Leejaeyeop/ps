function solution(n, m, section) {
    let answer = 0;
    let end = 0
    for(const curSection of section) {
        if(curSection <= end) continue
        
        end = curSection + m - 1
        answer++
    }
    
    return answer;
}