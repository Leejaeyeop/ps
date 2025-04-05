function solution(book_time) {
    const MAX_TIME = 2460
    const prefix = Array.from({length:MAX_TIME},() => 0)
    
    const getConvertedTime = (time) => {
        return +time.split(":").join("")
    }
    
    for(const [begin,end] of book_time) {
        let convertedBeginTime = getConvertedTime(begin) 
        let convertedEndTime = getConvertedTime(end)+10 
        
        if(convertedEndTime % 100 >= 60) {
            convertedEndTime += 40
        }
        
        prefix[convertedBeginTime] += 1
        prefix[convertedEndTime] -= 1
    }
    
    for(let i=1; i<MAX_TIME; i++) {
        prefix[i] += prefix[i-1]
    }
    
    return Math.max(...prefix);
}