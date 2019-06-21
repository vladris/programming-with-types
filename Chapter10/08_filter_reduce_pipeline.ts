namespace FilterReducePipeline {

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

function reduce<T>(iter: Iterable<T>, init: T,
    op: (x: T, y: T) => T): T {
    let result: T = init;

    for (const value of iter) {
        result = op(result, value);
    }

    return result;
}

function* filter<T>(iter: Iterable<T>, pred: (item: T) => boolean):
    IterableIterator<T> {
    for (const value of iter) {
        if (pred(value)) {
            yield value;
        }
    }
}

let root: BinaryTreeNode<number> = new BinaryTreeNode(1);
root.left = new BinaryTreeNode(2);
root.left.right = new BinaryTreeNode(3);
root.right = new BinaryTreeNode(4);

const result: number = 
    reduce(
        filter(
            inOrderIterator(root), 
            (value) => value % 2 == 0),
        0, (x, y) => x + y);

console.log(result);

}