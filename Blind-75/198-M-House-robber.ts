function rob(nums: number[]): number {
    if (nums.length === 1) return nums[0];
    let ptr1 = nums[0];
    let ptr2 = nums[1];
    if (ptr1 > ptr2) {
        ptr2 = ptr1;
    }

    for (let x = 2; x < nums.length; x++) {
        let temp = ptr2;
        ptr2 = ptr1 + nums[x];
        ptr1 = temp;
        if (ptr1 > ptr2) {
            ptr2 = ptr1;
        }
    }

    return ptr2;
};