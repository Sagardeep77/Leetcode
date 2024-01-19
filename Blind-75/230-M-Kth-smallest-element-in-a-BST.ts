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

function kthSmallest(root: TreeNode | null, k: number): number {
    const inorder = function(root):number[]{
        if(!root) return [];
        const ans = [];
        if(root.left)
            ans.push(...inorder(root.left));
        ans.push(root.val);
        if(root.right)
            ans.push(...inorder(root.right));
        return ans;
    }

    const ans = inorder(root);
    console.log(ans);

    return ans[k-1]
};