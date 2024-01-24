/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

//palindromic permutation of evenLength => every element is even
//palindromic permutation of oddLength => every element is even except one which is odd


// https://leetcode.com/problems/pseudo-palindromic-paths-in-a-binary-tree


function pseudoPalindromicPaths(root: TreeNode | null): number {
    const countArr = new Array(9).fill(0);
    if (!root) return 0;
    return helper(root, countArr);
};

const helper = (root: TreeNode, countArr: number[]): number => {
    let ans = 0;
    if (!root) return 0;
    countArr[root.val - 1]++;
    if (!root.left && !root.right) {
        if (checkPalindrome(countArr)) {
            ans++;
        }
    }
    if (root.left) {
        ans += helper(root.left, [...countArr]);
    }

    if (root.right) {
        ans += helper(root.right, [...countArr]);
    }
    return ans;
}

const checkPalindrome = function (countArr: number[]) {
    const [even, odd] = countArr.reduce((acc, curr) => {
        if (curr % 2 === 0) acc[0]++;
        else acc[1]++;
        return acc;
    }, [0, 0]);

    return (even >= 1 && odd === 0) || (even >= 0 && odd === 1);
}