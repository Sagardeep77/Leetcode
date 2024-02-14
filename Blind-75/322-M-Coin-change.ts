//https://leetcode.com/problems/coin-change/
function coinChange2(coins: number[], amount: number): number {
    coins.sort((a,b) => a - b);
    const dp = new Array(amount+1).fill(Infinity);
    dp[0] = 0;
    for(let x = 1; x < amount+1; x++){
        for(const coin of coins){
            if(x - coin < 0){
                break; 
            }
            else{
                dp[x] = Math.min(dp[x - coin] + 1, dp[x] );
            }
        }
    }

    return dp[amount] === Infinity ? -1 : dp[amount];
};

function coinChange(coins: number[], amount: number): number {
    const dp = new Array(amount+1).fill(Infinity);
    dp[0] = 0;
   for(const coin of coins){
       for(let start = coin; start <= amount; start++){
           dp[start] = Math.min(dp[start], dp[start - coin] + 1);
       }
   }

    return dp[amount] === Infinity ? -1 : dp[amount];
};