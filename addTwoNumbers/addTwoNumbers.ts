/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
    const sumNode = new ListNode();
    let curr = sumNode;
    let carry = 0;

    while (l1 != null || l2 != null || carry != 0) {
        const l1Val = l1 ? l1.val : 0;
        const l2Val = l2 ? l2.val : 0;

        const columnVal = l1Val + l2Val + carry;

        carry = Math.floor(columnVal / 10);
        const newNode = new ListNode(columnVal % 10);

        curr.next = newNode;
        curr = newNode;

        l1 = l1 ? l1.next : null;
        l2 = l2 ? l2.next : null;
    }

    return sumNode.next;
};