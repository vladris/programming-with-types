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

}