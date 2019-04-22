namespace UsingMap {

function map<T, U>(items: T[], func: (item: T) => U): U[] {
    let result: U[] = [];

    for (const item of items) {
        result.push(func(item));
    }

    return result;
}

let numbers: number[] = [1, 2, 3, 4, 5];
let squares: number[] = map(numbers, (item) => item * item);

let strings: string[] = ["apple", "orange", "peach"];
let lengths: number[] = map(strings, (item) => item.length);

}