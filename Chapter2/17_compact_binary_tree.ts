namespace CompactBinaryTree {

class TreeNode {
    value: number;
    left: TreeNode | undefined;
    right: TreeNode | undefined;

    constructor(value: number) {
        this.value = value;
        this.left = undefined;
        this.right = undefined;
    }
}

}