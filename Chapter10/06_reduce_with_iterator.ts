namespace ReduceWithIterator {

function reduce<T>(iter: Iterable<T>, init: T,
    op: (x: T, y: T) => T): T {
    let result: T = init;

    for (const value of iter) {
        result = op(result, value);
    }

    return result;
}

}