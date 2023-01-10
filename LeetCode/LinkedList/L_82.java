package LeetCode.LinkedList;

public class L_82 {
    public ListNode deleteDuplicates(ListNode head) {
        ListNode prevNode = new ListNode(0, head);
        ListNode prevHead = prevNode;
        ListNode currNode = head;

        while(currNode != null && currNode.next != null) {
            if(currNode.val == currNode.next.val) {
                while(currNode.next != null && currNode.val == currNode.next.val)
                    currNode.next = currNode.next.next;
                currNode = currNode.next;
                prevNode.next = currNode;
            }
            else {
                currNode = currNode.next;
                prevNode = prevNode.next;
            }
        }

        return prevHead.next;
    }
}
