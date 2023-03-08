/* 
    392. Is Subsequence
    https://leetcode.com/problems/is-subsequence/?envType=study-plan&id=level-1
 */
package LeetCode.twoPointer;

public class L_392 {
    public boolean isSubsequence(String s, String t) {
        if(s.length() > t.length()) 
            return false;

        if(s.length() == 0)
            return true;

        int sPoint = 0;
        for(int i = 0; i < t.length(); i++) {
            if(s.charAt(sPoint) == t.charAt(i))
                sPoint++;
            if(sPoint == s.length()) return true;
        }
        
        return false;
    }
}
