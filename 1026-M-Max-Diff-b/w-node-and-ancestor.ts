function maxAncestorDiff(root: TreeNode | null): number {
    let maxValue = 0;
    const helper = function(node){
        const childrens = [];
        if(node.left){
            childrens.push(...helper(node.left));
        }
        if(node.right){
            childrens.push(...helper(node.right));
        }
        maxValue = Math.max(...childrens.map(x => Math.abs(node.val - x)), maxValue);
        childrens.push(node.val)
        return childrens;
    }
    helper(root);
    return maxValue;
};