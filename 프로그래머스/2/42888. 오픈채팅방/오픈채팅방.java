import java.util.*;
class Solution {
    public String[] solution(String[] record) {
        Queue<String[]> messages = new LinkedList<String[]>();
        HashMap<String,String> map = new HashMap<>(); //아이디 - 닉네임
        for(String str: record)
        {
            String[] temp = str.split("\\s"); 
            String[] message = new String[2];
            if(temp[0].equals("Enter")) //입장
            {
                map.put(temp[1],temp[2]);
                message[0] = temp[1];
                message[1] = "님이 들어왔습니다.";
                messages.offer(message);
            }
            else if(temp[0].equals("Leave")) //퇴장
            {
                message[0] = temp[1];
                message[1] = "님이 나갔습니다.";
                messages.offer(message);
            }
            else //change
            {
                 map.put(temp[1],temp[2]);
            }
        }
        int idx=0;
        String[] answer = new String[messages.size()];
        while(!messages.isEmpty())
        {
          String[] message = messages.poll();
          String str = map.get(message[0])+message[1];
          answer[idx++] = str; 
        }
        return answer;
    }
}