namespace BoxImplementingTheInterface {

interface Functor<T> {
    map<U>(func: (value: T) => U): Functor<U>;
}

class Box<T> implements Functor<T> {
    value: T;

    constructor(value: T) {
        this.value = value;
    }

    map<U>(func: (value: T) => U): Box<U> {
        return new Box(func(this.value));
    }
}

}