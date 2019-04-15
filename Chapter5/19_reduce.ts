namespace ReduceImplementation {

function reduce<T>(items: T[], init: T, op: (x: T, y: T) => T): T {
    let result: T = init;

    for (let item of items) {
        result = op(result, item);
    }

    return result;
}

}