function solution(today, terms, privacies) {
    // 오름차순으로 정렬
    var answer = [];
    
    const yearToDate = 28*12
    const monthToDate = 28
    const convertToTimestamp = ([year,month,date]) => {
        return (year*yearToDate) + (month*monthToDate) + date
    }
    
    const termObj = {}
    terms.forEach((term) => {
        const [key,v] = term.split(" ")
        termObj[key] = +v  
    })
    today = convertToTimestamp(today.split(".").map(el => +el))
    
    privacies.forEach((privacie,i) => {
        let [date,term] = privacie.split(" ")
        date = convertToTimestamp(date.split(".").map(el => +el)) + (termObj[term]*monthToDate)
        if(date <= today) {
            answer.push(i+1)
        }
    })
    
    return answer;
}