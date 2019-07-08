namespace UsingFilter {

function filter<T>(items: T[], pred: (item: T) => boolean): T[] {
    let result: T[] = [];

    for (let item of items) {
        if (pred(item)) {
            result.push(item);
        }
    }

    return result;
}

let numbers: number[] = [1, 2, 3, 4, 5];
let evens: number[] = filter(numbers, (item) => item % 2 == 0);

let strings: string[] = ["apple", "orange", "peach"];
let length5Strings: string[] = filter(strings, (item) => item.length == 5);

}