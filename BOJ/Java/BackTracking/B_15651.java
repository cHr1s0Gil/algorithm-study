package BOJ.Java.BackTracking;

import java.util.Scanner;

// 자연수 N과 M이 주어졌을 때, 아래 조건을 만족하는 길이가 M인 수열을 모두 구하는 프로그램을 작성하시오.

// 1부터 N까지 자연수 중에서 M개를 고른 수열
// 같은 수를 여러 번 골라도 된다.

public class B_15651 {
    private static int N;
    private static int M;
    private static StringBuilder answer;
    private static int[] temp;

    public static void main(String[] args) {
        initVar();
        dfs(0);
        System.out.println(answer);
    }

    private static void initVar() {
        Scanner s = new Scanner(System.in);

        N = s.nextInt();
        M = s.nextInt();
        answer = new StringBuilder();
        temp = new int[M];
    }

    public static void dfs(int length) {
        if(length == M) {
            for(int i = 0; i < length; i++) 
                answer.append(temp[i] + " ");
            answer.append("\n");
            
            return;
        }

        for(int i = 1; i <= N; i++) {
            temp[length] = i;
            dfs(length + 1);
        }
    }
}
