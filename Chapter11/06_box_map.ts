namespace BoxMap {

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

}