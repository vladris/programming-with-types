namespace PrintAndContainsWithIterableArgument {

function print<T>(iterable: Iterable<T>): void {
    for (const item of iterable) {
        console.log(item);
    }
}

function contains<T>(value: T, iterable: Iterable<T>): boolean {
    for (const item of iterable) {
        if (item == value) return true;
    }

    return false;
}

}