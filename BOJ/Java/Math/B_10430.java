import java.util.Scanner;

public class B_10430 {
    public static void main(String[] args) {
        int num[] = new int[3];
        Scanner s = new Scanner(System.in);
        for(int i = 0; i < 3; i++)
            num[i] = s.nextInt();

        int a = num[0];
        int b = num[1];
        int c = num[2];
        System.out.println((a + b) % c);
        System.out.println(((a % c) + (b % c)) % c);
        System.out.println((a * b) % c);
        System.out.println(((a % c) * (b % c)) % c);
    }
}
