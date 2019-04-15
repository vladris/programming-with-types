namespace MapImplementation {

function map<T, U>(items: T[], func: (item: T) => U): U[] {
    let result: U[] = [];

    for (let item of items) {
        result.push(func(item));
    }

    return result;
}

}