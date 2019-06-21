namespace MapOnBox {

class Box<T> {
    value: T;

    constructor(value: T) {
        this.value = value;
    }
}

namespace Box {
    export function map<T, U>(
        box: Box<T>, func: (value: T) => U): Box<U> {
        return new Box<U>(func(box.value));
    }
}

function stringify(value: number): string {
    return value.toString();
}

const s: Box<string> = Box.map(new Box(42), stringify);

}