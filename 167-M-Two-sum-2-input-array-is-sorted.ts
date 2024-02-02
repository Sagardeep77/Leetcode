https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/description/
function twoSum(arr: number[], target: number): number[] {
    let start = 0;
    let end = arr.length - 1;

    while (start < end) {
        if (target === arr[start] + arr[end]) {
            return [start+1, end+1];
        } else if (target < arr[start] + arr[end]) {
            end--;
        }
        else
            start++;
    }

}

