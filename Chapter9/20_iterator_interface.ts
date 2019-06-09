namespace IteratorResult {

type IteratorResult<T> = {
    done: boolean;
    value: T;
}

interface Iterator<T> {
    next(): IteratorResult<T>;
}

}