function solution(n, w, num) {
    var answer = 0;
    
    const boxes = Array.from({length:100}, ()=> Array.from({length:w}, ()=> 0))
    let cnt = 1
    for(let i=99; i>-1; i--) {
        for(let j=0; j<w; j++) {
                if(cnt > n) break;
                // 오른쪽으로
                if(i%2 === 1) {
                    boxes[i][j] = cnt
                } else { // 왼쪽으로 
                    boxes[i][w-j-1] = cnt
                }
                cnt+=1
            }
        }
    
    for(let i=99; i>-1; i--) {
        for(let j=0; j<w; j++) {
            if(boxes[i][j] === num) {
                for(let k=i; k>-1; k--) {
                    if(boxes[k][j] >0) {
                        answer+=1
                    }
                }
            }
        }
    }
    
    return answer;
}