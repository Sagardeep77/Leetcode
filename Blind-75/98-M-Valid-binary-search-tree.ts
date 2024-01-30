// https://leetcode.com/problems/validate-binary-search-tree/description/

function isValidBST(root: TreeNode | null): boolean {
    const inOrderArr = inOrder(root);

    for(let i = 1; i < inOrderArr.length; i++ ){
        if(inOrderArr[i-1] >= inOrderArr[i])
            return false;
    }

    return true;
};

function inOrder(root:TreeNode | null): number[]{
    if(!root) return [];
    const ans = []
    ans.push(...inOrder(root.left), root.val, ...inOrder(root.right));

    return ans;
}