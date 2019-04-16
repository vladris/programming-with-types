namespace LinkedListTriangleAsLinkedListShape {

class Shape {
    /* Shape members */
}

declare const TriangleType: unique symbol; 
class Triangle extends Shape {
    [TriangleType]: void;
    /* Triangle members */
}

class LinkedList<T> {
    value: T;
    next: LinkedList<T> | undefined = undefined;

    constructor(value: T) {
        this.value = value;
    }

    append(value: T): LinkedList<T> {
        this.next = new LinkedList(value);
        return this.next;
    }
}

declare function makeTriangles(): LinkedList<Triangle>;
declare function draw(shapes: LinkedList<Shape>): void;

draw(makeTriangles());

}