const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
});

let input = [];

readline.on('line', function(line) {
    input.push(line)
}).on('close', function(){
    const n = Number(input[0])
    let switches = input[1].split(" ").map(el => Number(el))
    switches.unshift(0)

    const m = Number(input[2])

    for(let i=0; i<m; i++) {
        const [gender, num] = input[3+i].split(" ").map(el => Number(el))
        if(gender === 1) {
            let cnt = 1

            for(let i=num; i<=n; i=num*(++cnt)) {
                switches[i] = switches[i] === 1 ? 0 :1 
            }
        } else {
            switches[num] = switches[num] === 1 ? 0 :1
            let left = num-1
            let right = num+1
            while(left>=1 && right <= n && switches[left] === switches[right]) {
                switches[left] = switches[left] === 1 ? 0 :1
                switches[right] = switches[right] === 1 ? 0 :1
                left--
                right++
            }
        }
    }

    switches.shift()
    let result = [];
    while (switches.length > 0) {
      result.push(switches.splice(0, 20).join(" "));
    }
    console.log(result.join("\n"));

    process.exit()
})