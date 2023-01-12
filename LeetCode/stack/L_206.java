package LeetCode.stack;

class ListNode {
    int val;
    ListNode next;

    ListNode() {
    }

    ListNode(int val) {
        this.val = val;
    }

    ListNode(int val, ListNode next) {
        this.val = val;
        this.next = next;
    }
}

public class L_206 {
    public ListNode reverseList(ListNode head) {
        ListNode stackNode = null;

        while (head != null) {
            ListNode temp = new ListNode(head.val, stackNode);
            stackNode = temp;
            head = head.next;
        }

        return stackNode;
    }
}
