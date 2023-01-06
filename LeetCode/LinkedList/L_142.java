package LeetCode.LinkedList;

import java.util.HashSet;
import java.util.Set;

public class L_142 {
    public ListNode detectCycle(ListNode head) {
        Set<ListNode> nodeSet = new HashSet<>();

        while(head != null) {
            if(!nodeSet.add(head))
                return head;
            head = head.next;
        }
        return null;
    }
}
