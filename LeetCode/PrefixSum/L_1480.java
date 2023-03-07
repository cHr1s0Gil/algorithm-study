/* 
    https://leetcode.com/problems/running-sum-of-1d-array/description/?envType=study-plan&id=level-1
*/

package LeetCode.PrefixSum;

public class L_1480 {
    public int[] runningSum(int[] nums) {
        if(nums.length == 1) return nums;
        for(int i = 1; i < nums.length; i++)
            nums[i] += nums[i - 1];

        return nums;
    }
}