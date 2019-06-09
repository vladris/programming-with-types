namespace PrintLinkedList {

class LinkedListNode<T> {
    value: T;
    next: LinkedListNode<T> | undefined;

    constructor(value: T) {
        this.value = value;
    }
}

function printLinkedList<T>(head: LinkedListNode<T>): void {
    let current: LinkedListNode<T> | undefined = head;

    while (current) {
        console.log(current.value);
        current = current.next;
    }
}

}