/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
// 내가 지금 * 상태 인지 아닌지
var isMatch = function(s, p) {
    const set = new Set([0])
    
    const bfs = (si,set) => {
        const nSet = new Set()
        
        while(set.length > 0) {
            const pi = set.pop()
            let pl = p.charAt(pi)
            let isWild = false
            if(pi > p.length) {
                continue
            }
            
            // wildcard 확인
            if(pi +1 < p.length && p.charAt(pi+1)=== "*") {
                isWild = true
            }
            
            if(pl === s.charAt(si) || pl === ".") {
                if(isWild) {
                    if(pi === p.length -2 && si === s.length-1) {
                        return true
                    } 
                    // wild 사용 + 다음
                    nSet.add(pi)
                    // wild 사용 + 다음 x
                    nSet.add(pi+2)
                    // wild 사용X 
                    set.push(pi+2)
                } else {
                    if(pi === p.length -1 && si === s.length-1) {
                        return true
                    } 
                    nSet.add(pi+1)
                }
            } else if (isWild) {
                // wild 사용X 
                set.push(pi+2)
            }
         }
            
        if(nSet.size>0 && si+1 < s.length) {
          return bfs(si+1,[...nSet])
        } else if(si === s.length-1) {
            const arr = [...nSet]
            while(arr.length>0) {
                const pi = arr.pop()
                // wildcard 확인
                if(pi +1 < p.length && p.charAt(pi+1)=== "*") {
                    if(pi+2 === p.length) {
                        return true
                    } else {
                        arr.push(pi+2)
                    }
                }
                
            }
            return false
        } else return false
    }
    
    return bfs(0,[...set])    
};
