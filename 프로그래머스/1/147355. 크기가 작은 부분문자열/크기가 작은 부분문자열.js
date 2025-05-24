function solution(t, p) {
    var answer = 0;
    
    for(let i=0; i<=t.length-p.length; i++) {
         const curNum = t.substring(i,i+p.length)
         if(+curNum <= +p) {
             answer++
         }
    }
    
    return answer;
}