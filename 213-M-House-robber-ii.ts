function rob(nums: number[]): number {
    if(nums.length === 1) return nums[0];
    return Math.max(helper(nums.slice(0, nums.length - 1)), helper(nums.slice(1, nums.length)))
};

function helper(nums: number[]): number {
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