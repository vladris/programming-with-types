namespace PrintAndContainsWithIteratorArgument {

function print<T>(iterator: Iterator<T>): void {
    let result: IteratorResult<T> = iterator.next();

    while (!result.done) {
        console.log(result.value);
        result = iterator.next();
    }
}

function contains<T>(value: T, iterator: Iterator<T>): boolean {
    let result: IteratorResult<T> = iterator.next();

    while (!result.done) {
        if (result.value == value) return true;

        result = iterator.next();
    }

    return false;
}

}