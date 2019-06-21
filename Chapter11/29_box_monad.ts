namespace BoxMonad {

class Box<T> {
    value: T;

    constructor(value: T) {
        this.value = value;
    }
}

namespace Box {
    export function unit<T>(value: T): Box<T> {
        return new Box(value);
    }

    export function bind<T, U>(
        box: Box<T>, func: (value: T) => Box<U>): Box<U> {
        return func(box.value);    
    }
}

}