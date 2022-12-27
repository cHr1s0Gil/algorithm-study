package BOJ.Java.DFS;

import java.util.Scanner;

public class B_15650 {
    private static int n;
    private static int m;
    private static int[] answer;

    public static void main(String[] args) {
        initVar();
        dfs(1, 0);
    }

    private static void initVar() {
        Scanner s = new Scanner(System.in);

        n = s.nextInt();
        m = s.nextInt();
        answer = new int[m];
    }

    private static void dfs(int idx, int length) {
        if(length == m) {
            for(int i = 0; i < length; i++) System.out.print(answer[i] + " ");
            System.out.println();

            return;
        }

        for(int i = idx; i <= n; i++) {
            answer[length] = i;
            dfs(i + 1, length + 1);
        }
        return;
    }
}