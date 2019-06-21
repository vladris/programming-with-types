namespace Replacing42With0InALinkedList {

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

function find<T>(
    begin: IForwardIterator<T>, end: IForwardIterator<T>,
    pred: (value: T) => boolean): IForwardIterator<T> {
    while (!begin.equals(end)) {
        if (pred(begin.get())) {
            return begin;
        }

        begin.increment();
    }

    return end;
}

let head: LinkedListNode<number> = new LinkedListNode(1);
head.next = new LinkedListNode(2);
head.next.next = new LinkedListNode(42);

let begin: IForwardIterator<number> =
    new LinkedListIterator(head);
let end: IForwardIterator<number> =
    new LinkedListIterator(undefined);

let iter: IForwardIterator<number> =
    find(begin, end, (value: number) => value == 42);

if (!iter.equals(end)) {
    iter.set(0);
}

}