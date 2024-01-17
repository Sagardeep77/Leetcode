//Solution - 1
function maxSubArray(nums: number[]): number {
    let start =0 ;
    let end = 0;
    let maxSum = nums[0];
    let currSum = 0;

    let shouldAdd = true;

    while(end < nums.length){
        if(shouldAdd){
            currSum += nums[end];
            maxSum = Math.max(maxSum, currSum)
        }

        if(currSum < 0){
            shouldAdd = false;
            currSum -= nums[start];
            start++;

            if(start > end){
                end = start;
                shouldAdd = true;
            }
        }
        else{
            shouldAdd = true;
            end++;
        }
    }
    return maxSum;
};

//Solution - 2 more optimized

function maxSubArray2(nums: number[]): number {
    let windowSum = 0;
    let max = -Infinity;
    for(const num of nums){
        if(windowSum < 0)
            windowSum = 0;
        
        windowSum += num;
        max = Math.max(windowSum,max);
    }

    return max;
};
