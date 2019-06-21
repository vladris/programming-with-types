namespace LinkedListIteratorImplementingIForwardIteartor {

interface IIncrementable<T> {
    increment(): void;
}

interface IReadable<T> {
    get(): T;
}

interface IWritable<T> {
    set(value: T): void;
}

interface IForwardIterator<T> extends 
    IReadable<T>, IWritable<T>, IIncrementable<T> {
    equals(other: IForwardIterator<T>): boolean;
    clone(): IForwardIterator<T>;
}

class LinkedListNode<T> {
    value: T;
    next: LinkedListNode<T> | undefined;

    constructor(value: T) {
        this.value = value;
    }
}

class LinkedListIterator<T> implements IForwardIterator<T> {
    private node: LinkedListNode<T> | undefined;

    constructor(node: LinkedListNode<T> | undefined) {
        this.node = node;
    }

    increment(): void {
        if (!this.node) return;

        this.node = this.node.next;
    }

    get(): T {
        if (!this.node) throw Error();

        return this.node.value;
    }

    set(value: T): void {
        if (!this.node) throw Error();

        this.node.value = value;
    }

    equals(other: IForwardIterator<T>): boolean {
        return this.node == (<LinkedListIterator<T>>other).node;
    }

    clone(): IForwardIterator<T> {
        return new LinkedListIterator(this.node);
    }
}

}