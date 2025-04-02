import java.io.*;
import java.util.StringTokenizer;

public class Main {
	static int n,k,answer;
	static boolean[] letters = new boolean[26]; //a -0 z -25
	static String[] strs;
	public static void main(String[] args) throws IOException{
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(System.out));
        StringTokenizer st = new StringTokenizer(br.readLine());
		n = Integer.parseInt(st.nextToken()); 
		k = Integer.parseInt(st.nextToken())-5;
		strs = new String[n];

		letters['a'-'a'] = true;letters['n'-'a'] = true;letters['t'-'a'] = true; letters['i'-'a'] = true;letters['c'-'a'] = true;
		
		
		for(int i=0; i<n; i++)
		{
		   String str = br.readLine();
		   str = str.substring(4,str.length()-4);
		   strs[i] = str;
		}
		
		if(k>=0) Combination(0,k);
		
		bw.write(Integer.toString(answer));
        bw.flush();
        bw.close();
        br.close();
	}
	
	static void Combination(int begin,int cnt)
	{
		
		if(cnt==0) {search(); return;}
			
		for(int i=begin; i<26; i++)
		{
			if(!letters[i])
			{
			   letters[i] = true;
			   Combination(i+1,cnt-1);
			   letters[i] = false;
			}
		}
	}
	
	static void search()
	{ 
		int cnt=0;
	    for(int i=0; i<n; i++)
	    {
	    	String cur_str = strs[i]; //현재 문자열
	    	if(cur_str == null) { cnt++; continue;} //빈 문자열 -> 이미 완성
	    	boolean flag=true;
	    	
	    	for(int k=0; k<cur_str.length(); k++)
	    	{
	    		if(!letters[cur_str.charAt(k)-'a']) { flag = false; break;}
	    	}
	    	if(flag) cnt++;
	    }
	    answer = Math.max(cnt, answer);
	}
} 