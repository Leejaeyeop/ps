function solution(s) {
    let answer = 0;
    const pair = {
        ')': "(", 
        '}': "{", 
        ']': "[", 
    }
    
    const isValid = (s) => {
        let stack = []
        
        for(let i=0; i<s.length; i++) {
            if(s[i] === `(` || s[i] === `[` || s[i] === `{`) {
                stack.push(s[i])
            } else {
                const pre = stack.pop()
                 if(pair[s[i]] !== pre ) {
                    return false                     
                 }
            } 
        }
        
        if(stack.length >0) {
            return false
        }
         
        return true
    }
    
    for(let i=0; i<s.length; i++) {
        s = s.charAt(s.length-1) + s.substring(0,s.length-1)
        if(isValid(s)) answer++
    }
    
    return answer;
}