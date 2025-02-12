function solution(n, q, ans) {
    var answer = 0;
    
    const check = (arr) => {
        for(let i=0; i<q.length; i++) {
            const qCur = q[i]
            const ansCur = ans[i]
            // 포함되는 숫자 확인
            if(qCur.filter(el => arr.indexOf(el) > -1).length !== ansCur) {
                return
            }
        }
        
        answer+=1
    }
    
    // 5가지 조합
    const combination = (idx,num,arr) => {
        if(idx === 5) {
            check(arr)
            return 
        }
        for(let i=num; i<=n; i++) {
            arr[idx]=i
            combination(idx+1,i+1,arr)
        }
    }
    
    combination(0,1,[0,0,0,0,0])
    
    return answer;
}