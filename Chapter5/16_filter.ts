namespace FilterImplementation {

function filter<T>(items: T[], pred: (item: T) => boolean): T[] {
    let result: T[] = [];

    for (const item of items) {
        if (pred(item)) {
            result.push(item);
        }
    }

    return result;
}

}