namespace PrintInOrder {

class BinaryTreeNode<T> {
    value: T;
    left: BinaryTreeNode<T> | undefined;
    right: BinaryTreeNode<T> | undefined;

    constructor(value: T) {
        this.value = value;
    }
}

function printInOrder<T>(root: BinaryTreeNode<T>): void {
    if (root.left != undefined) {
        printInOrder(root.left);
    }

    console.log(root.value);

    if (root.right != undefined) {
        printInOrder(root.right);
    }
}

let root: BinaryTreeNode<number> = new BinaryTreeNode(1);
root.left = new BinaryTreeNode(2);
root.left.right = new BinaryTreeNode(3);
root.right = new BinaryTreeNode(4);

printInOrder(root);

}