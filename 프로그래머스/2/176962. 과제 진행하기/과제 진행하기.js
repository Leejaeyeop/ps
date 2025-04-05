function solution(plans) {
    const answer = [];
    
    const convertTime = (time) => {
        const [h,m] = time.split(":")
        return (+(h)*60) + +m
    }
    
    for(let i=0; i<plans.length; i++) {
        const [name,start,playtime] = plans[i]
        plans[i][1] = convertTime(start)
        plans[i][2] = +plans[i][2]
    }
    
    plans.sort((a,b) => b[1] - a[1])
    const workStack = []
    let time = 0
    while(plans.length > 0) {
        if(workStack.length > 0) {
            let [name, start, playtime] = workStack.pop()
            playtime--
            if(playtime === 0) {
                answer.push(name)
            } else {
                workStack.push([name, start, playtime])
            }
        }
        
        // 현재 시각에 시작하는 plan이 있는지 확인
        if(plans.at(-1)[1] === time) {
            workStack.push(plans.pop())
        } 
        time++
    }
    
    while(workStack.length>0) {
        const [name] = workStack.pop()
        answer.push(name)
    }

    return answer;
}