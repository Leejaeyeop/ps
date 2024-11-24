function solution(s) {
    const cIdx = Math.floor(s.length/2)
    return s.length % 2 === 0 ? s.substring(cIdx-1, cIdx+1) : s.charAt(cIdx);
}