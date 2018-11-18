namespace LinkedList {

class NumberListNode {
    value: number;
    next: NumberListNode | undefined;

    constructor(value: number) {
        this.value = value;
        this.next = undefined;
    }
}

class NumberLinkedList {
    private tail: NumberListNode = { value: 0, next: undefined };
    private head: NumberListNode = this.tail;

    at(index: number): number {
        let result: NumberListNode | undefined = this.head.next;
        while (index > 0 && result != undefined) {
            result = result.next;
            index--;
        }

        if (result == undefined) throw new Error();

        return result.value;
    }

    append(value: number) {
        this.tail.next = { value: value, next: undefined };
        this.tail = this.tail.next;
    }
}

}