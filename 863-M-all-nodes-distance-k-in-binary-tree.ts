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

function distanceK(
  root: TreeNode | null,
  target: TreeNode | null,
  k: number
): number[] {
  const dfs = function (root, target) {
    if (!root) return [];
    if (root === target) return [root];
    const pathLeft = dfs(root.left, target);
    if (pathLeft.length > 0) {
      return [root, ...pathLeft];
    }
    const pathRight = dfs(root.right, target);
    if (pathRight.length > 0) {
      return [root, ...pathRight];
    }
    return [];
  };

  const extract = function (node, parent, k) {
    if (!node) return [];
    if (k === 0) return [node.val];
    if (parent === null) {
      return [
        ...extract(node.right, null, k - 1),
        ...extract(node.left, null, k - 1),
      ];
    }
    if (node.left === parent) {
      return [...extract(node.right, null, k - 1)];
    } else if (node.right === parent) {
      return [...extract(node.left, null, k - 1)];
    }
  };

  const path = dfs(root, target);
  const ans = [];
  for (let x = path.length - 1; x >= 0; x--) {
    const pathDiff = path.length - 1 - x;
    if (pathDiff === 0) {
      ans.push(...extract(path[x], null, k));
    } else {
      ans.push(...extract(path[x], path[x + 1], k - pathDiff));
    }
  }

  return ans;
}
