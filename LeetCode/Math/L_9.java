package LeetCode.Math;

public class L_9 {
    public boolean isPalindrome(int x) {
        String temp = Integer.toString(x);
        int leftPt = 0;
        int rightPt = temp.length() - 1;
    
        while(leftPt < rightPt) {
            if(temp.charAt(leftPt++) != temp.charAt(rightPt--))
                return false;
        }

        return true;
    }
}
