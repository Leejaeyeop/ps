function solution(food) {
    let answer = [];
    
    for(let i = 1; i<food.length; i++) {
        food[i]-=2
        while(food[i] >= 0) {
            answer.push(i)
            food[i]-=2
        }
    }
    
    return answer.join("") + "0" + answer.reverse().join("");
}