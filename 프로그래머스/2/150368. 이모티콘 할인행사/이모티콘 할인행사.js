function solution(users, emoticons) {
    const answer = [];
    const n = emoticons.length
    const discountRate = Array.from({length: n},()=>0)
    
    const search = () => {
        const res = [0,0]
        for(const [raito,price] of users) {
            let totalPrice = 0
            for(let i=0; i<n; i++) {
                const curDiscount = discountRate[i]
                // 구매
                if(curDiscount >= raito) {
                    totalPrice += emoticons[i] - (emoticons[i]*(curDiscount*0.01))
                }                
            }
            if(totalPrice >= price) {
                res[0]++
            } else {
                res[1]+= totalPrice
            }
        }
        answer.push(res)
    }
    
    const recur = (idx) => {
        if(idx ===n) {
            search()
            return 
        }

        for(let i=1; i<=4; i++) {
            discountRate[idx] = i*10
            recur(idx+1)
        }
    }
    
    recur(0)
    
    answer.sort((a,b) => b[0] === a[0] ? b[1] - a[1] : b[0] - a[0] )
    return answer[0];
}