import java.util.*;
class Solution {
    static HashSet<String> check = new HashSet<>();
    static int answer;
    static boolean end;
    static int max;
    public void bfs(Queue<int[][]> queue,int[][] board)
    {
        answer++;
        Queue<int[][]> new_queue = new LinkedList<>();
        while(!queue.isEmpty())
        {
            int[][] loc = queue.poll();
            move(loc,0,new_queue,board);
            move(loc,1,new_queue,board);
            move(loc,2,new_queue,board);
            move(loc,3,new_queue,board); 
            turn(loc,0,true,new_queue,board); 
            turn(loc,0,false,new_queue,board);
            turn(loc,1,true,new_queue,board);
            turn(loc,1,false,new_queue,board);
            if(end) break;
        }
        if(!end&&!new_queue.isEmpty())bfs(new_queue,board);
          
    } 
    public void move(int[][] arr,int direction,Queue<int[][]> queue,int[][] board)
    {
        int[][] loc = new int[2][2];
        loc[0][0] = arr[0][0]; loc[0][1] = arr[0][1]; loc[1][0] = arr[1][0]; loc[1][1] = arr[1][1];
        if(direction==0) //앞
        {
            loc[0][1]++; loc[1][1]++;
        }
        else if(direction==1) //뒤
        {
           loc[0][1]--; loc[1][1]--; 
        }    
        else if(direction==2) //위
        {
           loc[0][0]--; loc[1][0]--;
        }
        else //아래
        {
           loc[0][0]++; loc[1][0]++;
        }
        String a = Integer.toString(loc[0][0]);
        String b = Integer.toString(loc[0][1]);
        String c = Integer.toString(loc[1][0]);
        String d = Integer.toString(loc[1][1]); 
        if(check_outOfmap(loc,board) && !check.contains(a+","+b+","+c+","+d) && !check.contains(c+","+d+","+a+","+b))
        {
            queue.offer(loc);
            check.add(a+","+b+","+c+","+d);
            check.add(c+","+d+","+a+","+b);
            if((loc[0][0] == max && loc[0][1] == max) || (loc[1][0]==max && loc[1][1]==max)) end = true; //끝
        }
    }
    public void turn(int[][] arr,int axis_,boolean clock,Queue<int[][]> queue,int[][] board)
    {
        int[][] loc = new int[2][2];
        loc[0][0] = arr[0][0]; loc[0][1] = arr[0][1]; loc[1][0] = arr[1][0]; loc[1][1] = arr[1][1];
        int axis;
        int other;
        if(axis_==0) {axis=0; other=1;}
        else {axis=1; other=0;}

        try{
        if(clock) //시계 방향
        {
            if(loc[axis][0]>loc[other][0] && board[loc[other][0]][loc[other][1]+1]==0) //축 보다 위
            {loc[other][0]=loc[axis][0]; loc[other][1]=loc[axis][1]+1;}
            else if(loc[axis][0]<loc[other][0]&& board[loc[other][0]][loc[other][1]-1]==0) //축 보다 아래
            {loc[other][0]=loc[axis][0]; loc[other][1]=loc[axis][1]-1;}
            else if(loc[axis][1]>loc[other][1]&& board[loc[other][0]-1][loc[other][1]]==0) //축 보다 왼쪽
            {loc[other][0]=loc[axis][0]-1; loc[other][1]=loc[axis][1];}
            else if(loc[axis][1]<loc[other][1]&& board[loc[other][0]+1][loc[other][1]]==0)//축 보다 오른쪽
            {loc[other][0]=loc[axis][0]+1; loc[other][1]=loc[axis][1];}
        }
        else //반시계
        {
            if(loc[axis][0]>loc[other][0] && board[loc[other][0]][loc[other][1]-1]==0) //축 보다 위
            {loc[other][0]=loc[axis][0]; loc[other][1]=loc[axis][1]-1;}
            else if(loc[axis][0]<loc[other][0]&& board[loc[other][0]][loc[other][1]+1]==0) //축 보다 아래
            {loc[other][0]=loc[axis][0]; loc[other][1]=loc[axis][1]+1;}
            else if(loc[axis][1]>loc[other][1]&& board[loc[other][0]+1][loc[other][1]]==0) //축 보다 왼쪽
            {loc[other][0]=loc[axis][0]+1; loc[other][1]=loc[axis][1];}
            else if(loc[axis][1]<loc[other][1]&& board[loc[other][0]-1][loc[other][1]]==0)//축 보다 오른쪽
            {loc[other][0]=loc[axis][0]-1; loc[other][1]=loc[axis][1];}
        }
        String a = Integer.toString(loc[0][0]);
        String b = Integer.toString(loc[0][1]);
        String c = Integer.toString(loc[1][0]);
        String d = Integer.toString(loc[1][1]);     
        if(check_outOfmap(loc,board) && !check.contains(a+","+b+","+c+","+d) && !check.contains(c+","+d+","+a+","+b))
        {  
            queue.offer(loc);
            check.add(a+","+b+","+c+","+d);
            check.add(c+","+d+","+a+","+b);
            if((loc[0][0] == max && loc[0][1] == max) || (loc[1][0]==max && loc[1][1]==max)) end = true; //끝
        }   
        }catch(Exception e){}
    }
    public boolean check_outOfmap(int[][] loc,int[][] board)
    {
        for(int i=0; i<2; i++)
        { for(int j=0; j<2; j++)
        {if(loc[i][j] <=-1 || loc[i][j] >max) return false;}}
       if(board[loc[0][0]][loc[0][1]]==1 || board[loc[1][0]][loc[1][1]]==1) return false;
       else return true;
    }
    public int solution(int[][] board) {
        max = board.length-1;
        int[][] loc = {{0,0},{0,1}};
        check.add("0,0,0,1"); check.add("0,1,0,0");
        Queue<int[][]> queue = new LinkedList<>();
        queue.offer(loc);
        bfs(queue,board);
        return answer;
    }
}