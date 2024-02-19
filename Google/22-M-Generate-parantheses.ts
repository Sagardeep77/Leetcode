//https://leetcode.com/problems/generate-parentheses/
const dp = [];
dp[1] = ["()"];
dp[0] = [];
function generateParenthesis(num: number): string[] {
    function util(n:number):Set<string>{
        if(dp[n]){
             return dp[n];
        }
        const s = new Set<string>();
        let start = n;

        while(start-- > 1){
            const arr1 = util(start);
            const arr2 = util(n - start);
            arr1.forEach(ele1 => {
                arr2.forEach(ele2 => {
                    s.add(ele1+ele2);
                })
                
            });
            
        }
        const newArr = util(n-1);
        newArr.forEach(ele => {
            s.add(`(${ele})`);
        })
        dp[n] = s;
        return s;
    };

    return Array.from(util(num));
};