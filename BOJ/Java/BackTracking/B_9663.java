package BOJ.Java.BackTracking;

import java.util.Scanner;

public class B_9663 {
    private static int N;
    private static int[] queen;
    private static int answer;

    public static void main(String[] args) {
        initVar();
        findSpace(0);
        System.out.println(answer);
    }

    private static void initVar() {
        Scanner s = new Scanner(System.in);

        N = s.nextInt();
        queen = new int[N];
        answer = 0;
    }

    public static void findSpace(int row) {
        if(row == N) {
            answer++;
            return;
        }

        for(int i = 0; i < N; i++) {
            queen[row] = i;
            if(checkQueen(row))
                findSpace(row + 1);
        }
    }

    private static boolean checkQueen(int row) {
        for(int i = 0; i < row; i++) {
            if(queen[row] == queen[i]) return false;
            else if(Math.abs(i - row) == Math.abs(queen[row] - queen[i])) return false;
        }

        return true;
    }
}
