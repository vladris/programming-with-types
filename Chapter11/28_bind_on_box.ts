namespace BindOnBox {

class Box<T> {
    value: T;

    constructor(value: T) {
        this.value = value;
    }
}

namespace Box {
    export function bind<T, U>(
        box: Box<T>, func: (value: T) => Box<U>): Box<U> {
        return func(box.value);    
    }
}

function boxify(value: number): Box<string> {
    return new Box(value.toString());
}

const b: Box<string> = Box.bind(new Box(42), boxify);    

}