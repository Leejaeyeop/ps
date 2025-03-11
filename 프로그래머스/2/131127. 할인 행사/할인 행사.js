function solution(want, number, discount) {
    let answer = 0;
    const productIdxInfo = {}
    
    want.forEach((product,idx) => {
        productIdxInfo[product] = idx
    }) 
    
    for(let i=0; i<9; i++) {
        const productIdx = productIdxInfo[discount[i]]
        if(productIdx === undefined) continue
        
        number[productIdx]--
    }
    
    for(let i=9; i<discount.length; i++) {
        // 추가
        const productIdx = productIdxInfo[discount[i]]
        if(productIdx !== undefined) {
            number[productIdx]--
        }
        // 제거
        const PreProductIdx = productIdxInfo[discount[i-10]]
        if(PreProductIdx !== undefined) {
            number[PreProductIdx]++
        }
        
        let isMatch = true
        for(let j=0; j<number.length; j++) {
            if(number[j] !== 0) isMatch = false 
        }
        
        if(isMatch) answer++
    }
    
    return answer;
}