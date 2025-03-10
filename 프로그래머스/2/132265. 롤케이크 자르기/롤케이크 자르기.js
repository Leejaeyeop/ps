function solution(topping) {
    var answer = 0;
    const chulsu = new Map()
    const brother = new Map()
    
    for(const curTopping of topping) {
        if(!brother.has(curTopping)) {
            brother.set(curTopping,0)
        }
        brother.set(curTopping,brother.get(curTopping)+1)
    }
    
    for(const curTopping of topping) {
        if(!chulsu.has(curTopping)) {
            chulsu.set(curTopping,0)
        }
        chulsu.set(curTopping,chulsu.get(curTopping)+1)
        brother.set(curTopping,brother.get(curTopping)-1)
        
        if(brother.get(curTopping) === 0) {
            brother.delete(curTopping)
        }
        
        if(chulsu.size === brother.size) {
            answer+=1
        } else if(chulsu.size > brother.size) {
            break
        }
    }
        
    return answer;
}