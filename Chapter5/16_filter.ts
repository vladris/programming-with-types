namespace FilterImplementation {

function filter<T>(items: T[], pred: (item: T) => boolean): T[] {
    let result: T[] = [];

    for (let item of items) {
        if (pred(item)) {
            result.push(item);
        }
    }

    return result;
}

}