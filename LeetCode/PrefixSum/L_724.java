/* 
    https://leetcode.com/problems/find-pivot-index/description/?envType=study-plan&id=level-1 
*/

package LeetCode.PrefixSum;

public class L_724 {
    public int pivotIndex(int[] nums) {
        int totSum = 0;
        for(int i = 0; i < nums.length; i++)
            totSum += nums[i];
        
        int lSum = 0;
        for(int i = 0; i < nums.length; i++) {
            totSum -= nums[i];
            if(lSum == totSum) return i;
            lSum += nums[i];
        }

        return -1;
    }
}
