function solution(elements) {
    const answer = new Set()
    const n = elements.length
    elements = elements.concat(elements)
    // sliding window
    for(let i=1; i<=n; i++) {
        // 첫 window를 구한다
        let curValue = 0
        for(let j=0; j<i; j++) {
            curValue += elements[j]
        }
        
        let left = 0
        let right = i-1
        
        while(right<elements.length) {
            answer.add(curValue)

            curValue-=elements[left++]
            curValue+=elements[++right]
        }
        
    }
    
    return answer.size;
}