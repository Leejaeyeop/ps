function solution(order) {
    let answer = 0;
    // 보조 컨테이너 
    const assist = []
    // container
    const container = Array.from({length:order.length},(_v,i)=>order.length-i)
    let curOrderIdx = 0
    while(curOrderIdx < order.length){
        const curOrder = order[curOrderIdx]
        // order 와 container 가 일치
        if(curOrder === container.at(-1)) {
            container.pop()
            curOrderIdx++
            answer++
        } else if(curOrder === assist.at(-1)) { // 보조 컨테이너에서 뽑을수 있음
            assist.pop()
            curOrderIdx++
            answer++
        } else if(curOrder < assist.at(-1)) { // 보조 컨테이너에 담을수 없음.
            break
        } else { // 보조 컨테이너에 담을수 있음
            assist.push(container.pop())
        }
    }
    
    return answer;
}