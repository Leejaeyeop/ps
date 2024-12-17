function solution(survey, choices) {
    var answer = "";
    const res = {
        "R": 0,
        "T": 0,
        "C": 0,
        "F": 0,
        "J": 0,
        "M": 0,
        "A": 0,
        "N": 0,
    }
    
    for (let i =0; i<survey.length; i++) {
        const choice = choices[i]
        if(choice <4) { // 첫번째 득점
            res[survey[i][0]] += 4 - choice
        } else if (choice>4) { // 두번째 득점
            res[survey[i][1]] +=  choice - 4
        }
    }
    
    if(res["R"] >= res["T"]) {
        answer += "R"
    } else {
        answer += "T"
    }
    
    if(res["C"] >= res["F"]) {
        answer += "C"
    } else {
        answer += "F"
    }
    
    if(res["J"] >= res["M"]) {
        answer += "J"
    } else {
        answer += "M"
    }
    
    if(res["A"] >= res["N"]) {
        answer += "A"
    } else {
        answer += "N"
    }
    
    return answer;
}