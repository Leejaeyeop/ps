function solution(id_list, report, k) {
    var answer = {};
    var map = new Map();
    
    id_list.forEach((id) => {
        answer[id] = 0
    })
    
    for (let _report of report) {
        let rep = _report.split(" ")
        let reporter = rep[0]
        let target = rep[1] 
        
        let targetSet = map.get(target) ?? new Set()
        targetSet.add(reporter)    
        map.set(target, targetSet)
    }
    
    for(let [target, reporters] of map) {
        
        if(reporters.size>=k) {
             for(let reporter of reporters) {
                 answer[reporter] +=1
             }       
        }
        
    }
    
    return Object.values(answer);
}