import java.util.Arrays;
import java.util.*;
class Solution {
    public int[] solution(int[] lottos, int[] win_nums) {
        int[] answer = new int[2];
        int min =0;
        int zero=0;
        for(int num: lottos)    
        {
            if(num==0) zero++;
            for(int num2: win_nums) if(num==num2) {min++; break;}
        }    

        answer[0] =get_rank(min+zero);
        answer[1] =get_rank(min);
        return answer;
    }
    
    int get_rank(int cnt)
    {
        switch(cnt)
        {
            case 0:
            case 1: return 6;
            case 2: return 5;
            case 3: return 4;
            case 4: return 3;
            case 5: return 2;
            case 6: return 1;          
        }
        return 0;
    }
}