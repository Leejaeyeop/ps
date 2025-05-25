function solution(X, Y) {

    const x = new Map()
    
    for(const num of X.split("")) {
        if(!x.has(num)) {
            x.set(num,0)
        }
        x.set(num,x.get(num)+1)
    }
    
    const matched = []
    for(const num of Y.split("")) {
        if(!x.has(num)) continue

        matched.push(+num)
        x.set(num,x.get(num)-1)
        if(x.get(num) === 0) {
            x.delete(num)
        }
        
    }
    
    if(matched.length === 0) return "-1"
    
    const answer = matched.sort((a,b) => b - a)
    
    return answer[0] === 0 ? "0" : answer.join("");
}