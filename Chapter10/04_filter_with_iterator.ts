namespace FilterWithIterator {

function* filter<T>(iter: Iterable<T>, pred: (item: T) => boolean):
    IterableIterator<T> {
    for (const value of iter) {
        if (pred(value)) {
            yield value;
        }
    }
}

}