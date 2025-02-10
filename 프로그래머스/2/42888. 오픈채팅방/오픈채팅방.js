function solution(record) {
    var answer = [];
    const splitedRecord = []
    const uids = {}
    
    for(const msg of record) {
        splitedRecord.push(msg.split(" "))
    }
    
    // 이름 변경 확인
    for(const msg of splitedRecord) {
        if(msg[2]) {
            uids[msg[1]] = msg[2]
        }
    }
    
    // result
    for(const msg of splitedRecord) {
        if(msg[0] === "Change") continue;
        
        let res = uids[msg[1]] + "님이 "
        if(msg[0] === "Enter") {
            res+="들어왔습니다."
        } else if(msg[0] === "Leave") {
            res+="나갔습니다."
        }
        answer.push(res)
    }
    
    return answer;
}