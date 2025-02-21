function solution(str1, str2) {
    return [...str1].reduce((acc,cur,idx) => acc += cur + str2[idx] ,"")
}