namespace MaxAlgorithm {

enum ComparisonResult {
    LessThan,
    Equal,
    GreaterThan
}

interface IComparable<T> {
    compareTo(value: T): ComparisonResult;
}

function max<T extends IComparable<T>>(iter: Iterable<T>)
    : T | undefined {
    let iterator: Iterator<T> = iter[Symbol.iterator]();

    let current: IteratorResult<T> = iterator.next();

    if (current.done) return undefined;

    let result: T = current.value;

    while (true) {
        current = iterator.next();

        if (current.done) return result;

        if (current.value.compareTo(result) ==
            ComparisonResult.GreaterThan) {
            result = current.value;
        }
    }
}
    
}