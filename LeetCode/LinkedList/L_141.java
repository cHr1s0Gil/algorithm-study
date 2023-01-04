package LeetCode.LinkedList;

class ListNode {
    int val;
    ListNode next;

    ListNode(int x) {
        val = x;
        next = null;
    }
}

public class L_141 {
    public boolean hasCycle(ListNode head) {
        if(head == null)
            return false;

        ListNode singleStep = head;
        ListNode doubleStep = head;

        while(doubleStep.next != null && doubleStep.next.next != null) {
            singleStep = singleStep.next;
            doubleStep = doubleStep.next.next;

            if(singleStep == doubleStep)
                return true;
        }
        return false;
    }
}
