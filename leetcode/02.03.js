/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} node
 * @return {void} Do not return anything, modify node in-place instead.
 */
//实现一种算法，删除单向链表中间的某个节点（即不是第一个或最后一个节点），假定你只能访问该节点。
// 首先 因为该节点不是首或尾节点,所以只要使该节点的值等于下一节点,该节点的指向变成下下节点即可.
 var deleteNode = function(node) { 
    node.val=node.next.val;
    node.next=node.next.next;
};