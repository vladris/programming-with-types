namespace ContainsUsingIterator {

function contains<T>(value: T, iterator: Iterator<T>): boolean {
    let result: IteratorResult<T> = iterator.next();

    while (!result.done) {
        if (result.value == value) return true;

        result = iterator.next();
    }

    return false;
}

}