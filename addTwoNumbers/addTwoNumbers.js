 
 function ListNode(val, next) {
     this.val = (val === undefined ? 0 : val)
     this.next = (next === undefined ? null : next)
 }

 var addTwoNumbers = function(l1, l2) {
    const sumNode = new ListNode();
    let curr = sumNode;
    let carry = 0;

    while (l1 != null || l2 != null || carry != 0) {
        l1Val = l1 ? l1.val : 0;
        l2Val = l2 ? l2.val : 0;

        const columnVal = l1Val + l2Val + carry;
        carry = Math.floor(columnVal / 10);

        const newNode = new ListNode(columnVal % 10);
        curr.next = newNode;
        curr = newNode;

        l1 = l1.next ? l1.next : null;
        l2 = l2.next ? l2.next : null;
    }

    return sumNode.next;
};

const l1_3 = new ListNode(3);
const l1_2 = new ListNode(4, l1_3);
const l1 = new ListNode(2, l1_2);

const l2_3 = new ListNode(4);
const l2_2 = new ListNode(6, l2_3);
const l2 = new ListNode(5, l2_2);

const a = addTwoNumbers(l1, l2);

console.log(a);
