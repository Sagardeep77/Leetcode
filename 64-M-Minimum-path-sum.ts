//https://leetcode.com/problems/minimum-path-sum/description/

function minPathSum(grid: number[][]): number {
    const dp = [...Array(grid.length)].map(_ => Array(grid[0].length).fill(0));
    for (let row = 0; row < grid.length; row++) {
        for (let col = 0; col < grid[0].length; col++) {
            let top;
            let left;

            if (row === 0 && col === 0) {
                top = 0;
                left = 0;
            }
            else if (row === 0) {
                top = Infinity;
                left = dp[row][col - 1];
            }

            else if (col === 0) {
                left = Infinity;
                top = dp[row - 1][col];
            }
            else {
                top = dp[row - 1][col];
                left = dp[row][col - 1];
            }

            dp[row][col] = Math.min(top, left) + grid[row][col];

        }
    }

    return dp[grid.length - 1][grid[0].length - 1];
};

