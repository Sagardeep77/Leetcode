// https://leetcode.com/problems/summary-ranges/
function summaryRanges(nums: number[]): string[] {
    let index = 0;
    const ans : string[] = []; 
    while(index < nums.length){
        let currList:string = `${nums[index]}`;        
        const startIndex = index;
        while(((index + 1) < nums.length) && ((nums[index] + 1) === nums[index + 1])){
            index++;
        }
        if(startIndex !== index){
            currList += `->${nums[index]}`;
        }
        ans.push(currList);
        index++;
    }
    return ans;
};