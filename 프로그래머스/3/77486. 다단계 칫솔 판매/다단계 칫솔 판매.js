// 자식에서 부모로 올린다. 핵심 개념!
function solution(enroll, referral, seller, amount) {
    var answer = [];
    infos = {}
    for(let _enroll of enroll) {
       infos[_enroll] = {
           parent: "",
           cash: 0
       }
    }
    
    for(let [idx, _referral] of referral.entries()) {
        infos[enroll[idx]].parent = _referral
    }
    
    // 판매할때 마다 위로 올린다.     
    for(let [idx, _seller] of seller.entries()) {
        let fee = amount[idx] * 100
        
        while (fee > 0 && _seller !== "-") {
            let nfee = Math.floor(fee / 10)
            infos[_seller].cash += fee - nfee
            fee = nfee
            _seller = infos[_seller].parent
        } 
    }
    
    answer = Object.values(infos).map((el) => el.cash)
    
    return answer;
}