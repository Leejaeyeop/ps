import java.util.ArrayList;
class Solution {
    static int boundary=0;
    static ArrayList<Integer> lock_list;
    public boolean solution(int[][] key, int[][] lock) {
        boolean answer = true;
        ArrayList<Integer> key_list= new ArrayList<Integer>();
        lock_list= new ArrayList<Integer>();
        boundary = lock.length-1;
         for(int i=0; i<lock.length; i++) 
        {
            for(int j=0; j<lock.length; j++)
            {
                if(lock[i][j]==0)
                {
                    lock_list.add(i);
                    lock_list.add(j);
                }      
            }
        }
        
        for(int i=0; i<4; i++)
        {  
          key_list=get_list(key); 
          if(check(key_list)) return true;  
          else if(i<3) key = Turn(key); //회전
        }
        return false;
    }
    
    boolean check(ArrayList<Integer> key_list)
    {
      if(lock_list.size()==0) return true;
        
      ArrayList<Integer> temp;
      for(int i=0; i<key_list.size(); i+=2)
      {
          int gap_x = lock_list.get(0)-key_list.get(i) ;
          int gap_y = lock_list.get(1)-key_list.get(i+1);
          temp = new ArrayList<Integer>();
          for(int j=0; j<key_list.size(); j+=2)
          {
              int x = key_list.get(j) + gap_x;
              int y = key_list.get(j+1) + gap_y;
              if(x<0 || x>boundary || y<0 || y>boundary) continue;
              temp.add(x); temp.add(y);
          }
          if(temp.size()!=lock_list.size()) continue;
          else
          {
          int cnt = temp.size()/2;
          for(int k=0; k<temp.size(); k+=2)
          {
              if(lock_list.get(k)==temp.get(k)&&lock_list.get(k+1)==temp.get(k+1)) cnt--;
              else break;
          }
           if(cnt==0) return true;
          }
      }
        return false;
    }
    
    ArrayList<Integer> get_list(int[][] key)
    {
    ArrayList<Integer> list = new ArrayList<Integer>();
        for(int i=0; i<key.length; i++) 
        {
            for(int j=0; j<key.length; j++)
            {
                if(key[i][j]==1)
                {
                    list.add(i);
                    list.add(j);
                }      
            }
        }
        return list;
    }
    
    int[][] Turn(int[][] key)
    {
        int[][] newKey = new int[key.length][key.length];
        for(int i=0; i<key.length; i++)
        {
            int k=0;
            for(int j=key.length-1; j>-1; j--,k++)
            {
                newKey[i][k] = key[j][i];
            }
        }
        return newKey;
    }
}