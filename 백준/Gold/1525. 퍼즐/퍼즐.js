const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
});

let input = [];

readline.on('line', function(line) {
    input.push(line)
}).on('close', function(){
    const d = new Set()
    const dx = [0,1,0,-1]
    const dy = [1,0,-1,0]
    
    function locToIdx(x,y) {
        return (x*3)+y
    }

    function idxToLoc(idx) {
        let x = Math.floor(idx / 3)
        let y = idx % 3
        return [x,y]
    }

    function bfs(q,cnt) {
        let nq = []
        while(q.length>0) {
            const str = q.pop()

            if(str === "123456780") {
                return cnt
            }
            const oriIdx = str.indexOf("0")
            const loc = idxToLoc(str.indexOf("0"))

            for(let i=0; i<4; i++) {
                let nx = loc[0] + dx[i]
                let ny = loc[1] + dy[i]

                if(0<= nx && nx<3 && 0<=ny && ny<3) {
                    const nIdx = locToIdx(nx,ny)
                    // 방문 확인
                    let nstr = str.split("")

                    nstr[oriIdx] = nstr[nIdx]
                    nstr[nIdx] = "0"
                    nstr = nstr.join("")

                    if(!d.has(nstr)) {
                        d.add(nstr)
                        nq.push(nstr)
                    } 
                }
            }
        }

        if(nq.length > 0) {
            return bfs(nq,cnt+1)
        } else {
            return -1
        }

    }

    let str = ""
    input.forEach(v => {
        str += v.split(" ").join("")
    })

    let q = [str]
    d.add(str)
    console.log(bfs(q,0))

    process.exit()
})