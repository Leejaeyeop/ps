function solution(skill, skill_trees) {
    let answer = 0
    for(const skill_tree of skill_trees) {
        let curSkillIdx = 0
        let isPossible = true
           for(let i=0; i<skill_tree.length; i++) {
               // tree가 필요
               if(skill.indexOf(skill_tree[i]) > -1) {
                    if(skill_tree[i] === skill[curSkillIdx]) {
                        curSkillIdx++
                    } else {
                        isPossible = false
                        break
                    }
               }
           }
            
        if(isPossible) {
            answer++
        }
    }
        
    return answer
}