namespace PrintUsingIterator {

function print<T>(iterator: Iterator<T>): void {
    let result: IteratorResult<T> = iterator.next();

    while (!result.done) {
        console.log(result.value);
        result = iterator.next();
    }
}

}