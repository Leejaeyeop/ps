class Solution {
    public String solution(String new_id) {
        
        String answer = new_id;
        answer = answer.toLowerCase();
        answer = answer.replaceAll("[^a-z0-9-._]","");
        
        while(answer.indexOf("..")>-1) answer = answer.replaceAll("[.][.]",".");

        if(answer.length()>1 &&answer.charAt(0) == '.') answer = answer.substring(1,answer.length());
        if(answer.charAt(answer.length()-1) == '.') answer = answer.substring(0,answer.length()-1);
        if(answer.length()==0) answer +="a";
        if(answer.length()>=16) 
        {
        answer = answer.substring(0,15);
        if(answer.charAt(answer.length()-1) == '.') 
        answer = answer.substring(0,answer.length()-1);
        }
        while(answer.length()<3)
        {
            answer += answer.charAt(answer.length()-1);
        }
        System.out.println(answer);
        
        
        return answer;
    }
}