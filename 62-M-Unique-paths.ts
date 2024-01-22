// https://leetcode.com/problems/unique-paths/description/

const getKey = (i,j) => `${i}-${j}`;
function uniquePaths(m: number, n: number): number {
    const dp = [...Array(m)].map( _ => Array(n).fill(1));
    const helper = function(){
        for(let x = 1; x < m; x++){
            for(let y = 1; y < n; y++){
                dp[x][y] = dp[x - 1][y] + dp[x][y - 1];
            }
        }
    }
    helper();
    return dp[m-1][n-1];
};