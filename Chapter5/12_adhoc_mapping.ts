namespace AdhocMapping {

let numbers: number[] = [1, 2, 3, 4, 5];
let squares: number[] = [];

for (let n of numbers) {
    squares.push(n * n);
}

let strings: string[] = ["apple", "orange", "peach"];
let lengths: number[] = [];

for (let s of strings) {
    lengths.push(s.length);
}

}