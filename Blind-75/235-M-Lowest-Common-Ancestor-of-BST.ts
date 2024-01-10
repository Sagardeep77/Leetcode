function lowestCommonAncestor(
    root: TreeNode | null,
    p: TreeNode | null,
    q: TreeNode | null
): TreeNode | null {
    if (!root) return null;
    let left = null;
    let right = null;
    if (root === p) return p;
    if (root === q) return q;

    left = lowestCommonAncestor(root.left, p, q);
    right = lowestCommonAncestor(root.right, p, q);

    if (left && right) return root;
    if (left) return left;
    if (right) return right;
    return null;
}
