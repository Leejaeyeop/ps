function solution(play_time, adv_time, logs) {
    const strToTime = (time)=> {
        const [h,m,s] = time.split(":").map(el => Number(el))
        return (h * 3600) + (m * 60) + s
    }
    
    const timeToStr = (time)=> {
        let h = Math.floor(time / 3600)
        let m = Math.floor( (time % 3600) / 60 )
        let s = Math.floor( (time % 3600) % 60 )
        
          h = h > 9 ? h : '0' + h;
          m = m > 9 ? m : '0' + m;
          s = s > 9 ? s : '0' + s;
  
        return `${h}:${m}:${s}`
    }
    
    adv_time = strToTime(adv_time)
    play_time = strToTime(play_time)
    const times = new Array(play_time).fill(0);

    for(let log of logs) {
        let [s,e] = log.split("-")
        times[strToTime(s)]++
        times[strToTime(e)]--
    }
    
    // 
    for(let i=1; i<times.length; i++) {
        times[i] += times[i-1]
    }
    
    //
    for(let i=1; i<times.length; i++) {
        times[i] += times[i-1]
    }
    
    let sum = times[adv_time-1]
    let answer = 0
    for(let i=adv_time-1; i<play_time; i++) {
        if(sum <times[i] - times[i - adv_time]) {
            sum = times[i] - times[i - adv_time]
            answer = i - adv_time + 1
        }
    }
    
    
    return timeToStr(answer);
}