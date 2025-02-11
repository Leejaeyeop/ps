// diff > level = (diff - level) * (time_cur + time_prev) + time_cur
// level의 최솟값
// 이분 탐색
function solution(diffs, times, limit) {
    var answer = 0;
    
    const check = (level) => {
        let time_prev = 0
        let total_time = 0
    
        for(let i=0; i<diffs.length; i++) {
            let diff_cur = diffs[i]
            let time_cur = times[i]
            
            if(diff_cur <= level) {
                total_time += time_cur
            } else {
                total_time += ((diff_cur-level)*(time_cur+time_prev)) + time_cur
            }
                
            if(total_time > limit) {
                return false
            }
            
            time_prev = time_cur
        }
            
        return true
    }
    
    // level이 parameter
    const binarySearch = () => {
        let left = 1
        let right = 100000
        
        while(left<=right) {
            let mid = Math.floor((left+right)/2)
            
            if(check(mid)) {
                answer = mid
                right = mid - 1
            } else {
                left = mid + 1
            }
        }
    }
    
    binarySearch()
    
    return answer;
}