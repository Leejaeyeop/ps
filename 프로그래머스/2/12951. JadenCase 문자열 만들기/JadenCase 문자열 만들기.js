function solution(s) {
    return s.split(" ").map(str => str.charAt(0).toUpperCase() + str.substring(1).toLowerCase()).join(" ");
}