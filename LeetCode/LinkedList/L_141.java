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
        ListNode singleForward = head;
        ListNode doubleForward = head;
    
        while(singleForward != null && singleForward.next != null) {
            if(singleForward == doubleForward)
                return true;
            singleForward = singleForward.next;
            doubleForward = doubleForward.next.next;
        }

        return false;
    }
}
