import java.io.*;
import java.util.StringTokenizer;
public class Main {
	static int n,m;
    static int[] arr;

	public static void main(String[] args) throws IOException{
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		
        StringTokenizer st = new StringTokenizer(br.readLine());
        n = Integer.parseInt(st.nextToken());
        m = Integer.parseInt(st.nextToken());
        arr = new int[n];
        st = new StringTokenizer(br.readLine());
        
        for(int i=0; i<n; i++) arr[i] = Integer.parseInt(st.nextToken());
        int begin=0;
        int end = 1000000000;
        int answer=0;
        
        while(begin<=end)
        {
        	int mid = (begin+end)/2;
        	long result = search(mid);
        	
        	if(result>=m)
        	{
        		answer = mid; 
        		begin = mid+1;
        	}
        	else end = mid-1;
        }
        
		System.out.print(answer);
        br.close();
	}
	
	static long search(int h)
	{
		long sum=0;
		for(int i=0; i<n; i++)
		{ 
		   int num = arr[i]-h;
		   if(num>0) sum+=num;	
		}
		return sum;
	}
} 