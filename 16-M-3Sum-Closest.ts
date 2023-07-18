function threeSumClosest(nums: number[], target: number): number {
    nums = nums.sort((a,b)=> a-b);
    console.log(nums);
    
    const getMin = function(min,calc){
        if(Math.abs(target - min) <= Math.abs(target - calc)){
            return min;
        }
        return calc;
    }
    
    const helper = function(curr,i,j):number{
        if(j-i <= 0) return ;
        let min;
        while(i != j){
            const calc = curr + nums[i]+nums[j];
            if(calc === target) return target;
            else if(calc < target){
                i++;
            } 
            else{
                j--;
            }
            min = min === undefined ? calc : getMin(min,calc);

        }
        return min;
    }
    
    let _min;
    
    for(let x = 0; x < nums.length - 2; x++){
        const calc = helper(nums[x],x+1,nums.length - 1);
            _min = _min === undefined ? calc : getMin(_min,calc);
    }
    
    return _min;
};
