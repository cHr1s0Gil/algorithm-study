package LeetCode.LinkedList;

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

public class L_2 {
    public ListNode addTwoNumbers(ListNode l1, ListNode l2) {
        int carry = 0;
        int value = 0;
        ListNode resultNode = new ListNode(0, null);
        ListNode resultHead = resultNode;

        while(l1 != null || l2 != null || carry == 1) {
            value = 0;
            if(l1 != null) {
                value += l1.val;
                l1 = l1.next;
            }

            if(l2 != null) {
                value += l2.val;
                l2 = l2.next;
            }

            value += carry; 
            carry = value / 10;
            value %= 10;
            resultNode.next = new ListNode(value, null);
            resultNode = resultNode.next;
        }
        return resultHead.next;
    }
}
