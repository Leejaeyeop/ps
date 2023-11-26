const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
});

let input = [];

readline.on('line', function(line) {
    input = line
}).on('close', function(){
    const [h,w,n,m] = input.split(" ").map(el => Number(el))
    let cnt = 0
    for(let i=0; i<h; i+=n+1) {
        for(let j=0; j<w; j+=m+1) {
            cnt++
        }
    }


    console.log(cnt)
    process.exit()
})