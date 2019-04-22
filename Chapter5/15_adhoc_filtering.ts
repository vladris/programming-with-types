namespace AdhocFiltering {

let numbers: number[] = [1, 2, 3, 4, 5];
let evens: number[] = []

for (const n of numbers) {
    if (n % 2 == 0) {
        evens.push(n);
    }
}

let strings: string[] = ["apple", "orange", "peach"];
let length6Strings: string[] = [];

for (const s of strings) {
    if (s.length == 5) {
        length6Strings.push(s);
    }
}

}