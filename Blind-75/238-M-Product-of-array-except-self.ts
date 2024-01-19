function productExceptSelf(nums: number[]): number[] {
    const prefixMul = [];
    const suffixMul = [];
    for(let x = 0; x < nums.length; x++){
        prefixMul[x] = x === 0 ? 1 : prefixMul[x-1] * nums[x-1];
        const last = nums.length - 1 - x;
        suffixMul[last] = last === nums.length - 1 ? 1 : suffixMul[last+1] * nums[last + 1];
    }

    for(let x = 0; x < nums.length; x++){
        prefixMul[x] *= suffixMul[x];
    }
    return prefixMul;
};