function solution(a, b) {
    var answer = 0;
    return Math.max(+(a.toString()+b.toString()),+(b.toString()+a.toString()));
}