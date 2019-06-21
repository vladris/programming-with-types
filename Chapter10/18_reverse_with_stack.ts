namespace ReverseWithStack {

function *reverse<T>(iter: Iterable<T>): IterableIterator<T> {
    let stack: T[] = [];

    for (const value of iter) {
        stack.push(value);
    }

    while (true) {
        let value: T | undefined = stack.pop();

        if (value == undefined) return;

        yield value;
    }
}

}