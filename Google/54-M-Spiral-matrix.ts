//https://leetcode.com/problems/spiral-matrix/
function spiralOrder(matrix: number[][]): number[] {
    let upperRow = 0, leftCol = 0;
    let lowerRow = matrix.length - 1, rightCol = matrix[0].length - 1;
    const ans = [];
    let type = "TOP";
    // return ans;
    while ((upperRow <= lowerRow) && (leftCol <= rightCol)) {

        if (type === "TOP") {
            for (let i = leftCol; i <= rightCol; i++) {
                ans.push(matrix[upperRow][i]);
            }
            upperRow++;
            type="RIGHT";
        }
        else if (type === "RIGHT") {
            for (let i = upperRow; i <= lowerRow; i++) {
                ans.push(matrix[i][rightCol]);
            }
            rightCol--;
            type="BOTTOM";
        }
        else if (type === "BOTTOM") {
            for (let i = rightCol; i >= leftCol; i--) {
                ans.push(matrix[lowerRow][i]);
            }
            lowerRow--;
            type="LEFT";
        }
        else if (type === "LEFT") {
            for (let i = lowerRow; i >= upperRow; i--) {
                ans.push(matrix[i][leftCol])
            }
            leftCol++;
            type="TOP"
        }
    }

    return ans;
};