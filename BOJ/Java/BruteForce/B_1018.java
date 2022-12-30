package BOJ.Java.BruteForce;

import java.util.Scanner;

public class B_1018 {
    private static int N;
    private static int M;
    private static char board[][];
    private static int count;

    public static void main(String[] args) {
        initVar();
        searchBoard();
        System.out.println(count);
    }

    private static void initVar() {
        Scanner s = new Scanner(System.in);

        N = s.nextInt();
        M = s.nextInt();

        board = new char[N][M];

        for(int i = 0; i < N; i++) {
            String line = s.next();
            for(int j = 0; j < M; j++)
                board[i][j] = line.charAt(j);
        }

        count = Integer.MAX_VALUE;
    }

    public static void searchBoard() {
        int row_range = M - 7;
        int col_range = N - 7;

        for(int i = 0; i < row_range; i++) {
            for(int j = 0; j < col_range; j++) {
                countBoard(i, j);
            }
        }
    }

    public static void countBoard(int x, int y) {
        char wBoard[][] = {
            {'W', 'B', 'W', 'B', 'W', 'B', 'W', 'B'},
            {'B', 'W', 'B', 'W', 'B', 'W', 'B', 'W'}
        };

        char bBoard[][] = {
            {'B', 'W', 'B', 'W', 'B', 'W', 'B', 'W'},
            {'W', 'B', 'W', 'B', 'W', 'B', 'W', 'B'}
        };

        int wCount = 0;
        int bCount = 0;

        for(int i = 0; i < 8; i++) {
            for(int j = 0; j < 8; j++) {
                if(wBoard[i % 2][j] != board[i + y][j + x])
                    wCount++;
                else if(bBoard[i % 2][j] != board[i + y][j + x])
                    bCount++;
            }
        }

        if(wCount < bCount)
            count = wCount < count ? wCount : count;
        else
            count = bCount < count ? bCount : count;
    }
}
