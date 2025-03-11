function solution(s) {
    let answer = [0,0]
    
    while(s !== '1') {
        let c = s.split("").filter((el)=> el!=='0').join("").length
        answer[0]++   
        answer[1] += s.length - c
        s = c.toString(2)
    }
    
    return answer
}