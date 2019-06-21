namespace MapWithIterator {

function* map<T, U>(iter: Iterable<T>, func: (item: T) => U):
    IterableIterator<U> {
    for (const value of iter) {
        yield func(value);
    }
}

}