function solution(expressions) {
    var answer = [];
    
    // 진법을 변환
    const convertFormation = (a,b,operator,formation) => {
        // 해당 진법을 10진법 으로 변환
        const convertTo10 = (num) => {
            let res = 0
            for(let i=0; i<num.length; i++) {
                res += +num.charAt(i)*(formation**((num.length-1)-i))
            }
            return res
        }
        
        // 10진법을 해당 진법 으로 변환
        const convertToFormation = (num) => {
            let res = ""
            while(num>0) {
                // 나머지를 붙인다.
                res = (num % formation).toString() + res 
                // 몫으로 변경
                num = Math.floor(num/formation)
            }
            return res
        }
        
        const aConverted = convertTo10(a)
        const bConverted = convertTo10(b)
        
        let res = 0
        if(operator === "+") {
            res = aConverted + bConverted
        } else {
            res = aConverted - bConverted
        }
        
        // 계산 결과값 변환
        return convertToFormation(res)
    }
    
    const candies = Array.from({length: 10},()=> true)
    let maxNum = -1
    
    const getMaxNum = (num) => {
        for(let i=0; i<num.length; i++) {
            maxNum = Math.max(maxNum,+(num.charAt(i)))
        }
    } 
    
    for(const expression of expressions) {
        const [a,operator,b,_,result] = expression.split(" ")
        
        // 어떤 진법인지 확인 -> 후보군 생성
        if(result !== "X") {
            for(let i=2; i<10; i++) {
                if(+convertFormation(a,b,operator,i) !== +result) {
                    candies[i] = false
                }
            }
        } 
        
        getMaxNum(a)
        getMaxNum(b)
    }
    
    for(let i=2; i<=maxNum; i++) {
        candies[i] = false
    }
    
    for(const expression of expressions) {
        let [a,operator,b,_,result] = expression.split(" ")
        
        if(result !== "X")  continue;
        
        const set = new Set()

        for(let i=2; i<10; i++) {
           if(candies[i]) {
               set.add(convertFormation(a,b,operator,i))
           }
        }
            
        if(set.size >1) {
            result = "?"
        } else {
            result = +[...set][0]
        }
        answer.push([a,operator,b,_,result].join(" "))

    }
    
    return answer;
}