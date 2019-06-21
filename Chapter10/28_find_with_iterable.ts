namespace FindWithIterable {

function find<T>(iter: Iterable<T>,
    pred: (value: T) => boolean): T | undefined {
    for (const value of iter) {
        if (pred(value)) {
            return value;
        }
    }

    return undefined;
}


}