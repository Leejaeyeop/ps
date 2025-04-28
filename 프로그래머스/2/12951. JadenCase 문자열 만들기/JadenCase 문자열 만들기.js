function solution(s) {
    return s.split(" ").map(str => str.length > 0 ?str[0].toUpperCase() + str.substring(1)?.toLowerCase() : str).join(" ");
}