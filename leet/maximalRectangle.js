/**
 * @param {character[][]} matrix
 * @return {number}
 */
var maximalRectangle = function(matrix) {
    const n = matrix.length
    const m = matrix[0].length
    const heights = Array.from({length: m},()=> 0)

    let answer = 0
    for(let i=0; i<n; i++) {
        let maxH = 0
        // stack 쌓기
        for(let j=0; j<m; j++) {
            if(matrix[i][j] === '0') {
                heights[j] = 0
            } else {
                heights[j]++
                maxH = Math.max(maxH, heights[j])
            }
        }

        // 높이 확인
        for(let h=1; h<=maxH; h++) {
            // stack 높이 확인
            let cnt = 0
            for(let k=0; k<m; k++) {
                if(heights[k] >= h) {
                    cnt++
                } else {
                    answer = Math.max(answer, cnt*h)
                    cnt = 0    
                }
            }
            answer = Math.max(answer, cnt*h)
        }
    }

    return answer
};