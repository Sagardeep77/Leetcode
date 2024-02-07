//https://leetcode.com/problems/word-search/


function exist(grid: string[][], str: string): boolean {

    const maxRow = grid.length - 1;
    const maxCol = grid[0].length - 1;
    const dfs = function (row, col, visited, searchStr, currStr) {

        //console.log({currStr, searchStr})
        if (str === currStr)
            return true;
        if (row > maxRow || row < 0 || col > maxCol || col < 0)
            return false;


        if (!visited[`${row}-${col}`] && searchStr[0] === grid[row][col]) {
            visited[`${row}-${col}`] = true;
            currStr += grid[row][col];
            //dfs top

            if (dfs(row - 1, col, visited, searchStr.substring(1), currStr))
                return true;
            //dfs bottom

            if (dfs(row + 1, col, visited, searchStr.substring(1), currStr))
                return true;
            //dfs left

            if (dfs(row, col - 1, visited, searchStr.substring(1), currStr))
                return true;
            //dfs right

            if (dfs(row, col + 1, visited, searchStr.substring(1), currStr))
                return true;

            visited[`${row}-${col}`] = false;

        }
        return false;

    }

    for (let row = 0; row <= maxRow; row++) {
        for (let col = 0; col <= maxCol; col++) {
            if (dfs(row, col, {}, str, ""))
                return true;
        }
    }

    return false;

}

