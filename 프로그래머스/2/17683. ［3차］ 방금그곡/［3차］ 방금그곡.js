function solution(m, musicinfos) {
    let answer = '(None)';
    let maxPlayTime = 0
    
    const timeToMin = ([h,m]) => {
        return +h*60 + +m
    }
    
    const convertCodes = (code) => {
        let res = []
        
        for(let i=0; i<code.length; i++) {
            const curCode = code[i]
            
            if(curCode === "#") {
                res[res.length-1] = res[res.length-1].toLowerCase()
            } else {
                res.push(curCode)
            }
        }
        return res.join("")
    }
    
    m = convertCodes(m)
    for(const musicinfo of musicinfos) {
        // 음을 생성
        const [begin,end,name,code] = musicinfo.split(",")
        let beginTime = timeToMin(begin.split(":"))
        let endTime = timeToMin(end.split(":"))
        let palyTime = endTime - beginTime
        
        let convertCode = convertCodes(code)
        let music = ""
        
        for(let i=0; i<palyTime; i++) {
            music += convertCode[i % convertCode.length]
        }
        
        if(music.indexOf(m) >-1 && palyTime > maxPlayTime) {
            maxPlayTime = palyTime
            answer = name
        }
        
    }
    
    return answer;
}