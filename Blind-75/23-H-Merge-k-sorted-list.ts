// https://leetcode.com/problems/merge-k-sorted-lists/description/


function mergeKLists(lists: Array<ListNode | null>): ListNode | null {
    return lists.reduce((newList, currList, ) => {
        return mergeTwoSortedList(newList,currList);
    }, null)
};

function mergeTwoSortedList(list1: ListNode, list2: ListNode) : ListNode | null {

    if(!list1) return list2;
    if(!list2) return list1;

    if(list1.val <= list2.val){
        list1.next = mergeTwoSortedList(list1.next, list2);
        return list1;
    }
    list2.next = mergeTwoSortedList(list1, list2.next);
    return list2;
}