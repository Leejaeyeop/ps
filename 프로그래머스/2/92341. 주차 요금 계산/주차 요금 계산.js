function solution(fees, records) {
    var answer = [];
    const [timeDefault,feeDefault,timeUnit,feeUnit] = fees
    const inInfo = {}
    const times = {}
    
    const timeToMin = (time) => {
        const [hh,mm] = time.split(":")
        return (+hh * 60) + (+mm)
    }
    
    const getCost = (totalTime) => {
        let time = totalTime - timeDefault
        if(time<0) time = 0
        
        return feeDefault + Math.ceil(time/timeUnit) * feeUnit
    }
    
    for(const record of records) {
        const [time,number,status] = record.split(" ")
        if(status === "IN") {
            inInfo[number] = timeToMin(time)
        } else {
            if(!times[number]) {
                times[number] = 0
            }
            
            times[number] += timeToMin(time) - inInfo[number]
            inInfo[number] = -1
        }
    }

    for(const [number,inTime] of Object.entries(inInfo)) {
        if(inTime > -1) {
            if(!times[number]) {
                times[number] = 0
            }
            
            times[number] += timeToMin('23:59') - inTime
        }
    }
    for(const [number,totalTime] of Object.entries(times)) {
       answer.push([number,getCost(totalTime)])
    }
    
    answer.sort((a,b) => a[0]-b[0])
    
    return answer.map(el => el[1]);
}