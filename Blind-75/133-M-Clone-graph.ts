//https://leetcode.com/problems/clone-graph/
function cloneGraph(node: Node | null): Node | null {
	if(!node) {
        return null;
    }

    const cloned = new Map<Node, Node>().set(node, new Node(node.val));
    const queue = [];

    queue.push(node);

    while(queue.length){
        const currNode = queue.shift();
        if(!cloned.has(currNode)){
            cloned.set(currNode, new Node(currNode.val));
        }
        for(const n of currNode.neighbors){
            if(!cloned.has(n)){
                queue.push(n);

                cloned.set(n, new Node(n.val));

            }
            const duplicateNode = cloned.get(currNode);
            duplicateNode.neighbors.push(cloned.get(n));
        }
    }

    return cloned.get(node);
};