import java.util.*;
class Solution {
    public String[] solution(String[] files) {

        String[][] files2 = new String[files.length][3];
        
        for(int i=0; i<files.length; i++)
        {
            files2[i][2]=Integer.toString(i); //입력 순서
            files2[i][0]="";
            files2[i][1]="";
            int j=0;
            while('0'>files[i].charAt(j) || '9'<files[i].charAt(j)) {j++;} //숫자 아님   
            files2[i][0] = files[i].substring(0,j).toLowerCase();

            while('0'<=files[i].charAt(j) && '9'>=files[i].charAt(j)) //숫자
            {
                files2[i][1]+=files[i].charAt(j);
                j++;
                if(j==files[i].length()) break;//끝 
            }  
        
        }
        
       Arrays.sort(files2, new Comparator<String[]>()
        {
            @Override
            public int compare(String[] s1,String[] s2)
            {
               int num = s1[0].compareTo(s2[0]);
               if(num!=0) return num;
               else
               { 
               num = Integer.parseInt(s1[1])-Integer.parseInt(s2[1]);
               if(num!=0) return num;
               else return Integer.parseInt(s1[2])-Integer.parseInt(s2[2]); //다 같음 -> 입력순
               }
            }
        });
        String[] answer= new String[files2.length];
        for(int i=0; i<files2.length; i++)
        {
            answer[i] = files[Integer.parseInt(files2[i][2])];
        }
        return answer;
    }
}