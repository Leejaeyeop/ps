function solution(num_list) {
    return num_list.reduce((pre,cur)=>pre*cur) < num_list.reduce((pre,cur)=>pre+cur)**2 ? 1:0;
}