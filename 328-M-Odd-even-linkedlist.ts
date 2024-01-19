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

function oddEvenList(head: ListNode | null): ListNode | null {

    if(!head || !head.next) return head;

    let curr = head;
    let oddHead = null;
    let evenHead = null;
    let secondList = null;
    let type = 1;
    
    while (curr) {
        if (type === 1) {
            type = 2;
            if (oddHead === null) {
                oddHead = curr;
            }
            else {
                oddHead.next = curr;
                oddHead = curr;
            }
        }
        else if (type === 2) {
            type = 1;
            if (evenHead === null) {
                evenHead = curr;
                secondList = curr;
            }
            else {
                evenHead.next = curr;
                evenHead = curr;
            }
        }
        curr = curr.next;
    }
    oddHead.next = secondList;
    evenHead.next = null;
    return head;
};