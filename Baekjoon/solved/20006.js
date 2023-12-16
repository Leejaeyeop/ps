const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
});

let input = [];

readline.on('line', function(line) {
    input.push(line)
}).on('close', function(){
    const [p,m] = input[0].split(" ").map(el => Number(el))
    const rooms = {}
    const roomInfo = new Map()
    for(let i=1; i<=p; i++) {
        let [l,n] = input[i].split(" ")
        l = Number(l)
        // 레벨 -> [순서, 이름]
        // obj -> 이름: [...방 멤버들]
        let name = ""
        let order = Infinity
        let lv = -1
        for(let j=l-10; j<l+11; j++) {
            if(j<0) continue
            // 생성된 방이 있다.
            if(rooms[j] && rooms[j][0] < order) {
                order = rooms[j][0]
                name = rooms[j][1]
                lv = j
            }
        }

        if(name === "") {
            // 방 생성
            rooms[l] = [i,n]
            name = n
            lv = l
            roomInfo.set(name,[])
        }
        roomInfo.set(name, [...roomInfo.get(name), [l,n]])

        // 바로 삭제
        if(roomInfo.get(name).length===m) {
            delete rooms[lv]
        }
    }

    for(let [key, v] of roomInfo) {
        v = v.sort((a,b) => a[1] > b[1] ? 1: -1)
        if(v.length === m) {
            console.log("Started!")
        } else {
            console.log("Waiting!")
        }

        v.forEach(_v => {
            console.log(_v.join(" "))
        })
    }

    process.exit()
})