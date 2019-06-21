namespace PairOfIteratorsOverLinkedList {

interface IReadable<T> {
    get(): T;
}

interface IIncrementable<T> {
    increment(): void;
}

interface IInputIterator<T> extends IReadable<T>, IIncrementable<T> {
    equals(other: IInputIterator<T>): boolean;
}

class LinkedListNode<T> {
    value: T;
    next: LinkedListNode<T> | undefined;

    constructor(value: T) {
        this.value = value;
    }
}

class LinkedListInputIterator<T> implements IInputIterator<T> {
    private node: LinkedListNode<T> | undefined;

    constructor(node: LinkedListNode<T> | undefined) {
        this.node = node;
    }

    increment(): void {
        if (!this.node) throw Error();

        this.node = this.node.next;
    }

    get(): T {
        if (!this.node) throw Error();

        return this.node.value;
    }

    equals(other: IInputIterator<T>): boolean {
        return this.node == (<LinkedListInputIterator<T>>other).node;
    }
}

const head: LinkedListNode<number> = new LinkedListNode(0);
head.next = new LinkedListNode(1);
head.next.next = new LinkedListNode(2);

let begin: IInputIterator<number> = new LinkedListInputIterator(head);
let end: IInputIterator<number> = new LinkedListInputIterator(undefined);

}