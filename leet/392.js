/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {
    let sIdx = 0
    if(s === "") {
        return true
    }
    for(let i=0; i<t.length; i++) {
        if(t.charAt(i) === s.charAt(sIdx)) {
            sIdx++
            if(sIdx === s.length) {
                return true
            }
        } 
    }

    return false
};