namespace ReduceImplementation {

function reduce<T>(items: T[], init: T, op: (x: T, y: T) => T): T {
    let result: T = init;

    for (const item of items) {
        result = op(result, item);
    }

    return result;
}

}