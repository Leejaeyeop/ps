class Solution {
    static int saved,min,width,height,temp;
    static int x,y=1;
    static int[][] map;
    public int[] solution(int rows, int columns, int[][] queries) {
        int[] answer = new int[queries.length];
        map = new int[rows+1][columns+1];
        int k=0;
        int num=1;
        
       for(int i=1; i<rows+1; i++) for(int j=1; j<columns+1; j++) {map[i][j] =num++;} 
       
        for(int[] query: queries)
        { 
            min=10001;
            x= query[0]; //처음
            y= query[1]; //처음
            saved=map[x+1][y];
            height = query[2] - query[0];
            width = query[3] - query[1];

            right(); down(); left(); up();
            answer[k++] = min;
        }
        return answer;
    }
    
    void right()
    {     
        for(int i=0; i<width; i++,y++)
        {    
            if(min>map[x][y]) min=map[x][y];
            swap();
        }
    }
    void down()
    {    
        for(int i=0; i<height; i++,x++)
        {
           if(min>map[x][y]) min=map[x][y];
            swap();
        }
    }
    void left()
    {    
        for(int i=0; i<width; i++,y--)
        {
           if(min>map[x][y]) min=map[x][y];
            swap();
        }
    }
    void up()
    {    
        for(int i=0; i<height; i++,x--)
        {
            if(min>map[x][y]) min=map[x][y];
            swap();
        }
    }
    void swap()
    {
        temp = saved;
        saved = map[x][y];
        map[x][y] = temp;
    }
}