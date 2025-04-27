function solution(k, tangerine) {
    const tangerineCntObj = {}
    
    for(const t of tangerine) {
        if(!tangerineCntObj[t]) tangerineCntObj[t] = 0
        tangerineCntObj[t]+=1
    }
    
    const tangerineCntArr = Object.values(tangerineCntObj);
    tangerineCntArr.sort((a,b) => a-b)
    
    let answer = 0
    while(k>0) {
       k-=tangerineCntArr.pop()
       answer++
    }
    // for (const cnt of tangerineCntArr) {
    //     k -= cnt;
    //     answer++;
    //     if (k <= 0) break;
    // }
    
    return answer
    
}