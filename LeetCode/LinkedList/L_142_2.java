package LeetCode.LinkedList;

public class L_142_2 {
    public ListNode detectCycle(ListNode head) {
        ListNode singleStep = head;
        ListNode doubleStep = head;

        while(doubleStep.next != null && doubleStep.next.next != null) {
            singleStep = singleStep.next;
            doubleStep = doubleStep.next.next;

            if(singleStep == doubleStep) {
                singleStep = head;
                while(singleStep != doubleStep) {
                    singleStep = singleStep.next;
                    doubleStep = doubleStep.next;
                }
                return singleStep;
            }
        }
        return null;
    }
}
