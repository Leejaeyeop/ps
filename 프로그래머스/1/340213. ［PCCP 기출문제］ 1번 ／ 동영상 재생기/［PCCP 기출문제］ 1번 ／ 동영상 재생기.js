function solution(video_len, pos, op_start, op_end, commands) {
    var answer = '';
    
    const comvertMMSStoSec = (MMSS) => {
        const [mm,ss] = MMSS.split(":")
        return (+mm*60) + (+ss)
    }
    
    const convertSecToMMSS = (sec) => {
        let mm = Math.floor(sec / 60)
        let ss = sec % 60
        
        if(mm<10) mm = "0"+mm.toString()
        if(ss < 10) ss = "0"+ss.toString()
        return mm + ":" + ss
    }
    
    const conVideoLen = comvertMMSStoSec(video_len)
    const conPos = comvertMMSStoSec(pos)
    const conOpStart = comvertMMSStoSec(op_start)
    const conOpEnd = comvertMMSStoSec(op_end)
    let curPos = comvertMMSStoSec(pos)
    
    for(const command of commands) {
        // 오프닝 건너 뛰기 확인
        if(conOpStart <= curPos && curPos <=conOpEnd) {
            curPos = conOpEnd
        }
        
        if(command==="next") {
            curPos+=10
        } else {
            curPos-=10
        } 
        
        // 동영상 범위 확인
        if(curPos<0) curPos=0
        if(curPos>conVideoLen) curPos=conVideoLen
        
        // 오프닝 건너 뛰기 확인
        if(conOpStart <= curPos && curPos <=conOpEnd) {
            curPos = conOpEnd
        }
    }

    
    return convertSecToMMSS(curPos);
}