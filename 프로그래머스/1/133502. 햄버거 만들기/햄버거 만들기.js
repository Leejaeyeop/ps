function solution(ingredients) {
    let answer = 0;
    const stack = []
    const order = [3,2,1]
    for(const ingredient of ingredients) {
        
        if(ingredient === 1) {
            let flag = true
                // console.log(stack)
            
            for(let i=1; i<=3; i++) {
                if(order[i-1] !== stack[stack.length-i]) {
                    flag = false
                    break
                }
            }
            // 제거
            if(flag) {
                answer++
                stack.splice(-3)
            } else {
                stack.push(ingredient)
            }
        } else {
            stack.push(ingredient)
        }
    }
    
    return answer;
}