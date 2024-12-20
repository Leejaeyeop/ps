function solution(orders, course) {
    var answer = [];
    let res = {}
    
    function strSort(a,b) {
        if (a > b) return 1;
        else if (b > a) return -1;
        else return 0;
    }
    
    function combination(order,str,idx,cnt,maxCnt) {
        if(cnt === maxCnt) {
            let resStr = str.sort(strSort).join("")
            if(res[resStr]) {
                res[resStr] +=1
            } else {
                res[resStr] = 1
            }
            return 
        } 
        for(let i=idx; i<order.length; i++) {
            str[cnt] = order[i]
            combination(order,str,i+1,cnt+1,maxCnt)
        }
    }
    
    for(let num of course) {
        // 초기화
        res = {}
        // 조합의 갯수를 구해라
        for(let order of orders) {
            combination(order.split("").sort(strSort),new Array(order),0,0,num)
        }
        
        let max = 0
        let ret = []
        for(const [key,value] of Object.entries(res)) {
            if(value > 1) {
                if(value > max) {
                    max = value
                    ret = [key]
                } else if(value === max) {
                    ret.push(key)
                }
            }

        }
        if(ret.length>0) {
            answer = [...answer, ...ret]
        }
    }
    answer.sort(strSort)
    
    return answer;
}