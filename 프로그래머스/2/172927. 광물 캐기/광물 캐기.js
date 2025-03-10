// 곡갱이 최대 5개 광물
// 한번 사용 곡갱이는 계속 사용
// 피로도 최소 
function solution(picks, minerals) {
    var answer = Infinity
    const fatigues = [[1,1,1],[5,1,1],[25,5,1]]
    let totalPickCnt = picks.reduce((acc,cur) => acc+cur)
    
    const doMine = (order) => {
        const getIdx = {
            "diamond" : 0,
            "iron" : 1,
            "stone" : 2,
        }
        
        let fatigue = 0
        
        for(let idx = 0; idx<minerals.length; idx ++) {
            const curMineral = minerals[idx]
            
            let curPick = order[+Math.floor(idx/5)]
            if(curPick === undefined) break
            
            fatigue += fatigues[curPick][getIdx[curMineral]]
        }
        
        answer = Math.min(answer,fatigue)
    }
    
    const dfs = (idx,order) => {
        if(idx === totalPickCnt) {
            doMine(order)
        }
        
        for(let i=0; i<3; i++) {
            if(picks[i] > 0) {
                picks[i]--
                order[idx] = i
                dfs(idx+1,order)
                picks[i]++
                order[idx] = -1
            }
        }
    }
    
    dfs(0,Array(totalPickCnt).fill(-1))
    
    return answer;
}