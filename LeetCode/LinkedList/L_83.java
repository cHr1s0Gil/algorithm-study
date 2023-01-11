package LeetCode.LinkedList;

class ListNode {
    int val;
    ListNode next;

    ListNode(int x) {
        val = x;
        next = null;
    }
}


public class L_83 {
    public ListNode deleteDuplicates(ListNode head) {
        if(head == null)
            return head;

        ListNode currentNode = head;
        
        while(currentNode.next != null) {
            if(currentNode.val == currentNode.next.val)
                currentNode.next = currentNode.next.next;
            else
                currentNode = currentNode.next;
        }
        return head;
    }
}
