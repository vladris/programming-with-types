namespace BinaryTreeIteratorUsingGenerator {

class BinaryTreeNode<T> {
    value: T;
    left: BinaryTreeNode<T> | undefined;
    right: BinaryTreeNode<T> | undefined;

    constructor(value: T) {
        this.value = value;
    }
}

function* inOrderIterator<T>(root: BinaryTreeNode<T>):
    IterableIterator<T> {
    if (root.left) {
        for (const value of inOrderIterator(root.left)) {
            yield value;
        }
    }

    yield root.value;

    if (root.right) {
        for (const value of inOrderIterator(root.right)) {
            yield value;
        }
    }
}

}