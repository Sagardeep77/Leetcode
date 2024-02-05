//https://leetcode.com/problems/number-of-islands/
function numIslands(grid: string[][]): number {
    const helper = function(row, col, parent){
        
        if(row < 0 || row >= grid.length || col < 0 || col >= grid[0].length)
            return ;
        
        if(visited[`${row}-${col}`] || grid[row][col] === "0")
            return ;

        if(!visited[`${row}-${col}`] && grid[row][col] === "1"){
            visited[`${row}-${col}`] = parent;
        }

        helper(row - 1, col, parent);
        helper(row + 1, col, parent);
        helper(row, col - 1, parent);
        helper(row, col + 1, parent);

    }
    let count = 1;
    let visited = {};
    for(let x = 0; x < grid.length; x++){
        for(let y = 0; y < grid[0].length; y++){
            if(!visited[`${x}-${y}`] && grid[x][y] === "1"){
                helper(x,y,count);
                count++;
            }
        }
    }

    return count - 1;
};