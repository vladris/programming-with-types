namespace IterableLinkedListUsingGenerator {

class LinkedListNode<T> implements Iterable<T> {
    value: T;
    next: LinkedListNode<T> | undefined;

    constructor(value: T) {
        this.value = value;
    } 

    [Symbol.iterator](): Iterator<T> {
        return linkedListIterator(this);
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