namespace LinkedListIteratorUsingGenerator {

class LinkedListNode<T> {
    value: T;
    next: LinkedListNode<T> | undefined;

    constructor(value: T) {
        this.value = value;
    }
}

function* linkedListIterator<T>(head: LinkedListNode<T>):
    IterableIterator<T> {
    let current: LinkedListNode<T> | undefined = head;

    while (current) {
        yield current.value;
        current = current.next;
    }
}

}