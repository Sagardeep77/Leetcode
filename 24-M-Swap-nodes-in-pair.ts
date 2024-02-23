//https://leetcode.com/problems/swap-nodes-in-pairs/

function swapPairs(head: ListNode | null): ListNode | null {
    if(!head || !head.next) return head;
    let curr = head.next.next;
    let end = head;
    let prev = null;
    let index = 3;
    const ans = head.next;
    head.next.next = end;
    while(curr){
        if(index %2 === 0){
            //swap
            end.next = curr;
            const temp = curr.next;
            curr.next = prev;
            end = prev;
            curr = temp;
        }
        else{
            prev= curr;
            curr = curr.next;
        }
        index++;
    }
    if(index % 2 !== 0)
        end.next = null;
    else{
        end.next = prev;
    }
    return ans;
};

function swapPairsRecursive(head: ListNode | null): ListNode | null {
    if(!head || !head.next) return head;
    const ans =head.next;
    const c = swapPairs(head.next.next);
    head.next.next = head;
    head.next = c;
    return ans;
};