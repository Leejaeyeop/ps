function solution(numbers) {
    var answer = 0;
    
    const isPrime = (target) => {
        if(target < 2) return false
        
        for(let i=2; i<Math.floor(Math.sqrt(target)) +1; i++) {
            if(target%i === 0) return false
        }
        
        return true
    }
    
    const set = new Set()
    
    const recur = (num,visited) => {
        for(let i=0; i<numbers.length; i++) {
            if(visited[i]) continue
            
            const nNum = num+numbers[i]
            visited[i] = true
            set.add(+nNum)
            recur(nNum,visited)
            visited[i] = false        }
    }
    
    recur("",new Array(numbers.length).fill(false))
    
    for(const num of set) {
        if(isPrime(num)) answer++
    }
    
    return answer;
}