namespace MaxAlgorithmWithCompareArgument {

enum ComparisonResult {
    LessThan,
    Equal,
    GreaterThan
}

interface IComparable<T> {
    compareTo(value: T): ComparisonResult;
}

function max<T>(iter: Iterable<T>, 
    compare: (x: T, y: T) => ComparisonResult)
    : T | undefined {
    let iterator: Iterator<T> = iter[Symbol.iterator]();

    let current: IteratorResult<T> = iterator.next();

    if (current.done) return undefined;

    let result: T = current.value;

    while (true) {
        current = iterator.next();

        if (current.done) return result;

        if (compare(current.value, result)
            == ComparisonResult.GreaterThan) {
            result = current.value;
        }
    }
}

}