function solution(num_list) {
    let odd = ""
    let even = ""
    
    num_list.forEach(val=> {
        if(val % 2 ===0) {
            even += val 
        } else {
            odd += val 
        }
    })
    
    return +even + +odd
}