// https://leetcode.com/problems/reorder-list/description/


function reorderList(head: ListNode | null): void {
    let left = head;
    let right = reverseList(splitList(head));
  
    let check = 1;
    while (left && right) {
      if (check === 1) {
        const temp = left.next;
        left.next = right;
        left = temp;
        check = 2;
      }
      if (check === 2) {
        const temp = right.next;
        right.next = left;
        right = temp;
        check = 1;
      }
    }
  }
  
  function splitList(head): ListNode | null {
    let fast = head;
    let slow = fast;
    let prevSlow = head;
    let ans = null;
    while (fast && fast.next) {
      fast = fast.next.next;
      prevSlow = slow;
      slow = slow.next;
    }
    if (!fast) {
      ans = slow;
      prevSlow.next = null;
    } else {
      ans = slow.next;
      slow.next = null;
    }
  
    return ans;
  }
  
  function reverseList(head): ListNode | null {
    if (!head || !head.next) return head;
    let temp = head.next;
    const reversedHead = reverseList(head.next);
    head.next = null;
    temp.next = head;
    return reversedHead;
  }