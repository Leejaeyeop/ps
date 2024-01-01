const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
});

let input = [];

readline.on('line', function(line) {
    input.push(line)
}).on('close', function(){
    const n = Number(input[0])
    let infos = []
    
    for(let i=1; i<=n; i++) {
        const arr = input[i].split(" ").map(el => Number(el))
        arr.push(i-1)
        infos.push(arr)
    }
    const compare = (a,b) => {
        let w = a[0]-b[0]
        let h = a[1]-b[1]
        
        if(w*h <=0) {
            return 0
        } else {
            // a가 더 큼
            if(w>0) {
                return 1
            } else return -1
        }
    }

    const grpah = Array.from(new Array(n),()=> [])
    const indgrees = new Array(n).fill(1)
    for(let i=0; i<infos.length; i++) {
        const curInfo = infos[i]

        for(let j=0; j<infos.length; j++) {
            const otherInfo = infos[j]
            if(compare(curInfo,otherInfo) < 0) {
                grpah[j].push(i)
                indgrees[i]++ 
            }
        }
    }

    console.log(indgrees.join(" "))

    process.exit()
})