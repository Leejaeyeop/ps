function getBinaryNumber(num) {
    let res = ""
    
    while(num > 0) {
        let remain = num % 2 
        num = Math.floor(num / 2) 
        res = remain + res
    }
    
    return res
}

function check(binary, begin, end, parent) {
    if (begin > end) {
        return true
    }

    let mid = Math.floor((begin + end) / 2)
    if(binary.charAt(mid) === "1" && parent === "0") {
        return false
    } 
    
    return check(binary, begin, mid -1, binary.charAt(mid)) && check(binary, mid+1, end, binary.charAt(mid))
}

function solution(numbers) {
    var answer = []; 
    
    for(let number of numbers) {
        let binary = getBinaryNumber(number)
        
        let len = binary.length
        let matchLen = 0
        let digit = 0
        while(len > matchLen) {
              matchLen += 2 ** digit
              digit ++
        }
        let addZeroCnt = matchLen -len
        
        for(let i=0; i<addZeroCnt; i++) {
            binary = "0" + binary
        }
        
        answer.push(check(binary,0,binary.length-1,"1") ? 1 : 0)
    }   
    
    return answer;
}