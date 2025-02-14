function solution(s) {
    var answer = Infinity
    
    // 문자열 길이 설정
    for(let i=1; i<=s.length; i++) {
        let res = ""
        let strPre = ""
        let cnt = 1
        
        for(let j=0; j<s.length; j+=i) {
            const strCur = s.substring(j,j+i)
            if(strCur === strPre) {
                cnt+=1
            } else {
                res += (cnt > 1 ? cnt.toString() : "") + strPre
                strPre = strCur
                cnt=1
            }
        }
        res += (cnt > 1 ? cnt.toString() : "") + strPre
        answer = Math.min(answer,res.length)
    }
    
    return answer;
}