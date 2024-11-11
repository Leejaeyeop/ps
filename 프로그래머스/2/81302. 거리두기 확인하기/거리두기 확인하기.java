import java.util.*;
class Solution {
    static boolean[][] check;
    boolean find(int x,int y,int distance,String[][] map)
    {
        if(x==5|| y ==5|| x<0 || y<0 ||map[x][y].equals("X") || check[x][y]) return true; //칸막이 + 인덱스 초과
        check[x][y] = true;
        
        if(map[x][y].equals("P")) return false; //사람
        else if(distance==2) return true; //테이블 + 거리 2
        else //테이블 + 거리 2미만
        {
           if(find(x,y+1,distance+1,map) && find(x+1,y,distance+1,map) &&find(x-1,y,distance+1,map) && find(x,y-1,distance+1,map)) return true;
           else return false;
        }    
    }
    
    public int[] solution(String[][] places) {
        int[] answer = new int[places.length];
        for(int i=0; i<places.length; i++)
        {
            String[][] map = new String[5][5];
            Queue<int[]> ps = new LinkedList<int[]>();
            boolean keep_distance=true;
            check = new boolean[5][5];
            for(int j=0; j<5; j++)
            {
                for(int k=0; k<5; k++)
                {
                    map[j][k] = places[i][j].substring(k,k+1);
                    if(map[j][k].equals("P")) 
                    {
                        int[] xy = new int[2];
                        xy[0] =j; xy[1] =k;
                        ps.offer(xy);
                    }
                }
            }
            while(!ps.isEmpty()) 
            {  
                int[] xy = ps.poll();
                check[xy[0]][xy[1]] = true;
                if(!find(xy[0],xy[1]+1,1,map) || !find(xy[0]+1,xy[1],1,map)||!find(xy[0]-1,xy[1],1,map) || !find(xy[0],xy[1]-1,1,map))
                {
                    keep_distance=false;
                    break;
                }
            }
            if(!keep_distance) answer[i] = 0;
            else answer[i] =1;
        }
        
        return answer;
    }
}