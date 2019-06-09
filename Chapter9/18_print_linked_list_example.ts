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

let head: LinkedListNode<string> = new LinkedListNode("Hello");
head.next = new LinkedListNode("World");
head.next.next = new LinkedListNode("!!!");

printLinkedList(head);

}