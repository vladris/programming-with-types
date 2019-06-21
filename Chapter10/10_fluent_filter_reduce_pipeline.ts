namespace FluentFilterReducePipeline {

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

class FluentIterator<T> {
    iter: IterableIterator<T>;

    constructor(iter: IterableIterator<T>) {
        this.iter = iter;
    }

    *map<U>(func: (item: T) => U): IterableIterator<U> {
        for (const value of this.iter) {
            yield func(value);
        }
    }

    *filter(pred: (item: T) => boolean): IterableIterator<T> {
        for (const value of this.iter) {
            if (pred(value)) {
                yield value;
            }
        }
    }

    reduce(init: T, op: (x: T, y: T) => T): T {
        let result: T = init;

        for (const value of this.iter) {
            result = op(result, value);
        }

        return result;
    }
}

let root: BinaryTreeNode<number> = new BinaryTreeNode(1);
root.left = new BinaryTreeNode(2);
root.left.right = new BinaryTreeNode(3);
root.right = new BinaryTreeNode(4);

const result: number =
    new FluentIterator(
        new FluentIterator(
            inOrderIterator(root)
        ).filter((value) => value % 2 == 0)
    ).reduce(0, (x, y) => x + y);

console.log(result);


}