function solution(numbers) {
    const answer = new Array(numbers.length).fill(-1);
    const stack = [[numbers[0],0]]
    
    for(let i=1;i<numbers.length; i++) {
        const curNumber = numbers[i]
        while(stack.length>0 && stack[stack.length-1][0] < curNumber) {
            const [preNumber, preIdx] = stack.pop()
            answer[preIdx] = curNumber
        }
        
        stack.push([curNumber,i])
    }
    
    return answer;
}