function findMin(nums: number[]): number {
    const length = nums.length;
    const findPivot = (l: number, r: number): number => {
        const mid = l + Math.floor((r - l) / 2);

        if (mid === 0) {
            if (nums[mid] > nums[mid + 1]) return mid + 1;
            else return mid;
        }
        else if (mid === length - 1) {
            if (nums[mid] < nums[mid - 1]) return mid;
            return mid - 1;
        }
        else {
            if (nums[mid] < nums[mid - 1] && nums[mid] < nums[mid + 1]) {
                return mid;
            }
            if (nums[mid] > nums[r]) {
                return findPivot(mid + 1, r);
            }
            return findPivot(l, mid - 1);
        }
    };

    const pivot = findPivot(0, length - 1);
    return nums[pivot];
}
