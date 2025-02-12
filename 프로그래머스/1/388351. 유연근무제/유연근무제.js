// 토 일 제외
function solution(schedules, timelogs, startday) {
    var answer = 0;
    const n = schedules.length
    
    for(let i=0; i<n; i++) {
        let schedule = schedules[i]
        const timelog = timelogs[i]
        let flag = false
        let dayCur = startday
        
        schedule = +schedule + 10
        
        const min = schedule % 100
        if(min >= 60) {
            schedule +=40
        }
        
        for(const time of timelog) {
            if(time > schedule && (dayCur%7 !==0 && dayCur%7 !==6)) {
                flag = true
                break;
            }
            
            dayCur+=1
        }
        
        if(!flag) {
            answer +=1
        }
        
    }
    
    return answer;
}