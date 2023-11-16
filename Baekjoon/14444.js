// https://www.acmicpc.net/problem/14444
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
});

let input = [];

readline.on('line', function(line) {
    input = line;
}).on('close', function(){ //이 안에 솔루션 코드 작성
    const s = input;
    
    let res = 1
    const expand = (left,right) => {
        while(left>=0 && right<s.length && s[left]===s[right]){
            left-=1
            right+=1
        }
        return right-left -1
    }
    
    if (s.length < 2 || s === s.split('').reverse().join('')) {
        console.log(s.length)
        process.exit()
    }
    
    for(let i=0; i<s.length-1; i++) {
        let a = expand(i,i+1)
        let b = expand(i,i+2)
        
        res = Math.max(res,a,b)
    }
     
    console.log(res)
    process.exit()
});