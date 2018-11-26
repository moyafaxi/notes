// 给定两个非空链表来表示两个非负整数。位数按照逆序方式存储，它们的每个节点只存储单个数字。将两数相加返回一个新的链表。

// 你可以假设除了数字 0 之外，这两个数字都不会以零开头。

// 示例：

// 输入：(2 -> 4 -> 3) + (5 -> 6 -> 4)
// 输出：7 -> 0 -> 8
// 原因：342 + 465 = 807



/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */


function ListNode(val) {
    this.val = val;
    this.next = null;
}
var addTwoNumbers = function(l1, l2) {
    var dummy = new ListNode(-1);
    var cur = dummy;
    var carry = 0;
    while (l1 != null || l2 != null) {
        var d1 = l1 == null ? 0 : l1.val;
        var d2 = l2 == null ? 0 : l2.val;
        var sum = d1 + d2 + carry;
        carry = sum >= 10 ? 1 : 0;
        cur.next = new ListNode(sum % 10);
        cur = cur.next;
        if (l1 != null) l1 = l1.next;
        if (l2 != null) l2 = l2.next;
    }
    if (carry == 1) cur.next = new ListNode(1);
    return dummy.next;
};