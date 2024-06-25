function solution(temperature, t1, t2, a, b, onboard) {
    const maxMin = onboard.length
    // [시간][온도] = 소비전력
    const d = Array.from({length: maxMin}, ()=> Array.from({length: 51},()=> Infinity))
    // 시간 , 온도 , 소비전력
    const dp = (minute,temp) => {
        if(minute === maxMin) {
            return 0
        } 
        
        // 온도 초과 && 승객 온도 이슈
        if(temp > 40 || temp <-10 || onboard[minute] === 1 && ( t1 > temp || t2 < temp)) {
            return Infinity
        }
        
        if(d[minute][temp+10] !== Infinity) {
            return d[minute][temp+10]
        }
        
        let res = 10000001
    
        // 에어컨을 킴
        // 에어컨을 키고 온도 변경 + -> a
        res = Math.min(res, a + dp(minute+1,temp+1))
        // 에어컨을 키고 온도 변경 - -> a
        res = Math.min(res, a + dp(minute+1,temp-1))
        // 에어컨을 키고 온도 유지 -> b
        res = Math.min(res, b + dp(minute+1,temp))

        // 에이컨을 끈다.
        if(temp < temperature) {
            res = Math.min(res, dp(minute+1,temp+1))
        } else if(temp > temperature) {
            res = Math.min(res, dp(minute+1,temp-1))
        } else {
            res = Math.min(res, dp(minute+1,temp))
        }

        d[minute][temp+10] = res
        
        return d[minute][temp+10]  
    }
    
    dp(0,temperature)
    
    return d[0][temperature+10];
}
