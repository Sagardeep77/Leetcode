function minFallingPathSum(matrix: number[][]): number {
    const minSum = Array.from(Array(matrix.length), () => new Array(matrix[0].length).fill(Infinity));
    let min = Infinity;
    for (let row = 0; row < matrix.length; row++) {
        for (let col = 0; col < matrix[0].length; col++) {
            if (row === 0) {
                minSum[row][col] = matrix[row][col];
            }
            else {
                const ele = matrix[row][col];
                let leftDiagonal = minSum[row - 1][col - 1];
                let rightDiagonal = minSum[row - 1][col + 1];
                let top = minSum[row - 1][col];
                if (col === 0) {
                    leftDiagonal = Infinity;
                }
                else if (col === matrix[0].length - 1) {
                    rightDiagonal = Infinity;
                }
                minSum[row][col] = Math.min(ele + leftDiagonal, ele + top, ele + rightDiagonal);
            }
        }
    }

    return Math.min(...minSum[minSum.length - 1]);
};