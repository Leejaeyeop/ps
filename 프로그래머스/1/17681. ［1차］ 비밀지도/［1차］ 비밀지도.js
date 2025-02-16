function solution(n, arr1, arr2) {
    const graph = []
    
    const numToBinary = (num) => {
        let res = ""
        
        while(num >0) {
            res = (num % 2) + res
            num = Math.floor(num / 2)
        }
        
        while(res.length <n) {
            res = "0" + res
        }
        
        return res
    }
    
    for(let i=0; i<n; i++) {
        const arr1Cur = numToBinary(arr1[i]).split("")
        const arr2Cur = numToBinary(arr2[i]).split("")
        graph.push(arr1Cur.map((el,idx)=> +el + +arr2Cur[idx] > 0 ? 1 : 0))
    }
    
    return graph.map((el) => el.reduce((ac,c)=> {
        if(c > 0) return ac = ac + "#"
        else return ac = ac + " "
    },""));
}