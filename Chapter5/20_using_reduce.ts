namespace UsingReduce {

function reduce<T>(items: T[], init: T, op: (x: T, y: T) => T): T {
    let result: T = init;

    for (let item of items) {
        result = op(result, item);
    }

    return result;
}

let numbers: number[] = [1, 2, 3, 4, 5];
let product: number = reduce(numbers, 1, (x, y) => x * y);

let strings: string[] = ["apple", "orange", "peach"];
let longString: string = reduce(strings, "", (x, y) => x + y);

}